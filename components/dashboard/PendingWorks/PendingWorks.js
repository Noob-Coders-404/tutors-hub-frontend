import styles from "./pendingworks.module.css";

const PendingWorks = () => {
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
        <h2>Pending Works</h2>
        <div className={styles.container}>
            {data.map((item,index)=>{
                return(
                    <>
                        <div>
                            <div>
                                <h2>English</h2>
                                <p>Assignment 1</p>
                            </div>
                            <div>
                                <h4>Submit before:</h4>
                                <h3>05/10/2022, 11:59 pm</h3>
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
export default PendingWorks;
