const socketio = require('socket.io');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const { ROLES } = require('../constants');
const keys = require('../config/keys');
const support = require('./support');

const dbConfig = {
  host: '',
  user: '',
  password: '',
  database: ''
};

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const authHandler = async (socket, next) => {
  const { token = null } = socket.handshake.auth;
  if (token) {
    const [authType, tokenValue] = token.trim().split(' ');
    if (authType !== 'Bearer' || !tokenValue) {
      return next(new Error('no token'));
    }

    const { secret } = keys.jwt;
    let decodedToken;
    try {
      decodedToken = jwt.verify(tokenValue, secret);
    } catch (error) {
      return next(new Error('invalid token'));
    }

    const id = decodedToken.id.toString();
    const user = await getUserById(id);

    if (!user) {
      return next(new Error('no user found'));
    }

    const u = {
      id,
      role: user.role,
      isAdmin: user.role === ROLES.Admin,
      name: `${user.firstName} ${user.lastName}`,
      socketId: socket.id,
      messages: []
    };

    const existingUser = support.findUserById(id);
    if (!existingUser) {
      support.users.push(u);
    } else {
      existingUser.socketId = socket.id;
    }
  } else {
    return next(new Error('no token'));
  }

  next();
};

// Fetch user from MySQL by ID
const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }

      if (results.length === 0) {
        resolve(null);
        return;
      }

      const user = results[0];
      resolve(user);
    });
  });
};

const socket = server => {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.use(authHandler);

  const onConnection = socket => {
    support.supportHandler(io, socket);
  };

  io.on('connection', onConnection);
};

module.exports = socket;
