import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { morelinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const MorelinkIcon = ({ index, icon, link}) => (
  <Tilt className='xs:w-[80px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.5)}
      className='shadow-Icon'
    >
      <div
        options={{
          max: 75,
          scale: 1,
          speed: 450,
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={icon}
            alt='hub'
            className='w-20 h-20 object-contain'
          />
        </a>
      </div>
    </motion.div>
  </Tilt>
);

function Social() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Links</p>
      </motion.div>

      

      <div className='mt-10 flex flex-wrap gap-20'>
        {morelinks.map((morelink, index) => (
          <MorelinkIcon key={morelink.item} index={index} {...morelink} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Social, "social");