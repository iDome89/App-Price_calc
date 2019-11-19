import React, { useState, useContext } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import {
  Form,
  FormInput,
  FormTextArea,
  FormLabel,
  FormSubmit,
  Error
} from "./StyledComponents";
import { PagesContext } from "./model/PagesContext";

const ContactForm = () => {
  const context = useContext(PagesContext);
  const { register, handleSubmit, errors } = useForm();
  const selections = context[0].map(item => [item.page, item.name]);
  const [email, setEmail] = useState({
    subject: "Project Request",
    name: "",
    email: "",
    message: ""
  });
  const onSubmit = e => {
    axios
      .post("https://mailthis.to/dominik.zecoli@gmail.com", {
        _subject: email.subject,
        selections: JSON.stringify(selections),
        email: email.email,
        name: email.name,
        message: email.message,
        _after: "https://m9p1n.csb.app/confirm"
      })
      .then(function() {
        window.location.href = "https://mailthis.to/confirm";
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const handleChange = ev => {
    setEmail({ ...email, [ev.target.name]: ev.target.value });
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      method="POST"
    >
      <FormLabel>Name</FormLabel>
      <FormInput
        value={email.name}
        name="name"
        type="text"
        placeholder="Your name..."
        ref={register({ required: true })}
        onChange={handleChange}
      />
      {errors.name && <Error>Please enter your name</Error>}
      <FormLabel>Email</FormLabel>
      <FormInput
        value={email.email}
        name="email"
        type="email"
        placeholder="Your email..."
        ref={register({ required: true })}
        onChange={handleChange}
      />
      {errors.email && <Error>Please enter your email</Error>}
      <FormTextArea
        value={email.message}
        name="message"
        rows="8"
        placeholder="Your message..."
        ref={register({ required: true })}
        onChange={handleChange}
      />
      {errors.message && <Error>Please enter a message</Error>}
      <FormSubmit type="submit" value="Send" />
    </Form>
  );
};
export default ContactForm;
