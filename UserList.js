import React, { useEffect, useState } from 'react';

function UserList() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    let users = [
        {
            id: "1",
            name: "Rhea",
            addr: "Pune"
        },
        {
            id: "2",
            name: "Teena",
            addr: "Mumbai"
        },
        {
            id: "3",
            name: "Saysha",
            addr: "Delhi"
        },
        {
            id: "4",
            name: "Trisha",
            addr: "Beed"
        },

    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setUserList(users);
            setLoading(false);
        }, 1800);
    }, []);

    return (
        <div style={{ justifySelf: "center" }}>
            <h3 style={{ fontSize: "24px", textAlign: "center" }}>User List</h3>
            {loading && <p style={{ color: "black" }}>Loading...</p>}
            {!loading && (
                userList.length > 0 ? (
                    <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.addr}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2>No User Found!</h2>
                )
            )}
        </div>
    );
}

export default UserList;
