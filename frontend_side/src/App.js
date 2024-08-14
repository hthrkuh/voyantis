import React from "react";

import HomePage from "./components/homePage";

import "./App.scss";
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "./components/Toast";

function App() {
    return (
        <>
            <Toast />
            <div className="container-fluid">
                <HomePage />
            </div>
        </>
    );
}

export default App;
