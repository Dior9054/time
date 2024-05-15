import { useContext, useEffect, useState } from "react";
import { BurgerState } from "./Layout";

export default function Chat() {
    const [burger, setBurger] = useContext(BurgerState)
    const date = [0, 0, 0, 0, 0, 0]
    const [state, setState] = useState(false)
    const [contentBody, setContentBody] = useState(burger)
    // const date = [0]

    useEffect(() => {
        setBurger(false)
    }, [])

    useEffect(() => {
        setContentBody(burger)
    }, [burger])

    return (
        <div className="py-[80px] px-[28px] w-[100%] flex gap-[28px]">
            <div className="w-[100%] min-w-[419px] max-w-[419px] rounded-[10px] bg-[white] shadow-[0px_4px_4px_0px_#00000040] relative pb-[170px]">
                <div className="text-black font-monserat font-[500] text-[22px] leading-[26px] p-[29px]">Все чаты</div>
                <div className="mx-[21px] border border-solid border-[#D9D9D9] rounded-[32px] px-[21px] py-[15px] flex items-center gap-[10px] mb-[25px]">
                    <input type="text" placeholder="Найти" className="w-[100%] outline-none font-monserat font-[400] text-[13px] leading-[15px] text-[#434343] placeholder:text-[#434343]" />
                    <svg width="17" height="17" viewBox="0 0 17 17" className="cursor-pointer">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 1.49941C5.54131 1.49941 4.14236 2.07887 3.11091 3.11032C2.07946 4.14177 1.5 5.54072 1.5 6.99941C1.5 8.4581 2.07946 9.85705 3.11091 10.8885C4.14236 11.9199 5.54131 12.4994 7 12.4994C8.45869 12.4994 9.85764 11.9199 10.8891 10.8885C11.9205 9.85705 12.5 8.4581 12.5 6.99941C12.5 5.54072 11.9205 4.14177 10.8891 3.11032C9.85764 2.07887 8.45869 1.49941 7 1.49941ZM1.61595e-08 6.99941C9.44369e-05 5.88008 0.268612 4.77709 0.783029 3.78297C1.29745 2.78885 2.04276 1.93259 2.95645 1.28601C3.87015 0.639426 4.92557 0.221384 6.0342 0.0669481C7.14282 -0.0874879 8.27232 0.0261854 9.32794 0.398433C10.3836 0.77068 11.3345 1.39065 12.101 2.20633C12.8676 3.02201 13.4273 4.00961 13.7333 5.0863C14.0393 6.16299 14.0827 7.29736 13.8597 8.39427C13.6368 9.49117 13.154 10.5186 12.452 11.3904L15.78 14.7194C15.8537 14.7881 15.9128 14.8709 15.9538 14.9629C15.9948 15.0549 16.0168 15.1542 16.0186 15.2549C16.0204 15.3556 16.0018 15.4556 15.9641 15.549C15.9264 15.6424 15.8703 15.7272 15.799 15.7984C15.7278 15.8697 15.643 15.9258 15.5496 15.9635C15.4562 16.0013 15.3562 16.0198 15.2555 16.018C15.1548 16.0162 15.0555 15.9942 14.9635 15.9532C14.8715 15.9122 14.7887 15.8531 14.72 15.7794L11.391 12.4514C10.3625 13.2798 9.12074 13.8004 7.80901 13.953C6.49727 14.1056 5.16912 13.8841 3.97795 13.3139C2.78677 12.7438 1.78117 11.8484 1.07727 10.731C0.373379 9.61366 -8.9698e-05 8.31999 1.61595e-08 6.99941Z" fill="#434343" />
                    </svg>
                </div>
                <div className="flex flex-col px-[21px]">
                    {
                        date.map((item, index) => (
                            <div key={index} className="flex justify-start items-center gap-[23px] border border-solid border-[transparent] hover:border-[#8A2BE2] cursor-pointer duration-200 p-[9px] rounded-[10px]">
                                <div className="min-w-[52px] max-w-[52px] w-[100%] min-h-[52px] max-h-[52px] h-[100%] relative">
                                    <img src="/assets/img/profile.png" className="w-[100%] h-[100%] object-cover rounded-[50%]" />
                                    <div className="w-[9px] h-[9px] rounded-[50%] bg-[#33FF00] absolute bottom-[5px] right-[2px]"></div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-monserat font-[500] text-[15px] leading-[19px] text-[#000000]">Асан</p>
                                    <p className=" font-monserat font-[400] text-[13px] text-[#8A8787]">Привет как дела?</p>
                                </div>
                                <div className=" ml-auto self-start flex flex-col gap-[11px]">
                                    <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:31</p>
                                    <div className="w-[20px] h-[20px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center font-monserat font-[500] text-[12px] leading-[19px] text-[#FFFFFF]">{item}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="min-w-[54px] max-w-[54px] w-[100%] min-h-[54px] max-h-[54px] h-[100%] flex items-center justify-center bg-[#8A2BE2] rounded-[50%] cursor-pointer absolute bottom-[76px] right-[21px]">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                        <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="bg-[white] rounded-[10px] w-[100%] shadow-[0px_4px_5px_0px_#00000040] flex flex-col">
                <div className="flex items-center gap-[14px] shadow-[1px_0px_5px_0px_#00000040] rounded-t-[10px] px-[38px] py-[9px]">
                    <div className="flex items-center gap-[14px] cursor-pointer" onClick={() => setState(true)}>
                        <img src="/assets/img/profile.png" className="w-[36px] h-[36px] rounded-[50%] object-cover" />
                        <div className="flex flex-col gap-[2px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#000000]">Асан</p>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[7px] h-[7px] rounded-[50%] bg-[#33FF00]"></div>
                                <p className=" font-monserat font-[400] text-[12px] leading-[14px] text-[#8A8787]">Онлайн</p>
                            </div>
                        </div>
                    </div>
                    <svg width="5" height="17" viewBox="0 0 5 17" className=" ml-auto cursor-pointer">
                        <path d="M2.01536 12.2527C2.54987 12.2527 3.06248 12.4679 3.44043 12.8508C3.81839 13.2338 4.03072 13.7532 4.03072 14.2948C4.03072 14.8364 3.81839 15.3559 3.44043 15.7388C3.06248 16.1218 2.54987 16.337 2.01536 16.337C1.48085 16.337 0.968239 16.1218 0.590285 15.7388C0.212332 15.3559 0 14.8364 0 14.2948C0 13.7532 0.212332 13.2338 0.590285 12.8508C0.968239 12.4679 1.48085 12.2527 2.01536 12.2527ZM2.01536 6.12636C2.54987 6.12636 3.06248 6.34151 3.44043 6.72448C3.81839 7.10745 4.03072 7.62687 4.03072 8.16848C4.03072 8.71008 3.81839 9.2295 3.44043 9.61247C3.06248 9.99545 2.54987 10.2106 2.01536 10.2106C1.48085 10.2106 0.968239 9.99545 0.590285 9.61247C0.212332 9.2295 0 8.71008 0 8.16848C0 7.62687 0.212332 7.10745 0.590285 6.72448C0.968239 6.34151 1.48085 6.12636 2.01536 6.12636ZM2.01536 0C2.54987 0 3.06248 0.215151 3.44043 0.598123C3.81839 0.981095 4.03072 1.50052 4.03072 2.04212C4.03072 2.58372 3.81839 3.10314 3.44043 3.48612C3.06248 3.86909 2.54987 4.08424 2.01536 4.08424C1.48085 4.08424 0.968239 3.86909 0.590285 3.48612C0.212332 3.10314 0 2.58372 0 2.04212C0 1.50052 0.212332 0.981095 0.590285 0.598123C0.968239 0.215151 1.48085 0 2.01536 0Z" fill="#05070B" />
                    </svg>
                </div>
                <div className={`w-[100%] h-[632px] no_scroll mx-auto py-[33px] flex flex-col overflow-x-hidden overflow-y-auto gap-[34px] duration-200 ${!contentBody ? "max-w-[82%]" : "max-w-[92%]"}`}>

                    <div className="font-monserat font-[500] text-[13px] leading-[15px] py-[8px] px-[20px] border border-solid border-[#8A2BE2] rounded-[32px] w-[max-content] mx-auto">Вчера</div>

                    <div className="flex items-start gap-[16px]">
                        <img src="/assets/img/profile.png" className="w-[36px] h-[36px] object-cover rounded-[50%]" />
                        <div className="flex flex-col gap-[9px] mt-[7px]">
                            <div className="flex items-center gap-[17px]">
                                <p className="font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Асан</p>
                                <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:31</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="relative cursor-pointer py-[10px] px-[11px] pl-[24px] he_border-bg">
                                    {/* <svg width="249" height="38" viewBox="0 0 249 38" fill="none" className=" absolute top-[0] left-[0]">
                                        <path d="M9.89012 9.04377L2.13379 1.05628H2.5647C6.93997 0.861322 9.39301 1.25124 13.7683 1.05628H44.3627H105.982H175.789H201.644H213.709L226.206 1.05628L238.271 1.05628C246.158 0.778872 248.137 3.41065 247.751 12.0391V27.0156C247.897 33.1493 246.124 35.1223 240.856 37H77.5426H16.3537C11.4361 34.9636 10.3055 33.0933 9.89012 29.0125V9.04377Z" stroke="#D9D9D9" />
                                    </svg> */}
                                    <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000]">Я отправил отчет вам на почту</div>
                                </div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center gap-[4px] ml-[10px]">
                                <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000] py-[10px] px-[15px] border border-solid border-[#D9D9D9] rounded-[10px]">Вечером отправлю по проекту SunPlace</div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse items-start gap-[16px]">
                        <img src="/assets/img/nasa__image.png" className="w-[36px] h-[36px] object-cover rounded-[50%]" />
                        <div className="flex flex-col items-end gap-[9px] mt-[7px]">
                            <div className="flex flex-row-reverse items-center gap-[17px]">
                                <p className="font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Вы</p>
                                <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:35</p>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-[10px]">
                                <div className="relative cursor-pointer py-[10px] px-[11px] pr-[24px] i_border-bg">
                                    <div className="font-monserat font-[500] text-[13px] leading-[15px] text-[white] relative z-[2]">Я отправил отчет вам на почту</div>
                                </div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-[4px] mr-[10px]">
                                <div className="font-monserat font-[500] text-[13px] leading-[15px] bg-[#8A2BE2] text-[white] py-[10px] px-[15px] border border-solid border-[#D9D9D9] rounded-[10px]">Вечером отправлю по проекту SunPlace</div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-[16px]">
                        <img src="/assets/img/profile.png" className="w-[36px] h-[36px] object-cover rounded-[50%]" />
                        <div className="flex flex-col gap-[9px] mt-[7px]">
                            <div className="flex items-center gap-[17px]">
                                <p className="font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Асан</p>
                                <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:31</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="relative cursor-pointer py-[10px] px-[11px] pl-[24px] he_border-bg">
                                    {/* <svg width="249" height="38" viewBox="0 0 249 38" fill="none" className=" absolute top-[0] left-[0]">
                                        <path d="M9.89012 9.04377L2.13379 1.05628H2.5647C6.93997 0.861322 9.39301 1.25124 13.7683 1.05628H44.3627H105.982H175.789H201.644H213.709L226.206 1.05628L238.271 1.05628C246.158 0.778872 248.137 3.41065 247.751 12.0391V27.0156C247.897 33.1493 246.124 35.1223 240.856 37H77.5426H16.3537C11.4361 34.9636 10.3055 33.0933 9.89012 29.0125V9.04377Z" stroke="#D9D9D9" />
                                    </svg> */}
                                    <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000]">OK</div>
                                </div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center gap-[4px] ml-[10px]">
                                <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000] py-[10px] px-[15px] border border-solid border-[#D9D9D9] rounded-[10px]">Вечером отправлю по проекту SunPlace</div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-monserat font-[500] text-[13px] leading-[15px] py-[8px] px-[20px] border border-solid border-[#8A2BE2] rounded-[32px] w-[max-content] mx-auto">Сегодня</div>

                    <div className="flex flex-row-reverse items-start gap-[16px]">
                        <img src="/assets/img/nasa__image.png" className="w-[36px] h-[36px] object-cover rounded-[50%]" />
                        <div className="flex flex-col items-end gap-[9px] mt-[7px]">
                            <div className="flex flex-row-reverse items-center gap-[17px]">
                                <p className="font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Вы</p>
                                <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:35</p>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-[10px]">
                                <div className="relative cursor-pointer py-[10px] px-[11px] pr-[24px] i_border-bg">
                                    <div className="font-monserat font-[500] text-[13px] leading-[15px] text-[white] relative z-[2]">Я отправил отчет вам на почту</div>
                                </div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse items-center gap-[4px] mr-[10px]">
                                <div className="font-monserat font-[500] text-[13px] leading-[15px] bg-[#8A2BE2] text-[white] py-[10px] px-[15px] border border-solid border-[#D9D9D9] rounded-[10px]">Вечером отправлю по проекту SunPlace</div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-[16px]">
                        <img src="/assets/img/profile.png" className="w-[36px] h-[36px] object-cover rounded-[50%]" />
                        <div className="flex flex-col gap-[9px] mt-[7px]">
                            <div className="flex items-center gap-[17px]">
                                <p className="font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Асан</p>
                                <p className=" font-monserat font-[400] text-[10px] leading-[12px] text-[#8A8787]">18:31</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="relative cursor-pointer py-[10px] px-[11px] pl-[24px] he_border-bg">
                                    {/* <svg width="249" height="38" viewBox="0 0 249 38" fill="none" className=" absolute top-[0] left-[0]">
                                        <path d="M9.89012 9.04377L2.13379 1.05628H2.5647C6.93997 0.861322 9.39301 1.25124 13.7683 1.05628H44.3627H105.982H175.789H201.644H213.709L226.206 1.05628L238.271 1.05628C246.158 0.778872 248.137 3.41065 247.751 12.0391V27.0156C247.897 33.1493 246.124 35.1223 240.856 37H77.5426H16.3537C11.4361 34.9636 10.3055 33.0933 9.89012 29.0125V9.04377Z" stroke="#D9D9D9" />
                                    </svg> */}
                                    <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000]">Я отправил отчет вам на почту</div>
                                </div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center gap-[4px] ml-[10px]">
                                <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#000000] py-[10px] px-[15px] border border-solid border-[#D9D9D9] rounded-[10px]">Вечером отправлю по проекту SunPlace</div>
                                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#8A2BE2] flex items-center justify-center self-end">
                                    <svg width="8" height="8" viewBox="0 0 8 8">
                                        <path d="M6.26864 2.32403C6.35556 2.406 6.40629 2.51904 6.40968 2.6383C6.41306 2.75757 6.36882 2.87329 6.28669 2.96003L3.73027 5.66003C3.68883 5.70371 3.63904 5.73867 3.58384 5.76283C3.52864 5.78699 3.46914 5.79987 3.40886 5.80071C3.34858 5.80155 3.28874 5.79033 3.23288 5.76771C3.17703 5.7451 3.12628 5.71154 3.08364 5.66903L1.73024 4.31903C1.65055 4.23373 1.60717 4.1209 1.60923 4.00432C1.61129 3.88774 1.65864 3.77651 1.7413 3.69406C1.82395 3.61161 1.93546 3.56438 2.05234 3.56233C2.16921 3.56027 2.28232 3.60354 2.36784 3.68303L3.39342 4.70543L5.63104 2.34203C5.71321 2.25533 5.82654 2.20473 5.94611 2.20135C6.06567 2.19798 6.18169 2.2421 6.26864 2.32403Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex items-center gap-[13px] mx-[43px] px-[25px] py-[13px] border border-solid border-[#D9D9D9] rounded-[10px] mb-[19px] mt-auto">
                    <svg width="21" height="21" viewBox="0 0 21 21">
                        <path d="M5.49239 8.45605C5.49239 8.74199 5.60643 9.01622 5.80941 9.2184C6.01239 9.42059 6.28769 9.53418 6.57475 9.53418C6.86181 9.53418 7.13711 9.42059 7.34009 9.2184C7.54307 9.01622 7.6571 8.74199 7.6571 8.45605C7.6571 8.17012 7.54307 7.89589 7.34009 7.69371C7.13711 7.49152 6.86181 7.37793 6.57475 7.37793C6.28769 7.37793 6.01239 7.49152 5.80941 7.69371C5.60643 7.89589 5.49239 8.17012 5.49239 8.45605ZM13.4297 8.45605C13.4297 8.74199 13.5437 9.01622 13.7467 9.2184C13.9497 9.42059 14.225 9.53418 14.512 9.53418C14.7991 9.53418 15.0744 9.42059 15.2774 9.2184C15.4803 9.01622 15.5944 8.74199 15.5944 8.45605C15.5944 8.17012 15.4803 7.89589 15.2774 7.69371C15.0744 7.49152 14.7991 7.37793 14.512 7.37793C14.225 7.37793 13.9497 7.49152 13.7467 7.69371C13.5437 7.89589 13.4297 8.17012 13.4297 8.45605ZM10.5434 0.4375C4.96475 0.4375 0.441406 4.94316 0.441406 10.5C0.441406 16.0568 4.96475 20.5625 10.5434 20.5625C16.122 20.5625 20.6454 16.0568 20.6454 10.5C20.6454 4.94316 16.122 0.4375 10.5434 0.4375ZM16.4738 16.4072C15.7026 17.1754 14.8052 17.7773 13.8062 18.1996C12.7757 18.6354 11.6776 18.8555 10.5434 18.8555C9.40916 18.8555 8.31103 18.6354 7.27828 18.1996C6.28087 17.78 5.37487 17.1713 4.61073 16.4072C3.83955 15.6391 3.23523 14.7451 2.81131 13.7501C2.37611 12.7236 2.15513 11.6298 2.15513 10.5C2.15513 9.37021 2.37611 8.27637 2.81357 7.24766C3.2348 6.25414 3.84594 5.35169 4.61298 4.59053C5.38416 3.82236 6.28161 3.22041 7.28053 2.79814C8.31102 2.36465 9.40916 2.14453 10.5434 2.14453C11.6776 2.14453 12.7757 2.36465 13.8085 2.80039C14.8059 3.21998 15.7119 3.82873 16.476 4.59277C17.2472 5.36094 17.8515 6.25488 18.2754 7.2499C18.7106 8.27637 18.9316 9.37021 18.9316 10.5C18.9316 11.6298 18.7106 12.7236 18.2732 13.7523C17.8525 14.7455 17.2412 15.6473 16.4738 16.4072ZM13.9708 10.9717H12.8862C12.7915 10.9717 12.7103 11.0436 12.7036 11.1379C12.6179 12.2497 11.6821 13.1279 10.5434 13.1279C9.40465 13.1279 8.46661 12.2497 8.38318 11.1379C8.37642 11.0436 8.29524 10.9717 8.20053 10.9717H7.11592C7.09146 10.9716 7.06724 10.9766 7.04474 10.9862C7.02225 10.9958 7.00195 11.0098 6.98507 11.0274C6.9682 11.0451 6.9551 11.066 6.94659 11.0888C6.93807 11.1117 6.93431 11.136 6.93553 11.1604C7.03475 13.0538 8.61544 14.5654 10.5434 14.5654C12.4713 14.5654 14.052 13.0538 14.1512 11.1604C14.1525 11.136 14.1487 11.1117 14.1402 11.0888C14.1317 11.066 14.1186 11.0451 14.1017 11.0274C14.0848 11.0098 14.0645 10.9958 14.042 10.9862C14.0195 10.9766 13.9953 10.9716 13.9708 10.9717Z" fill="#434343" />
                    </svg>
                    <input type="text" placeholder="Ваше сообщение" className="w-[100%] outline-none font-monserat font-[400] text-[13px] leading-[15px] text-[#434343] placeholder:text-[#434343]" />
                    <svg width="22" height="19" viewBox="0 0 22 19" className=" ml-auto cursor-pointer">
                        <path d="M0.859375 18.125L21.0633 9.5L0.859375 0.875V7.58333L15.2908 9.5L0.859375 11.4167V18.125Z" fill="#8A2BE2" />
                    </svg>
                </div>
            </div>

            {
                state
                &&
                <div className="min-w-[283px] max-w-[283px] w-[100%] rounded-[10px] animate_chat-profil bg-[white] shadow-[0px_4px_4px_0px_#00000040]">
                    <div className="flex items-center justify-between gap-[14px] shadow-[1px_0px_5px_0px_#00000040] rounded-t-[10px] px-[18px] py-[17px]">
                        <div className=" font-monserat font-[500] text-[15px] leading-[18px]">Данные контакта</div>
                        <button onClick={() => setState(false)}>
                            <svg width="15" height="14" viewBox="0 0 15 14">
                                <path d="M2.29113 14L0.886169 12.6L6.50603 7L0.886169 1.4L2.29113 0L7.91099 5.6L13.5309 0L14.9358 1.4L9.31596 7L14.9358 12.6L13.5309 14L7.91099 8.4L2.29113 14Z" fill="#222222" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-[31px] flex flex-col items-center">
                        <img src="/assets/img/profile.png" className="min-w-[186px] max-w-[186px] w-[100%] min-h-[186px] max-h-[186px] h-[100%] rounded-[50%] mb-[31px]" />
                        <h2 className=" font-monserat font-[500] text-[20px] leading-[24px] text-[#000000] mb-[13px]">Асан</h2>
                        <p className=" font-monserat font-[400] text-[15px] leading-[18px] text-[#8A8787]">evifeylar@gmail.com</p>
                    </div>
                    <div>
                        <div className="border-b border-solid border-b-[#B3B3B3] p-[14px]">
                            <p className=" font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] mb-[11px]">Роль</p>
                            <h3 className=" font-monserat font-[500] text-[13px] leading-[15px] text-[#05070B]">Менеджер</h3>
                        </div>
                        <div className="border-b border-solid border-b-[#B3B3B3] p-[14px]">
                            <p className=" font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] mb-[11px]">Департмент</p>
                            <h3 className=" font-monserat font-[500] text-[13px] leading-[15px] text-[#05070B]">-</h3>
                        </div>
                        <div className="border-b border-solid border-b-[#B3B3B3] p-[14px]">
                            <p className=" font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] mb-[11px]">Команда</p>
                            <h3 className=" font-monserat font-[500] text-[13px] leading-[15px] text-[#05070B]">-</h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

