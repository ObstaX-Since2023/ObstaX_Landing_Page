import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const Headeritems = [
        { label: "How it works", href: "/product" },
        { label: "Who are we", href: "/about" },
        { label: "Support us", href: "/support" },
    ]

    return (
        <header className="sticky top-0 z-50 bg-slate-300 w-full px-8 sm:px-16 py-4">
            <div className="flex justify-between items-center max-w-7xl sm:px-16 mx-auto w-full">

                <Link href="/" className="text-2xl font-bold">
                    ObstaX
                </Link>

                <div className="flex flex-row gap-x-6">
                    <div className="flex items-center space-x-6 text-2xl">

                        {Headeritems.map(item => (
                            <Link key={item.label} id={item.label} href={item.href} className="nav-link hidden md:flex">
                                {item.label}
                            </Link>
                        ))}

                        {/* <Button asChild className="button hover:bg-secondary hover:text-foreground">
                            <Link href="/product/pre-order">
                                Pre-Order
                            </Link>
                        </Button> */}

                        <Button asChild className="button hover:bg-secondary hover:text-foreground">
                            <Link href="https://forms.gle/ULs82urQdHTjpYN79" target="_blank" rel="noopener noreferrer">
                                Register Interest
                            </Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40 justify-end" align="end" >
                                {Headeritems.map((item) => (
                                    <DropdownMenuItem asChild className="cursor-pointer">
                                        <Link href={item.href} id={item.label} key={item.label}>{item.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

            </div>
        </header>
    )
}
