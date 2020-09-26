import React from "react";
import "./styles.css";
import UserGreeting from "./components/UserGreeting";
import ListRendering from "./components/ListRendering";

export default function App() {
  return (
    <div className="App">
      <UserGreeting />
      <ListRendering />
    </div>
  );
}
