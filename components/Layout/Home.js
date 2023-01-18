import SideBar from "../common/SideBar";
import TimeTable from "../dashboard/TimeTable/TimeTable";
import styles from "./home.module.css";
import Profile from "../dashboard/Profile/Profile";
import Notification from "../dashboard/Notification/Notification";
import UpcomingExams from "../dashboard/UpcomingExams/UpcomingExams";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={styles.dashboard}>
        <div>
          <SideBar />
        </div>
        <div className={styles.container}>
          <div>
            <div className={styles.title}>
              <h2>Hello, <span>NoobCoder101!</span></h2>
              <p>10 OCTOBER, 2022</p>
            </div>
            <div className={styles.timetable}>
            <TimeTable />
            </div>
            <Notification />
            <UpcomingExams />
          </div>
          <div className={styles.section2}>
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
