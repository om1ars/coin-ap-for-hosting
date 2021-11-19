import React, { useState } from "react";
import "./Settings$.scss";

export default function Settings$() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div>
	
    </div>
  );
}
