import React from 'react';
import './GeneralInformation.css';

const GeneralInformation = () => {
    return (
        <div className="general-info-container">
            <h2 className="section-title">Computer Focus</h2>
            <h1>General Information</h1>
            <section>
                <h3>Getting Started with the Four Seasons Computer System (Micros POS)</h3>
                <p>
                    After logging in to the desktop, navigate to the Windows apps. You can do this by:
                </p>
                <ul>
                    <li>
                        Opening Chrome or Edge and typing <strong>"windows apps"</strong> or <strong>"windows applications"</strong> in the address bar.
                    </li>
                    <li>
                        Clicking the Windows icon (bottom left) and selecting <strong>All Apps</strong>. Use the search bar or scroll to find your application.
                    </li>
                </ul>
                <p>
                    Click the application you want to use to open it. You can also right-click and pin it to your taskbar for easy access.
                </p>
                <p>
                    The application we use to see guest orders from cell/tablet devices is called <strong>Messenger</strong>. It looks like a texting app. Monitor Messenger throughout your shift for incoming orders, pick-up requests, and guest questions.
                </p>
            </section>

            <section>
                <h3>Shortcut to Getting Up and Running</h3>
                <ul>
                    <li>
                        Open Microsoft Edge from your desktop or search bar.
                    </li>
                    <li>
                        Locate <strong>Microsoft Apps</strong> (top left in Edge). If needed, sign into your Four Seasons email for access.
                    </li>
                    <li>
                        <strong>Messenger</strong> is used by guests to place orders via tablet, cell phone, or chat. Constantly monitor the computer for new orders.
                    </li>
                    <li>
                        Use <strong>HOT SOS</strong> to track incoming orders and requests.
                    </li>
                    <li>
                        Stay in contact with FOM, Overnight Manager, and other managers. Use slow periods to complete side work, as order volume can increase quickly.
                    </li>
                </ul>
            </section>

            <section>
                <h3>Micros POS: Employee Meals</h3>
                <p>
                    Overnight employees may choose one meal, one beverage from the fridge, and cookies or fruit. Fill out the meal forms and leave them in the IRD window.
                </p>
                <ul>
                    <li>
                        By 12:00–12:15 AM, enter the meals into Micros for the overnight chef to prepare.
                    </li>
                </ul>
                <h4>How to Ring in Employee Meals</h4>
                <ol>
                    <li>Begin Room: Use room #5603 (a non-existent room for staff meals).</li>
                    <li># of guests = 0 for staff meals. No delivery charge.</li>
                    <li>Organize meal slips by time and enter into Micros. Include employee name and delivery time (use the "delivery time" button near the bottom of the screen).</li>
                    <li>After inputting all orders, close the employee check.</li>
                </ol>
                <h4>Closing Employee Meals (Room #5603)</h4>
                <ol>
                    <li>Go to room #5603 and confirm it’s the overnight meals you just rang in.</li>
                    <li>Go to Payment screen and click <strong>Remove auto service charge</strong>.</li>
                    <li>On the right, click <strong>House Charges</strong>. In the top row, select <strong>Employee Meal</strong> and enter "OVN MEALS".</li>
                    <li>Click <strong>House Charge Print</strong> (middle left).</li>
                    <li>The check may show a balance; Becca will handle this on the backend.</li>
                    <li>Go back into the check, return to Payment, and print <strong>House Charge Final</strong> (bottom center).</li>
                    <li>Click 0.00 on the Micros screen to complete.</li>
                    <li>
                        The first (longer) house charge print goes into the Vocera Box for Becca to sign. The finalized copy goes into the check holder with all checks.
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default GeneralInformation;