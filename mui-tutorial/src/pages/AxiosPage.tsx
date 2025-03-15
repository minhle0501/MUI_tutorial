import { useState, useEffect } from 'react';
import axios from 'axios';
import {Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const AxiosPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => {
        console.log('Response Data:', res.data.data);
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h1" component="h1">
        Axios Page
      </Typography>

      <Typography variant="h4">User List:</Typography>

      {users.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Avatar</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <img src={user.avatar} alt={user.first_name} width="50" />
                  </TableCell>
                  <TableCell>{user.first_name} {user.last_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default AxiosPage;
