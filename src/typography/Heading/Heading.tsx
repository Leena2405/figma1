import {FC} from "react";
import styles from './Heading.module.scss';
import cn from 'classnames';

interface HeadingProps {
   text: string;
   color: 'black' | 'orange';
   fontWeight: 400 | 500 | 600;
   className?: string;
}

const Heading:FC<HeadingProps>= ({text, color, fontWeight, className}) => {
    return(
        <h1 className={cn(
           styles.element,
           styles[`hasColor-${color}`],
           styles[`hasFontWeight-${fontWeight}`],
            className
        )}>{text}</h1>
    )
}
export default Heading;