import React, { useState, useEffect } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./Settings$.scss";
import { db } from "../utils/firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getDbUser } from "../redux/reducers/settingsUserSlice";

export default function Settings$() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [birthday, setBirthday] = useState(18);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState([]);
  const [state, setState] = useState("");
  const [age, setAge] = useState(null);
  
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.dbUsers.user);
  const profileRef = collection(db, "users");

  const thisYear = new Date().getFullYear();

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate;

    if (today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }

  getAge(birthday);

  console.log(age);

  const createDoc = async (s) => {
    s.preveventDefault();
    await addDoc(profileRef, { name: name, email: email, password: password, birthday: thisYear -= birthday, phone: 'Not given', job: job  });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDbUser(city));
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(profileRef);
      setCity(data?.docs?.map((d) => ({ ...d?.data(), id: d?.id })));
    };

    getUsers();
  }, []);

  console.log(city);
  console.log(email);
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
            placeholder="Enter your age"
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
