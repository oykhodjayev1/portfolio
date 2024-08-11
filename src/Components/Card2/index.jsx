export default function Card2({img}){
    return <div className="bg-[#25282C] p-[20px] h-[370px] flex flex-col gap-[30px] md:w-[352px] md:h-[339px]">
        <img className="w-[60px] h-[48px]" src={img}/>
        <p className="text-[#9BA9B4] font-[400] text-[18px] leading-[27px] tracking-[-0.25px] md:w-[304px]">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
        <div>
            <img className="mb-[15px]" src="./public/Line2.png"/>
            <a className="text-white" href="">Anastasia Dan / <span className="text-[#5D5DFF]">UX Board</span></a>
        </div>
    </div>
}