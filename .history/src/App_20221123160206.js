import "./App.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4tosmk",
        "template_domain",
        form.current,
        "Vc3sKhp-w_t_xK073"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Get this domain!<br/>Make an offer starting from $3000</h1>

          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* <!-- number --> */}
            <div className="form-group">
              <label for="number">Mobile Number</label>
              <input
                type="text"
                name="number"
                className="form-control"
                id="number"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="form-group">
              <label for="email_body">State the Amount and make your bid here.</label>
              <textarea
                name="message"
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
