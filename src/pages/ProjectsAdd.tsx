
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function ProjectsAdd() {
    return (
        <div className="py-[32px] px-[28px]">
            <div className="flex items-center gap-[4px] mb-[37px] ml-[22px]">
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#464646]">Новости</p>
                <svg width="4" height="8" viewBox="0 0 4 8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.75042e-08 7.11808L2.80847 4L-3.02699e-07 0.881926L0.794355 -3.56907e-08L4 3.55904L4 4.44096L0.794355 8L-3.75042e-08 7.11808Z" fill="#FFC221" />
                </svg>
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#05070B]">Добавить новость</p>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Навигация</div>
                <div className="flex py-[32px] px-[43px] justify-between items-start gap-[70px]">
                    <label htmlFor="profileImage" className="min-w-[203px] max-w-[203px] min-h-[203px] max-h-[203px] rounded-[50%] bg-[#D9D9D9] flex items-center justify-center cursor-pointer">
                        <svg width="19" height="23" viewBox="0 0 19 23">
                            <path d="M0.828125 22.6914H18.8281V20.1032H0.828125V22.6914ZM18.8281 8.45611H13.6853V0.691406H5.97098V8.45611H0.828125L9.82812 17.5149L18.8281 8.45611Z" fill="#686B6F" />
                        </svg>
                        <input type="file" id="profileImage" className="hidden" />
                    </label>
                    <div className="w-[100%]">
                        <div className="w-[100%] max-w-[90%] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название проекта*</p>
                            <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </div>
                        <div className="w-[100%] max-w-[400px] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите город*</p>
                            <div className="rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] flex items-center gap-[10px]">
                                <input type="text" className="w-[100%] outline-none font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]" />
                                <svg width="14" height="9" viewBox="0 0 14 9">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1242 0.555899L13.6456 2.07577L7.1664 8.7308L0.646344 2.21705L2.15815 0.664215L7.15686 5.65808L12.1242 0.555899Z" fill="#686B6F" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex w-[100%] gap-[100px]">
                            <div className="w-[100%] max-w-[274px] duration-200">
                                <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата начала активности*</p>
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
                                <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата окончания активности*</p>
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
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Общие данные</div>
                <div className="flex py-[32px] px-[43px] flex-wrap items-center gap-[30px]">
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите описание*</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите описание*</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                    <div className='flex items-center gap-[7px]'>
                        <label htmlFor="radio" className='bg-[#A3AEBF] cursor-pointer flex items-center w-[40px] h-[20px] rounded-[20px] px-[2px] selection_radio'>
                            <div className='border-[6px] border-solid border-[white] w-[16px] h-[16px] rounded-[50%]'></div>
                            <input type="checkbox" id="radio" className='hidden' />
                        </label>
                        <p className=' font-monserat font-[400] text-[15px] leading-[18px] text-[#000000]'>Только для студентов</p>
                    </div>
                    <div className="mb-[32px] border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden w-[95%]">
                        <div className="bg-[#C59EFF] text-[#000000] font-monserat font-[500] text-[15px] leading-[18px] py-[16px] px-[23px]">Добавить главное фото</div>
                        <div className="py-[12px] px-[23px] flex items-center gap-[15px]">
                            <img src="/assets/img/galary.jpg" className="w-[100px] h-[73px]" />
                            <button className="h-[37px] border border-solid border-[#D6D6D6] rounded-[10px] flex items-center w-[185px] gap-[11px] px-[19px]">
                                <div className="w-[13px] h-[13px] rounded-[50%] border border-solid border-[#000000] flex items-center justify-center p-[3px]">
                                    <svg width="7" height="7" viewBox="0 0 7 7">
                                        <path d="M6.50257 3.09375H3.83378V0.65625H2.94418V3.09375H0.275391V3.90625H2.94418V6.34375H3.83378V3.90625H6.50257V3.09375Z" fill="black" />
                                    </svg>
                                </div>
                                <p>Выберите фото</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[23px] pb-[32px]">
                <button className="bg-[#FCC100] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">Сохранить</button>
                <button className="bg-[#161C2D] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">отмена</button>
            </div>
        </div>
    );
}
