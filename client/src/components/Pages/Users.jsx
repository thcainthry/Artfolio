import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import "../style/User.css";
import CreateUserForm from '../environments/CreateUserForm.js';
import EditUserForm from '../environments/EditUserForm.js';


// Sample user data
const usersData = [
  { id: 1, name:'jonhn',username: 'johndoe', city:'Berlin', address:'Str.Berlin', country:'Germany', email: 'johndoe@example.com', role: 'Admin' },
  { id: 2, name:'jan',username: 'janedoe', city:'Berlin', address:'Str.Berlin', country:'Germany',email: 'janedoe@example.com', role: 'User' },
  { id: 3, name:'david',username: 'davidsmith', city:'Berlin', address:'Str.Berlin', country:'Germany',email: 'david@example.com', role: 'User' }
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
  const history = useHistory();

  const addUser = (newUser) => {
    // Add the new user to the users state
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    history.push('/users');
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditUser = (userId) => {
    history.push(`/users/${userId}/edit`);
  };

  const handleSaveUser = (userId, updatedUser) => {
    // Update the user details in the users state
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    setUsers(updatedUsers);
    history.push('/users');
  };
  return (
    <div className='containerr'>
         
      <h1>User Management</h1>
      <Switch>
        <Route exact path="/users">
          <div className='user'>
            <button>
              <Link to="/users/new">Create New User</Link>
            </button>
          </div>
          <div className="user-list">
            <h2>User List</h2>
            <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Address</th>
            <th>Country</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.city}</td>
              <td>{user.address}</td>
              <td>{user.country}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <div className='user'>
                <button   onClick={() => handleEditUser(user.id)}>Edit</button>
                <button   onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          
          </div>
        </Route>
        <Route exact path="/users/new">
          <div>
            <h2>Create New User</h2>
            <CreateUserForm addUser={addUser} />
          </div>
        </Route>
        <Route path="/users/:userId/edit">
          <div>
            <h2>Edit User</h2>
            <EditUserForm users={users} onSaveUser={handleSaveUser} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
