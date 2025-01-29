import {ReactNode} from "react";

export interface CustomerServiceInterface {
    icon: FooterIcons,
    contactType: string,
}

export interface NavbarLinks {
    link: string;
    name: string;
}

export type FooterIcons = "location" | "email" | "phone" | "time";

export type SectionIcons = "water" | "bubble" | "order";

export interface SectionHeaderInterface {
    icon: SectionIcons;
    title: string;
}

export interface CategoryInterface {
    link: string;
    image: string;
    text: string;
    color?: string;
}

export interface ContactWayInterface {
    title: string;
    name: string;
    href: string;
    name2?: string;
    href2?: string;
    name3?: string;
    href3?: string;
    target?: string;
    icon: ReactNode;
}