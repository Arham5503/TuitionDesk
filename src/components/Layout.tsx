import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout(){
    return (
        <main className="flex min-h-screen bg-background">
            <Sidebar/>
            <section className="flex-1">
                <Header/>
                <Outlet/></section>
        </main>
    )
}