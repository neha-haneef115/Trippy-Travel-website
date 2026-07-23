import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
