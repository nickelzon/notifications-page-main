import { useState } from 'react'
import Notification from './Components/Notification';


function App() {

  const [notif, setNotif] = useState([
    {
      id: 0,
      name: "Mark Webber",
      urlphoto:"/images/avatar-mark-webber.webp",
      activity: "reacted to your recent post",
      group: "My first tournament today!",
      time:"1m ago",
      read: false
    },
    {
      id: 1,
      name: "Angela Gray",
      urlphoto:"/images/avatar-angela-gray.webp",
      activity: "followed you",
      group: "",
      time:"5m ago",
      read: false
    },
    {
      id: 2,
      name: "Jacob Thompson",
      urlphoto:"/images/avatar-jacob-thompson.webp",
      activity: "reacted to your recent post",
      group: "",
      time:"2 weeks ago",
      read: false
    },
    {
      id: 3,
      name: "Rizky Hasanuddin",
      urlphoto:"/images/avatar-rizky-hasanuddin.webp",
      activity: "sent you a private message",
      group: "",
      time:"2 weeks ago",
      read: false
    },
    {
      id: 4,
      name: "Kimberly Smith",
      urlphoto:"/images/avatar-kimberly-smith.webp",
      activity: "commented on your picture",
      group: "",
      time:"1 week ago",
      read: false
    },
    {
      id: 5,
      name: "Nathan Peterson",
      urlphoto:"/images/avatar-nathan-peterson.webp",
      activity: "reacted to your recent post",
      group: "5 end-game strategies to increase your win rate",
      time:"2 weeks ago",
      read: false
    },
    {
      id: 6,
      name: "Anna Kim",
      urlphoto:"/images/avatar-anna-kim.webp",
      activity: "left the group",
      group: "Chess Club",
      time:"2 weeks ago",
      read: false
    }
  ])

  const setToRead = (respond) => {
    setNotif(notif.map((find) => find.id === respond ? {...find, read: true} : find))
  }

  return (
    <div className="main">
    <div className="notification-page">

      <div className="heading">
        <h5><strong>Notifications</strong><span className={notif.filter((a) => a.read === false).length > 0 ? "badge text-bg-" : "badge-none"}>{notif.filter((a) => a.read === false).length}</span></h5>
        <button type="button" className="btn btn-light btn-sm" onClick={() => setNotif(notif.map((find) => find ? {...find, read: true} : find))}>Mark as all read</button>
      </div>

      <div className="notification-box">
          <Notification notifications={notif} forRead={setToRead}></Notification>
      </div>

    </div>
    </div>

  );
}

export default App;
