import React from "react";
import styled from "styled-components";
import Dashboard from "../coinsPage/Dashboard";
import SettingsSettings from "../coinsPage/SettingsSettings";

const Container = styled.div`
  width: 80%;
  color: black;
  background-color: white;
`;

export default function DisplayPage({displaypage}) {
//   const displayPage = <Dashboard />;
  return <Container>{displaypage}</Container>;
}
