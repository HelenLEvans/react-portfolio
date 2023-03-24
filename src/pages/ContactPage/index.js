const ContactPage = () => {
  return (
    <form>
      <div>
        <label for="name">Name</label>
        <input name="name" required="true" />
      </div>
      <div>
        <label for="Email">Email</label>
        <input name="Email" required="true" type="email" />
      </div>
      <div>
        <label for="Message">Message</label>
        <input name="Message" required="true" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactPage;
