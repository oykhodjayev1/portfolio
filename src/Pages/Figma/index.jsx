import Card1 from "../../Components/Card1";
import Card2 from "../../Components/Card2";
import Footer from "../../Components/Footer";
import Btn from "./../../Components/Button";
export default function Figma() {
  return (
    <div className="bg-[#17202A]">
      <div className="flex flex-col items-center gap-[20px]">
        <h1 className="p-[10px] font-[800] text-[52px] leading-[62px] tracking-[-0.5px] text-[#D9E3EA] text-center">
          Landing template for startups
        </h1>
        <p className="p-[10px] text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] text-center md:w-[768px]">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="flex gap-[10px] flex-col items-center md:flex-row">
          <Btn uz="167px" bg="#5D5DFF" hg="48px">
            Start free trial
          </Btn>
          <Btn uz="149px" bg="#33363A" hg="48px">
            Learn more
          </Btn>
        </div>
      </div>
      <div className="flex justify-center mt-[40px]">
        <img src="./public/Show2-Img.png" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="p-[10px] font-[800] text-[42px] leading-[62px] tracking-[-0.5px] text-[#D9E3EA] text-center">
          The majority our customers do not understand their workflows.
        </h1>
        <p className="p-[10px] text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] text-center md:w-[768px]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[40px]">
        <Card1 img="./public/Card11.png" />
        <Card1 img="./public/Card12.png" />
        <Card1 img="./public/Card13.png" />
        <Card1 img="./public/Card14.png" />
        <Card1 img="./public/Card15.png" />
        <Card1 img="./public/Card16.png" />
      </div>
      <div className="p-[30px] flex justify-center">
        <img src="./public/Line.png" />
      </div>
      <div className="div">
        <div className="flex flex-col items-center">
          <h1 className="p-[10px] font-[800] text-[42px] leading-[62px] tracking-[-0.5px] text-[#D9E3EA] text-center">
            One product, unlimited solutions
          </h1>
          <p className="p-[10px] text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] text-center md:w-[768px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-evenly">
        <div className="flex flex-col gap-[10px] p-[10px]">
          <h3 className="text-[#5D5DFF] leading-[30px] tracking-[0.25px] text-[20px] font-[400]">
            More speed. Less spend
          </h3>
          <h1 className="text-[#D9E3EA] font-[700] text-[32px] leading-[42px] tracking-[-0.25px]">
            Keep projects on schedule
          </h1>
          <p className="text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Duis aute irure dolor in
              reprehenderit
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Excepteur sint occaecat{" "}
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Amet consectetur
              adipiscing elit
            </li>
          </ul>
        </div>
        <img
          className="w-[310px] h-[310px] md:w-[540px] md:h-[405px]"
          src="./public/Img1.png"
        />
      </div>
      <div className="flex flex-col mt-[40px] items-center lg:flex-row justify-evenly">
        <img
          className="w-[310px] h-[310px] md:w-[540px] md:h-[405px]"
          src="./public/Img1.png"
        />
        <div className="flex flex-col gap-[10px] p-[10px]">
          <h3 className="text-[#5D5DFF] leading-[30px] tracking-[0.25px] text-[20px] font-[400]">
            More speed. Less spend
          </h3>
          <h1 className="text-[#D9E3EA] font-[700] text-[32px] leading-[42px] tracking-[-0.25px]">
            Keep projects on schedule
          </h1>
          <p className="text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Duis aute irure dolor in
              reprehenderit
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Excepteur sint occaecat{" "}
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Amet consectetur
              adipiscing elit
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-[40px] items-center lg:flex-row justify-evenly">
        <div className="flex flex-col gap-[10px] p-[10px]">
          <h3 className="text-[#5D5DFF] leading-[30px] tracking-[0.25px] text-[20px] font-[400]">
            More speed. Less spend
          </h3>
          <h1 className="text-[#D9E3EA] font-[700] text-[32px] leading-[42px] tracking-[-0.25px]">
            Keep projects on schedule
          </h1>
          <p className="text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Duis aute irure dolor in
              reprehenderit
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Excepteur sint occaecat{" "}
            </li>
            <li className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px]">
              <span className="text-[#48BB78]">✓</span> Amet consectetur
              adipiscing elit
            </li>
          </ul>
        </div>
        <img
          className="w-[310px] h-[310px] md:w-[540px] md:h-[405px]"
          src="./public/Img1.png"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="p-[10px] font-[800] text-[42px] leading-[62px] tracking-[-0.5px] text-[#D9E3EA] text-center">
          Don't take our word for it
        </h1>
        <p className="p-[10px] text-[#9BA9B4] font-[400] text-[20px] leading-[30px] tracking-[-0.25px] text-center md:w-[768px]">
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[15px] lg:flex-row gao-20px justify-center">
        <Card2 img="./public/User.png"/>
        <Card2 img="./public/User2.png"/>
        <Card2 img="./public/User3.png"/>
      </div>
      <div className="flex justify-center mt-[30px]">
      <div className="md:flex items-center w-[1104px] py-[20px] bg-[#5D5DFF] justify-evenly md:h-[206px]">
        <div className="text-center flex flex-col gap-[10px] md:text-start">
          <h1 className="text-[#FFFFFF] font-[700] text-[32px] leading-[42px] tracking-[-0.25px]">Stay in the loop</h1>
          <p className="text-[#E2E1FF] tracking-[-0.25px] leading-[27px] text-[18px] font-[400]">Join our newsletter to get top news before anyone else.</p>
        </div>
        <div className="flex flex-col items-center gap-[10px] mt-[20px] md:flex-row">
          <input type="text" className="w-[300px] h-[48px] border-solid border-[1px] border-[#8D8DFF] p-[10px] bg-[#4B4ACF] font-[400] text-[16px] leading-[24px] tracking-[-0.25px] rounded-[2px] md:w-[320px]" placeholder="Your best email…" />
          <Btn uz="139px" hg="48px" bg="white"><span className="text-[#5D5DFF]">Subscribe</span></Btn>
        </div>
      </div>
      </div>
      <Footer/>
      <div className="flex flex-col items-center gap-[15px] p-[10px] md:flex-row justify-around">
        <h1 className="text-[#9BA9B4]">Made by <span className="text-white font-[500px]">Cruip</span>. All right reserved</h1>
        <img src="./public/Links.png"/>
      </div>
    </div>
  );
}
