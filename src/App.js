import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";

// import AuthLayout from "layouts/Auth.js";
// import AdminLayout from "layouts/Admin.js";
import { AzureAD } from 'react-aad-msal';
// import Auth from "layouts/Auth";
// import Admin from "layouts/Admin";
import Login from "../src/AzureLogin/Login";
import { authProvider } from "authProvider";

export default function App() {
  return (

    // <Parent/>
  //   <BrowserRouter>
  //   <Switch>
  //     <Route path="/auth" render={(props) => <AuthLayout {...props} element={<Auth />}/>} />
  //     <Route path="/admin" render={(props) => <AdminLayout {...props} element={<Admin />} />} />
  //     {/* <Redirect from="/" to="/admin/dashboard" /> */}
  //     {/* <Redirect from="/" to="/login"/> */}
  //     {/* <Route exact path="/" element={<AuthLogin />} /> */}
  //     <Route exact path="/login" element={<AzureAD provider={authProvider} forceLogin={true}>
  //               <Login />
               
  //           </AzureAD>} />
  //       <Route path="/callback" element={<Admin />} />

  //   </Switch>
  // </BrowserRouter>
  <>
    <AzureAD provider={authProvider} forceLogin={true}>
                <Login />
    </AzureAD>
  </>
  )
}
