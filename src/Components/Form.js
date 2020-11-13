import React from "react";
import Footer from "./Footer";

const Form = () => {
  return (
    <form class="contact-form" id="comment-form">
      <h2 class="contact-form__title">Write a Comment</h2>
      <div class="row">
        <div class="col-md-6">
          <input
            class="contact-form__input-text"
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
          />
        </div>
        <div class="col-md-6">
          <input
            class="contact-form__input-text"
            type="text"
            name="mail"
            id="mail"
            placeholder="Email:"
          />
        </div>
      </div>
      <textarea
        class="contact-form__textarea"
        name="comment"
        id="comment"
        placeholder="Comment"
      ></textarea>
      <input
        class="contact-form__submit"
        type="submit"
        name="submit-contact"
        id="submit_contact"
        value="Send Comment"
      />
    </form>
  );
};

export default Form;
