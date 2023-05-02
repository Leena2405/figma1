import {FC} from "react";
import styles from './ServicesBox.module.scss';
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";
import {ReactComponent as ServicesBackgroundIcon} from "../../assets/icons/services-bacground.svg";
import {ReactComponent as DevelopmentIcon} from "../../assets/icons/development-icon.svg";
import {Link} from "react-router-dom";
import RouterLink from "../RouterLink/RouterLink";


interface ServicesBoxProps {

}
const ServicesBox:FC = () => {
    //zeby styles iconbacground bylo przyklejone w box do lewej strony i zeby nic nie mailo na niego wplywu
    return(
        <div className={styles.element}>
            <div className={styles.iconBox}>
                <div className={styles.boxNumber}>02</div>
                <ServicesBackgroundIcon className={styles.backgroundIcon}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.square}>
                    <DevelopmentIcon/>
                </div>
                <div className={styles.descriptionBox}>
                    <Heading text={'Web Development'} color={'black'} fontWeight={600}/>
                    <Paragraph text={'There are many variations of passages of Lorem Ipsum available,but the majority have'}/>
                </div>
                <RouterLink to={"/home"} text={'Learn more...'}/>
            </div>
        </div>
    )
}
export default ServicesBox;