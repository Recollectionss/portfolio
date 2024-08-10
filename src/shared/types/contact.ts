import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export interface ContactInfo {
    icon: IconDefinition;
    title: string;
    body: string;
}

export interface ContactLink {
    href: string;
    icon: IconDefinition;
}