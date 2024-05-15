
import { Link } from "react-router-dom";

export default function CommandAddOtchot() {
    return (
        <div>
            <div className="w-[100%] h-[max-content] bg-[white] rounded-b-[10px] relative shadow-[0px_4px_4px_0px_#0000004D]">
                <div className="py-[36px]">
                    <div className="mx-[33px] flex items-center gap-[10px] cursor-pointer">
                        <svg width="20" height="16" viewBox="0 0 20 16">
                            <rect width="19.4978" height="16" transform="translate(0.0566406)" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.29168 2H5.64425V5H2.29168L2.29168 2ZM0.0566406 2C0.0566406 0.89543 1.0573 0 2.29168 0H5.64425C6.87863 0 7.87929 0.895431 7.87929 2V5C7.87929 6.10457 6.87863 7 5.64425 7H2.29168C1.0573 7 0.0566406 6.10457 0.0566406 5V2ZM12.349 2H15.7016V5H12.349V2ZM10.114 2C10.114 0.89543 11.1146 0 12.349 0H15.7016C16.936 0 17.9366 0.895431 17.9366 2V5C17.9366 6.10457 16.936 7 15.7016 7H12.349C11.1146 7 10.114 6.10457 10.114 5V2ZM5.64425 11H2.29168L2.29168 14H5.64425V11ZM2.29168 9C1.0573 9 0.0566406 9.89543 0.0566406 11V14C0.0566406 15.1046 1.0573 16 2.29168 16H5.64425C6.87863 16 7.87929 15.1046 7.87929 14V11C7.87929 9.89543 6.87863 9 5.64425 9H2.29168ZM12.349 11H15.7016V14H12.349V11ZM10.114 11C10.114 9.89543 11.1146 9 12.349 9H15.7016C16.936 9 17.9366 9.89543 17.9366 11V14C17.9366 15.1046 16.936 16 15.7016 16H12.349C11.1146 16 10.114 15.1046 10.114 14V11Z" fill="#1B202F" />
                        </svg>
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] tracking-[0.75px]">Фильтрация</p>
                    </div>
                    <div className="rounded-[32px] h-[57px] border border-solid border-[#D9D9D9] mx-[33px] p-[9px] flex items-center gap-[8px] mt-[27px] mb-[35px]">
                        <div className="h-[40px] rounded-[32px] border border-solid border-[#D9D9D9] max-w-[240px] w-[100%]">
                            <input type="text" placeholder="Поиск по названию" className="w-[100%] h-[100%] py-[13px] px-[20px] rounded-[32px] font-monserat text-[#464646] outline-none placeholder:text-[#464646] font-[400] text-[12px] leading-[16px]" />
                        </div>
                        <div className="h-[40px] rounded-[32px] border border-solid border-[#D9D9D9] w-[180px]">
                            <button className="w-[100%] h-[100%] py-[13px] px-[20px] rounded-[32px] font-monserat text-[#464646] font-[400] text-[12px] leading-[16px] flex items-center justify-between">
                                Формат
                                <svg width="12" height="7" viewBox="0 0 12 7">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1618 0.203463L11.4535 1.46368L5.99504 6.91664L0.459216 1.51572L1.73286 0.243358L5.97699 4.38407L10.1618 0.203463Z" fill="#686B6F" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-[40px] rounded-[32px] border border-solid border-[#D9D9D9] w-[150px]">
                            <button className="w-[100%] h-[100%] py-[13px] px-[20px] rounded-[32px] font-monserat text-[#464646] font-[400] text-[12px] leading-[16px] flex items-center justify-between">
                                Дата
                                <svg width="12" height="7" viewBox="0 0 12 7">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1618 0.203463L11.4535 1.46368L5.99504 6.91664L0.459216 1.51572L1.73286 0.243358L5.97699 4.38407L10.1618 0.203463Z" fill="#686B6F" />
                                </svg>
                            </button>
                        </div>
                        <div className="rounded-[32px] w-[164px] h-[35px] ml-auto bg-[#FFC300]">
                            <Link to="/news/addnews" className="w-[100%] h-[100%] py-[13px] px-[20px] rounded-[32px] font-monserat text-[white] font-[500] tracking-[0.75px] text-[12px] leading-[14px] flex items-center justify-center gap-[14px]">
                                <div className="w-[16px] h-[16px] rounded-[50%] border border-solid border-[white] relative">
                                    <svg width="8" height="8" viewBox="0 0 8 8" className="absolute top-[50%] left-[50%] translate-x-[-43%] translate-y-[-50%]"                >
                                        <path d="M7.13378 3.5H4.12834V0.5H3.12653V3.5H0.121094V4.5H3.12653V7.5H4.12834V4.5H7.13378V3.5Z" fill="white" />
                                    </svg>
                                </div>
                                добавить
                            </Link>
                        </div>
                    </div>
                    <div className="mb-[163px]">
                        <div className="flex items-center min-h-[50px] border-y border-y-solid border-y-[#E8EAED] px-[15px] mb-[21px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#05070B] mr-[56px] max-w-[18px] w-[100%]">№</p>
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#05070B] mr-[160px] max-w-[160px] w-[100%] text-center">Название файла</p>
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#05070B] mr-[180px] max-w-[65px] w-[100%] text-center">Формат</p>
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] text-[#05070B] mr-[36px] max-w-[120px] w-[100%] text-center">Дата загрузки</p>
                        </div>
                        <div className="flex items-center min-h-[60px] border-t border-t-solid border-t-[#E8EAED] px-[19px]">
                            <p className="font-monserat font-[400] text-[12px] leading-[14px] text-[#05070B] mr-[56px] max-w-[18px] w-[100%]">1</p>
                            <p className="mr-[160px] max-w-[160px] w-[100%] flex items-center gap-[30px] font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Example Document</p>
                            <div className="min-w-[65px] flex justify-center mr-[180px]">
                                <div className="min-w-[65px] min-h-[24px] bg-[#FFC6C3] rounded-[15px] flex items-center justify-center text-[#CC1108] uppercase font-monserat font-[500] text-[12px] leading-[14px] cursor-pointer">PDF</div>
                            </div>
                            <p className=" font-monserat font-[400] text-[12px] leading-[14px] text-center text-[#000000] mr-[36px] max-w-[120px] w-[100%]">06/03/2024</p>
                            <div className="flex gap-[10px] ml-auto">
                                <button className="border border-solid border-[#E8EAED] rounded-[50%] w-[35px] h-[35px] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M0.322266 11.3333H9.63026V10H0.322266M9.63026 4H6.97083V0H2.98169V4H0.322266L4.97626 8.66667L9.63026 4Z" fill="#FFC300" />
                                    </svg>
                                </button>
                                <button className="rounded-[50%] w-[35px] h-[35px] bg-[#F0F1F5] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M9.72661 0.666667H7.3975L6.73204 0H3.40473L2.73927 0.666667H0.410156V2H9.72661M1.07562 10.6667C1.07562 11.0203 1.21584 11.3594 1.46544 11.6095C1.71503 11.8595 2.05356 12 2.40654 12H7.73023C8.08321 12 8.42174 11.8595 8.67133 11.6095C8.92093 11.3594 9.06115 11.0203 9.06115 10.6667V2.66667H1.07562V10.6667Z" fill="#686B6F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center min-h-[60px] border-t border-t-solid border-t-[#E8EAED] px-[19px]">
                            <p className="font-monserat font-[400] text-[12px] leading-[14px] text-[#05070B] mr-[56px] max-w-[18px] w-[100%]">1</p>
                            <p className="mr-[160px] max-w-[160px] w-[100%] flex items-center gap-[30px] font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Example Document</p>
                            <div className="min-w-[65px] flex justify-center mr-[180px]">
                                <div className="min-w-[65px] min-h-[24px] bg-[#FFC6C3] rounded-[15px] flex items-center justify-center text-[#CC1108] uppercase font-monserat font-[500] text-[12px] leading-[14px] cursor-pointer">PDF</div>
                            </div>
                            <p className=" font-monserat font-[400] text-[12px] leading-[14px] text-center text-[#000000] mr-[36px] max-w-[120px] w-[100%]">06/03/2024</p>
                            <div className="flex gap-[10px] ml-auto">
                                <button className="border border-solid border-[#E8EAED] rounded-[50%] w-[35px] h-[35px] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M0.322266 11.3333H9.63026V10H0.322266M9.63026 4H6.97083V0H2.98169V4H0.322266L4.97626 8.66667L9.63026 4Z" fill="#FFC300" />
                                    </svg>
                                </button>
                                <button className="rounded-[50%] w-[35px] h-[35px] bg-[#F0F1F5] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M9.72661 0.666667H7.3975L6.73204 0H3.40473L2.73927 0.666667H0.410156V2H9.72661M1.07562 10.6667C1.07562 11.0203 1.21584 11.3594 1.46544 11.6095C1.71503 11.8595 2.05356 12 2.40654 12H7.73023C8.08321 12 8.42174 11.8595 8.67133 11.6095C8.92093 11.3594 9.06115 11.0203 9.06115 10.6667V2.66667H1.07562V10.6667Z" fill="#686B6F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center min-h-[60px] border-t border-t-solid border-t-[#E8EAED] px-[19px]">
                            <p className="font-monserat font-[400] text-[12px] leading-[14px] text-[#05070B] mr-[56px] max-w-[18px] w-[100%]">1</p>
                            <p className="mr-[160px] max-w-[160px] w-[100%] flex items-center gap-[30px] font-monserat font-[500] text-[13px] leading-[15px] text-[#000000]">Example Document</p>
                            <div className="min-w-[65px] flex justify-center mr-[180px]">
                                <div className="min-w-[65px] min-h-[24px] bg-[#FFC6C3] rounded-[15px] flex items-center justify-center text-[#CC1108] uppercase font-monserat font-[500] text-[12px] leading-[14px] cursor-pointer">PDF</div>
                            </div>
                            <p className=" font-monserat font-[400] text-[12px] leading-[14px] text-center text-[#000000] mr-[36px] max-w-[120px] w-[100%]">06/03/2024</p>
                            <div className="flex gap-[10px] ml-auto">
                                <button className="border border-solid border-[#E8EAED] rounded-[50%] w-[35px] h-[35px] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M0.322266 11.3333H9.63026V10H0.322266M9.63026 4H6.97083V0H2.98169V4H0.322266L4.97626 8.66667L9.63026 4Z" fill="#FFC300" />
                                    </svg>
                                </button>
                                <button className="rounded-[50%] w-[35px] h-[35px] bg-[#F0F1F5] flex items-center justify-center">
                                    <svg width="10" height="12" viewBox="0 0 10 12">
                                        <path d="M9.72661 0.666667H7.3975L6.73204 0H3.40473L2.73927 0.666667H0.410156V2H9.72661M1.07562 10.6667C1.07562 11.0203 1.21584 11.3594 1.46544 11.6095C1.71503 11.8595 2.05356 12 2.40654 12H7.73023C8.08321 12 8.42174 11.8595 8.67133 11.6095C8.92093 11.3594 9.06115 11.0203 9.06115 10.6667V2.66667H1.07562V10.6667Z" fill="#686B6F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[7px] mx-[32px]">
                        <button className="w-[19px] h-[19px] min-w-[19px] max-w-[19px] max-h-[19px] min-h-[19px] rounded-[50%] flex items-center justify-center">
                            <svg width="6" height="6" viewBox="0 0 6 6">
                                <path d="M0.649636 3.29474V2.72656L5.2235 0.397017V1.30611L1.71498 2.99645L1.74339 2.93963V3.08168L1.71498 3.02486L5.2235 4.7152V5.62429L0.649636 3.29474Z" fill="black" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-[7px]">
                            <div className="w-[19px] h-[19px] rounded-[50%] font-monserat font-[400] text-[10px] leading-[12px] text-[#000000] border border-solid border-[white] flex items-center justify-center">1</div>
                            <div className="w-[19px] h-[19px] rounded-[50%] font-monserat font-[400] text-[10px] leading-[12px] text-[#000000] border border-solid border-[#000000] flex items-center justify-center">5</div>
                            <div className="w-[19px] h-[19px] rounded-[50%] font-monserat font-[400] text-[10px] leading-[12px] text-[#000000] border border-solid border-[white] flex items-center justify-center">9</div>
                        </div>
                        <button className="w-[19px] h-[19px] min-w-[19px] max-w-[19px] max-h-[19px] min-h-[19px] rounded-[50%] flex items-center justify-center">
                            <svg width="6" height="6" viewBox="0 0 6 6">
                                <path d="M5.24157 3.33185L0.667702 5.6614V4.75231L4.17623 3.06197L4.14782 3.11879V2.97674L4.17623 3.03356L0.667702 1.34322V0.434126L5.24157 2.76367V3.33185Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-[23px] pb-[32px] mt-[32px]">
                <button className="bg-[#FCC100] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">Сохранить</button>
                <button className="bg-[transparent] border border-solid border-[#FFC300] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[#FFC300] items-center">Далее</button>
                <Link to="/addcommandproject" className="bg-[#161C2D] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center ml-auto">Завершить</Link>
            </div>
        </div>
    );
}
