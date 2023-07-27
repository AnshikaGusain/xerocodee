import React, { useState } from 'react';

const MailPage = () => {
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        
    };
    const handleNameChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim() || !isValidEmail(email)) {
            alert('Please enter valid name and email.');
            return;
        }
        

        try {
            // Send the data to the server
            const response = await fetch('https://xerocodee-backend.vercel.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.status==409) {
                // Server returned an error
                alert('Email already exists');
            } else if(response.status==201){
                // Server successfully processed the request
                setSubmitted(true);
            }
            else{
                alert('Something went wrong. Please check Name and Email.');
            }
        } catch (error) {
            // Error occurred while sending the request
            alert('An error occurred. Please try again later.');
        }
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <h1>Send Mail Data</h1>
            {submitted ? (
                <div style={{color:"white", fontFamily:'Open Sans', fontSize:'50px', textAlign:'center'}}>Thank you!</div>
            ) : (
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name || ''}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email || ''}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <button className="form-submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MailPage;
