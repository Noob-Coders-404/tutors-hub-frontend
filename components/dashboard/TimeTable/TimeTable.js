import styles from './timetable.module.css'

export default function TimeTable() {
  return (
    <>
      <section className={styles.timetable}>
        <h2>Todays Timetable</h2>
        <div className={styles.container}>
          <di className={styles.date}>
            <h3>10</h3>
            <div>
              <span>OCT,</span>
              <span>SAT</span>
            </div>
          </di>
          <div className={styles.subjects}>
          <div>
            <h4>09:00 AM</h4>
            <span>English</span>
          </div>
          <div>
            <h4>09:00 AM</h4>
            <span>English</span>
          </div>
          <div>
            <h4>09:00 AM</h4>
            <span>English</span>
          </div>
          <div>
            <h4>09:00 AM</h4>
            <span>English</span>
          </div>
          <div>
            <h4>09:00 AM</h4>
            <span>English</span>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
