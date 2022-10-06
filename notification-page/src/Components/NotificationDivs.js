
import React from "react"

const NotificationDivs = ({notification, toggleId }) => {
  return (
    <>

      <div className="profile-alignment-with-time"><img src={notification.urlphoto} alt={notification.urlphoto}/></div>

      <div className="activity"><span className="name">{notification.name}</span> {notification.activity} <span className="name">{notification.group}</span><br/>{notification.message ? <div className="chat">{notification.message}</div> : ""}<span className="time-stamp">{notification.time}</span></div>

      <div className="chess"><img src={notification.displayphoto} alt={notification.displayphoto} className="chess-photo"></img></div>
      
    </>
  )
}

export default NotificationDivs
