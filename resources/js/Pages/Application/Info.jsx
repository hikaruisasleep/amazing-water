import MainLayout from "@/Layouts/MainLayout";
import React from "react";

export default function Info({ auth }) {
    return (
        <>
            <MainLayout title="Information">
                <div className="flex flex-col justify-center items-center">
                    <p>info page</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id iure dolorum quam quidem explicabo officiis,
                        quis aliquam ut nesciunt minus impedit modi? Quod rerum
                        saepe, odit nulla cum voluptatibus deleniti.
                    </p>
                </div>
            </MainLayout>
        </>
    );
}
