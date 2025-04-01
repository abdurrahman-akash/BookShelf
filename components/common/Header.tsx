"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">BookShelf</Link>

            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link href="/library" 
                    className={cn(
                        "text-base cursor-pointer capitalize",
                        pathName === "/library" ? "text-amber-500" : "text-slate-900",
                    )}>Library</Link>
                </li>
            </ul>
        </header>
    )
}