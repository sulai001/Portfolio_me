import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xrblgodb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 text-light">
      <div className="container mb-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: '#A1E3F9' }}>Get In Touch</h2>
          <p className="lead fw-3">Have a project in mind or want to collaborate? Let's talk!</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card bg-dark border-secondary h-100">
              <div className="card-body p-4">
                <h3 className="mb-4">Contact Details</h3>
                
                <div className="mb-4">
                  <h4 className="h5 fw-bold mb-3 text-light">
                    <i className="bi bi-geo-alt-fill me-2" style={{ color: '#A1E3F9' }}></i>
                    Location
                  </h4>
                  <p className="mb-1 text-light">110D INAMKULATHUR</p>
                  <p className="text-light">Trichy - 620009, Tamil Nadu</p>
                </div>

                <div className="mb-4">
                  <h4 className="h5 fw-bold mb-3 text-light">
                    <i className="bi bi-telephone-fill me-2" style={{ color: '#A1E3F9' }}></i>
                    Phone
                  </h4>
                  <p className="text-light">+91 8807215523</p>
                </div>

                <div>
                  <h4 className="h5 fw-bold mb-3 text-light">
                    <i className="bi bi-envelope-fill me-2" style={{ color: '#A1E3F9' }}></i>
                    Email
                  </h4>
                  <p className="text-light">sulaiirf2930@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card bg-dark border-secondary">
              <div className="card-body p-4">
                <h3 className="mb-4" style={{ color: '#A1E3F9' }}>Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          className="form-control bg-dark text-light border-secondary"
                          id="nameInput"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="nameInput" className="text-light">Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          className="form-control bg-dark text-light border-secondary"
                          id="emailInput"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="emailInput" className="text-light">Your Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="subject"
                          className="form-control bg-dark text-light border-secondary"
                          id="subjectInput"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subjectInput" className="text-light">Subject</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          name="message"
                          className="form-control bg-dark text-light border-secondary"
                          id="messageInput"
                          style={{ height: '150px' }}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="messageInput" className="text-light">Your Message</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="col-12">
                        <div className="alert alert-success mt-3 mb-0">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Your message has been sent successfully!
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="col-12">
                        <div className="alert alert-danger mt-3 mb-0">
                          <i className="bi bi-exclamation-triangle-fill me-2"></i>
                          Error sending message! Please try again.
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;