import React,    {useState} from 'react';
import { useHistory } from 'react-router-dom';
import EmbededMenu from './EmbededMenu';
import OverNightFlow from './OverNightFlow';
import './GeneralInformation.css'


const GeneralInformation = () => {

    return (

        <div className='general-info-container'>
            <heading>
                Computer Focus
            </heading>
            <h1>General Information</h1>
            <text>

                Getting Started with the Four Seasons Computer System, Mircos POS.
                What you will want to do after first logging in to the desktop is to navigate to the windows apps.

                You may find this by opening a chrome or edge browser and typing in the address bar "windows apps" or "windows applications".  This will take you to a page that has all of the applications that are available to you.  You can also find this by clicking on the windows icon in the bottom left corner of your screen and then clicking on the "All Apps" button.  From there, you can scroll through the list of applications or use the search bar to find a specific application.
                
                <br />
                From there, you can click on the application you want to use and it will open in a new window.  You can also right click on the application and pin it to your taskbar for easy access in the future. 
                The Application we will be using to see guests' orders from cell/tablet devices will look like a texting app, and is called messenger.  We monitor this throughout our shift for incoming orders,pick up requests, and front desk occasionally adds us into chats where guests have questions.
            </text>
            <div>
                <p>
                    <h1>
                        Shortcut to getting up and running
                    </h1>

                    <div>
                        Navigate to microsoft edge, either on your desktop or use search (bottom screen)
                        Locate Microsoft Apps [Top left of your screen in Edge, else top right will allow you to sign into your four seasons email giving you proper access]
                    </div>
                    <div>
                        Messenger is the application guests use to place tablet, cell phone, and really anytype of text/chat into, so it is our duty to constantly monitor the computer.  Checking on the computer after each order, and using HOT SOS as a tool to see incoming order/requests helps the success percentage of the shift.
                    </div>
                    <div>
                        It is important to note that, 3-4 orders can turn into 7-8 quickly so constantly beeing in contact with FOM,Overnight Manager, Our Managers is crucial.  Utilize the 'slow' period to knock out as much of the side work sheet as possible because the overnight is very difficult to judge order  pops, and entering,setting,running,amongst other duties takes time no matter how organized/fast you are.
                        :)
                    </div>
                </p>

                <div>
                    Micros POS
                    <p>
                        EMPLOYEE MEALS:
                        Overnight employees may choose one meal, one beverage from the fridge, cookies or fruit.  The forms are filled out and left in the IRD window.
                        By 12-12:15AM each night we enter the meals into the micros for the overnight chef to prepare to cook for staff.
                    </p>
                    <h1>How to Ring in Employee Meals</h1>
                    <h2>Steps Below:</h2>
                    <div>
                        Begin Room:
                        Use room # 5603 (we use this because it is a non existant room)
                        # of guests = 0 for staff meals
                        no delivery charge
                        Organize pile of meal slips by time and enter into Mircos.  Ensure to include name of employee and delivery time using the 'delivery time' button located near the bottom of the screen(its gray)
                        after inputting all order we can now close the employee check
                    </div>
                    <h1>Closing Employee Meals[will be under room #5603]</h1>
                    <div>
                        Go to room # 5603 and ensure it is the overnight meals you've just rang in. (sometimes you may find amenity rooms/PM standard testing for meals, etc under the same room #---you will leave these for management to handle for now)
                        Go to Payment screen and locate the Remove auto service charge button(click this)
                        Once clicked go to the right side of the screen and located house charges(click this tab)
                        You should now see a new screen with many options(in the top row locate Employee Meal)- Click this and enter this text(OVN MEALS)
                        Next click house charge print middle left of the screen.
                        The check may show a balance, Becca will handle on backend.
                        Go back into the check
                        Navigate to payment screen
                        Go to the right side of the screen(house charges)
                        once you click house charges look towards the bottom center of the screen and print house charge final.
                        Click 0.00 on micros screen and your complete.

                        The house charge print(first one printed(longer copy)) goes into the Vocera Box for Becca to sign, the finalized copy goes into the check holder containing all checks.
                    </div>
                </div>
            </div>
            
        
        </div>


)










}

export default GeneralInformation;