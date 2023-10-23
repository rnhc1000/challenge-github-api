import { Outlet } from "react-router-dom";
import Header from "../../components/Header"
import InputProfile from "../../components/InputProfile";

export default function SearchProfile() {

    return (
        <>
            <Header />
            <InputProfile />
            <Outlet />

        </>
    );
    
}