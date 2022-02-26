import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#FFFFFF" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
    </footer>
  );
};

export default Footer;
