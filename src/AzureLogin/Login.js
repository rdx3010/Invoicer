import React from 'react'
import { authProvider } from '../authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
// import Admin from 'layouts/Admin';
import RegularForms from '../Templates/views/Forms/RegularForms'
import AdminLayout from "../Templates/layouts/Admin.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Admin from '../Templates/layouts/Admin.js';
import AdminNavbar from "../Templates/components/Navbars/AdminNavbar";
import Side from '../../src/Templates/components/Sidebar/Side';
import Sidebar from 'Templates/components/Sidebar/Sidebar';
import Dashboard from 'Templates/views/Dashboard';

function Login() {


  return (

    <div className="App">
      {/* <AzureAD provider={authProvider}>
              
        
                <BrowserRouter>
                    <Switch>
                     <Route path="/admin" render={(props) => <AdminLayout {...props} />}  role={accountInfo.account.idToken.roles[0]}/>
                        <Redirect from="/" to="/admin/dashboard" />
                              <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                  
                     </Switch>
                </BrowserRouter>
            </AzureAD> */}

      <AzureAD provider={authProvider}>
        {
          ({ login, logout, authenticationState, error, accountInfo }) => {
            console.log("account info", accountInfo, authenticationState)
            switch (accountInfo.account.idToken.roles[0]) {
              case 'User':

                return (
                  <>

                    {/* <BrowserRouter>
                      <Switch>
                        <Route path="/admin" render={(props) => <AdminLayout {...props} />} role={accountInfo.account.idToken.roles[0]} />
                        <Redirect from="/" to="/admin/dashboard" />
                        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

                      </Switch>
                    </BrowserRouter> */}

                    <div className='col-10 topbar'>
                      <AdminNavbar />
                     <div className='ml-2 mt-20'>
                     {/* <Dashboard/> */}
                     <RegularForms />

                     </div>
                    </div>
                    <div className='col-3'>
                      <Side role={accountInfo.account.idToken.roles[0]} />
                      {/* <Sidebar/> */}
                    </div>
                  </>
                );
              case 'Admin':

                return (
                  <>
                    <div className='col-10 topbar'>
                      <AdminNavbar />
                    </div>
                    <div className='col-3'>
                      <Side role={accountInfo.account.idToken.roles[0]} />
                    </div>
                  </>
                );
              case 'SuperAdmin':

                return (
                  <>
                    <div className='col-10 topbar'>
                      <AdminNavbar />
                    </div>
                    <div className='col-3'>
                      <Side role={accountInfo.account.idToken.roles[0]} />
                    </div>
                  </>
                );

              default:
                return (
                  <h1></h1>
                )
            }
          }
        }
      </AzureAD>

    </div>
    //     <>
    //       <div className='loginpage'>
    //         <div className="main active">
    //           <div className="top-div">
    //             <div className="logo-img">
    //               <img className='img' src="data:image/png;base64,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" alt="" />

    //             </div>
    //             <h2>Login</h2>
    //           </div>
    //           <div className="input-text">
    //             <input type="text" placeholder="Email" require />
    //           </div>
    //           <div className="input-text">
    //             <input type="password" placeholder="Password" require />
    //           </div>
    //           <div className="submitButton">
    //             <button className='button' onClick={login}>Login</button>
    //           </div>
    //           <div className="forgot-pass">
    //             <a href=''>Reset Password</a>
    //           </div>
    //         </div>
    //       </div>





    //     </>
    //   );
  );
}

export default Login


