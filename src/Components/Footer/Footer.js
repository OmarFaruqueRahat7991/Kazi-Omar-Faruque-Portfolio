import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-slate-500 footer items-center p-4 bg-neutral text-neutral-content p-20">
      <div
        style={{ marginRight: "420px" }}
        className="grid-flow-col gap-4 md:place-self-center md:justify-self-end hover-text"
      >

        <a
          href="https://twitter.com/rahatomarfaruq"
          target="_blank"
          rel="noreferrer"
          className="tooltip"
          data-tip="Twitter"
        >
          <svg
            xmlns=""
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <FaTwitter className=""></FaTwitter>{" "}
          </svg>
        </a>

        <a
          href="mailto:rahatomarfaruque@gmail.com?subject=Mail from our Website"
          target="_blank"
          rel="noreferrer"
          className="tooltip"
          data-tip="Send Mail"
        >
          <svg
            xmlns=""
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            {" "}
            <HiMail></HiMail>{" "}
          </svg>
        </a>

        <a
          href="https://www.facebook.com/rahat.omar.faruque"
          target="_blank"
          rel="noreferrer"
          className="tooltip"
          data-tip="Facebook"
        >
          <svg
            xmlns=""
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <FaFacebook></FaFacebook>{" "}
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/kazi-omar-faruque-rahat-955857192/"
          target="_blank"
          rel="noreferrer"
          className="tooltip"
          data-tip="LinkedIn"
        >
          <svg
            xmlns=""
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <FaLinkedin></FaLinkedin>{" "}
          </svg>
        </a>

        <a
          href="https://github.com/OmarFaruqueRahat7991"
          target="_blank"
          rel="noreferrer"
          className="tooltip"
          data-tip="GitHub"
        >
          <svg
            xmlns=""
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <FaGithub></FaGithub>{" "}
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
