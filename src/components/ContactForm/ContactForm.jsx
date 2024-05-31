import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { CgDisplayFlex, CgMail } from "react-icons/cg";
import { MdMessage, MdOutlineMessage ,MdCall} from "react-icons/md";
const ContactForm = () => {
  const onCall=()=>{
    console.log("Calling...")
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    const formElements = event.target.elements;
    const nameValue = formElements.name.value;
    const emailValue = formElements.email.value;
    const textValue = formElements.text.value;
    
    console.log(nameValue);
    console.log(emailValue);
    console.log(textValue);
   

  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>

        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button onClick={onCall} text="VIA CALL" icon={<MdCall  fontSize="24px"/>} />
        </div>
        <div className={styles.top_btn}>

        <Button isoutline={true} text="VIA EMAIL FORM" icon={<CgMail fontSize="24px"/>} />
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={20}/>
            </div>
          
        </form>
        <div style={{
          display:"flex",
          justifyContent:"end",

        }}>

        <Button onClick={onSubmit} text="SUBMIT TEXT" />
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
