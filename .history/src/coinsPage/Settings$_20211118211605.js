import React, { useState, useEffect } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./Settings$.scss";
import axios from "axios";
import { db } from "../utils/firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getDbUser } from "../redux/reducers/settingsUserSlice";

export default function Settings$() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState([]);
  const [state, setState] = useState("");
  const [age, setAge] = useState(null);
  const [job, setJob] = useState("");
  const dispatch = useDispatch();

  console.log(age);

  const postData = async () => {
    const fetchdata = axios.post("https://jsonplaceholder.typicode.com/users", {
      name: name,
      email: email,
      phone: birthday,
    }).then(res=> res.data)
	setStreet
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  //    useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(profileRef);
  //       setCity(data?.docs?.map((d) => ({ ...d?.data(), id: d?.id })));
  //     };

  //     getUsers();
  //   }, []);

  console.log(city);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="email"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="email"
            placeholder="Enter address"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            type="number"
            placeholder="Enter your Number"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Job</Form.Label>
          <Form.Control
            value={job}
            onChange={(e) => setJob(e.target.value)}
            type="text"
            placeholder="Enter your job"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
