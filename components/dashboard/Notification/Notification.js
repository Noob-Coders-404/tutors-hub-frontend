import { BsChevronRight } from "react-icons/bs";
import styles from "./notification.module.css";
const Notification = () => {
  const data = [
    {
      icon: "/images/dashboard/ProfileIcon.png",
      title: "Elite Tution",
      desc: "Lorem ipsum dolor sit amet, ",
      time: "09:30",
    },
    {
      icon: "/images/dashboard/ProfileIcon.png",
      title: "Elite Tution",
      desc: "Lorem ipsum dolor sit amet, ",
      time: "09:30",
    },
    {
      icon: "/images/dashboard/ProfileIcon.png",
      title: "Elite Tution",
      desc: "Lorem ipsum dolor sit amet, ",
      time: "09:30",
    },
   
  ];
  return (
    <div className={styles.notification}>
      <div>
        <h2>Recent Notifications</h2>
        <span>View All</span>
      </div>
      <div className={styles.container}>
        {data.map((item,index)=>(
        <div key={index}>
          <img src={item.icon} alt="" />
          <div>
            <h3>{item.title}</h3>
            <div className={styles.content}>
              <p>
                {item.desc}
              </p>
              <span className={styles.time}>{item.time}</span>
            </div>
          </div>
          <span>
            <BsChevronRight />
          </span>
        </div>
        ))}
      </div>
    </div>
  );
};
export default Notification;
