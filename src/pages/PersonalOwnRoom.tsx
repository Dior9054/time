
export default function PersonalOwnRoom() {
    return (
        <>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Навигация</div>
                <div className="flex py-[32px] px-[43px] justify-between items-center gap-[30px]">
                    <label htmlFor="profileImage" className="min-w-[203px] max-w-[203px] min-h-[203px] max-h-[203px] rounded-[50%] bg-[#D9D9D9] flex items-center justify-center cursor-pointer">
                        <svg width="19" height="23" viewBox="0 0 19 23">
                            <path d="M0.828125 22.6914H18.8281V20.1032H0.828125V22.6914ZM18.8281 8.45611H13.6853V0.691406H5.97098V8.45611H0.828125L9.82812 17.5149L18.8281 8.45611Z" fill="#686B6F" />
                        </svg>
                        <input type="file" id="profileImage" className="hidden" />
                    </label>
                    <div className="w-[100%] *:duration-200">
                        <div className="flex items-end justify-end gap-[28px] mb-[32px]">
                            <label htmlFor="password" className="w-[100%] max-w-[325px] duration-200">
                                <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Ваш пароль*</p>
                                <input type="password" id="password" className=" font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                            </label>
                            <button className=" font-monserat font-[500] text-[12px] leading-[14px] tracking-[0.75px] text-[#161C2D] py-[10px] max-w-[189px] w-[100%] border-[2px] border-solid border-[#161C2D] rounded-[10px]">сменить пароль</button>
                        </div>
                        <div className="flex items-end justify-end gap-[28px] mb-[32px]">
                            <label htmlFor="email" className="w-[100%] max-w-[325px] duration-200">
                                <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Ваша электронная почта*</p>
                                <input type="email" id="email" className=" font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                            </label>
                            <button className=" font-monserat font-[500] text-[12px] leading-[14px] tracking-[0.75px] text-[#161C2D] py-[10px] max-w-[189px] w-[100%] border-[2px] border-solid border-[#161C2D] rounded-[10px]">сменить пароль</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Персональные данные</div>
                <div className="flex py-[32px] px-[43px] flex-wrap items-center gap-[30px]">
                    <div className="flex w-[100%] gap-[54px]">
                        <label htmlFor="lastname" className="w-[100%] max-w-[325px] duration-200">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите фамилию*</p>
                            <input type="text" id="lastname" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </label>
                        <label htmlFor="name" className="w-[100%] max-w-[325px] duration-200">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите имя*</p>
                            <input type="text" id="name" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </label>
                    </div>
                    <div className="flex w-[100%] gap-[54px]">
                        <label htmlFor="surname" className="w-[100%] max-w-[325px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Ваше отчество</p>
                            <input type="text" id="surname" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </label>
                        <div className="w-[100%]">
                            <div className="w-[100%] max-w-[242px] duration-200">
                                <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите свой пол</p>
                                <div className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] cursor-pointer border-[#D6D6D6] w-[100%] h-[50px] outline-none flex items-center justify-between">
                                    Мужчина
                                    <svg width="14" height="9" viewBox="0 0 14 9">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9861 0.184105L13.5107 1.7106L7.04506 8.33715L0.511002 1.79505L2.01966 0.248851L7.0291 5.26446L11.9861 0.184105Z" fill="#686B6F" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end gap-[28px] mb-[32px] w-[100%] justify-start">
                        <label htmlFor="tel" className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Ваш номер телефона</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                    <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                    <svg width="10" height="7" viewBox="0 0 10 7">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                    </svg>
                                </button>
                                <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </label>
                        <button className=" font-monserat font-[500] text-[12px] leading-[14px] tracking-[0.75px] text-[#161C2D] py-[10px] max-w-[189px] w-[100%] border-[2px] border-solid border-[#161C2D] rounded-[10px]">сменить номер</button>
                    </div>
                    <div className="w-[100%] max-w-[325px] duration-200">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите имя*</p>
                        <div className="border border-solid border-[#D6D6D6] w-[max-content] flex items-center gap-[12px] py-[14px] px-[21px] rounded-[50px] cursor-pointer">
                            <svg width="22" height="22" viewBox="0 0 22 22">
                                <path d="M19.9871 9.20536H19.2487V9.16732H10.9987V12.834H16.1792C15.4234 14.9684 13.3926 16.5007 10.9987 16.5007C7.96132 16.5007 5.4987 14.038 5.4987 11.0007C5.4987 7.96328 7.96132 5.50065 10.9987 5.50065C12.4007 5.50065 13.6763 6.02957 14.6475 6.89353L17.2403 4.30073C15.6031 2.77494 13.4132 1.83398 10.9987 1.83398C5.93641 1.83398 1.83203 5.93836 1.83203 11.0007C1.83203 16.0629 5.93641 20.1673 10.9987 20.1673C16.061 20.1673 20.1654 16.0629 20.1654 11.0007C20.1654 10.386 20.1021 9.78607 19.9871 9.20536Z" fill="#FFC107" />
                                <path d="M2.89062 6.73403L5.90233 8.94273C6.71725 6.92515 8.69083 5.50065 11.0004 5.50065C12.4024 5.50065 13.678 6.02957 14.6492 6.89353L17.242 4.30073C15.6048 2.77494 13.4149 1.83398 11.0004 1.83398C7.47946 1.83398 4.42604 3.82178 2.89062 6.73403Z" fill="#FF3D00" />
                                <path d="M11.0005 20.166C13.3682 20.166 15.5196 19.2599 17.1463 17.7863L14.3092 15.3856C13.3579 16.109 12.1956 16.5003 11.0005 16.4993C8.61622 16.4993 6.59176 14.979 5.82909 12.8574L2.83984 15.1605C4.35693 18.1292 7.43784 20.166 11.0005 20.166Z" fill="#4CAF50" />
                                <path d="M19.9884 9.20406H19.25V9.16602H11V12.8327H16.1805C15.819 13.8485 15.1678 14.7362 14.3073 15.3861L14.3087 15.3851L17.1458 17.7859C16.945 17.9683 20.1667 15.5827 20.1667 10.9993C20.1667 10.3847 20.1034 9.78477 19.9884 9.20406Z" fill="#1976D2" />
                            </svg>
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#000000]">Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9] flex items-center gap-[10px]">
                    <p className="font-monserat font-[500] text-[18px] leading-[21px]">Активности</p>
                    <button className="w-[39px] h-[37px] rounded-[50px] bg-[#F0F1F5] flex items-center justify-center ml-auto">
                        <svg width="17" height="16" viewBox="0 0 17 16">
                            <path d="M16.0843 6.87682H9.58446V0.376953H7.41784V6.87682H0.917969V9.04345H7.41784V15.5433H9.58446V9.04345H16.0843V6.87682Z" fill="#686B6F" />
                        </svg>
                    </button>
                    <button className="w-[39px] h-[37px] rounded-[50px] bg-[#F0F1F5] flex items-center justify-center">
                        <svg width="17" height="16" viewBox="0 0 17 16">
                            <path d="M13.5136 0.373047C13.1762 0.373864 12.8422 0.441497 12.531 0.572045C12.2198 0.702592 11.9375 0.89347 11.7004 1.13367L1.83393 10.9999L1.79524 11.1952L1.11264 14.627L0.917969 15.543L1.83455 15.3483L5.26628 14.6657L5.46095 14.6264L15.3275 4.76018C15.5683 4.52352 15.7596 4.24127 15.8901 3.9299C16.0207 3.61852 16.0879 3.28426 16.0879 2.94661C16.0879 2.60897 16.0207 2.27471 15.8901 1.96333C15.7596 1.65195 15.5683 1.3697 15.3275 1.13304C15.0903 0.892884 14.8079 0.702079 14.4966 0.571637C14.1852 0.441195 13.8512 0.3737 13.5136 0.373047ZM13.5136 1.56233C13.8281 1.56233 14.1451 1.70585 14.4496 2.01097C15.0567 2.61747 15.0567 3.27576 14.4496 3.88288L14.0016 4.31155L12.1484 2.45898L12.5777 2.01097C12.8828 1.70585 13.1992 1.56233 13.5136 1.56233ZM11.2718 3.33691L13.1237 5.18947L5.57825 12.7345C5.1709 11.9375 4.52239 11.2894 3.72512 10.8826L11.2718 3.33691ZM2.92646 11.8972C3.29574 12.0457 3.63118 12.2674 3.91264 12.5489C4.1941 12.8303 4.41577 13.1658 4.56433 13.5351L2.51653 13.9444L2.92646 11.8972Z" fill="#686B6F" />
                        </svg>
                    </button>
                </div>
                <div>
                    <div className="px-[43px] py-[32px] flex gap-[20px]">
                        <div className="flex flex-col items-center gap-[17px]">
                            <img src="/assets/img/nasa__image.png" className="w-[52px] h-[52px] object-cover rounded-[50%]" />
                            <div className="flex flex-col items-center w-[6px] gap-[9px]">
                                <span className="min-w-[6px] max-w-[6px] min-h-[6px] max-h-[6px] rounded-[50%] bg-[#B3B3B3] block"></span>
                                <span className="bg-[#B3B3B3] block min-h-[100px] max-h-[100px] min-w-[1px] max-w-[1px]"></span>
                                <span className="min-w-[6px] max-w-[6px] min-h-[6px] max-h-[6px] rounded-[50%] bg-[#B3B3B3] block"></span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-[20px]">
                                <p className=" font-monserat font-[500] text-[20px] leading-[24px] mb-[6px] text-[#000000]">Веселые медведи</p>
                                <p className=" font-monserat font-[500] text-[11px] leading-[13px] text-[#8A8787]">04/04/2024 - Текущий</p>
                            </div>
                            <div className="mb-[20px]">
                                <p className=" font-monserat font-[500] text-[20px] leading-[24px] mb-[6px] text-[#000000]">Участник</p>
                                <p className=" font-monserat font-[500] text-[11px] leading-[13px] text-[#8A8787]">04/04/2024 - 14/04/2024</p>
                            </div>
                            <div className="mb-[20px]">
                                <p className=" font-monserat font-[500] text-[20px] leading-[24px] mb-[6px] text-[#000000]">Проекты :</p>
                                <ul>
                                    <li className=" font-monserat font-[400] text-[12px] leading-[13px] text-[#8A8787] list-disc list-inside">Озеленение города</li>
                                    <li className=" font-monserat font-[400] text-[12px] leading-[13px] text-[#8A8787] list-disc list-inside">Озеленение города</li>
                                </ul>
                            </div>
                            <div className="mb-[20px]">
                                <p className=" font-monserat font-[500] text-[20px] leading-[24px] mb-[6px] text-[#000000]">Капитан</p>
                                <p className=" font-monserat font-[500] text-[11px] leading-[13px] text-[#8A8787]">04/04/2024 - Текущий</p>
                            </div>
                            <div className="mb-[20px]">
                                <p className=" font-monserat font-[500] text-[20px] leading-[24px] mb-[6px] text-[#000000]">Проекты :</p>
                                <ul>
                                    <li className=" font-monserat font-[400] text-[12px] leading-[13px] text-[#8A8787] list-disc list-inside">Озеленение города</li>
                                    <li className=" font-monserat font-[400] text-[12px] leading-[13px] text-[#8A8787] list-disc list-inside">Озеленение города</li>
                                    <li className=" font-monserat font-[400] text-[12px] leading-[13px] text-[#8A8787] list-disc list-inside">Озеленение города</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px] justify-center cursor-pointer py-[16px] border-t-[2px] border-solid border-t-[#D9D9D9]">
                        Посмотреть все
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M11 1.5L6 6.5L1 1.5" stroke="#434343" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Сеансы</div>
                <div className="flex flex-wrap py-[32px] px-[43px] justify-between items-center gap-[30px]">
                    <div className="w-[100%] max-w-[274px] duration-200">
                        <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата регистрации</p>
                        <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                            <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                <svg width="25" height="22" viewBox="0 0 25 22">
                                    <path d="M21.4074 19.8V6.6H2.87545V19.8H21.4074ZM17.4363 0H20.0837V2.2H21.4074C22.1095 2.2 22.7829 2.43179 23.2794 2.84437C23.7759 3.25695 24.0548 3.81652 24.0548 4.4V19.8C24.0548 20.3835 23.7759 20.9431 23.2794 21.3556C22.7829 21.7682 22.1095 22 21.4074 22H2.87545C1.40613 22 0.228027 21.01 0.228027 19.8V4.4C0.228027 3.179 1.40613 2.2 2.87545 2.2H4.19916V0H6.84658V2.2H17.4363V0ZM10.8177 8.8H13.4651V12.1H17.4363V14.3H13.4651V17.6H10.8177V14.3H6.84658V12.1H10.8177V8.8Z" fill="#686B6F" />
                                </svg>
                            </label>
                            <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                        </div>
                    </div>
                    <div className="flex w-[100%] gap-[100px]">
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата последнего сеанса</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                    <svg width="25" height="22" viewBox="0 0 25 22">
                                        <path d="M21.4074 19.8V6.6H2.87545V19.8H21.4074ZM17.4363 0H20.0837V2.2H21.4074C22.1095 2.2 22.7829 2.43179 23.2794 2.84437C23.7759 3.25695 24.0548 3.81652 24.0548 4.4V19.8C24.0548 20.3835 23.7759 20.9431 23.2794 21.3556C22.7829 21.7682 22.1095 22 21.4074 22H2.87545C1.40613 22 0.228027 21.01 0.228027 19.8V4.4C0.228027 3.179 1.40613 2.2 2.87545 2.2H4.19916V0H6.84658V2.2H17.4363V0ZM10.8177 8.8H13.4651V12.1H17.4363V14.3H13.4651V17.6H10.8177V14.3H6.84658V12.1H10.8177V8.8Z" fill="#686B6F" />
                                    </svg>
                                </label>
                                <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Время</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                    <svg width="20" height="21" viewBox="0 0 20 21">
                                        <path d="M10 18.1953C12.1217 18.1953 14.1566 17.3525 15.6569 15.8522C17.1571 14.3519 18 12.317 18 10.1953C18 8.07358 17.1571 6.03875 15.6569 4.53846C14.1566 3.03817 12.1217 2.19531 10 2.19531C7.87827 2.19531 5.84344 3.03817 4.34315 4.53846C2.84285 6.03875 2 8.07358 2 10.1953C2 12.317 2.84285 14.3519 4.34315 15.8522C5.84344 17.3525 7.87827 18.1953 10 18.1953ZM10 0.195312C11.3132 0.195313 12.6136 0.45397 13.8268 0.956517C15.0401 1.45906 16.1425 2.19566 17.0711 3.12424C17.9997 4.05283 18.7362 5.15522 19.2388 6.36848C19.7413 7.58173 20 8.88209 20 10.1953C20 12.8475 18.9464 15.391 17.0711 17.2664C15.1957 19.1417 12.6522 20.1953 10 20.1953C4.47 20.1953 0 15.6953 0 10.1953C0 7.54315 1.05357 4.99961 2.92893 3.12424C4.8043 1.24888 7.34784 0.195313 10 0.195312ZM10.5 5.19531V10.4453L15 13.1153L14.25 14.3453L9 11.1953V5.19531H10.5Z" fill="#686B6F" />
                                    </svg>
                                </label>
                                <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] gap-[100px]">
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата последнего входа</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                    <svg width="25" height="22" viewBox="0 0 25 22">
                                        <path d="M21.4074 19.8V6.6H2.87545V19.8H21.4074ZM17.4363 0H20.0837V2.2H21.4074C22.1095 2.2 22.7829 2.43179 23.2794 2.84437C23.7759 3.25695 24.0548 3.81652 24.0548 4.4V19.8C24.0548 20.3835 23.7759 20.9431 23.2794 21.3556C22.7829 21.7682 22.1095 22 21.4074 22H2.87545C1.40613 22 0.228027 21.01 0.228027 19.8V4.4C0.228027 3.179 1.40613 2.2 2.87545 2.2H4.19916V0H6.84658V2.2H17.4363V0ZM10.8177 8.8H13.4651V12.1H17.4363V14.3H13.4651V17.6H10.8177V14.3H6.84658V12.1H10.8177V8.8Z" fill="#686B6F" />
                                    </svg>
                                </label>
                                <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Время</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                    <svg width="20" height="21" viewBox="0 0 20 21">
                                        <path d="M10 18.1953C12.1217 18.1953 14.1566 17.3525 15.6569 15.8522C17.1571 14.3519 18 12.317 18 10.1953C18 8.07358 17.1571 6.03875 15.6569 4.53846C14.1566 3.03817 12.1217 2.19531 10 2.19531C7.87827 2.19531 5.84344 3.03817 4.34315 4.53846C2.84285 6.03875 2 8.07358 2 10.1953C2 12.317 2.84285 14.3519 4.34315 15.8522C5.84344 17.3525 7.87827 18.1953 10 18.1953ZM10 0.195312C11.3132 0.195313 12.6136 0.45397 13.8268 0.956517C15.0401 1.45906 16.1425 2.19566 17.0711 3.12424C17.9997 4.05283 18.7362 5.15522 19.2388 6.36848C19.7413 7.58173 20 8.88209 20 10.1953C20 12.8475 18.9464 15.391 17.0711 17.2664C15.1957 19.1417 12.6522 20.1953 10 20.1953C4.47 20.1953 0 15.6953 0 10.1953C0 7.54315 1.05357 4.99961 2.92893 3.12424C4.8043 1.24888 7.34784 0.195313 10 0.195312ZM10.5 5.19531V10.4453L15 13.1153L14.25 14.3453L9 11.1953V5.19531H10.5Z" fill="#686B6F" />
                                    </svg>
                                </label>
                                <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Социальные сети</div>
                <div className="flex flex-wrap py-[32px] px-[43px] justify-between items-center">
                    <div className="flex w-[100%] gap-[90px]">
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/instagram.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/ticktok.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] gap-[90px]">
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/twitter.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/facebook.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] gap-[90px]">
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/yuotube.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end gap-[28px] mb-[32px] max-w-[274px] w-[100%] justify-start">
                            <div className="w-[100%]">
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px]">
                                    <button className="bg-[#F0F1F5] py-[15px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/svg/telegram.svg" className="w-[20px] h-[20px] object-cover" />
                                    </button>
                                    <input type="tel" id="tel" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[23px] pb-[32px]">
                <button className="bg-[#FCC100] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">Сохранить</button>
                <button className="bg-[#161C2D] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">отмена</button>
            </div>
        </>
    );
}
