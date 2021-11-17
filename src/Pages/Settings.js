import React, { useState } from "react";
import DisplayPage from "../components/DisplayPage";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Dashboard from "../coinsPage/Dashboard";
import MyCoins from "../coinsPage/MyCoins";
import CoinInfo from "../components/CoinInfo";
import Billing from "../coinsPage/Billing";
import SettingsSettings from "../coinsPage/SettingsSettings";
import Profile from "../coinsPage/Profile";

const SettingsContainer = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: space-between;
  min-height: "100vh";
  overflow: "hidden";
`;

function Settings() {
  const [active, setActive] = React.useState("Dashboard");
  const [displaypage, setDisplaypage] = useState(<Dashboard />);
  //   const displaypage = <MyCoins />;

  const handleClick = (value) => {
    setActive(value);
    console.log(value.title);

    if (value.title === "Dashboard") {
      setDisplaypage(<Dashboard />);
    }
    if (value.title === "Growth") {
      setDisplaypage(<Billing />);
    }
    if (value.title === "Settings") {
      setDisplaypage(<SettingsSettings />);
    }
    if (value.title === "Profile") {
      setDisplaypage(<Profile />);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar
          active={active}
          setActive={setActive}
          handleClick={handleClick}
        />
        <DisplayPage displaypage={displaypage} />
      </div>
    </>
  );
}

export default Settings;
