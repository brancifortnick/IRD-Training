import React from "react";
import "./HomePage.css";
import bgVideo from "../assets/video.mp4"; // Update with your actual video filename

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video
                className="homepage-bg-video"
                src={bgVideo}
                autoPlay
                loop
                playsInline
            />
            <div className="homepage-content">
                <h1>Welcome to Four Seasons IRD Training</h1>
                <p>
                    Start your journey here. Explore the menus, standards, and overnight flow to become a confident team member!
                </p>
                {/* Add navigation buttons or links here */}
            </div>
        </div>
    );
};

export default HomePage;