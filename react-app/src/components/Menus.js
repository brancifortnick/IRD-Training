import React from "react";
import './Menus.css';
import { NavLink } from "react-router-dom";

// Menus Component: Provides general tips and menu-related info for new hires
const Menus = () => {
    return (
        <div className="menus-container-outter-most">
            <div className="menus-inner-container">
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/breakfast/'>
                        <strong>Breakfast Menu:</strong>
                    </a>

                </li>
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/all_day_dining/'>
                        <strong> All Day Dining:</strong>

                    </a>
                </li>

            
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/late_night_dining/'>
                        <strong>Late-Night Dining:</strong>

                    </a>
                </li>
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/kids_menu/'>
                        <strong>Kids Menu:</strong>
                    </a>
                </li>
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/alcoholic_beverage/'>
                        <strong>  Alcoholic Beverages:</strong>
                    </a>

                </li>
                <li>
                    <a href='https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/beverages/'>
                    <strong>
                        Beverages
                        </strong>
                    </a>
                </li>
                
                <li>
                    <a href='https://www.fourseasons.https://www.fourseasons.com/philadelphia/dining/in-room_dining/in-room_dining/pet-menu/'>
                    <strong>
                     Pet Menu:
                        </strong>
                    </a>
                </li>
                </div>
                <h1>General Tips and Info</h1>
                <div className="menus-tip">
                    Many phone calls can turn awkward or not flow naturally.
                    <br />
                    <strong>Tip:</strong> Offer the guest a starter item or beverage to break the silence.
                </div>

                {/* Menu Discussion Section */}
                <section>
                    <div className="menu-discussion">
                        <strong>Note:</strong> The Four Seasons Menus are proprietary. Below are key points and follow-up questions to help you gather all pertinent information from guests.
                    </div>

                    {/* AM Shift Follow-up Questions */}
                    <h2>Good Menu Follow-up Questions: AM Shift</h2>
                    <ul>
                        <li>
                            <strong>Two eggs any style:</strong> Comes with a choice of toast!
                        </li>
                        <li>
                            <strong>Steak & Eggs:</strong> Ask for steak preparation and egg preparation. (Does not include toast.)
                        </li>
                        <li>
                            <strong>Pastry Options:</strong> No pastry baskets. Options: Seasonal Danish, Matcha Blueberry, Croissant, Chocolate Croissant.
                        </li>
                        <li>
                            <strong>Toast Options:</strong> Wheat, White, Gluten-Free, Sourdough, Rye.
                        </li>
                        <li>
                            <strong>Bagel Options:</strong> Cinnamon Raisin, Plain, Everything.
                        </li>
                    </ul>

                    {/* PM & Overnight Shift Follow-up Questions */}
                    <h2>Good Menu Follow-up Questions: PM and Overnight Shift</h2>
                    <ul>
                        <li>
                            <strong>Most items come with a side:</strong> Truffle Fries (additional cost), French Fries, Sweet Fries, Fruit, Side Caesar, Mixed Green Salad.
                        </li>
                        <li>
                            <strong>Cheeseburger:</strong> Ask for preparation (e.g., medium).
                        </li>
                        <li>
                            <strong>Ribeye:</strong> Black garlic demi-glaze, mashed potatoes, za'atar carrots.
                        </li>
                        <li>
                            <strong>Filet:</strong> Au jus, mashed potatoes, za'atar carrots.
                        </li>
                        <li>
                            <strong>Seared Halibut:</strong> Lemon butter sauce, grilled asparagus, mashed potatoes.
                        </li>
                    </ul>
                </section>

                {/* Overnight Menu Policy */}
                <section className="overnight-policy">
                    <h2>Overnight Menu Policy</h2>
                    <p>
                        Overnight runs a limited menu, eliminating PM entrees such as Ribeye and Filet. However, do not decline guest food requests overnight—as long as the chef/cook can fulfill the order, we will accommodate reasonable requests.
                    </p>
                    <p>
                        <strong>Alcohol Cut-off & Mini Bar Restock:</strong><br />
                        <ul>
                            <li>Sunday: 2am - 9am</li>
                            <li>Monday - Saturday: 2am - 7am</li>
                        </ul>
                    </p>
                </section>
            </div>

    );
};

export default Menus;