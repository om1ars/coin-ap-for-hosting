import { Delete, MapSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDbuser } from "../redux/reducers/settingsUserSlice";
import "./Profile$.scss";

export default function Profile$() {
  const mapUsers = useSelector((state) => state.dbUsers.user);
  const [users, setUsers] = useState([])
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
      dispatch(deleteDbuser(id))
      console.log(id);
  }


  const data = async() => {
      const getData = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
      setUsers(getData);
  }


  console.log(users);

  useEffect(() => {
      data()
  }, [])
  return (
    <>
      
         {users.map(user => )}
    </>
  );
}
