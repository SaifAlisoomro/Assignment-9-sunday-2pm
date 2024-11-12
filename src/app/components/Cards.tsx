import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="justify-around ml-10 mr-10">
      <div className="text-wrap justify-around ml-10 mr-10">
        <h1 className="text-2xl font-bold items-center text-center text-[#044e83]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.5rem] sm:text-[1.2rem] text-[1rem] text-center">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </ div> 
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0 ">
        <div>
            <Image src={"/imageWebsite.5c6ae62f.jpg"} alt="card" width={1280} height={809} />
        </div>
        <div>
            <Image  src={"/imageWebsite2.a102c7b5.jpg"} alt="card" width={1280} height={809}/>
        </div>
        <div>
        <Image  src={"/imageWebsite3.b845fe78.jpg"} alt="card" width={1280} height={809}/>
        </div>

      </div>
    </div>
  );
};

export default Cards;
