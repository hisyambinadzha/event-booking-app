import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/app.css";

export default function MainLayout() {
    return (
        <>
            <div className="app-root">
                <Navbar />
                <main className="page-container">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
