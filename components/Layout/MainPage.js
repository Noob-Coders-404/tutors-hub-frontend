import SideBar from "../common/SideBar";
import TimeTable from "../dashboard/TimeTable/TimeTable";
import styles from "./mainpage.module.css"
import Profile from "../dashboard/Profile/Profile"
import Notification from "../dashboard/Notification/Notification";
import UpcomingExams from "../dashboard/UpcomingExams/UpcomingExams";

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
      <Notification/>
        </div>
        <div>
          <Profile/>
          <UpcomingExams/>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainPage;
