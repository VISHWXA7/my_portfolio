import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../components/ui/MagicButton";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffects";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 md:pb-[250px] md:pt-[250px]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[60vh] md:h-screen"
          fill="white"
        />
        <Spotlight
  className="h-[50vh] md:h-[90vh] w-[80vw] top-10 left-1/2 transform -translate-x-1/2 lg:left-[10%] lg:translate-x-0"
  fill="purple"
/>


        <Spotlight
          className="left-[50vw] md:left-80 top-28 h-[50vh] md:h-[80vh] w-[60vw]"
          fill="blue"
        />
      </div>

      <div className="flex justify-center relative my-10 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-center font-medium text-black dark:text-white mb-4 text-sm md:text-lg lg:text-2xl tracking-wide">
            Hi! I&apos;m Vishwaa, a Front-end Developer based in India.
          </h2>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[30px] md:text-5xl lg:text-6xl font-bold leading-tight"
          />
          <a href="#work">
              <MagicButton 
                 title = "Show my work"
                 icon={<FaLocationArrow />}
                 position='right'
              />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
