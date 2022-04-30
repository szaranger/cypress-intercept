import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const getItems = async () => {
    try {
      const res = await fetch("http://localhost:3088/api/shopping-list");

      if (res.ok) {
        const { items } = await res.json();
        return { items, status: res.status };
      }
      const body = await res.text();
      const { message } = JSON.parse(body);
      return { items: [], status: res.status, message };
    } catch (err) {
      return { items: [], status: 400 };
    }
  };

  useEffect(() => {
    getItems().then((res) => {
      setItems(res.items);
      setStatus(res.status);
      setMessage(res.message);
    });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Shopping List</h1>
      {items.length > 0 ? (
        <ol data-cy="shopping-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : status === 400 ? (
        <p data-cy="error-msg">Something went wrong!</p>
      ) : (
        <>
          <h2 data-cy="status-code">{status}</h2>
          <p data-cy="status-msg">{message}</p>
        </>
      )}
    </div>
  );
}

export default App;
