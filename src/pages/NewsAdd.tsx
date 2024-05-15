
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ModalAlert from '../components/UI/ModalAlert';

export default function NewsAdd() {
    return (
        <div className="w-[100%] h-[max-content] px-[28px] py-[32px]">
            <div className="flex items-center gap-[4px] mb-[37px] ml-[22px]">
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#464646]">Новости</p>
                <svg width="4" height="8" viewBox="0 0 4 8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.75042e-08 7.11808L2.80847 4L-3.02699e-07 0.881926L0.794355 -3.56907e-08L4 3.55904L4 4.44096L0.794355 8L-3.75042e-08 7.11808Z" fill="#FFC221" />
                </svg>
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#05070B]">Добавить новость</p>
            </div>
            <div className="mb-[32px] w-[100%] rounded-[10px] border border-solid border-[#D9D9D9] bg-[white] shadow-[0px_4px_4px_0px_#0000004D]">
                <div className=" font-monserat font-[500] text-[18px] leading-[21px] text-[#434343] py-[16px] px-[20px] border-b border-solid border-b-[#D9D9D9]">Основные данные</div>
                <div className="py-[37px] px-[45px]">
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[24px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите название*</p>
                        <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                    </div>
                    <div className='relative'>
                        <ModalAlert
                            x={true}
                            width='w-[100%]'
                            close={true}
                            event={
                                <div className="w-[100%] max-w-[400px] duration-200 mb-[32px]">
                                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Выберите категорию</p>
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
                    <div className="w-[100%] max-w-[80%] duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите фамилию*</p>
                        <textarea className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] py-[13px] border-[#D6D6D6] w-[100%] h-[100px] outline-none"></textarea>
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите полное описание*</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                </div>
            </div>
            <div className="mb-[32px] w-[100%] rounded-[10px] border border-solid border-[#D9D9D9] bg-[white] shadow-[0px_4px_4px_0px_#0000004D]">
                <div className=" font-monserat font-[500] text-[18px] leading-[21px] text-[#434343] py-[16px] px-[20px] border-b border-solid border-b-[#D9D9D9]">Материал</div>
                <div className="py-[37px] px-[45px]">
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
                    <div className="w-[100%] max-w-[670px] duration-200 mb-[24px]">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите URL видео из YouTube</p>
                        <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                    </div>
                </div>
            </div>
            <div className='flex gap-[23px]'>
                <button className=' font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] px-[26px] rounded-[50px] h-[35px] bg-[#FCC100]'>добавить</button>
                <button className=' font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] px-[26px] rounded-[50px] h-[35px] bg-[#161C2D]'>отмена</button>
                <button className=' font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] px-[26px] rounded-[50px] h-[35px] bg-[#161C2D] ml-auto'>В черновик</button>
            </div>
        </div>
    );
}

