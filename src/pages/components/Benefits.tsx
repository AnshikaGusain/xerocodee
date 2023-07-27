import React from "react";

const Benefits = () => {
    
    return (
        <div>
            <div className="BenefitHeading ">
                Boost the speed of your development and test cycles.
            </div>
            <div className="BenefitText">
                With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.
            </div>
            <div className="Benefits">
                <div className="BenefitCard">
                    <div className="Benefit1">
                        <img src="/Stack.svg" alt="" style={{ margin: '0 10px' }} />
                        <div>CI/CD Pipeline Generate</div>
                    </div>
                    <div className="line2"></div>
                    <div className="Benefit1">
                        <img src="/Stack2.svg" alt="" style={{ margin: '0 10px' }} />
                        <div>Build / Deploymnent</div></div>
                </div>
                <div className="BenefitCardContainer">
                    <div className="BenefitCard2">
                        <div className="Benefit1">
                            <img src="/Stack.svg" alt="" style={{ margin: '0 10px' }} />
                            <div>Generate Test Cases</div>
                        </div>
                        <div className="line2"></div>
                        <div className="Benefit1">
                            <img src="/Stack2.svg" alt="" style={{ margin: '0 10px' }} />
                            <div>Code Analysis</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;