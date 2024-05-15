
import { useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BurgerState } from "./Layout";

export default function Personal() {
    const location = useLocation().pathname
    const [, setBurger] = useContext(BurgerState)

    useEffect(() => {
        setBurger(false)
    }, [])

    return (
        <div className="w-[100%] h-[100%] pt-[32px] px-[28px]">
            <p className=" font-monserat font-[500] text-[12px] leading-[14px] mb-[35px]">Добро пожаловать, Асан!</p>
            <div className="w-[100%] h-[100%] flex justify-between gap-[28px]">
                <div className="bg-[white] min-w-[305px] max-w-[305px] rounded-[10px] flex flex-col shadow-[0px_4px_4px_0px_#0000004D]">
                    <div className=" font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Навигация</div>
                    <Link to="/personalArea" className={`w-[100%] min-h-[70px] flex items-center px-[39px] border-b border-solid border-b-[#F0F1F5] hover:text-[#FFC300] duration-200 ${location == "/personalArea" ? "text-[#FFC300]" : ""} ${location === "/personalArea" ? "text-[#FFC300]" : ""}`}>Личный кабинет</Link>
                    <Link to="/personalArea/usersList" className={`w-[100%] min-h-[70px] flex items-center px-[39px] border-b border-solid border-b-[#F0F1F5] hover:text-[#FFC300] duration-200 ${location == "/usersList" ? "text-[#FFC300]" : ""} ${location === "/personalArea/usersList" ? "text-[#FFC300]" : ""}`}>Список пользователей</Link>
                    <Link to="/personalArea/ivite" className={`w-[100%] min-h-[70px] flex items-center px-[39px] border-b border-solid border-b-[#F0F1F5] hover:text-[#FFC300] duration-200 ${location == "/invite" ? "text-[#FFC300]" : ""} ${location === "/personalArea/ivite" ? "text-[#FFC300]" : ""}`}>Пригласить участников</Link>
                </div>
                <div className="max-w-[916px] w-[100%]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}