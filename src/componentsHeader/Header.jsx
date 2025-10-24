import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header container">
        <div className="header-menyu">
          <img
            className="header-logo"
            src="/image/Shortly.svg"
            alt="Shortly logo"
          />

          <nav>
            <ul className="header-ul">
              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <a className="header-a" href="#">
                  Features
                </a>
              </li>

              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <a className="header-a" href="#">
                  Pricing
                </a>
              </li>

              <li
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500"
              >
                <a className="header-a" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="login">
          <a className="header-a" href="#">
            Login
          </a>

          <a
            className="header-btn"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            href="#"
            role="button"
          >
            <span className="header-sing">Sing up</span>
          </a>
        </div>

        <div className="group">
          <img src="/image/Group.svg" alt="decorative group" />
        </div>
      </header>
    </div>
  );
}
