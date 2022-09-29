import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h7rfpvb', 'template_govj65k', form.current, 'nr-kT3oqBtjpOeb67')
      .then((result) => {
        if(result.text==="OK"){
           return   document.getElementById('send').style.display="block"
        }
        else return document.getElementById('unsend').style.display="block"
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>arifhesenv@gmail.com</h5>
            <a
              href="mailto:arifhesenv@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Arif Hasanov</h5>
            <a
              href="https://m.me/arif.hasanov.750"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+994 50 483 04 82</h5>
            <a
              href="https://wa.me/994504830482"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <div className="message send" id="send">Mesajınız göndərildi</div>
          <div className="message unsend" id="unsend">Mesajınız göndərilmədi,yenidən cəhd edin</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
