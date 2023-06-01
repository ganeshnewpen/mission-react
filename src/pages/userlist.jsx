import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTable } from 'react-table';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Added state for selected user
  const [editName, setEditName] = useState(''); // Added state for edit name
  const [editEmail, setEditEmail] = useState(''); // Added state for edit email

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3001/users?_sort=id&_order=desc')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3001/users/${userId}`)
      .then(() => {
        fetchUsers();
        setDeleteSuccess(true);
        setTimeout(() => {
          setDeleteSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleUpdate = () => {
    if (!selectedUser) return;

    const updatedUser = {
      id: selectedUser.id,
      name: editName,
      email: editEmail,
    };

    axios
      .put(`http://localhost:3001/users/${selectedUser.id}`, updatedUser)
      .then(() => {
        fetchUsers();
        setEditName('');
        setEditEmail('');
        setSelectedUser(null);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <>
            <button
              className="btn btn-primary btn-sm me-3"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={() => handleEdit(row.original)}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>

            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => handleDelete(row.original.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: users,
  });

  return (
    <div className="mt-4 pb-5">
      <h4>User List</h4>
      <hr />

      {deleteSuccess && (
        <div className="alert alert-success" role="alert">
          User deleted successfully!
        </div>
      )}

  {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      )
      }

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit | <span className="bg-light p-1 small rounded">{editName}</span>
              </h5>
              <button type="button" className="close bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='form-ui'>
                <div className="form-group">
                  <label htmlFor="editName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editName"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="editEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

