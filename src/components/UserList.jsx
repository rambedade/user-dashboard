import React from 'react';
import { List } from '@mui/material';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => (
  <List sx={{ width: '100%', marginTop: 3 }}>
    {users.map((user) => (
      <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </List>
);

export default UserList;
