import React from "react";
import {
  Form,
  FormInput,
  FormTextArea,
  FormLabel,
  FormSubmit
} from "./StyledComponents";

const ContactForm = () => {
  return (
    <Form>
      <FormLabel>Name</FormLabel>
      <FormInput type="text" placeholder="Your name..." />
      <FormLabel>Email</FormLabel>
      <FormInput type="email" placeholder="Your email..." />
      <FormTextArea rows="8" placeholder="Your message..." />
      <FormSubmit type="submit" value="Send" />
    </Form>
  );
};
export default ContactForm;
