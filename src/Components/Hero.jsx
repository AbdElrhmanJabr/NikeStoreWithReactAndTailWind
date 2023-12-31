import React from "react";
import Clip from "./Utils/Clip";
import SocialLinks from "./Utils/SocialLinks";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute left-0 top-0 right-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter text-slate-200 drop-shadow-sm font-extrabold">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter text-slate-200 drop-shadow-sm font-extrabold">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos.map((val, i) => {
                return <Clip key={i} imgsrc={val.imgsrc} clip={val.clip} />;
              })}
            </div>
            <div className="grid items-center gap-3 absolute top-[33vh] lg:top-[27vh]  right-0">
              {sociallinks.map((val, i) => {
                return <SocialLinks key={i} icon={val.icon} />;
              })}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="Hero"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[29vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
