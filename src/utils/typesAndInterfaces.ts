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