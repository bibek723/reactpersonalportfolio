import React from "react";

import { SocialCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { socialmedias, technologies } from "../constants";

const Socialmedia = () => {

    const handleIconClick = (url) => {
        window.open(url, "_blank");
      };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {socialmedias.map((technology) => (
        <div 
        className='w-28 h-28 cursor-pointer' 
        key={technology.name} 
        onClick={() => handleIconClick(technology.url)}

        >
          <SocialCanvas icon={technology.icon} />
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Socialmedia, "");