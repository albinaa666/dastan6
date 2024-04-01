import React, { useState, useEffect } from 'react';

function UserDetails() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userData, setUserData] = useState({ name: '', username: '', email: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUserData({ name: data.name, username: data.username, email: data.email });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    const handleUserClick = (userId) => {
        fetchUserData(userId);
        setSelectedUser(userId);
    }

    return (
        <div>
            <h1>User Details</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleUserClick(user.id)}>More</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>User Details</h2>
                {selectedUser && (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Username: {userData.username}</p>
                        <p>Email: {userData.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserDetails;