export default function Btn({children , uz , bg , hg}){
    return <div>
        <button style={{width: uz, background:bg , height: hg}} className="text-[white] rounded-[2px]">{children}</button>
    </div>
}