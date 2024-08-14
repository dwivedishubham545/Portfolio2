import React, { Component } from "react";
import emailjs from 'emailjs-com';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"; // Importing Toastify CSS for styling

class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send email using EmailJS
    emailjs.sendForm('service_b9ffpj6', 'template_33ycqrk', e.target, 'QuPYXrPI0Mu5ASWTw')
      .then((result) => {
          console.log(result.text);
          Toastify({
              text: "Your message has been sent successfully!",
              duration: 2000,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #007BFF, #00C8FF)", // Blue and light blue gradient
                padding: "5px 10px", // Reduced padding
                margin: "5px", // Reduced margin
                borderRadius: "3px", // Reduced border radius
                fontSize: "12px", // Smaller font size
                minWidth: "150px", // Minimum width to make the toast compact
              },
              onClick: function(){} // Callback after click
          }).showToast();
      }, (error) => {
          console.log(error.text);
          Toastify({
              text: "There was an error sending your message.",
              duration: 2000,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #007BFF, #00C8FF)", // Blue and light blue gradient
                padding: "5px 10px", // Reduced padding
                margin: "5px", // Reduced margin
                borderRadius: "3px", // Reduced border radius
                fontSize: "12px", // Smaller font size
                minWidth: "150px", // Minimum width to make the toast compact
              },
              onClick: function(){} // Callback after click
          }).showToast();
      });
  };

  render() {
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="" id="contact-me">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="roww">
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the form and send me an email.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.handleSubmit}
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="contain">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation"></div>
                            </div>
                            <div className="form-group mb-3">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                            <div className="form-group mb-3">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
