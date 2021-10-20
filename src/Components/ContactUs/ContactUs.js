 
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    // contact data
    return (
        <>
            <section className="contact_us">
                <div className="container">
                     
                    <div className="row mt-5 align-items-center pt-5">

                         

                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <form className="contact_form">
                                <div className="mb-4">
                                    <input className="input" type="text" placeholder="Name" required />
                                </div>
                                <div className="mb-4">
                                    <input className="input" type="email" placeholder="Email" required />
                                </div>
                                <div className="mb-4">
                                    <input className="input" type="text" placeholder="Phone No" required />
                                </div>
                                <div>
                                    <textarea name="" id="" rows="10" placeholder="Message"></textarea>
                                </div>
                                <div className="submit_btn text-center mt-3">
                                    <input className="regular_btn" type="submit" value="Send Message" />
                                </div>
                            </form>
                        </div>
                         
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;