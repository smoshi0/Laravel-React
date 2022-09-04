import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import NewsCard from "@/Components/Homepage/NewsCard";
import Paginator from "@/Components/Homepage/Paginator";

export default function HomePage(props) {
    // console.log(props);
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={props.title} />
                <Navbar user={props.auth.user} />
                <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch items-center gap-4 p-4">
                    <NewsCard news={props.news.data} />
                </div>
                <div className="flex justify-center py-4">
                    <Paginator meta={props.news.meta} />
                </div>
            </div>
        </>
    );
}
