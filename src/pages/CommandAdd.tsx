
import { useState } from 'react';
import CommandAddAdvaizer from '../components/CommandAddAdvaizer';
import CommandAddCapitan from '../components/CommandAddCapitan';
import CommandAddMain from '../components/CommandAddMain';
import CommandAddOtchot from '../components/CommandAddOtchot';
import CommandAddPeaple from '../components/CommandAddPeaple';
import CommandAddProject from '../components/CommandAddProject';

export default function CommandAdd() {
    const [state, setState] = useState({
        x: "0",
    })
    const [ochered, setOchered] = useState({
        index: 0
    })

    const handle__Link = (e: any) => {
        setState({
            x: e.target.getAttribute("date-x")
        })
        setOchered({
            index: +e.target.getAttribute("date-index")
        })
    }

    return (
        <div className="py-[32px] px-[28px]">
            <div className="flex items-center gap-[4px] mb-[37px] ml-[22px]">
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#464646]">Команды</p>
                <svg width="4" height="8" viewBox="0 0 4 8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-3.75042e-08 7.11808L2.80847 4L-3.02699e-07 0.881926L0.794355 -3.56907e-08L4 3.55904L4 4.44096L0.794355 8L-3.75042e-08 7.11808Z" fill="#FFC221" />
                </svg>
                <p className=" font-monserat font-[500] text-[12px] leading-[14px] text-[#05070B]">Добавить команду</p>
            </div>
            <div>
                <div className="rounded-t-[20px] w-[100%] h-[42px] bg-[#D9D9D9] flex items-center justify-between relative overflow-hidden shadow-[0px_4px_4px_0px_#0000004D]">
                    <div className="fuck absolute top-[0] left-[0] bg-[white] w-[16%] h-[100%] rounded-t-[18px] duration-200" style={{ left: state.x }}></div>
                    <div onClick={handle__Link} date-x="0" date-index={0} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Основные данные</div>
                    <div onClick={handle__Link} date-x="17%" date-index={1} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Участники</div>
                    <div onClick={handle__Link} date-x="34%" date-index={2} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Капитаны</div>
                    <div onClick={handle__Link} date-x="50%" date-index={3} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Эдвайзеры</div>
                    <div onClick={handle__Link} date-x="67%" date-index={4} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Проекты</div>
                    <div onClick={handle__Link} date-x="84.5%" date-index={5} className="relative cursor-pointer font-monserat font-[400] text-[15px] leading-[18px] text-[#05070B] w-[100%] h-[100%] flex items-center justify-center">Отчеты</div>
                </div>
                {
                    ochered.index === 0
                        ?
                        <CommandAddMain />
                        :
                        ochered.index === 1
                            ?
                            <CommandAddPeaple />
                            :
                            ochered.index === 2
                                ?
                                <CommandAddCapitan />
                                :
                                ochered.index === 3
                                    ?
                                    <CommandAddAdvaizer />
                                    :
                                    ochered.index === 4
                                        ?
                                        <CommandAddProject />
                                        :
                                        ochered.index === 5
                                            ?
                                            <CommandAddOtchot />
                                            :
                                            ""
                }
            </div>
        </div>
    );
}
