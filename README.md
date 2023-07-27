# Project Documentation: XeroCodee

****Overview****

This document serves as the project documentation for the XeroCodee Full-Stack Web Application. The application is a feature-rich web platform designed to collect, store and update mail data from users. It is built using TypeScript, Next.js, React, Webpack, and Babel. The backend is implemented using Node.js with Express and utilizes MongoDB database to store mail data.

****Deployed Link:****

https://xerocodee-iota.vercel.app/

****Features****

XeroCodee includes the following features:

1. User Registration and Authentication:
   - Users can register and create an account using their email and create their password.
   - User can login using email and password.

2. Mail data submission:
   - Users can submit their name and email address to XeroCodee.
   - Code submissions are stored in a MongoDB database.

3. Admin:
   - If user is logged in using admin credentials:
     
	email: admin@gmail.com

	Password: admin123

Then, the user has the ability to view and edit previously submitted mail data.

4. Search Functionality:
   - Admin can search or filter previously submitted mail data entries.
     
5. Security:
   - Users’ password information is securely stored in the MongoDB database using bcrypt.

****Front-end Overview of Website:****

****Home page:**** This page of the website gives you an idea about XeroCodee. 

****Sign Up page:****

If you want to sign in or sign up click on the Sign Up button located in Navbar of the Home page.

A new page will appear which will have the following fields:

•	Email: Enter a valid email address.

•	Password: Create a password of length more than or equal to 8 characters.

•	Confirm Password: Re-enter the above password, and make sure both passwords are the same.

****Sign In page:****

If you already have an account and you want to log in, click on the Sign In link provided on Sign Up page.

Sign In page will appear which will have the following fields:

•	Email: Enter a valid email address.

•	Password: Enter the password associated with the above email.

****Admin Panel:****

If you logged in using admin credentials i.e., 

Email: admin@gmail.com

Password: admin123

Then, an admin panel will appear that shows the previously submitted mail data, and give you the ability to search through these entries and update these entries.

****Send Mail Data:****

To send mail data to XeroCodee, click on the “Join WaitList” button on home page.

Then fill the form using your name and your email.

****Technologies Used****

- Next.js: Next.js is a React framework that gives you building blocks to create web applications.
- ReactJS: ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is an open-source, component-based front-end library that is responsible only for the view layer of the application
- TypeScript: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- Node.js: The server-side runtime environment for executing JavaScript code.
- Express.js: A web framework for building RESTful APIs in Node.js.
- MongoDB: A NoSQL database for storing code submissions and execution results.
- Other libraries and packages: bcrypt for password hashing, dotenv for managing environment variables, and more.

****Installation and Setup****

1. Clone the project repository from GitHub.
2. Install the frontend dependencies by running the following command:
****npm install****
3. Start the frontend development server:
****npm run dev****
The application should now be running on ****http://localhost:3000**** but before using this set up the backend.
4. Install the backend dependencies by navigating to the backend directory i.e., ****https://github.com/AnshikaGusain/xerocodeeBackend**** and running:
****npm install****
5. Set up a MongoDB database and configure the connection string in the project's `.env` file.
6. Start the backend server:
****node index.js****
The server should now be running on ****http://localhost:5000****.


