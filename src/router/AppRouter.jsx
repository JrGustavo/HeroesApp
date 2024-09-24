import {Routes, Route, Navigate} from "react-router-dom";

import {DcPage} from "../heroes/pages/DcPages";
import {MarvelPage} from "../heroes/pages/MarvelPage";
import {LoginPage} from "../auth/pages/LoginPage";
import {Navbar} from "../ui/components/index.js";



export const AppRouter = () => {
    return (
        <>

            <Navbar/>
            <Routes>
                <Route path="/marvel" element={ <MarvelPage />} />
                <Route path="dc" element={ <DcPage />} />


                <Route path="login" element={ <LoginPage />} />

                <Route path="login" element={ <Navigate to ="/marvel"/>} />
            </Routes>
        </>
    )
}



