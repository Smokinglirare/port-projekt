import React from 'react';
import { InlineWidget } from "react-calendly";
import "./Calendly.css";

const Calendly = () => {
    return (
        <div className="calender-container">
            <div className="calender-headings">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                </p>
            </div>
            <div className="calendy-calender">
            <InlineWidget url="https://calendly.com/thornes/testing?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=eb0b3f" />
            </div>
            
        </div>
    );
};

export default Calendly;