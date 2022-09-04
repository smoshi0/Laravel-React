import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Navbar({ user }) {
    const [data, setData] = useState("");
    useEffect(function (e) {
        setData({
            search: data,
        });
    }, []);
    function searchData(e) {
        // setData(e.target.value);
        setData((values) => ({ ...values, search: e.target.value }));
        if (e.keyCode === 13) {
            Inertia.get("/", data);
        }
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link
                        href="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        SmoNEWS
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered"
                            onKeyUp={searchData}
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            {!user ? (
                                <>
                                    <li>
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("register")}
                                            as="button"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href={route("dashboard")}
                                            className="justify-between"
                                            as="button"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
