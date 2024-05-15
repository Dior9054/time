
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function UniversitiAdd() {
    return (
        <div className="py-[32px] px-[28px]">
            <div className="flex items-center gap-[4px] mb-[37px] ml-[22px]">
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#464646]">Университеты</p>
                <svg width="4" height="8" viewBox="0 0 4 8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.75042e-08 7.11808L2.80847 4L-3.02699e-07 0.881926L0.794355 -3.56907e-08L4 3.55904L4 4.44096L0.794355 8L-3.75042e-08 7.11808Z" fill="#FFC221" />
                </svg>
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#05070B]">Добавить университет</p>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Основные данные</div>
                <div className="flex py-[32px] px-[43px] justify-between items-start gap-[70px]">
                    <label htmlFor="profileImage" className="min-w-[203px] max-w-[203px] min-h-[203px] max-h-[203px] rounded-[50%] bg-[#D9D9D9] flex items-center justify-center cursor-pointer">
                        <svg width="19" height="23" viewBox="0 0 19 23">
                            <path d="M0.828125 22.6914H18.8281V20.1032H0.828125V22.6914ZM18.8281 8.45611H13.6853V0.691406H5.97098V8.45611H0.828125L9.82812 17.5149L18.8281 8.45611Z" fill="#686B6F" />
                        </svg>
                        <input type="file" id="profileImage" className="hidden" />
                    </label>
                    <div className="w-[100%]">
                        <div className="w-[100%] max-w-[90%] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите полное наименование университета*</p>
                            <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </div>
                        <div className='flex gap-[50px]'>
                            <div className="w-[100%] max-w-[100%] duration-200 mb-[32px]">
                                <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите фамилию ректора*</p>
                                <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                            </div>
                            <div className="w-[100%] max-w-[100%] duration-200 mb-[32px]">
                                <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите имя ректора*</p>
                                <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[50%] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите отчество ректора</p>
                            <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] rounded-[10px] mb-[32px]">
                <div className="font-monserat font-[500] text-[18px] leading-[21px] py-[15px] px-[24px] border-b-[2px] border-solid border-b-[#D9D9D9]">Общие данные</div>
                <div className="flex py-[32px] px-[43px] flex-wrap items-center gap-[30px]">
                    <div className='flex gap-[50px] w-[80%]'>
                        <div className="w-[100%] max-w-[100%] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите фамилию ректора*</p>
                            <div className='rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] flex items-center'>
                                <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] w-[100%] h-[50px] outline-none" />
                                <svg width="14" height="9" viewBox="0 0 14 9">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9542 0.555854L13.4756 2.07577L6.99648 8.73061L0.476362 2.21667L1.98816 0.663876L6.98691 5.65789L11.9542 0.555854Z" fill="#686B6F" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[100%] duration-200 mb-[32px]">
                            <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px]">Введите имя ректора*</p>
                            <input type="text" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                        </div>
                    </div>
                    <div className="w-[100%] max-w-[938px] block duration-200">
                        <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Информация об университете*</p>
                        <CKEditor editor={ClassicEditor} />
                    </div>
                </div>
            </div>
            <button className='bg-[#8D8A8A] rounded-[10px] py-[15px] px-[20px] flex items-center gap-[14px] mb-[32px]'>
                <div className='border border-solid border-[white] rounded-[50%] w-[16px] h-[16px] flex items-center justify-center'>
                    <svg width="8" height="8" viewBox="0 0 8 8">
                        <path d="M7.51024 3.5H4.50752V0.5H3.50662V3.5H0.503906V4.5H3.50662V7.5H4.50752V4.5H7.51024V3.5Z" fill="white" />
                    </svg>
                </div>
                <p className=' font-monserat font-[500] text-[12px] leading-[14px] tracking-[0.75px] text-[white]'>добавить документы</p>
            </button>
            <div className="flex gap-[23px] pb-[32px]">
                <button className="bg-[#FCC100] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">Сохранить</button>
                <button className="bg-[#161C2D] rounded-[50px] min-w-[144px] min-h-[35px] flex justify-center font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] items-center">отмена</button>
            </div>
        </div>
    );
}
