import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "./../firebase-config";

const User = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate("/login");
    });
  }, []);

  return (
    <Section>
      <div className="container">
        <h1>Welcome {user?.email}</h1>
        <button onClick={() => signOut(firebaseAuth)}>Sign Out</button>
      </div>
    </Section>
  );
};

export default User;

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 50vh;
    width: 40vw;
    background-color: #2c384a;
    border-radius: 1rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
      vertical-align: middle;
    }
    button {
      background-color: #f57c00;
      border: none;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffa000;
      }
    }
  }
`;
