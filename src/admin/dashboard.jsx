import React, { useState } from 'react';
import AddUser from './addUser';
import UserList from './../pages/userlist';
const Dashboard = () => {
    const [reloadUsers, setReloadUsers] = useState(false);

    const handleUserAdded = () => {
        setReloadUsers(!reloadUsers);
    };

    return (
        <section className="min-vh-100 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>Profile</h4>
                    </div>
                    <div className="col-lg-4">
                        <AddUser onUserAdded={handleUserAdded} />
                    </div>
                    <div className="col-lg-5">
                        <UserList key={reloadUsers} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Dashboard;
