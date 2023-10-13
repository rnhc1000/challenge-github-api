import { Outlet } from "react-router-dom";
import DisplayBusca from "../../components/DisplayBusca"
import Header from "../../components/Header"



export default function SearchProfile() {

    return (
        <>
            <Header />
            <DisplayBusca />
            <Outlet />

        </>
    );
}