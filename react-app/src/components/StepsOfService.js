import React from "react";
import videoThree from '../assets/video3.mp4'
const StepsOfService = () => {

    return (
        <div>
            <div>
                <div>
                    <h1>
                        Telephone Etiquette and Steps of Service
                    </h1>
                    <p>
                        The Four Seasons Hotel and Resorts has a long-standing tradition of excellence in service. This guide outlines the steps of service and telephone etiquette that all employees should follow to ensure a consistent and high-quality guest experience.
                    </p>

                    <section>
                        <h2>Order Taking</h2>
                    </section>
                    <section>
                        <ol>

                            <li>
                                Answer the phone within three rings. (Using the Guest Name when you have the opportunity ie: "Good Morning, Mr. Smith, this is Victoria from In Room Dining. How may I assist you today?")
                            </li>
                            <li>
                                Begin taking information down using the IRD speed sheet or any method that works for you.
                                [ensure to obtain the amount of guest dining to ensure propert table setup]
                            </li>
                            <li>
                                WHile taking the orderm ask relevant questions and feel free to repeat items back to the guest to ensure accuracy.
                            </li>
                            <li>
                                Once the order is complete, repeat the order back to the guest to confirm accuracy.
                            </li>
                            <li>
                                Confirm the delivery time and any special requests. Thank the guest and wish them well
                            </li>

                        </ol>
                    </section>
                    <section>
                        <h2>Next Steps</h2>
                        <p>
                            immediately enter the order into the POS system, ensuring all items are correctly inputted.
                            communicate any special requests or modifications to the kitchen staff/team members.
                            <br />
                            prepare the order for delivery, ensuring all items are packaged correctly and neatly.

                        </p>
                        <p>
                            Table to be set accurately with correct cutlery, dining settings, condiments, etc.
                        </p>
                        <p>
                            During the overnight hours and the early morning periods of the day, it is very important to read the guests body language, choosing the proper way to handle each scenario.  ie: 4:00AM coffee order request, and when you arrive the room is pitch dark and the guest has placed one foot out of his door(showing you he would prefer to grab the tray).  Confirm guest is okay, what guest wants, and contrinue to next oder.
                        </p>
                        <p>
                            After serving the guest, sweep current floor you are on, and continue downstairs to clear those tables.  Check computer, repeat until orders slow down.
                        </p>
                        <p>

                        </p>
                        
                    </section>
                </div>

            </div>

            <section className="video-section">
                <div className='video-wrapper' style={{ zIndex: -10, position: 'relative', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                    <video type="video/mp4" alt='...loading luxury-style-video' src={videoThree} width='auto' autoPlay='true' loop controls height='100%' />
                </div>
            </section>



        </div >




    )




}
export default StepsOfService;