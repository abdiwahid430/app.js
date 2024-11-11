// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

function App() {
    const firstName = "YourFirstName"; // Replace with your actual first name

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <Name />
                    <Price />
                    <Description />
                    <Image />
                </div>
            </div>
            {firstName ? (
                <h3>Hello, {firstName}!</h3>
            ) : (
                <h3>Hello, there!</h3>
            )}
            {firstName && <img src="https://via.placeholder.com/50" alt="Avatar" />} {/* Optional avatar image */}
        </div>
    );
}

export default App;
