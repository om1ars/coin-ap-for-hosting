import { Delete, MapSharp } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDbuser } from "../redux/reducers/settingsUserSlice";
import "./Profile$.scss";

export default function Profile$() {
  const mapUsers = useSelector((state) => state.dbUsers.user);
  const dispatch = useDispatch();
  

  return (
    <>
   {mapUsers.map((v,i) => {
       console.log()
       (

   )})}
    </>
  );
}
