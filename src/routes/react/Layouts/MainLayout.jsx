import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Background from "@/Components/Background";
import Dropdown from "@/Components/Dropdown";

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
                                    <span className="text-xs">
                                        she RO on my water till i amazing
                                    </span>
                                </h1>
                            </Link>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <>
                                        <Link href={route("cart")}>
                                            <FontAwesomeIcon
                                                icon={faCartShopping}
                                                className="pb-2 text-2xl text-black py-3 px-2"
                                            />
                                        </Link>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <div className="flex flex-row rounded-md px-3 py-2 text-black ring-1 ring-transparent transition duration-500 hover:opacity-70 focus:outline-none focus-visible:ring-[#65adff] focus:bg-white">
                                                    <div className="size-8 bg-gray-700 rounded-full relative overflow-clip">
                                                        <div className="size-3 rounded-full bg-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3"></div>
                                                        <div className="size-6 rounded-full bg-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-full"></div>
                                                    </div>
                                                    <p className="leading-7 pl-2 select-none">
                                                        {auth.user.name}
                                                    </p>
                                                </div>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("dashboard")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </>
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
