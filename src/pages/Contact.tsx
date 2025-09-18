export default function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <form className="form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows={5} placeholder="How can we help?" />
        </label>
        <button type="button">Send</button>
      </form>
    </section>
  )
}
