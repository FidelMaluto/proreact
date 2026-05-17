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
    <div>
      {user.map((data) => {
        return <>
          <div style={{ border: "1px solid gray", width: "500px" }}>
            <h1>Name: {data.nome}</h1>
            <h1>Username: {data["nome de usuário"]}</h1>
            <h1>E-Mail: {data["e-mail"]}</h1>
          </div>
        </>
      })}
    </div>
  )
}

export default App;
