import React from "react";
import Email from "./Email";

const First = () => {
    const handleButtonClick = () => {

    }
    return (
        <div>
            <div className="heading1">Integrate AI Throughout Your Workflow</div>
            <div className="codeDoctor">Code Doctor</div>
            <div className="text3">Make processes where AI collaborates with your team throughout the whole development process.</div>
            <Email/>
            <div className="ImgContainer">
                <img src="/ai.svg" alt="" className="botImg" />
                {/* <div style={{display:'flex',justifyContent:'space-between',top:0}}> */}
                <div style={{ width: 464, height: 462, opacity: 0.40, background: '#8593E8', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)',position: 'absolute',left:109, top:250 }} />
                <div style={{ width: 446, height: 446, opacity: 0.30, background: '#FC4FF6', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)',position: 'absolute',left:800, top:250  }} />
            </div>
            {/* </div> */}
        </div>
    );
}

export default First;