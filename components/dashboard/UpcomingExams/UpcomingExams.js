import styles from "./upcomingexams.module.css";

const UpcomingExams = () => {
  const data = [
    {
      date: 8,
      month: "OCT",
      day: "SAT",
      start: "09:30",
      end: "12:00",
      subject: "English",
    },
    {
      date: 8,
      month: "OCT",
      day: "SAT",
      start: "09:30",
      end: "12:00",
      subject: "English",
    },
    {
      date: 8,
      month: "OCT",
      day: "SAT",
      start: "09:30",
      end: "12:00",
      subject: "English",
    },
  ];
  return (
    <div className={styles.main}>
      <h2>Upcoming Exams</h2>
      <div className={styles.container}>
        {data.map((item,index)=>{
            return(
            <>
          <div>
              <div>
            <h2>{item.date}</h2>
            <h3>{item.month}, {item.day}</h3>
              </div>
            <div>

            <h4>{item.start} - {item.end}</h4>
            <h5>{item.subject}</h5>
            </div>
          </div>
          <div className={styles.line} />
          </>
            )
        })}
    </div>
    </div>
  );
};
export default UpcomingExams;
