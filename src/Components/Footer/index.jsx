export default function Footer() {
  return (
    <div className="p-[10px] md:flex justify-around">
      <div className="start">
        <img src="./public/Logo.png" />
        <p className="text-[#9BA9B4] font-[400] text-[16px] leading-[24px] tracking-[-0.25px] mt-[10px] md:w-[352px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="flex flex-col gap-[20px] md:flex-row md:gap-[30px]">
        <ul>
            <span className="font-[500] text-[14px] leading-[22px] text-[#D9E3EA]">Products</span>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Web Studio</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">DynamicBox Flex</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Programming Forms</li>
        </ul>
        <ul>
            <span className="font-[500] text-[14px] leading-[22px] text-[#D9E3EA]">Resources</span>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Nostrud exercitation</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Visual mockups</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Nostrud exercitation</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Visual mockups</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Nostrud exercitation</li>
        </ul>
        <ul>
            <span className="font-[500] text-[14px] leading-[22px] text-[#D9E3EA]">Company</span>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Consectetur adipiscing</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Labore et dolore</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Consectetur adipiscing</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Labore et dolore</li>
            <li className="text-[#9BA9B4] font-[400] text-[14px] leading-[22px]">Consectetur adipiscing</li>
        </ul>
      </div>
    </div>
  );
}
