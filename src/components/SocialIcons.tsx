import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const RESUME_URL = "#";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    const elements = Array.from(social.querySelectorAll("span")) as HTMLElement[];
    const rafIds: number[] = [];
    const handlers: Array<(e: MouseEvent) => void> = [];

    elements.forEach((elem) => {
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        const id = requestAnimationFrame(updatePosition);
        rafIds.push(id);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      handlers.push(onMouseMove);
      document.addEventListener("mousemove", onMouseMove);

      updatePosition();
    });

    return () => {
      handlers.forEach((h) => document.removeEventListener("mousemove", h));
      rafIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/C9Ravi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/ravi-chauhan-44ba85290/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/raviichauhann"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Instagram profile"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        title="Open resume"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span aria-hidden="true">
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
