import ResponsiveItemCard from "@/Components/ResponsiveItemCard";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Products({ auth }) {
    return (
        <>
            <MainLayout title="Products" auth={auth}>
                <div className="flex flex-col items-end justify-between">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        <ResponsiveItemCard
                            auth={auth}
                            title="water"
                            description="normal water"
                        />

                        <ResponsiveItemCard
                            auth={auth}
                            title="rare water"
                            description="from the springs of maro'ah deep in the himalayan mountains collected from the blood of a thousand sacrifices from a sacred ritual"
                        />
                    </div>
                    <div className="grid gap-2 grid-cols-2 mt-8">
                        <Link
                            href=""
                            className="w-36 bg-gray-300 rounded-md transition duration-300 flex justify-center text-black/50 hover:text-black/60 select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
                        >
                            <div className="px-3 py-2">
                                <p className="text-lg font-semibold">
                                    View Cart
                                </p>
                            </div>
                        </Link>
                        <Link
                            href=""
                            className="w-36 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
                        >
                            <div className="px-3 py-2">
                                <p className="text-lg font-semibold">
                                    Order Now
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
