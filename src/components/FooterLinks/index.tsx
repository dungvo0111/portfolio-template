import React from "react";

import "./FooterLinks.scss";

interface FooterLinksProps {
  item: string;
}

export default function FooterLinks({ item }: FooterLinksProps) {
  return (
    <a href={`#${item}`} aria-label={item} key={item}>
      <i className={`fab fa-${item}`} />
    </a>
  );
}

FooterLinks.displayName = "Social media links at footer";
