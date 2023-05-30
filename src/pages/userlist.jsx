import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3001/users?_sort=id&_order=desc') // Add _sort=id&_order=desc for descending order by id
      .then((response) => {
        const usersData = response.data;
        setUsers(usersData);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3001/users/${userId}`)
      .then(() => {
        fetchUsers(); // Refresh the user list after successful deletion
        setDeleteSuccess(true); // Set delete success status to true
        setTimeout(() => {
          setDeleteSuccess(false); // Clear the success message after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="mt-4 pb-5">
      <h4>User List</h4>
      <hr />

      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          User deleted successfully!
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
