import { useState } from 'react'
import Notification from './Components/Notification';
//images
import angela from './images/avatar-angela-gray.webp'
import anna from './images/avatar-anna-kim.webp'
import jacob from './images/avatar-jacob-thompson.webp'
import kimberly from './images/avatar-kimberly-smith.webp'
import webber from './images/avatar-mark-webber.webp'
import nathan from './images/avatar-nathan-peterson.webp'
import rizky from './images/avatar-rizky-hasanuddin.webp'
import chess from './images/image-chess.webp'


function App() {

//setting the date of the notifications
  var notifDate = new Date("October 1, 2022 13:00:00")
  var today = new Date()
  var day = (today.getDate() - notifDate.getDate());
  var hours = (today.getHours() - notifDate.getHours());
  var minutes = (today.getMinutes() - notifDate.getMinutes());
  var time

// formatting the hours, minutes and days. if a day is passed, date will be displayed instead.
  if (day > 0){
    time = (notifDate.getMonth()+1) + '-' + notifDate.getDate() + '-' + notifDate.getFullYear();
  } else {
    var hr = "hour"
    var min = "minute"
    if (hours > 1){
      hr = "hours"
    }
    if (minutes > 1){
      min = "minutes"
    }
    time = [hours, hr, minutes, min+" ago"]
  }

  const [notif, setNotif] = useState([
    {
      id: 0,
      name: "Mark Webber",
      urlphoto: webber,
      activity: "reacted to your recent post",
      group: "My first tournament today!",
      time: time,
      read: false
    },
    {
      id: 1,
      name: "Angela Gray",
      urlphoto: angela,
      activity: "followed you",
      time: time,
      read: false
    },
    {
      id: 2,
      name: "Jacob Thompson",
      urlphoto: jacob,
      activity: "joined on your group",
      group: "Chess Club",
      time: time,
      read: false
    },
    {
      id: 3,
      name: "Rizky Hasanuddin",
      urlphoto: rizky,
      activity: "sent you a private message",
      message: "\"Hello! Thanks for setting up the Chess Club! I've been a member for a few weeks now and I'm already having lots of fun and improving my game.\"",
      time: time,
      read: false
    },
    {
      id: 4,
      name: "Kimberly Smith",
      urlphoto: kimberly,
      activity: "commented on your picture",
      time: time,
      displayphoto: chess,
      read: false
    },
    {
      id: 5,
      name: "Nathan Peterson",
      urlphoto: nathan,
      activity: "reacted to your recent post",
      group: "5 end-game strategies to increase your win rate",
      time: time,
      read: false
    },
    {
      id: 6,
      name: "Anna Kim",
      urlphoto: anna,
      activity: "left the group",
      group: "Chess Club",
      time: time,
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
        <button type="button" className="btn btn-light btn-sm" onClick={() => setNotif(notif.map((find) => find ? {...find, read: true} : find))}>Mark all as read</button>
      </div>

      <div className="notification-box">
          <Notification notifications={notif} forRead={setToRead}></Notification>
      </div>

    </div>
    </div>

  );
}

export default App;
