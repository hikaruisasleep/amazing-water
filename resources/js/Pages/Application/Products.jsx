import MainLayout from "@/Layouts/MainLayout";
import React from "react";

export default function Products({ auth }) {
    return (
        <>
            <MainLayout title="Products" auth={auth}>
                product page lmao
            </MainLayout>
        </>
    );
}
