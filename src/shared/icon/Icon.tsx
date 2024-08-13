import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import './_icon.scss'

interface IconProps {
    icon: IconDefinition;
    size?: SizeProp;

}
const Icon: FC<IconProps> = ({icon,size}) => {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={icon} size={size ? size : 'xl'}/>
        </div>
    );
};

export default Icon;