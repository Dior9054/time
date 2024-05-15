
import { useEffect, useId, useState } from "react";

export default function ModalAlert({ event, children, width, close, clickTime, x }: { event: any, children: any, width: string, close: boolean, clickTime?: boolean, x?: boolean }) {
    const PROFILEBLOCKID = useId().slice(1, 3)
    const PROFILEBUTTON = useId().slice(1, 3)
    const [state, setState] = useState(false)

    const targetEvant = {
        ...event,
        props: {
            ...event.props,
            id: PROFILEBUTTON,
            onClick: () => {
                if (clickTime) {
                    setState(true)
                } else {
                    setState(prev => !prev)
                }
            }
        }
    }

    useEffect(() => {
        const hanlde__Target = (e: any) => {
            if (!e.target.closest(`#${PROFILEBLOCKID}`) && !e.target.closest(`#${PROFILEBUTTON}`)) {
                setState(false)
            }
        }

        document.addEventListener("click", hanlde__Target)
        return () => document.removeEventListener("click", hanlde__Target)
    }, [])

    return (
        <>
            {targetEvant}
            {
                state
                &&
                <div className={`absolute -bottom-1 z-[10] ${x ? "left-0" : "right-0"} translate-y-full ${width}`} id={!close ? PROFILEBLOCKID : ""}>
                    {children}
                </div>
            }
        </>
    );
}
