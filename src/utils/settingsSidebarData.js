import {
  AddRounded,
  Info,
  PortableWifiOffOutlined,
  Refresh,
  People,
  Settings,
} from "@material-ui/icons";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Info />,
    link: 'dashboard'
  },
  {
    id: 2,
    title: "Growth",
    icon: <AddRounded />,
  },
  {
    id: 3,
    title: "Profile",
    icon: <People />,
  },

  {
    id: 4,
    title: "Settings",
    icon: <Settings />,
    link: 'profile'
  },
];
