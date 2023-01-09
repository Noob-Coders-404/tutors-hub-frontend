import SideBar from "../common/SideBar";
import TimeTable from "../dashboard/TimeTable/TimeTable";
import styles from "./mainpage.module.css"
import Profile from "../dashboard/Profile/Profile"

const MainPage = () => {
  return (
    <>
    <div className={styles.dashboard}>
      <div>
      <SideBar />
      </div>
      <div className={styles.container}>
        <div>
      <TimeTable />
        </div>
        <div>
          <Profile/>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainPage;
