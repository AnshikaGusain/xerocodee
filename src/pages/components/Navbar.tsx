import React from "react";
import  Link  from "next/link";
const Navbar=()=>{
    return (
        <>
        <div className="Navbar fluid-container">
            <div className="logo">
                <img src="/logo.svg" alt="" />
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className="xerocodee">
                XeroCodee
            </div>
            <Link href="/signup" >
            <div className="signup" style={{textDecoration:'none',cursor:'pointer'}}>
                SignUp
            </div>
            </Link>
            
            </div>
        </div>
        <div className="line"></div>
        </>
    );
}

export default Navbar;