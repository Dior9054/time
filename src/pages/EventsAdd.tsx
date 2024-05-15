
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ModalAlert from '../components/UI/ModalAlert';

export default function EventsAdd() {
    return (
        <div className="w-[100%] h-[max-content] px-[28px] py-[32px]">
            <div className="flex items-center gap-[4px] mb-[37px] ml-[22px]">
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#464646]">Ивенты</p>
                <svg width="4" height="8" viewBox="0 0 4 8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.75042e-08 7.11808L2.80847 4L-3.02699e-07 0.881926L0.794355 -3.56907e-08L4 3.55904L4 4.44096L0.794355 8L-3.75042e-08 7.11808Z" fill="#FFC221" />
                </svg>
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#05070B]">Добавить ивент</p>
            </div>
            <div className="mb-[32px] w-[100%] rounded-[10px] border border-solid border-[#D9D9D9] bg-[white] shadow-[0px_4px_4px_0px_#0000004D]">
                <div className=" font-monserat font-[500] text-[18px] leading-[21px] text-[#434343] py-[16px] px-[20px] border-b border-solid border-b-[#D9D9D9]">Основные данные</div>
                <div className="py-[37px] px-[45px]">
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[24px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название*</p>
                        <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                    </div>
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите краткое описание*</p>
                        <textarea className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] py-[13px] border-[#D6D6D6] w-[100%] h-[95px] outline-none"></textarea>
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите полное описание*</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                </div>
            </div>
            <div className='mb-[32px] w-[100%] rounded-[10px] border border-solid border-[#D9D9D9] bg-[white] shadow-[0px_4px_4px_0px_#0000004D]'>
                <div className=" font-monserat font-[500] text-[18px] leading-[21px] text-[#434343] py-[16px] px-[20px] border-b border-solid border-b-[#D9D9D9]">Дата и место</div>
                <div className="flex flex-wrap py-[32px] px-[43px] justify-between items-center gap-[30px]">
                    <div className="flex w-[100%] gap-[100px]">
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата начала*</p>
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
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата окончания*</p>
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
                    <div className="flex w-[100%] gap-[100px]">
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Время начала*</p>
                            <div className="border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden flex flex-row-reverse min-h-[50px]">
                                <label htmlFor="dateregistration" className="py-[13px] min-w-[61px] flex items-center justify-center gap-[8px] border-l border-solid border-l-[#D6D6D6]">
                                    <svg width="20" height="21" viewBox="0 0 20 21">
                                        <path d="M10 18.1953C12.1217 18.1953 14.1566 17.3525 15.6569 15.8522C17.1571 14.3519 18 12.317 18 10.1953C18 8.07358 17.1571 6.03875 15.6569 4.53846C14.1566 3.03817 12.1217 2.19531 10 2.19531C7.87827 2.19531 5.84344 3.03817 4.34315 4.53846C2.84285 6.03875 2 8.07358 2 10.1953C2 12.317 2.84285 14.3519 4.34315 15.8522C5.84344 17.3525 7.87827 18.1953 10 18.1953ZM10 0.195312C11.3132 0.195313 12.6136 0.45397 13.8268 0.956517C15.0401 1.45906 16.1425 2.19566 17.0711 3.12424C17.9997 4.05283 18.7362 5.15522 19.2388 6.36848C19.7413 7.58173 20 8.88209 20 10.1953C20 12.8475 18.9464 15.391 17.0711 17.2664C15.1957 19.1417 12.6522 20.1953 10 20.1953C4.47 20.1953 0 15.6953 0 10.1953C0 7.54315 1.05357 4.99961 2.92893 3.12424C4.8043 1.24888 7.34784 0.195313 10 0.195312ZM10.5 5.19531V10.4453L15 13.1153L14.25 14.3453L9 11.1953V5.19531H10.5Z" fill="#686B6F" />
                                    </svg>
                                </label>
                                <input type="date" id="dateregistration" className="hidden font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] px-[8px] w-[100%] outline-none" />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[274px] duration-200">
                            <p className="font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Дата окончания*</p>
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
                    <div className='relative'>
                        <ModalAlert
                            x={true}
                            width='w-[100%]'
                            close={true}
                            event={
                                <div className="w-[100%] max-w-[340px] duration-200">
                                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите город*</p>
                                    <div className="rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] flex items-center justify-end">
                                        <input type="text" className=' outline-none w-[100%]' />
                                        <svg width="14" height="9" viewBox="0 0 14 9">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2641 0.192118L13.7856 1.71249L7.307 8.36536L0.78628 1.84947L2.29794 0.29713L7.29716 5.29265L12.2641 0.192118Z" fill="#686B6F" />
                                        </svg>
                                    </div>
                                </div>
                            }>
                            <div className='bg-[white] w-[397px] rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] border border-solid border-[#D6D6D6]'>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]'>КГУСТА</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]'>АУЦА</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]'>ОШТУ</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]'>ОШМУ</div>
                            </div>
                        </ModalAlert>
                    </div>
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[24px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название*</p>
                        <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                    </div>
                </div>
            </div>
            <div className="mb-[32px] w-[100%] rounded-[10px] border border-solid border-[#D9D9D9] bg-[white] shadow-[0px_4px_4px_0px_#0000004D]">
                <div className=" font-monserat font-[500] text-[18px] leading-[21px] text-[#434343] py-[16px] px-[20px] border-b border-solid border-b-[#D9D9D9]">Материал</div>
                <div className="py-[37px] px-[45px]">
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[24px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название*</p>
                        <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                    </div>
                    <div className='mb-[32px] border border-solid border-[#D6D6D6] rounded-[10px] overflow-hidden'>
                        <div className='bg-[#C59EFF] text-[#000000] font-monserat font-[500] text-[15px] leading-[18px] py-[16px] px-[23px]'>Добавить главное фото</div>
                        <div className='py-[12px] px-[23px] flex items-center gap-[15px]'>
                            <img src="/assets/img/galary.jpg" className='w-[100px] h-[73px]' />
                            <button className='h-[37px] border border-solid border-[#D6D6D6] rounded-[10px] flex items-center w-[185px] gap-[11px] px-[19px]'>
                                <div className='w-[13px] h-[13px] rounded-[50%] border border-solid border-[#000000] flex items-center justify-center p-[3px]'>
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
            <div className='flex gap-[23px]'>
                <button className=' font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] px-[26px] rounded-[50px] h-[35px] bg-[#FCC100]'>добавить</button>
                <button className=' font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] px-[26px] rounded-[50px] h-[35px] bg-[#161C2D]'>отмена</button>
            </div>
        </div >
    );
}
