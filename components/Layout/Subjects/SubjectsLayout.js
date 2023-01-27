import SideBar from "../../common/SideBar"
import UserDisplayButton from "../../common/UserDisplayButton"
import SubjectButton from "../../subjects/SubjectButton";
import styles from "./subjectslayout.module.css"

const SubjectsLayout = () => {
    return (
      <div className={styles.subjectslayout}>
        <UserDisplayButton />
        <div className={styles.subjects}>
          <div>
            <SubjectButton />
            <SubjectButton />
            <SubjectButton />
            <SubjectButton />
            <SubjectButton />
            <SubjectButton />
          </div>
        </div>
      </div>
    );
  };
  
  export default SubjectsLayout;