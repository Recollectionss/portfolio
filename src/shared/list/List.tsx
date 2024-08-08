import React, {FC} from 'react';
import './_list.scss'
interface ListProps  {
    children:React.FunctionComponent | React.ReactNode;
}

const List: FC<ListProps> = ({children}) => {
    return (
        <div className="list">
            {children}
        </div>
    );
};

export default List;