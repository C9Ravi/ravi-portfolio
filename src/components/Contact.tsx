import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="https://www.linkedin.com/in/ravi-chauhan-44ba85290/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ravi-chauhan-44ba85290
              </a>
            </p>

            <h4>Education</h4>

            <p>B.Tech in Computer Engineering (with spec. in Data Science)</p>

            <p>
              J.C. Bose University of Science and Technology,
              YMCA, Faridabad
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/C9Ravi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-chauhan-44ba85290/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/raviichauhann"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://x.com/c09Ravi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              Twitter / X <MdArrowOutward />
            </a>

            <a
              href="mailto:singhraviiii17@gmail.com"
              data-cursor="disable"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ravi Singh</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;