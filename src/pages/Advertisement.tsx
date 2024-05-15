
import { useState } from "react";
import AdvertisementAdd from "./AdvertisementAdd";
import AdvertisementHistory from "./AdvertisementHistory";

export default function Advertisement() {
    const [state, setState] = useState({
        x: "0",
    })
    const [ochered, setOchered] = useState(false)

    const handle__Link = (e: any) => {
        setState({
            x: e.target.getAttribute("date-x")
        })
        setOchered(prev => !prev)
    }

    return (
        <div className="w-[100%] h-[100%] py-[80px] px-[28px] overflow-y-auto">
            <div className="rounded-t-[20px] w-[100%] h-[42px] bg-[#D9D9D9] flex items-center justify-between relative overflow-hidden shadow-[0px_4px_4px_0px_#0000004D]">
                <div className="fuck absolute top-[0] left-[0] bg-[white] w-[50%] h-[100%] rounded-t-[18px] duration-200" style={{ left: state.x }}></div>
                <div onClick={handle__Link} date-x="0" className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Объявления</div>
                <div onClick={handle__Link} date-x="50%" className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">История отправки</div>
            </div>
            {
                !ochered
                    ?
                    <AdvertisementAdd />
                    :
                    <AdvertisementHistory />
            }
        </div>
    );
}

