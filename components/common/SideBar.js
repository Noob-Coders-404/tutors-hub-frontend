import styles from "./sidebar.module.css";

export default function SideBar() {
  return (
    <>
      <section className={styles.sidebar}>
        <div className={styles.container}>
          <h2>ELITE TUTION</h2>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href="#">
                  <span>ico</span> Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <span>ico</span> Subjects
                </a>
              </li>
              <li>
                <a href="#">
                  <span>ico</span> Time Table
                </a>
              </li>
              <li>
                <a href="#">
                  <span>ico</span> Payments
                </a>
              </li>
              <li>
                <a href="#">
                  <span>ico</span> Help
                </a>
              </li>
              <li>
                <a href="#">
                  <span>ico</span> Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.navbar}>
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
      </section>
    </>
  );
}
