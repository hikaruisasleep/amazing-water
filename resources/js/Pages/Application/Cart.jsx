import CartCard from "@/Components/CartCard";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

export default function Info({ auth, items }) {
    return (
        <>
            <MainLayout title="Cart">
                {items.map((item) => {
                    <CartCard title={item.name} amount={item.quantity} />;
                })}
            </MainLayout>
        </>
    );
}
