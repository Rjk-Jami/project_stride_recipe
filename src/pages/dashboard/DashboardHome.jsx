import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function DashboardHome() {
  const { user, googleLogin, EmailPassLogin, createUser, logout, authLoading } =
    useAuth();
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <p>Email: {user?.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
