import {FC} from "react";
import styles from './Paragraph.module.scss';
import cn from 'classnames';

interface ParagraphProps {
    text: string;
    color?: 'black' | 'orange';
    className?: string;
}

const Paragraph:FC<ParagraphProps>= ({text, color, className}) => {
    return(
        <p className={cn(
            styles.element,
            styles[`hasColor-${color}`],
            className
        )}>{text}</p>
    )
}
export default Paragraph;