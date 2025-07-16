import React from "react";
import Flow from "./Flow";
import './OverNightFlow.css'
import videoGreen from '../assets/video-green.mp4'

const OverNightFlow = () => {



    return (


        <div className='overnight-container'>
            <h1>
                Overnight Flow && Duties
            </h1>
            <div>

                "A comprehensive guideline for the Overnight (OVN) shift."
                "Please ensure you follow the OVN checklist and refer to the PM and AM checklists if time permits to complete any outstanding tasks. This document outlines a schedule for OVN tasks from 10:20 PM to 7:00 AM, including retrieving pastries, setting breakfast tables, transferring phone duties, completing side work, and ensuring supplies are stocked for morning service."
                "ARRIVE AT WORK"
                <div>"10:15 PM – Perform laundry duties and get dressed."</div>
                <div> "10:20 PM – Retrieve pastries for the coffee station on your way to Level 5 (located near the Vernick cooler). You should retrieve 24 pastries only." </div>
                <div>"10:30 PM – Assess and prioritize the most important tasks. Run current orders until the 11:00 PM person leaves or have the 11:00 PM server send food to the 12:00 AM server — unless there’s a high influx of orders or delays."</div>
                <div>"11:00 PM – Take Over the Setter Role"</div>
                <div> "Set 8 tables against the back wall (minimum) + 7 in the IRD main area."</div>
                <div>     "11:30 PM – Transfer the Phone"</div>
                <div> "The coordinator leaves now; the phone is located on the left side of Becca’s desk."</div>
                <section> "Leave the phone in the charging position, facing down."
                    "Click 1570, Press FWD ALL (buttons on right side of the phone)."
                    "Type and dial: 91 215 388 9374. Listen for the phone to buzz and then pick up the phone and hang it up."
                    "Next click 1573 directly below 1570 and do the same forward all and dial out using 91 first [contacting guest rooms uses the 7 ie: room 5004 ((you could call 75004))]."
                    "To UNTRANSFER the phone:"
                    "On both extensions press 1573, press Forward All, then * hear the buzzer hang up and do the same for 1570."
                </section>
                <div>"1:00 AM – 3:00 AM"</div>
                "Polish glassware and silverware to meet the required par levels."</div>
            "Fold napkins."
            "Complete the side work checklist, including stocking soda and water."
            <div>"4:00 AM – Begin Coffee Setup"</div>
            "Must be completed and ready in the lobby by 5:00 AM."
            <div>"5:00 AM"</div>
            "Ensure the refrigerator is fully stocked (soda and water)."
            <div>"5:15 AM"
                "Prepare butter and juice for the AM shift (from the previous day)."
                "Complete this task if time allows — **technically not listed on your side work sheet but should be done when necessary, if time available."</div>
            <div> "5:30 AM"
                "Clean up the remaining areas."
                "Double-check that all tables are set for breakfast."</div>
            <div> "5:45 AM"
                "Update logs and prepare notes for the AM shift."</div>
            <div> "6:00 AM"
                "Ensure the side work sheet is completed."</div>
            "Use the AM server as support to complete tray runs."
            <div> "6:30 AM"
                "Return to IRD indefinitely."</div>
            <div>  "Ensure the computer has no pending orders."</div>
            <div>  "Be available to assist AM servers."</div>
            <div> "6:45 AM"
                "Close checks."
                "Gather pass-on information."
                "Wipe down the office if you eat inside."
            </div>
            <div>"7:00 AM"
                "Touch base with the coordinator."
                "Pass along any important information."
                "Check out with MOD."
                "Take linen down."
            </div>
            <section className="video-section">
                <div className='video-wrapper' style={{ zIndex: -10, position: 'relative', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                    <video type="video/mp4" alt='...loading luxury-style-video' src={videoGreen} width='auto' autoPlay='true' loop controls height='100%' />
                </div>
            </section>
        </div>


    )

}
export default OverNightFlow;