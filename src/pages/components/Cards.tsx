import React from "react";

const Cards = () => {
    return (
        <div>
            <div className="cardSection">
                <div className="cardSectionHeading">Use AI to handle workflows in your chat platforms.</div>
            </div>
            <div className="cards">
                <div className="cardContainer1">
                    <div className="card">
                        <h6>ask questions</h6>
                        <p>To assist with managing the development, testing, and
                            deployment process, ask it questions or issue instructions.</p>
                        <button className="coming-soon-btn">Coming Soon</button>
                    </div>
                    <div className="card">
                        <h6>execute</h6>
                        <p>With a single command, you may run a series of tests or install a 
new version of a programme in a particular setting.</p>
                        <button className="coming-soon-btn">Coming Soon</button>
                    </div>
                    
                </div>
                <div className="cardContainer2">
                <div className="card">
                        <h6>Fix security concerns more quickly using generated code recommendations</h6>
                        <p>With the aid of AI, recognise any security risk and swiftly and effectively fix it.
granting developers the freedom they require to protect their work frequently and early.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;