import {FC} from "react";
import Heading from '../../typography/Heading/Heading';
import styles from './Services.module.scss';
import Paragraph from "../../typography/Paragraph/Paragraph";
import ServicesBox from "../ServicesBox/ServicesBox";

const Services:FC= () => {
    return (
        <div className={styles.element}>
            <div className={styles.wrapper}>
                <Heading className={styles.services} text={'Services'} color={'orange'} fontWeight={500} />
                <Heading className={styles.provideServices} text={'We Provide Best Creative Services.'} color={'black'} fontWeight={600} />
                <Paragraph
                    className={styles.variations}
                    text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont'} />
            </div>
            <ServicesBox/>
        </div>
    )}

export default Services;