import React from "react";
import './Contacts.scss';
import ContactsInfo from "../ContactsInfo/ContactsInfo";

const Contacts = () => {
  return(
    <>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.9873993292745!2d-3.947044484225763!3d51.62343997965438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef53610959b6f%3A0xc8fed07fe492837e!2zMzIgQWxleGFuZHJhIFJkLCBTd2Fuc2VhIFNBMSA1RFQsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sua!4v1595313146105!5m2!1sru!2sua"  aria-hidden="false" title="map 32 Alexandra Road,Swansea,SA1 5DT"></iframe>
      </div>
      <h1 className="contacts__title">Contacts</h1>
      <div className="contacts__block">
          <form className="contacts__form">
            <h2>Wright us letter</h2>
            <input type="text" name="name" className="input"/>
            <span>Name</span>
            <input type="text" name="email" className="input"/>
            <span>Email</span>
            <input type="text" name="website" className="input"/>
            <span>Theme</span>
            <textarea name="message" className="area"></textarea>
            <span>Message</span>
            
            <button type="submit" id="contact_send" value="Send" className="contacts__button">Send</button>
          </form>
          <ContactsInfo />
      </div>
    </>
  )
};

export default Contacts;