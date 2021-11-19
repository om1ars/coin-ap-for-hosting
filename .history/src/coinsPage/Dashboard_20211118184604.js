import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import useSelection from "antd/lib/table/hooks/useSelection";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDbuser } from "../redux/reducers/settingsUserSlice";

export default function Dashboard() {
  const [password, setPassword] = React.useState("muhammadsav");
  const prompt = () => {
    prompt("Enter login password. Just to make sure you are an admin");
  };

  const goToDashboard = () => {
    prompt();
    if (prompt === password) {
      alert("All good");
    } else {
      alert("Go f%$# off");
    }
  };

  const dummyData = useSelector((state) => state.dbUsers.blogs);
  const dispatch = useDispatch();
  const handleClick = (i) => {
    dispatch(deleteDbuser(i));
  };
  console.log(dummyData);
  return (
    <>
     
      {dummyData.map((d, i) => (
        <>
          <p>{d.name}</p>
          <Delete onClick={() => dispatch((i)} />
        </>
      ))}
    </>
  );
}
