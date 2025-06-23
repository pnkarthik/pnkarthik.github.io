import React from "react";
import ContactCard from "./ContactCard";

const ContactComponent = () => {
  return (
    <>
      <div className="d-flex gap-3">
        <div style={{ width: "50%", height: "400px" }}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.147246304565!2d78.1234162!3d17.595741399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf74d7593e7b7%3A0x96e0ba6acb5ca6e8!2sIIT%20Hyderabad%2C%20Academic%20Block-C!5e0!3m2!1sen!2sin!4v1748875345604!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div>
          <h4>Office</h4>
          <p>704/A, Academic Block C, IIT Hyderabad, Near NH65, Kandi, Sangareddy, Telangana 502284.</p>
          <img width="100%" src="/images/emailSignature.jpeg" alt="email signature" />
        </div>
      </div>
      <ContactCard />
    </>
  );
};

export default ContactComponent;

