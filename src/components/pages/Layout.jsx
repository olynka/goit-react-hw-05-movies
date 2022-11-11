
import { AppBar } from '../AppBar';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
}