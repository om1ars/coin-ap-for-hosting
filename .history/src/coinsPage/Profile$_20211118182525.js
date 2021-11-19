import { MapSharp } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./Profile$.scss";

export default function Profile$() {
  const mapUsers = useSelector((state) => state.dbUsers.user);

  console.log(mapUsers);
  return (
    <>
    <if
    </>
  );
}
