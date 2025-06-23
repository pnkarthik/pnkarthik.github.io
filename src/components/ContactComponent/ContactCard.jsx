import React from 'react';

const ContactCard = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      <div className="card">
        <div className="card-body p-4">
          <div className="row align-items-center">
            {/* Left side - Logos */}
            <div className="col-md-3 text-center mb-3 mb-md-0">
              {/* Personal Logo */}
              <div className="mb-4">
                <div 
                  className="rounded-circle bg-dark d-inline-flex align-items-center justify-content-center"
                  style={{ width: '80px', height: '80px' }}
                >
                  <span className="text-white fw-bold" style={{ fontSize: '2rem' }}>A</span>
                </div>
              </div>
              
              {/* IIT Hyderabad Logo */}
              <div>
                <div 
                  className="d-inline-block p-2 rounded"
                  style={{ backgroundColor: '#ff4444' }}
                >
                  <div 
                    className="text-white fw-bold text-center"
                    style={{ 
                      fontSize: '0.8rem',
                      lineHeight: '1.2',
                      minHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    IIT<br/>HYD
                  </div>
                </div>
                <div className="mt-2">
                  <small className="text-muted d-block" style={{ fontSize: '0.7rem' }}>
                    भारतीय प्रौद्योगिकी संस्थान हैदराबाद<br/>
                    Indian Institute of Technology Hyderabad
                  </small>
                </div>
              </div>
            </div>

            {/* Right side - Details */}
            <div className="col-md-9">
              <div className="ps-md-3">
                {/* Name and Title */}
                <h2 className="text-primary fw-bold mb-1" style={{ fontSize: '2rem' }}>
                  Dr. P. N. Karthik
                </h2>
                <p className="text-muted mb-1" style={{ fontSize: '1.1rem' }}>
                  Assistant Professor
                </p>
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>
                  Department of Artificial Intelligence, IIT Hyderabad
                </p>
                
                <hr className="my-3" style={{ border: '2px solid #6c757d' }} />

                {/* Contact Information */}
                <div className="mb-3">
                  <p className="mb-2" style={{ fontSize: '1rem' }}>
                    <strong>pnkarthik@iith.ac.in</strong>
                  </p>
                  <p className="mb-3" style={{ fontSize: '1rem' }}>
                    Kandi, Sangareddy, Telangana 502285
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="d-flex gap-2">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: '#0077B5' 
                    }}
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </div>
                  <div 
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: '#000000' 
                    }}
                  >
                    <i className="fab fa-x-twitter text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include Font Awesome for social media icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
};

export default ContactCard;