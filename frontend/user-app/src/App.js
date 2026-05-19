import React, { useEffect, useState } from "react";

const App = () => {

  const [user, setUsers] = useState([]);

  const getUser = () => {
    fetch("/api/user")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUsers(json)
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {user.map((data) => {
        return (
          <div
            key={data.id}
            style={{
              border: "1px solid #ddd",
              width: "320px",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h1
              style={{
                fontSize: "22px",
                color: "#222",
                marginBottom: "10px",
              }}
            >
              Name: {data.nome || data.name}
            </h1>

            <h2
              style={{
                fontSize: "18px",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              Username: {data["nome de usuário"] || data.username}
            </h2>

            <p
              style={{
                color: "#777",
                fontSize: "16px",
              }}
            >
              E-Mail: {data["e-mail"] || data.email}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default App;
