import React from "react";
import img from "../../assets/hero.jpg";
import SparklesText from "../ui/sparkles-text"
// import BorderBeam from "../ui/border-beam";
import {AuroraText} from "../ui/aurora-text";
 
import { TextAnimate } from "../ui/text-animate";
const Rightinup = () => {
    return (
      <div className="relative lg:flex flex-1 w-full h-full max-w-4000px overflow-hidden bg-white flex-col pt-10 pl-24 gap-3">

        
        <h2 className="text-gravel md:text-4xl font-bold">
          <TextAnimate animation="blurInUp" by="word">

            Hi, I’m your AI powered sales assistant,  
          </TextAnimate>
        </h2>
        <SparklesText text="BizBOT" />
        <p className="text-iridium md:text-sm mb-10">
        BizBOT is capable of capturing lead information without a form...{' '}
          <br />
          something never done before 😉
        </p>
        <img
          src={img}
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-52"
          width={0}
          height={0}
        />
      </div>
    );
};

export default Rightinup;
