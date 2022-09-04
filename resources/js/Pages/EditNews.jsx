import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [inputs, setInput] = useState({});
    const [data, setData] = useState();

    useEffect(function (e) {
        const title = document.getElementsByName("title")[0].value;
        const description = document.getElementsByName("description")[0].value;
        const category = document.getElementsByName("category")[0].value;

        setData({
            id: props.News.id,
            title,
            description,
            category,
        });
    }, []);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setData((values) => ({ ...values, [name]: value }));
    }

    function handleSubmit() {
        // const data = {
        //     id: props.News.id,
        //     title,
        //     description,
        //     category,
        // };
        // console.log(data);
        Inertia.post("/news/update", data);
        // setTitle("");
        // setDescription("");
        // setCategory("");
    }
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={props.title} />
                <Navbar user={props.auth.user} />
                <div className="card w-full md:w-96 bg-base-100 shadow-xl mb-3 my-4">
                    <div className="card-body">
                        <input
                            type="text"
                            name="title"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            defaultValue={props.News.title}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Deskripsi"
                            className="input input-bordered w-full m-2"
                            defaultValue={props.News.description}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Kategori"
                            className="input input-bordered w-full m-2"
                            defaultValue={props.News.category}
                            onChange={handleChange}
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
        </>
    );
}
