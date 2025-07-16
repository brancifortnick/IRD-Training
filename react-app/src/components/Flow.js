import React from "react";
import './Flow.css';

const Flow = () => {
    return (
        <div className="flow-container">
            <h1>General OVO OVN Flow</h1>
            <p>
                <strong>A comprehensive guideline for the Overnight (OVN) shift.</strong>
                <br />
                Please follow the OVN checklist and refer to the PM and AM checklists if time permits. This schedule covers OVN tasks from 10:15 PM to 7:00 AM, including pastries, breakfast tables, phone duties, side work, and morning prep.
            </p>

            <section>
                <h2>Arrival</h2>
                <ul>
                    <li><strong>10:15 PM:</strong> Perform laundry duties and get dressed.</li>
                </ul>
            </section>

            <section>
                <h2>Pastry & Task Assessment</h2>
                <ul>
                    <li><strong>10:20 PM:</strong> Retrieve 24 pastries for the coffee station (Level 5, near Vernick cooler).</li>
                    <li><strong>10:30 PM:</strong> Assess and prioritize tasks. Run current orders until the 11:00 PM person leaves, or have the 11:00 PM server send food to the 12:00 AM server (unless there’s a high influx of orders or delays).</li>
                </ul>
            </section>

            <section>
                <h2>Setter Role & Phone Transfer</h2>
                <ul>
                    <li><strong>11:00 PM:</strong> Take over the Setter Role. Set 8 tables against the back wall (minimum) + 7 in the IRD main area.</li>
                    <li><strong>11:30 PM:</strong> Transfer the phone (left side of Becca’s desk):</li>
                    <ul>
                        <li>Leave the phone charging, facing down.</li>
                        <li>Click 1570, press FWD ALL, dial <strong>91 215 388 9374</strong>. Listen for buzz, pick up, hang up.</li>
                        <li>Click 1573 (below 1570), repeat forward all and dial out using 91 first.</li>
                        <li><strong>To UNTRANSFER:</strong> On both extensions, press 1573, Forward All, then *, hear buzzer, hang up. Repeat for 1570.</li>
                    </ul>
                </ul>
            </section>

            <section>
                <h2>Overnight Tasks</h2>
                <ul>
                    <li><strong>1:00 AM – 3:00 AM:</strong>
                        <ul>
                            <li>Polish glassware and silverware to par levels.</li>
                            <li>Fold napkins.</li>
                            <li>Complete side work checklist (stock soda and water).</li>
                        </ul>
                    </li>
                    <li><strong>4:00 AM:</strong> Begin coffee setup (must be ready in lobby by 5:00 AM).</li>
                    <li><strong>5:00 AM:</strong> Ensure refrigerator is fully stocked (soda and water).</li>
                    <li><strong>5:15 AM:</strong> Prepare butter and juice for AM shift (from previous day). Do this if time allows (not on side work sheet, but important).</li>
                    <li><strong>5:30 AM:</strong> Clean up remaining areas. Double-check all tables are set for breakfast.</li>
                    <li><strong>5:45 AM:</strong> Update logs and prepare notes for AM shift.</li>
                </ul>
            </section>

            <section>
                <h2>Morning Handover</h2>
                <ul>
                    <li><strong>6:00 AM:</strong> Ensure side work sheet is completed. Use AM server as support for tray runs.</li>
                    <li><strong>6:30 AM:</strong> Return to IRD. Ensure computer has no pending orders. Assist AM servers as needed.</li>
                    <li><strong>6:45 AM:</strong> Close checks. Gather pass-on information. Wipe down office if you ate inside.</li>
                    <li><strong>7:00 AM:</strong> Touch base with coordinator. Pass along important info. Check out with MOD. Take linen down.</li>
                </ul>
            </section>
        </div>
    );
};

export default Flow;