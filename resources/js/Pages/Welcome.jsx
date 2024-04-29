import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faBottleWater } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Welcome({ auth, laravelVersion, phpVersion, bgUrl }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Home" />
            <div className="bg-gray-50 text-black/50">
                <div
                    id="background"
                    className="fixed h-screen max-h-full w-screen max-w-full flex justify-center items-center overflow-clip"
                >
                    <img src={bgUrl} className="h-full max-w-none" />
                </div>

                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#65adff] selection:text-white pt-12 lg:pt-0">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-6">
                            <a
                                href="/"
                                className="flex flex-row justify-start text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff] select-none"
                            >
                                <FontAwesomeIcon
                                    icon={faDroplet}
                                    className="pr-5 pt-3 pl-1 text-4xl"
                                />
                                <h1 className="flex flex-col rounded ">
                                    <span className="text-3xl font-extrabold">
                                        Amazing Water
                                    </span>
                                    <span className="text-sm">(katanya)</span>
                                </h1>
                            </a>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-5 lg:gap-8">
                                <div className="flex flex-col items-end gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] lg:row-span-3">
                                    <div className="flex items-start gap-4">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#65adff]/10 sm:size-16 self-center">
                                            <FontAwesomeIcon
                                                icon={faBottleWater}
                                                className="size-5 sm:size-6 text-[#65adff]"
                                            />
                                        </div>

                                        <div className="pr-4 sm:pt-5 flex-grow self-center">
                                            <h2 className="text-xl font-semibold text-black select-none">
                                                Refreshingly Pure
                                            </h2>

                                            <p className="mt-4 text-sm/relaxed text-justify">
                                                Quench your thirst with our
                                                premium selection of water -
                                                whether you prefer the crisp
                                                taste of our regular water or
                                                the unparalleled purity of our
                                                reverse osmosis offerings, we've
                                                got you covered. Stay hydrated,
                                                stay refreshed.
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="products"
                                        className="bg-[#65adff] rounded-md transition duration-300 text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
                                    >
                                        <div className="px-3 py-2">
                                            <p className="text-lg font-semibold">
                                                Order Now
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex flex-col items-end gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] lg:row-span-3">
                                    <div className="flex items-start gap-4">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#65adff]/10 sm:size-16 self-center">
                                            <svg
                                                className="size-5 sm:size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <g fill="#65adff">
                                                    <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                    <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                    <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                </g>
                                            </svg>
                                        </div>

                                        <div className="sm:pt-5 pr-4 flex-grow self-center">
                                            <h2 className="text-xl font-semibold text-black">
                                                Optimal Hydration
                                            </h2>
                                            <p className="mt-4 text-sm/relaxed text-justify">
                                                Elevate your hydration routine
                                                with RO water. Experience the
                                                difference in every sip. Say
                                                goodbye to impurities and hello
                                                to optimal hydration with our
                                                reverse osmosis water. Invest in
                                                your health today and taste the
                                                purity tomorrow. Try it now!
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="info"
                                        className="bg-[#65adff] rounded-md transition duration-300 text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
                                    >
                                        <div className="px-3 py-2">
                                            <p className="text-lg font-semibold">
                                                Learn More
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 lg:pb-10 lg:col-span-2 lg:row-span-2">
                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold text-black">
                                            Contact
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            alamat
                                            <br />
                                            no telp
                                            <br />
                                            apa lagi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <footer className="pt-8 pb-12 text-center text-sm text-black select-none bottom-0">
                        <FontAwesomeIcon icon={faCopyright} /> PARANTHESES 2024
                        <br />
                        Made with Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer>
                </div>
            </div>
        </>
    );
}
