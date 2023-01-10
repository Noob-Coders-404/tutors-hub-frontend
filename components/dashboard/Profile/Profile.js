import styles from "./profile.module.css"
import {BsChevronRight} from 'react-icons/bs'
const Profile = () =>{
return(
    <>
    <div className={styles.profile}>
        <div className={styles.container}>
            <div>
            <img src="/images/dashboard/ProfileIcon.png" alt="" />
            <div>
                <h2>NoobCoder101</h2>
                <p>8th Standard</p>
                <p>Roll No: 21</p>
            </div>
            </div>
        </div>
            <span><BsChevronRight/></span>
    </div>
    </>
)
}

export default Profile;