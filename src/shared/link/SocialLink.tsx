import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import './_link.scss'

interface LinkProps {
    href:string;
    icon: IconDefinition;
}

const SocialLink: FC<LinkProps> = ({href,icon}) => {
    return (
        <a href={href} className="link">
            <FontAwesomeIcon icon={icon} size="xl"/>
        </a>
    );
};

export default SocialLink;