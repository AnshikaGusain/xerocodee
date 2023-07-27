import React from "react";
import  Link  from "next/link";


const Email=()=>{
    return (
        <>
        <div className="email">
                <input placeholder="Your Email" className="emailInput" />
                <Link href="/mail" >
                <div style={{textDecoration:'none'}}>
                <input className="button--submit" value="JOIN WAITLIST" type="submit"/>
                </div>
                </Link>
                
        </div>
        </>
    );
}

export default Email;