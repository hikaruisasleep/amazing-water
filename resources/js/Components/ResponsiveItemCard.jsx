import { React, useState } from "react";

export default function ResponsiveItemCard({ auth, title, description }) {
    const [quantity, setQuantity] = useState(0);
    const increase = () => {
        setQuantity((quantity) => quantity + 1);
    };
    const decrease = () => {
        quantity > 0 ? setQuantity((quantity) => quantity - 1) : setQuantity(0);
    };

    return (
        <>
            <div className="flex flex-row justify-between bg-white rounded-lg p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col">
                    <p className="text-black text-xl">{title}</p>
                    <p className="text-sm pt-4">{description}</p>
                </div>
                {auth.user ? (
                    <div className="flex flex-row justify-center items-center ml-2">
                        <div className="h-min w-max rounded-lg border border-gray-800 overflow-clip">
                            <button
                                className="bg-gray-200 w-6"
                                onClick={decrease}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                onChange={(change) => {
                                    !isNaN(change.target.value)
                                        ? setQuantity(change.target.value)
                                        : "";
                                    console.log(typeof change.target.value);
                                }}
                                className="w-8 p-0 text-center bg-white border border-gray-800 border-y-0"
                            />
                            <button
                                className="bg-gray-200 w-6"
                                onClick={increase}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
