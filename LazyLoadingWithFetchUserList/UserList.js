import React, { useState, useEffect } from 'react';

function UserList() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px' }}>
      {/* User List */}
      <div>
        <h3>User List</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: selectedUser?.id === user.id ? '#f0f0f0' : 'white',
                  }}
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Selected User Details */}
      <div
        style={{
          minWidth: '250px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '20px',
        }}
      >
        {selectedUser ? (
          <div>
            <h3>{selectedUser.name}</h3>
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
            <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
          </div>
        ) : (
          <p>Click on a user to see details</p>
        )}
      </div>
    </div>
  );
}

export default UserList;
