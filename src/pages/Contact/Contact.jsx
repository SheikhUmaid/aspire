import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import '../About/About.css';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p className="header-subtitle">
                        Get in touch with us to learn more about our programs, partnerships, or volunteer opportunities
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                We'd love to hear from you! Whether you're interested in our programs, want to partner with us, looking to volunteer, or have questions about our work, please don't hesitate to reach out.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <MapPin className="contact-icon" />
                                    <div>
                                        <h4>Our Address</h4>
                                        <p>123 Community Center Road<br />Near City Hospital<br />City, State - 123456<br />India</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <Phone className="contact-icon" />
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 1234567890<br />+91 0987654321</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <Mail className="contact-icon" />
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@aspiretechnologies.org<br />contact@aspiretechnologies.org</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <Clock className="contact-icon" />
                                    <div>
                                        <h4>Office Hours</h4>
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter your name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required placeholder="your@email.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+91 1234567890" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Select a subject</option>
                                        <option value="programs">Program Information</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="volunteer">Volunteer Inquiry</option>
                                        <option value="donation">Donation/Sponsorship</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows="6" required placeholder="Tell us how we can help you..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Want to Make a Difference?</h2>
                        <p>
                            There are many ways to support our work - volunteer your time, partner with us on programs, sponsor specific initiatives, or help spread awareness about our mission. Every contribution makes a difference.
                        </p>
                        <div className="cta-buttons">
                            <a href="/partners" className="btn btn-primary btn-large">Partnership Opportunities</a>
                            <a href="/programs/youth-development" className="btn btn-secondary btn-large">Explore Our Programs</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
