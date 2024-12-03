"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { MyListingCard } from "@/components/MyListingCard";

export default function My ({userId}) {
    return (
        <session className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <article className="col-span-3">
                <MyListingCard/>
            </article>
            <aside>

            </aside>

        </session>
    )
}