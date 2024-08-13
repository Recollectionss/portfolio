import React, {FC} from 'react';
import './_list.scss'
interface ListProps  {
    children: React.ReactElement | React.ReactNode;
    vertical?:boolean;
}

const List: FC<ListProps> = ({children,vertical = false}) => {

    const listStyle = ['list'];

    if (vertical){
        listStyle.push('vertical-list')
    }

    return (
        <div className={listStyle.join(' ')}>
            {children}
        </div>
    );
};

export default List;