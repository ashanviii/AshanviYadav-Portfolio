import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { link } from "../constants";

const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {link.map((link) => (
        <div className='w-28 h-28' key={link.name}>
          <BallCanvas icon={link.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech2, "");