import React from "react";
import './ContactsInfo.scss';

const ContactsInfo = () => {
  return(
    <div className="contacts__info">
      <p className="info__title">Administration</p>
      <a href="tel: +111111111" className="info__phone">111-111-111</a>
      <a href="tel: +222222222" className="info__phone">222-222-222</a>
      <a href="mailto: mail@mail.com" className="info__email">mail@mail.com</a>
      <div className="info__address">32 Alexandra Road, <br/> Swansea,<br/> SA1 5DT</div>
    </div>
  )
};

export default ContactsInfo;