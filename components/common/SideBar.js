import styles from "./sidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import {BsBook} from 'react-icons/bs'
import {TbTable} from 'react-icons/tb'
import {HiOutlineCreditCard} from 'react-icons/hi'
import {BiHelpCircle} from 'react-icons/bi'
import {IoSettingsOutline,IoLogOutOutline} from 'react-icons/io5'

export default function SideBar() {
  return (
    <>
      <section className={styles.sidebar}>
        <div className={styles.curve}/>
        <h2>ELITE TUTION</h2>
        <div className={styles.options}>
          <div>
            <RxDashboard />
            <h3>Dashboard</h3>
          </div>
          <div>
            <BsBook />
            <h3>Subjects</h3>
          </div>
          <div>
            <TbTable />
            <h3>Time Table</h3>
          </div>
          <div>
            <HiOutlineCreditCard />
            <h3>Payments</h3>
          </div>
          <div>
            <BiHelpCircle />
            <h3>Help</h3>
          </div>
          <div>
            <IoSettingsOutline />
            <h3>Settings</h3>
          </div>
        </div>
        <div className={styles.logout}>
          <IoLogOutOutline />
          <h3>Logout</h3>
        </div>
      </section>
      {/* <section className={styles.navbar}>
        <div>

        <div>
          <img src="/images/dashboard/dashboardIcon.svg" alt="" />
          <h3></h3>
        </div>
        <div>
          <img src="/images/dashboard/subjects.svg" alt="" />
          <h3>Subjects</h3>
        </div>
        <div>
          <img src="/images/dashboard/timetable.svg" alt="" />
          <h3>Timetable</h3>
        </div>
        <div>
          <img src="/images/dashboard/messages.svg" alt="" />
          <h3>Messages</h3>
        </div>
        </div>
      </section> */}
    </>
  );
}
