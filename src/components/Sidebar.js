import { Avatar } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sidebarData } from "../utils/settingsSidebarData";
import "./Sidebar.scss";
const Container = styled.div`
  /* flex: 0.3; */
  width: 20%;
  min-height: 100vh;
`;

const AvatarContainer = styled.div`
  display: "flex";
  align-items: center;
  justify-content: space-between;
`;
const Context = styled.div`
  margin-top: 50px;
`;
const Logout = styled.div``;
const Iconcontainer = styled.div`
  display: "flex";
  align-items: center; ;
`;
function Sidebar({handleClick, setActive, active}) {

  return (
    <Container>
      <div
        className="avatar__container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Avatar
          sx={{ height: "70px", width: "70px" }}
          src="https://searchthisweb.com/wallpaper/sunrise_2880x1800_iytl3.jpg"
          className="avatar"
        />
      </div>
      <Context>
        <>
          {sidebarData.map((s) => (
            <div
              className={
                active === s ? "sidebarOptions active" : "sidebarOptions"
              }
              key={s.id}
              onClick={() => handleClick(s)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>{s.icon}</span>
              <p>{s.title}</p>
            </div>
          ))}
        </>
      </Context>
      <Logout>
        <ExitToApp />
      </Logout>
    </Container>
  );
}

export default Sidebar;
