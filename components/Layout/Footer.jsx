import React from "react";
import BacktoTop from "../Buttons/backtoTop";

function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-1 md:p-8 p-4 mt-8 bg-light-gray/10 shadow lg:px-18"
      role="contentinfo"
    >
      <p className="font-poppins tracking-[1px] text-[8px] md:text-lg">
        © 2025 <strong>szaib.dev</strong> | All rights reserved.
      </p>

      <BacktoTop />
    </footer>
  );
}

export default Footer;
