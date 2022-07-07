/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "../src/Templates/views/Dashboard";
import Buttons from "./Templates/views/ClientDetails/Buttons.js";
import GridSystem from "./Templates/views/ClientDetails/GridSystem.js";
import Panels from "./Templates/views/ClientDetails/Panels.js";
import SweetAlert from "./Templates/views/ClientDetails/SweetAlertPage.js";
import Notifications from "./Templates/views/ClientDetails/Notifications.js";
import Icons from "./Templates/views/ClientDetails/Icons.js";
import Typography from "./Templates/views/ClientDetails/Typography.js";
import RegularForms from "../src/Templates/views/Forms/RegularForms.js";
import ExtendedForms from "../src/Templates/views/Forms/ExtendedForms.js";
import ValidationForms from "../src/Templates/views/Forms/ValidationForms.js";
import Wizard from "../src/Templates/views/Forms/Wizard/Wizard.js";
import RegularTables from "../src/Templates/views/Tables/RegularTables.js";
import ExtendedTables from "../src/Templates/views/Tables/ExtendedTables.js";
import ReactTables from "../src/Templates/views/Tables/ReactTables.js";
import GoogleMaps from "../src/Templates/views/Maps/GoogleMaps.js";
import FullScreenMap from "../src/Templates/views/Maps/FullScreenMap.js";
import VectorMap from "../src/Templates/views/Maps/VectorMap.js";
import Charts from "../src/Templates/views/Charts.js";
import Calendar from "../src/Templates/views/Calendar.js";
import UserPage from "../src/Templates/views/Pages/UserPage.js";
import LoginPage from "../src/Templates/views/Pages/LoginPage.js";
import RegisterPage from "../src/Templates/views/Pages/RegisterPage.js";
import LockScreenPage from "../src/Templates/views/Pages/LockScreenPage.js";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/details",
    name: "Client Details",
    state: "openComponents",
    icon: "nc-icon nc-app",
    views: [
      {
        path: "/regular-forms",
        layout: "/admin",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/buttons",
        layout: "/admin",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/grid-system",
        layout: "/admin",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/panels",
        layout: "/admin",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/sweet-alert",
        layout: "/admin",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/notifications",
        layout: "/admin",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      {
        path: "/icons",
        layout: "/admin",
        name: "Icons",
        mini: "I",
        component: Icons
      },
      {
        path: "/typography",
        layout: "/admin",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: "nc-icon nc-notes",
    views: [
      {
        path: "/regular-forms",
        layout: "/admin",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/extended-forms",
        layout: "/admin",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/validation-forms",
        layout: "/admin",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      {
        path: "/wizard",
        layout: "/admin",
        name: "Wizard",
        mini: "W",
        component: Wizard
      }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: "nc-icon nc-paper-2",
    views: [
      {
        path: "/regular-tables",
        layout: "/admin",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/extended-tables",
        layout: "/admin",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/react-table",
        layout: "/admin",
        name: "React Table",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: "nc-icon nc-pin-3",
    views: [
      {
        path: "/google-maps",
        layout: "/admin",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/full-screen-maps",
        layout: "/admin",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/vector-maps",
        layout: "/admin",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  {
    path: "/charts",
    layout: "/admin",
    name: "Charts",
    icon: "nc-icon nc-chart-bar-32",
    component: Charts
  },
  {
    path: "/calendar",
    layout: "/admin",
    name: "Calendar",
    icon: "nc-icon nc-single-copy-04",
    component: Calendar
  },
  {
    collapse: true,
    path: "/pages",
    name: "Pages",
    state: "openPages",
    icon: "nc-icon nc-puzzle-10",
    views: [
      {
        path: "/user-page",
        layout: "/admin",
        name: "User Page",
        mini: "UP",
        component: UserPage
      },
      {
        path: "/login-page",
        layout: "/auth",
        name: "Login Page",
        mini: "LP",
        component: LoginPage
      },
      {
        path: "/register-page",
        layout: "/auth",
        name: "Register",
        mini: "RP",
        component: RegisterPage
      },
      {
        path: "/lock-screen-page",
        layout: "/auth",
        name: "Lock Screen Page",
        mini: "LSP",
        component: LockScreenPage
      }
    ]
  }
];
export default routes;
