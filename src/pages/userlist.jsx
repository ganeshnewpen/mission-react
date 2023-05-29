import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then((response) => {
                const usersData = response.data;
                setUsers(usersData);
            })
            .catch((error) => {
                console.error('Error fetching users data:', error);
            });
    }, []);

    return (
        <div className='mt-4 pb-5'>
            <h4>User List</h4>
            <hr />
            {users.map((user) => (
                <div key={user.id} className='mb-4'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
