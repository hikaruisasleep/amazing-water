import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Background from "@/Components/Background";

export default function MainLayout({
    children,
    title,
    auth = false,
    ...props
}) {
    return (
        <>
            <Head title={title} />
            <div className="bg-gray-50 text-black/50">
                <Background />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#65adff] selection:text-white pt-12 lg:pt-0">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-6">
                            <Link
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
                            </Link>
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
                        <main className="mt-6">{children}</main>
                    </div>
                    <footer className="pt-8 pb-12 text-center text-sm text-black select-none bottom-0">
                        <FontAwesomeIcon icon={faCopyright} /> PARANTHESES 2024
                        <br />
                        Made with Laravel v11.5.0 (PHP 8.3.4)
                    </footer>
                </div>
            </div>
        </>
    );
}