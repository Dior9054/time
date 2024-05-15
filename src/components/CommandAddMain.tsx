
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CommandAddMain() {
    return (
        <>
            <div className="bg-[white] relative shadow-[0px_4px_4px_0px_#0000004D] rounded-b-[10px] mb-[32px]">
                <div className="flex py-[32px] px-[43px] justify-between items-start gap-[70px]">
                    <label htmlFor="profileImage" className="min-w-[203px] max-w-[203px] min-h-[203px] max-h-[203px] rounded-[50%] bg-[#D9D9D9] flex items-center justify-center cursor-pointer">
                        <svg width="19" height="23" viewBox="0 0 19 23">
                            <path d="M0.828125 22.6914H18.8281V20.1032H0.828125V22.6914ZM18.8281 8.45611H13.6853V0.691406H5.97098V8.45611H0.828125L9.82812 17.5149L18.8281 8.45611Z" fill="#686B6F" />
                        </svg>
                        <input type="file" id="profileImage" className="hidden" />
                    </label>
                    <div className="w-[100%]">
                        <div className="flex w-[100%] gap-[50px] mb-[32px]">
                            <div className="w-[100%] max-w-[120%] duration-200">
                                <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название*</p>
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                    <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                            <div className="w-[100%] max-w-[80%] duration-200">
                                <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата основания*</p>
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                    <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                        <svg width="25" height="22" viewBox="0 0 25 22">
                                            <path d="M21.4074 19.8V6.6H2.87545V19.8H21.4074ZM17.4363 0H20.0837V2.2H21.4074C22.1095 2.2 22.7829 2.43179 23.2794 2.84437C23.7759 3.25695 24.0548 3.81652 24.0548 4.4V19.8C24.0548 20.3835 23.7759 20.9431 23.2794 21.3556C22.7829 21.7682 22.1095 22 21.4074 22H2.87545C1.40613 22 0.228027 21.01 0.228027 19.8V4.4C0.228027 3.179 1.40613 2.2 2.87545 2.2H4.19916V0H6.84658V2.2H17.4363V0ZM10.8177 8.8H13.4651V12.1H17.4363V14.3H13.4651V17.6H10.8177V14.3H6.84658V12.1H10.8177V8.8Z" fill="#686B6F" />
                                        </svg>
                                    </label>
                                    <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[400px] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите город*</p>
                            <div className='rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] flex items-center flex-row-reverse h-[50px]'>
                                <svg width="14" height="9" viewBox="0 0 14 9">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7232 0.420705L13.2446 1.94101L6.76599 8.59419L0.245366 2.0786L1.75705 0.526194L6.7562 5.52148L11.7232 0.420705Z" fill="#686B6F" />
                                </svg>
                                <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] w-[100%] outline-none" />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[100%] duration-200">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите город*</p>
                            <div className='rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] flex items-center flex-row-reverse h-[50px]'>
                                <svg width="14" height="9" viewBox="0 0 14 9">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7232 0.420705L13.2446 1.94101L6.76599 8.59419L0.245366 2.0786L1.75705 0.526194L6.7562 5.52148L11.7232 0.420705Z" fill="#686B6F" />
                                </svg>
                                <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] w-[100%] outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Общие данные</div>
                <div className="flex py-[32px] px-[43px] flex-wrap items-center">
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите миссию</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите цели</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите задачи</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className="flex items-end gap-[28px] mb-[32px] w-[100%] justify-start">
                        <label htmlFor="tel" className="w-[100%] max-w-[100%] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите контактные данные</p>
                            <div className='flex justify-between gap-[50px] w-[938px]'>
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                    <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                        <svg width="10" height="7" viewBox="0 0 10 7">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                        </svg>
                                    </button>
                                    <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                    <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                        <svg width="10" height="7" viewBox="0 0 10 7">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                        </svg>
                                    </button>
                                    <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                                <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                    <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                        <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                        <svg width="10" height="7" viewBox="0 0 10 7">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                        </svg>
                                    </button>
                                    <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-end gap-[28px] mb-[32px] w-[100%] justify-start">
                        <label htmlFor="tel" className="w-[100%] max-w-[100%] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите социальные сети</p>
                            <div className='flex flex-col gap-[34px]'>
                                <div className='flex justify-between gap-[50px] w-[938px]'>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                </div>
                                <div className='flex justify-between gap-[50px] w-[938px]'>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                    <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex min-h-[50px] w-[100%]">
                                        <button className="bg-[#F0F1F5] py-[18px] min-w-[61px] flex items-center justify-center gap-[8px]">
                                            <img src="/assets/img/flag__kg.png" className="w-[19px] h-[12px] object-cover" />
                                            <svg width="10" height="7" viewBox="0 0 10 7">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.90301 0.273278L9.97668 1.34646L5.40623 6.03855L0.804774 1.43919L1.87121 0.344366L5.399 3.87054L8.90301 0.273278Z" fill="#686B6F" />
                                            </svg>
                                        </button>
                                        <input type="tel" id="tel" placeholder='+996' className="placeholder:text-[#464646] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex gap-[23px] pb-[32px]">
                <button className="bg-[#FCC100] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">Сохранить</button>
                <button className="bg-[transparent] border border-solid border-[#FFC300] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[#FFC300] items-center">Далее</button>
                <button className="bg-[#161C2D] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center ml-auto">Завершить</button>
            </div>
        </>
    );
}

