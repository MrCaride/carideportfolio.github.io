import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { antonio, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase sm:mt-0 mt-10`}>
              Hola, soy{' '}
              <span
                className="sm:text-[#FFB22C] sm:text-[90px] 
                text-[#FFB22C] text-[50px] font-mova
                font-extrabold uppercase">
                Antonio
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack sm:mt-0 mt-5`}>
            Ingeniero informático con pasión por el mundo digital. <br className="sm:block hidden" />
            Dedicado a la creación de soluciones innovadoras que mejoren la experiencia del usuario.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className="relative sm:absolute">
          <img
            className="bottom-0 sm:ml-[20vw] 
            lg:ml-[50vw] md:ml-[40vw] xmd:ml-[40vw] 2xl:ml-[60vw]
            sm:h-[80vh] md:h-[60vh] xl:h-[70vh] sm:bottom-0 bottom-20 mt-[450px] sm:mt-[150px]"
            src={antonio}
            alt="antonio"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
