import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const handleDownload = () => {
    // Handle download logic here
    const link = document.createElement("a");
    link.href = "./src/assets/Bibek-resume.pdf"; // Replace with the actual path to the CV file
    link.download = "Bibek_Kharel_CV.pdf"; // Replace with the desired file name
    link.target = "_blank";

    // Trigger the download
    link.click();
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Bibek Kharel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Dedicated QA engineer  <br className='sm:block hidden' />
          Delivering top-notch software quality.
          </p>

          <div className="absolute top-55 left-2/2 mt-4 z-20 ">
        <button
          className={`py-3 px-8 bg- border text-white font-semibold rounded-full shadow-lg hover:bg-primary-dark cursor-pointer`}
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>
        </div>
      
      </div>
       
       


      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;