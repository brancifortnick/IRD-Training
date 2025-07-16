import React from "react";
import './Standards.css';


const Standards = () => {
    return (
        <div className="standards-container">
            <h1>Service Standards</h1>
            <p>
                These are the core standards every team member should follow to ensure a world-class guest experience at Four Seasons.
            </p>

            <section>
                <h2>Professional Appearance</h2>
                <ul>
                    <li>Uniform is clean, pressed, and complete.</li>
                    <li>Personal grooming meets company standards.</li>
                </ul>
            </section>

            <section>
                <h2>Guest Interaction</h2>
                <ul>
                    <li>Always greet guests with a smile and eye contact.</li>
                    <li>Use the guest's name whenever possible.</li>
                    <li>Be attentive and anticipate guest needs.</li>
                </ul>
            </section>

            <section>
                <h2>Service Delivery</h2>
                <ul>
                    <li>Orders are delivered promptly and accurately.</li>
                    <li>Special requests are handled with care and urgency.</li>
                    <li>Follow up with guests to ensure satisfaction.</li>
                </ul>
            </section>

            <section>
                <h2>Cleanliness & Organization</h2>
                <ul>
                    <li>Work areas are kept clean and organized at all times.</li>
                    <li>Tables are set and cleared according to standards.</li>
                </ul>
            </section>
        </div>
    );
};

export default Standards;