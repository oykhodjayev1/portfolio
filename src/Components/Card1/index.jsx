export default function Card1({ img }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-[15px] md:w-[325px]">
        <img src={img} />
        <h3 className="font-[700] text-[24px] text-[#D9E3EA] leading-[34px] tracking-[-0.25px]
        text-center">Instant Features</h3>
        <p className="text-center text-[#9BA9B4] tracking-[-0.25px] leading-[27px] text-[18px] font-[400]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
        </p>
      </div>
    </div>
  );
}
