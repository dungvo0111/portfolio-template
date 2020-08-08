import React from "react";

import "./Contact.scss";

import Button from "../../../components/Button";

import { contactData } from "../../../data/contactData";

export default function Contact() {
  return (
    <>
      <h1 id="contact">Let&apos;s talk</h1>
      <form className="contact-form">
        {contactData.map((item, id) => (
          <div className="contact-form__elem" key={id}>
            <label htmlFor={item.label}>{item.labelText}</label>
            {item.inputType === "textarea" ? (
              <textarea
                id={item.label}
                name={item.label}
                rows={10}
                cols={10}
                placeholder="Your message"
              ></textarea>
            ) : (
              <input type={item.inputType} id={item.label} name={item.label} />
            )}
          </div>
        ))}

        <Button type={"submit"} text={"Send"} />
      </form>
    </>
  );
}

Contact.displayName = "Contact Section";
