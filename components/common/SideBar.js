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
    </>
  );
}
