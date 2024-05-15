
import { useContext, useEffect, useId, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { $assideItems } from "../../fakeData";
import { BurgerState } from "../../pages/Layout";

let countRender = 0
export default function index() {
  const location = useLocation().pathname;
  const ASSIDEITEM = useId().slice(1, 3);
  const ASSIDEPARENTID = useId().slice(1, 3);
  const [burger, setBurger] = useContext(BurgerState)
  const [state, setState] = useState({
    top: 0,
    right: "0",
    width: 0,
    height: 0,
    href: "/",
  });
  const [fuck, setFuck] = useState(true);

  const checkSidebar = () => {
    if ($assideItems.some(item => item.path == location)) {
      run();
    } else {
      setState(prev => {
        return { ...prev, right: `-100%`, }
      })
    }
  }

  const run = () => {
    let assideItems = document.querySelectorAll(`#${ASSIDEPARENTID} a`);
    assideItems.forEach((item: any) => {
      let datePath = item.getAttribute("date-path");
      if (datePath == location) {
        setState({
          right: "0",
          top: item.offsetTop,
          width: item.offsetWidth,
          height: item.offsetHeight,
          href: item.getAttribute("date-path"),
        });
      }
    });
  };

  const handle__Enter = (e: any) => {
    setState({
      right: "0",
      top: e.target.closest(`#${ASSIDEITEM}`).offsetTop,
      width: e.target.closest(`#${ASSIDEITEM}`).offsetWidth,
      height: e.target.closest(`#${ASSIDEITEM}`).offsetHeight,
      href: e.target.closest(`#${ASSIDEITEM}`).getAttribute("date-path"),
    });
  };

  const handle__Leave = () => {
    checkSidebar()
  };

  const burger__Close = () => {
    setBurger((prev: any) => !prev);
  };

  useEffect(() => {
    if (!!countRender) {
      setTimeout(() => {
        setFuck((prev) => !prev);
      }, 100);
    }
    countRender += 1
  }, [burger])

  useEffect(() => {
    checkSidebar()
  }, [burger, location]);

  return (
    <aside className="bg-white ease-linear duration-200 relative" style={{ width: burger ? "260px" : "117px", minWidth: burger ? "260px" : "117px", maxWidth: burger ? "260px" : "117px", }} >
      <img src="/assets/img/asside__logo.png" className={`absolute top-[25px] left-[21px] mix-blend-darken  ${fuck ? "w-[195px] max-w-[195px] min-w-[195px] block" : "w-[68.4px] max-w-[68.4px] min-w-[68.4px] hidden"}`} />
      <img src="/assets/img/fuck.jpg" className={`absolute top-[25px] left-[20px] mix-blend-darken  ${fuck ? "w-[195px] max-w-[195px] min-w-[195px] hidden" : "w-[68.4px] max-w-[68.4px] min-w-[68.4px] block"}`} />
      <button className="w-[38px] h-[38px] rounded-[32px] flex items-center justify-center ease-linear duration-200 hover:border-base_yellow_color hover:fill-white fill-black hover:bg-base_yellow_color border border-solid border-[#EDEDEF] bg-white absolute top-[80px] right-[-17px]" onClick={burger__Close}>
        <svg width="8" height="13" viewBox="0 0 8 13" style={{ transform: `rotate(${burger ? 0 : 180}deg)` }} className="fill-inherit" >
          <path d="M7.60537 1.65409L3.31316 6.27962L7.68102 10.8338L6.35307 12.2548L0.643435 6.30163L6.25417 0.255181L7.60537 1.65409Z" />
        </svg>
      </button>
      <div className={`absolute top-[182px] overflow-hidden duration-200 w-full`} id={ASSIDEPARENTID}>
        <div className={`relative duration-200 overflow-hidden ${burger ? "w-full left-5" : "w-10 left-[2.5rem]"}`}>
          <div className={`bg-base_yellow_color h-full absolute ease-linear duration-100 rounded-tl-[32px] rounded-bl-[32px] ${burger ? "w-full" : "!rounded-full w-full"}`} style={{ height: state.height, top: state.top, right: state.right }}></div>
          {
            $assideItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                id={ASSIDEITEM}
                date-path={item.path}
                className={`flex items-center gap-4 px-5 py-2 translate-x-[-1px] relative group group/item fill-asside__base__color ease-linear duration-200 stroke-asside__base__color ${location == item.path && state.href == item.path ? "fill-white stroke-white" : ""} ${burger ? "" : "justify-start !px-2.5"}`}
                onMouseEnter={handle__Enter}
                onMouseLeave={handle__Leave}
              >
                <div className="w-[24px] min-w-[24px] max-w-[24px] h-[24px min-h-[24px] max-h-[24px] flex justify-center items-center">
                  {item.icon}
                </div>
                <p className={`text-base font-monserat font-normal text-asside__base__color group-hover/item:text-white ease-linear	duration-100 ${location == item.path && state.href == item.path ? "text-white" : ""} ${burger ? "block" : "hidden"}`}>
                  {item.title}
                </p>
              </NavLink>
            ))
          }
        </div>
      </div>
    </aside >
  );
}
