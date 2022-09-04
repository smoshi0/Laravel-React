import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [notif, setNotif] = useState(false);

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        setNotif(false);
        return;
    }, []);

    function handleSubmit() {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setNotif(true);
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Saya
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            {notif && (
                                <div className="alert alert-info shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="stroke-current flex-shrink-0 w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full m-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="input input-bordered w-full m-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-4 pb-4">
                {props.myNews && props.myNews.length > 0 ? (
                    props.myNews.map((e, i) => {
                        return (
                            <div
                                className="card w-full bg-base-100 shadow-xl mb-3"
                                key={i}
                            >
                                <div className="card-body">
                                    <h2 className="card-title">{e.title}</h2>
                                    <p>{e.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">
                                            {e.category}
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route("edit.news")}
                                                as="button"
                                                method="get"
                                                data={{ id: e.id }}
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route("delete.news")}
                                                as="button"
                                                method="post"
                                                data={{ id: e.id }}
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Anda belum memiliki berita</p>
                )}
            </div>
        </Authenticated>
    );
}
