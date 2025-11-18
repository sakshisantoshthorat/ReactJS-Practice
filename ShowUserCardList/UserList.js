// UserList.js
import React, { useState, useEffect } from 'react';

function UserList() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: "1", name: "Rhea", addr: "Pune", email: "rhea@example.com", phone: "1234567890" },
        { id: "2", name: "Teena", addr: "Mumbai", email: "teena@example.com", phone: "2345678901" },
        { id: "3", name: "Saysha", addr: "Delhi", email: "saysha@example.com", phone: "3456789012" },
        { id: "4", name: "Trisha", addr: "Beed", email: "trisha@example.com", phone: "4567890123" },
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setUserList(users);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div style={{ display: 'flex', gap: '250px', padding: '20px' }}>
            <div style={{ marginLeft: "100px" }}>
                <h3>User List</h3>
                {loading && <p>Loading...</p>}
                {!loading && (
                    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map(user => (
                                <tr
                                    key={user.id}
                                    onClick={() => setSelectedUser(user)}
                                    style={{ cursor: 'pointer', backgroundColor: selectedUser?.id === user.id ? '#f0f0f0' : 'white' }}
                                >
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div style={{ minWidth: '250px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginTop: "40px" }}>
                {selectedUser ? (
                    <div>
                        <h3>{selectedUser.name}</h3>
                        <p><strong>ID:</strong> {selectedUser.id}</p>
                        <p><strong>Address:</strong> {selectedUser.addr}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    </div>
                ) : (
                    <p>Click on Particular user to see details</p>
                )}
            </div>
        </div>
    );
}

export default UserList;
