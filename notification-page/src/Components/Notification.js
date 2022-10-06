import NotificationDivs from "./NotificationDivs"


const Notification = ({ notifications, forRead }) => {
  return (
    <>
        {notifications.map((data) => (<div key={data.id} className={!data.read ? "notification" : "read"} onDoubleClick={() => forRead(data.id)}><NotificationDivs notification={data}/></div>))}
    </>
  )
}

export default Notification
