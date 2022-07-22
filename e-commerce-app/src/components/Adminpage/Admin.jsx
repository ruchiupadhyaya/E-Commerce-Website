import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Admin.css'
import AdminLogin from './AdminLogin'
import OrdersDetails from './OrdersDetails'
import TransactionSearch from './TransactionSearch'

function Admin() {
    let [adminlogin, updateadminlogin] = useState(false)
    let [togglebetweengeneralandperticulerdata, changetoggle] = useState(0)
    async function validateAdmin() {
        try {
            let response = await fetch('/adminauthenicator', {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            let res = await response.json();
            // console.log(res);
            if (response.status === 200) {
                updateadminlogin(true)
            } else {
                updateadminlogin(false)
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function adminlogout() {
        try {
            let responce = await fetch('/adminlogout', {
                method: "POST",
            })
            let res = await responce.json()
            // console.log(responce);
            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    function logoutadmin(event) {
        adminlogout()
        validateAdmin()
    }


    function updateadmin() {
        validateAdmin()
    }
    useEffect(() => {
        validateAdmin()
    }, [])


    return (
        <>
            {adminlogin === true ? (<>
                <div className="adminheader">
                    <NavLink to="/">Visit Site</NavLink>
                    <a href>Himalaya Shopping</a>
                    <a href onClick={logoutadmin} >Logout</a>
                </div>

                <div className="generalandperticuler">
                    <button onClick={()=>{
                        changetoggle(0)
                    }}>General Data</button>
                    <button onClick={()=>{
                        changetoggle(1)
                    }}>Particuler Transaction Search</button>
                </div>




                {togglebetweengeneralandperticulerdata === 0 ? (<OrdersDetails />) : (<TransactionSearch />)}

            </>) : (<AdminLogin updateadmin={updateadmin} />)}
        </>
    )
}

export default Admin
