import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser, editUser, deleteUser } from '../services/api';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { Box, Typography, Snackbar, Alert } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      showNotification('Failed to load users. Please try again.', 'error');
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await addUser(user);
      setUsers([...users, response.data]);
      showNotification('User added successfully!', 'success');
    } catch (error) {
      showNotification('Failed to add user. Please try again.', 'error');
    }
  };

  const handleEditUser = async (user) => {
    try {
      await editUser(user.id, user);
      loadUsers();
      setSelectedUser(null); 
      showNotification('User updated successfully!', 'success');
    } catch (error) {
      showNotification('Failed to edit user. Please try again.', 'error');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      showNotification('User deleted successfully!', 'success');
    } catch (error) {
      showNotification('Failed to delete user. Please try again.', 'error');
    }
  };

  const handleFormSubmit = (user) => {
    if (selectedUser) {
      handleEditUser({ ...selectedUser, ...user });
    } else {
      handleAddUser(user);
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user); 
  };

  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '600px', margin: 'auto', padding: '20px' }} >
      <Typography variant="h4" gutterBottom>User Management Board</Typography>
      <UserForm 
        onSubmit={handleFormSubmit} 
        initialData={selectedUser} 
      />
      <UserList users={users} onEdit={handleEditClick} onDelete={handleDeleteUser} />
      
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserManagement;
