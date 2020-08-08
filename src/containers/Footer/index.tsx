import React from "react";

import FooterLinks from "../../components/FooterLinks";

import { footerData } from "../../data/footerData";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__left">
        Copyright &copy; 2020 Dung Vo. All rights reserved.
      </p>

      <div
        className="footer__right"
        role="list"
        aria-label="Social media channels"
      >
        {footerData.map((item) => (
          <FooterLinks item={item} key={item} />
        ))}
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
