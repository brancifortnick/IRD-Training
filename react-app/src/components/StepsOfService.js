import React from "react";
import vidAlias from '../assets/video-green.mp4';
import './StepsOfService.css';
const StepsOfService = () => {
    return (
        <div className="steps-container">
            <h1>Telephone Etiquette and Steps of Service</h1>
            <p>
                The Four Seasons Hotels and Resorts has a long-standing tradition of excellence in service.
                This guide outlines the steps of service and telephone etiquette that all employees should follow to ensure a consistent and high-quality guest experience.
            </p>

            <section>
                <h2>Order Taking</h2>
                <ol>
                    <li>
                        Answer the phone within three rings. Use the guest's name when possible.<br />
                        <em>Example: "Good Morning, Mr. Smith, this is Victoria from In Room Dining. How may I assist you today?"</em>
                    </li>
                    <li>
                        Begin taking information using the IRD speed sheet or your preferred method.<br />
                        <em>Be sure to ask how many guests are dining to ensure proper table setup.</em>
                    </li>
                    <li>
                        While taking the order, ask relevant questions and repeat items back to the guest to ensure accuracy.
                    </li>
                    <li>
                        Once the order is complete, repeat the entire order back to the guest to confirm accuracy.
                    </li>
                    <li>
                        Confirm the delivery time and any special requests. Thank the guest and wish them well.
                    </li>
                </ol>
            </section>

            <section>
                <h2>Next Steps</h2>
                <ul>
                    <li>Immediately enter the order into the POS system, ensuring all items are correct.</li>
                    <li>Communicate any special requests or modifications to the kitchen or team members.</li>
                    <li>Prepare the order for delivery, ensuring all items are packaged neatly and correctly.</li>
                    <li>Set the table accurately with the correct cutlery, dining settings, condiments, etc.</li>
                </ul>
                <p>
                    During overnight and early morning hours, pay close attention to guest body language and adapt your approach accordingly.<br />
                    <em>Example: If a guest orders coffee at 4:00 AM and leaves a foot out the door in a dark room, they likely prefer to grab the tray themselves. Confirm their wishes and proceed to the next order.</em>
                </p>
                <p>
                    After serving the guest, sweep the current floor, then continue downstairs to clear other tables. Check the computer for new orders and repeat until orders slow down.
                </p>
            </section>

            <section className="video-section">
                <div className="video-wrapper">
                    <video
                        src={vidAlias}
                        type="video/mp4"
                        alt="Luxury service video"
                        autoPlay
                        loop
                        controls
                        style={{ width: '100%', borderRadius: '12px', marginTop: '24px' }}
                    />
                </div>
            </section>
        </div>
    );
};

export default StepsOfService;