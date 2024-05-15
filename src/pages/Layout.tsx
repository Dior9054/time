
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Asside from "../components/asside"
import Header from "../components/header"

export const BurgerState = createContext<any>(true)

export default function Layout() {
    const [burger, setBurger] = useState(true)

    return (
        <BurgerState.Provider value={[burger, setBurger]}>
            <div className="w-full h-screen flex bg-[#F0F1F5]">
                <Asside />
                <main className="w-full flex flex-col">
                    <Header />
                    <div className="w-full h-full overflow-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </BurgerState.Provider>
    );
}

