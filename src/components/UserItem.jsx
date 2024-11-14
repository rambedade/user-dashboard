import React from 'react';
import { Box, Button, Typography, Paper, Stack } from '@mui/material';

const UserItem = ({ user, onEdit, onDelete }) => (
  <Paper
    elevation={2}
    sx={{
      padding: 2,
      marginBottom: 1,
      backgroundColor: 'background.paper',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 2,
      border: '1px solid #333',  
    }}
  >
    <Box flexGrow={1} sx={{ mr: 2 }}>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
        {user.firstName} {user.lastName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {user.email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {user.department}
      </Typography>
    </Box>
    <Stack direction="row" spacing={1}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => onEdit(user)}
        sx={{
          fontWeight: 600,
          padding: '4px 12px',
          borderRadius: '8px',
        }}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={() => onDelete(user.id)}
        sx={{
          fontWeight: 600,
          padding: '4px 12px',
          borderRadius: '8px',
        }}
      >
        Delete
      </Button>
    </Stack>
  </Paper>
);

export default UserItem;
