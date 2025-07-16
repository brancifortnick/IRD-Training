import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

import GeneralInformation from "./GeneralInformation";
import videoAlias from '../assets/video.mp4'; // Assuming you have a video file in your assets
import Flow from "./Flow";
import { useSelector } from "react-redux";
import Menus from './Menus'
import './HomePage.css'
import OverNightFlow from "./OverNightFlow";

const HomePage = () => {
    const history = useHistory();
    const user = useSelector(state => state.session.user);


    return (
        <div>
            <div className='links-container' style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',

            }}>
      

           

                <section>
                    <a href="/steps-of-service">Steps of Service</a>
                </section>
                <section>
                    <a href="/standards">Standards</a>
                </section>
                <section>
                    <a href='/overnightflow'>
                        Overnight shift structure
                    </a>
                </section>
                <section>
                    <div>
                        {!user ? (
                            <NavLink to='/sign-up' exact={true} activeClassName='active'>
                                Sign Up
                            </NavLink>
                        ) : null}
                    </div>


                </section>
            </div>
            <section className="video-section">
                <div className='video-wrapper' style={{ zIndex: -10, position: 'relative', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                    <video type="video/mp4" alt='...loading luxury-style-video' src={videoAlias} width='auto' autoPlay='true' loop controls height='100%' />
                </div>
            </section>
        </div>
    );
}

export default HomePage;