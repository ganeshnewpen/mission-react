import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTable } from 'react-table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (!selectedUser || (selectedUser.name === editName && selectedUser.email === editEmail)) {
      // No changes made, return or display an appropriate message
      return; 
    }
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
        setShowModal(false);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
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

      {updateSuccess && (
        <Alert variant="success" onClose={() => setUpdateSuccess(false)} dismissible>
          User updated successfully!
        </Alert>
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
      )}

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit | <span className="bg-light p-1 small rounded">{editName}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="editEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;
