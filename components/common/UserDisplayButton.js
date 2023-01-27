import styles from "./userdisplaybutton.module.css";
import {BsChevronRight} from 'react-icons/bs'
import {BiBell} from 'react-icons/bi'

const UserDisplayButton = () => {
    return (
        <div className={styles.userdisplaybutton}>
            <div className={styles.notification}>
                <BiBell />
            </div>
            <div className={styles.container}>
            <img src="/images/dashboard/ProfileIcon.png" alt="" />
            <h2>NoobCoder101</h2>
            </div>
            <span><BsChevronRight/></span> 
        </div>
    );
};

export default UserDisplayButton;