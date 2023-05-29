const uuidv4 = require('uuid').v4;
const mysql = require('mysql');

const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

const findUserById = (id, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  pool.query(query, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const user = results[0];
      callback(null, user);
    }
  });
};

const findUserBySocketId = (socketId, callback) => {
  const query = 'SELECT * FROM users WHERE socketId = ?';
  pool.query(query, [socketId], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const user = results[0];
      callback(null, user);
    }
  });
};

const updatedUserStatus = (user, status, callback) => {
  const query = 'UPDATE users SET online = ? WHERE id = ?';
  pool.query(query, [status, user.id], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
};

exports.supportHandler = (io, socket) => {
  socket.on('connectUser', async () => {
    const user = await findUserBySocketId(socket.id);
    if (user) {
      user.online = true;
      if (user.isAdmin) {
        socket.broadcast.emit('connectUser', user);
      } else {
        const query = 'SELECT * FROM users WHERE isAdmin = 1 AND online = 1';
        pool.query(query, (error, results) => {
          if (!error) {
            const admins = results;
            admins.forEach(admin => {
              socket.to(admin.socketId).emit('connectUser', user);
            });
          }
        });
      }
    }
  });

  socket.on('getUsers', async () => {
    const user = await findUserBySocketId(socket.id);
    if (user) {
      let query;
      if (user.isAdmin) {
        query = 'SELECT * FROM users WHERE socketId != ?';
      } else {
        query = 'SELECT * FROM users WHERE isAdmin = 1';
      }
      pool.query(query, [socket.id], (error, results) => {
        if (!error) {
          const userDocs = results;
          io.to(socket.id).emit('getUsers', userDocs);
        }
      });
    }
  });

  socket.on('getMessages', () => {
    const user = async ,findUserBySocketId,(socket.id);
    if (user) {
      const query = 'SELECT * FROM messages WHERE `from` = ? OR `to` = ?';
      pool.query(query, [user.id, user.id], (error, results) => {
        if (!error) {
          const messages = results;
          io.to(socket.id).emit('getMessages', messages);
        }
      });
    }
  });

  socket.on('message', body => {
    const { text, to } = body;
    const user = async ,findUserBySocketId,(socket.id);
    const userTo = async, findUserById,(to);

    const message = {
      id: uuidv4(),
      value: text,
      time: Date.now(),
      user: user,
      from: user.id,
      to: userTo?.id
    };

    const query = 'INSERT INTO messages (id, value, time, `from`, `to`) VALUES (?, ?, ?, ?, ?)';
    pool.query(query, [message.id, message.value, message.time, message.from, message.to], (error, results) => {
      if (!error) {
        io.to(userTo.socketId).to(user.socketId).emit('message', message);
      }
    });
  });

  socket.on('disconnect', async () => {
    const user = await findUserBySocketId(socket.id);
    if (user) {
      updatedUserStatus(user, false, error => {
        if (!error) {
          user.online = false;
          socket.broadcast.emit('disconnectUser', user);
        }
      });
    }
  });

  socket.on('connect_error', err => {
    console.log(`connect_error due to ${err.message}`);
  });
};

