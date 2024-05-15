
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalAlert from "../UI/ModalAlert";

export default function index() {
    const [text, setText] = useState("")
    const [all, setAll] = useState(false)
    const [count, setCount] = useState(0)
    const [bell, setBell] = useState(0)

    useEffect(() => {
        setCount(4)
        setBell(4)
    }, [])

    return (
        <header className="bg-[#161C2D] w-full h-[100px] min-h-[100px] max-h-[100px] flex items-center gap-4 pr-8">
            <div className="relative ml-auto">
                <ModalAlert
                    clickTime={true}
                    close={false}
                    width="w-full"
                    event={
                        <label htmlFor="search" className="bg-[#05070B] w-[616px] h-14 rounded-[32px] px-[22px] flex items-center gap-4 cursor-pointer">
                            <svg width="17" height="17" viewBox="0 0 17 17">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 1.49941C5.54131 1.49941 4.14236 2.07887 3.11091 3.11032C2.07946 4.14177 1.5 5.54072 1.5 6.99941C1.5 8.4581 2.07946 9.85705 3.11091 10.8885C4.14236 11.9199 5.54131 12.4994 7 12.4994C8.45869 12.4994 9.85764 11.9199 10.8891 10.8885C11.9205 9.85705 12.5 8.4581 12.5 6.99941C12.5 5.54072 11.9205 4.14177 10.8891 3.11032C9.85764 2.07887 8.45869 1.49941 7 1.49941ZM1.61595e-08 6.99941C9.44369e-05 5.88008 0.268612 4.77709 0.783029 3.78297C1.29745 2.78885 2.04276 1.93259 2.95645 1.28601C3.87015 0.639426 4.92557 0.221384 6.0342 0.0669481C7.14282 -0.0874879 8.27232 0.0261854 9.32794 0.398433C10.3836 0.77068 11.3345 1.39065 12.101 2.20633C12.8676 3.02201 13.4273 4.00961 13.7333 5.0863C14.0393 6.16299 14.0827 7.29736 13.8597 8.39427C13.6368 9.49117 13.154 10.5186 12.452 11.3904L15.78 14.7194C15.8537 14.7881 15.9128 14.8709 15.9538 14.9629C15.9948 15.0549 16.0168 15.1542 16.0186 15.2549C16.0204 15.3556 16.0018 15.4556 15.9641 15.549C15.9264 15.6424 15.8703 15.7272 15.799 15.7984C15.7278 15.8697 15.643 15.9258 15.5496 15.9635C15.4562 16.0013 15.3562 16.0198 15.2555 16.018C15.1548 16.0162 15.0555 15.9942 14.9635 15.9532C14.8715 15.9122 14.7887 15.8531 14.72 15.7794L11.391 12.4514C10.3625 13.2798 9.12074 13.8004 7.80901 13.953C6.49727 14.1056 5.16912 13.8841 3.97795 13.3139C2.78677 12.7438 1.78117 11.8484 1.07727 10.731C0.373379 9.61366 -8.9698e-05 8.31999 1.61595e-08 6.99941Z" fill="#B3B3B3" />
                            </svg>
                            <input type="text" placeholder="Искать..." id="search" autoComplete="off" className="w-full outline-none bg-transparent selection:bg-[#FFC30080] font-monserat font-normal text-sm text-white placeholder:text-[#B3B3B3]" value={text} onChange={(e: any) => setText(e.target.value)} />
                            <button className="w-5 min-w-5 max-w-5 h-5 flex items-center justify-center disabled:opacity-0 bg-[#ffffff24] rounded-full" onClick={() => setText("")} disabled={!text}>
                                <svg width="8" height="8" viewBox="0 0 8 8">
                                    <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="black" />
                                </svg>
                            </button>
                        </label>
                    }>
                    <div className="bg-white rounded-[10px] shadow-[0px_4px_13px_0px_#00000040] py-3.5 px-5">
                        <p className="font-monserat font-normal text-xs text-[#848484] mb-3">Найдено : 4</p>
                        <div>
                            <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                <div>
                                    <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                    <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                <div>
                                    <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                    <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                <div>
                                    <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                    <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                </div>
                            </div>
                            {
                                all
                                &&
                                <>
                                    <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                        <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                        <div>
                                            <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                            <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                        <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                        <div>
                                            <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                            <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3.5 border-b border-solid border-[#D9D9D9] px-3 py-1.5">
                                        <img src="/assets/img/profile.png" className="w-[38px] h-[38px] rounded-full object-cover" />
                                        <div>
                                            <p className=" font-monserat font-medium text-base text-black">Асан Асанов</p>
                                            <p className=" font-monserat font-normal text-xs">Менеджер</p>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <button className="text-base_yellow_color font-monserat font-medium text-sm px-[42px] py-[9px] rounded-[10px] border border-solid border-base_yellow mx-auto flex mt-4" onClick={() => setAll(prev => !prev)}>{all ? "Скрыть" : "Показать все"}</button>
                    </div>
                </ModalAlert>
            </div>
            <div className="bg-[#05070B] rounded-full flex items-center justify-center w-14 h-14 cursor-pointer relative">
                <svg width="17" height="19" viewBox="0 0 17 19">
                    <path d="M16.375 14.8327V15.666H0.625V14.8327L2.375 13.166V8.16602C2.375 5.58268 4.15125 3.30768 6.75 2.57435V2.33268C6.75 1.89065 6.93437 1.46673 7.26256 1.15417C7.59075 0.84161 8.03587 0.666016 8.5 0.666016C8.96413 0.666016 9.40925 0.84161 9.73744 1.15417C10.0656 1.46673 10.25 1.89065 10.25 2.33268V2.57435C12.8488 3.30768 14.625 5.58268 14.625 8.16602V13.166L16.375 14.8327ZM10.25 16.4993C10.25 16.9414 10.0656 17.3653 9.73744 17.6779C9.40925 17.9904 8.96413 18.166 8.5 18.166C8.03587 18.166 7.59075 17.9904 7.26256 17.6779C6.93437 17.3653 6.75 16.9414 6.75 16.4993" fill="#B3B3B3" />
                </svg>
                {
                    !!bell
                    &&
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#CC1108] flex items-center justify-center font-monserat font-medium text-xs text-white">{bell}</div>
                }
            </div>
            <Link to="/chat" className="bg-[#05070B] rounded-full flex items-center justify-center w-14 h-14 cursor-pointer relative">
                <svg width="18" height="15" viewBox="0 0 18 15">
                    <path d="M8.66649 0.181641C13.3332 0.181641 17.1513 3.11073 17.1513 6.7271C17.1513 10.3435 13.3332 13.2725 8.66649 13.2725C7.61437 13.2725 6.60467 13.1253 5.67134 12.8635C3.19376 14.9089 0.181641 14.9089 0.181641 14.9089C2.15861 13.0026 2.47255 11.718 2.51497 11.2271C1.07255 10.0571 0.181641 8.46982 0.181641 6.7271C0.181641 3.11073 3.99982 0.181641 8.66649 0.181641Z" fill="#B3B3B3" />
                </svg>
                {
                    !!count
                    &&
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#CC1108] flex items-center justify-center font-monserat font-medium text-xs text-white">{count}</div>
                }
            </Link>
            <div className="relative">
                <ModalAlert
                    close={true}
                    width="w-[200px]"
                    event={
                        <div className="flex items-center bg-[#05070B] rounded-[32px] h-14 px-1.5 relative cursor-pointer">
                            <img src="/assets/img/profile.png" className="w-11 h-11 rounded-full object-cover mr-4" />
                            <div className="flex flex-col mr-[25px]">
                                <p className="font-monserat font-medium text-sm text-white">Asana Asanova</p>
                                <p className=" font-monserat font-normal text-xs text-[#D9D9D9]">Администратор</p>
                            </div>
                            <svg width="13" height="8" viewBox="0 0 13 8" className="mr-2">
                                <path d="M2.02328 0.25L6.61328 4.58019L11.2033 0.25L12.6133 1.58962L6.61328 7.25L0.613281 1.58962L2.02328 0.25Z" fill="white" />
                            </svg>
                        </div>
                    }>
                    <>
                        <Link to="/personalArea" className="flex items-center rounded-t-base_radius gap-3.5 py-3 px-4 border-b border-solid border-b-[#D6D6D6] cursor-pointer overflow-hidden bg-white hover:bg-base_yellow duration-100 hover:fill-white fill-black hover:text-white">
                            <svg width="13" height="11" viewBox="0 0 13 11">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.8125 3.53571C0.8125 1.58299 2.44946 0 4.46875 0C6.48804 0 8.125 1.58299 8.125 3.53571C8.125 4.72041 7.52248 5.76902 6.59761 6.41061C7.94957 6.79123 8.9375 7.99833 8.9375 9.42857V10.2143L8.125 11L0.8125 11L0 10.2143V9.42857C0 7.99833 0.987934 6.79123 2.33989 6.41061C1.41502 5.76902 0.8125 4.72041 0.8125 3.53571ZM4.46875 1.57143C3.34692 1.57143 2.4375 2.45087 2.4375 3.53571C2.4375 4.62056 3.34692 5.5 4.46875 5.5C5.59058 5.5 6.5 4.62056 6.5 3.53571C6.5 2.45087 5.59058 1.57143 4.46875 1.57143ZM7.3125 9.42857C7.3125 8.5607 6.58496 7.85714 5.6875 7.85714H3.25C2.35254 7.85714 1.625 8.5607 1.625 9.42857H7.3125Z" className="fill-inherit" />
                                <path d="M12.1875 11H9.75L10.5625 10.2143V9.42857C10.5625 7.99833 9.57457 6.79123 8.22261 6.41061C9.14748 5.76902 9.75 4.72041 9.75 3.53571C9.75 1.99624 8.73258 0.686567 7.3125 0.201189C7.6937 0.070896 8.10391 0 8.53125 0C10.5505 0 12.1875 1.58299 12.1875 3.53571C12.1875 4.72041 11.585 5.76902 10.6601 6.41061C12.0121 6.79123 13 7.99833 13 9.42857V10.2143L12.1875 11Z" className="fill-inherit" />
                            </svg>
                            <p className="font-monserat font-medium text-sm text-inherit">Личный кабинет</p>
                        </Link>
                        <div className="flex items-center rounded-b-base_radius gap-3.5 py-3 px-4 border-b border-solid border-b-[#D6D6D6] cursor-pointer overflow-hidden bg-white hover:bg-base_yellow duration-100 hover:fill-white fill-black hover:text-white">
                            <svg width="10" height="12" viewBox="0 0 10 12">
                                <path d="M8.68699 1.5V0.75L7.96308 0H0.723916L0 0.75V11.25L0.723916 12H7.96308L8.68699 11.25V10.5H1.44783V1.5H8.68699Z" className="fill-inherit" />
                                <path d="M3.67101 5.25V6.75H7.81756L6.00339 8.62954L7.02716 9.6902L10 6.61025V5.54959L7.02716 2.46964L6.00339 3.5303L7.66329 5.25L3.67101 5.25Z" className="fill-inherit" />
                            </svg>
                            <p className="font-monserat font-medium text-sm text-inherit">Выйти</p>
                        </div>
                    </>
                </ModalAlert>
            </div>
        </header>
    );
}
