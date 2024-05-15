
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ModalAlert from '../components/UI/ModalAlert';

export default function AdvertisementAdd() {
    return (
        <>
            <div className="bg-[white] shadow-[0px_4px_4px_0px_#0000004D] w-[100%] h-[700px] rounded-b-[20px] relative py-[35px] px-[44px]">
                <label htmlFor="lastname" className="w-[100%] max-w-[491px] block duration-200 mb-[32px]">
                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Введите тему объяления*</p>
                    <input type="text" id="lastname" className="font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none" />
                </label>

                <div className="w-[100%] max-w-[938px] block duration-200 mb-[32px]">
                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Напишите ваше объвление*</p>
                    <CKEditor editor={ClassicEditor} />
                </div>

                <div className="w-[100%] max-w-[665px] block duration-200 mb-[32px]">
                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Выберите получателей (команды)*</p>
                    <div className='relative'>
                        <ModalAlert
                            x={true}
                            width='w-[100%]'
                            close={true}
                            event={
                                <div className="flex items-center justify-between cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none">
                                    <input type="text" className='w-[100%] outline-none h-[100%] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]' />
                                    <svg width="14" height="10" viewBox="0 0 14 10">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0733 0.968592L13.5985 2.49577L7.13537 9.11936L0.598738 2.57434L2.1068 1.02883L7.11822 6.04668L12.0733 0.968592Z" fill="#686B6F" />
                                    </svg>
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
                </div>
                <div className="w-[100%] max-w-[665px] block duration-200 mb-[32px]">
                    <p className=" font-monserat font-[500] text-[15px] leading-[18px] mb-[14px] text-[#000000]">Выберите получателей (отдельные личности)</p>
                    <div className='relative'>
                        <ModalAlert
                            x={true}
                            width='w-[100%]'
                            close={true}
                            event={
                                <div className="flex items-center justify-end cursor-pointer font-monserat font-[400] text-[13px] leading-[15px] text-[#464646] rounded-[10px] border border-solid px-[13px] border-[#D6D6D6] w-[100%] h-[50px] outline-none">
                                    <input type="text" className='w-[100%] outline-none h-[100%] font-monserat font-[400] text-[13px] leading-[15px] text-[#464646]' />
                                    <svg width="14" height="10" viewBox="0 0 14 10">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0733 0.968592L13.5985 2.49577L7.13537 9.11936L0.598738 2.57434L2.1068 1.02883L7.11822 6.04668L12.0733 0.968592Z" fill="#686B6F" />
                                    </svg>
                                </div>
                            }>
                            <div className='bg-[white] w-[397px] rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] border border-solid border-[#D6D6D6]'>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer'>КГУСТА</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer'>АУЦА</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer'>ОШТУ</div>
                                <div className='py-[15px] px-[11px] border-b border-solid border-[#D6D6D6] cursor-pointer'>ОШМУ</div>
                            </div>
                        </ModalAlert>
                    </div>
                </div>
            </div>
            <button className="mt-[32px] font-monserat font-[500] text-[13px] leading-[15px] tracking-[0.75px] text-[white] py-[11px] px-[26px] rounded-[50px] bg-[#FCC100]">Отправить</button>
        </>
    );
}
