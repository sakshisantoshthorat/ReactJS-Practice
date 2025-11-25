import React, { useEffect, useState } from 'react'

function FetchApiData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new error("Failed to Fetch Data");
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [])
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    return (
        <div style={{ marginLeft: "70px" }}>
            <h2 style={{ marginLeft: "80px" }}>User List</h2>
            <div>
                {users.map((user) => (
                    <div key={user.id}
                        style={{
                            border: "1px solid black",
                            width: "300px",
                            padding: "5px 12px",
                            margin: "16px 16px",
                            borderRadius: "8px",
                            backgroundColor: "red",
                            color: "white",
                            fontSize: "18px"
                        }}>
                        <h3>ID : {user.id}</h3>
                        <p>Name : {user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchApiData
