"use client"
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Link, usePathname } from "@/i18n/routing";

import { useTranslations } from "next-intl";

const Navbar = () => {
    const t = useTranslations('Navbar');
    const pathname = usePathname();

    return (
        <>
        <nav className="flex items-center justify-between mb-8">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="flex flex-col gap-3">
                    <Link className="block mb-2" href={pathname} locale="en">English</Link>
                    <Link href={pathname} locale="ar">Arabic</Link>
                </SelectContent>
            </Select>
            <div>
                <ul className="flex gap-4">
                    <li>
                        <Link href={'/'}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>{t('about')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
