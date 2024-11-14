import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        department: initialData.department || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ firstName: '', lastName: '', email: '', department: '' });
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom>
        {initialData && initialData.id ? 'Edit User' : 'Add User'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ style: { color: '#a0a0a0' } }}
          sx={{ input: { color: '#ffffff' } }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          InputLabelProps={{ style: { color: '#a0a0a0' } }}
          sx={{ input: { color: '#ffffff' } }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
          InputLabelProps={{ style: { color: '#a0a0a0' } }}
          sx={{ input: { color: '#ffffff' } }}
        />
        <TextField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: '#a0a0a0' } }}
          sx={{ input: { color: '#ffffff' } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {initialData && initialData.id ? 'Update' : 'Submit'}
        </Button>
      </Box>
    </Paper>
  );
};

export default UserForm;
