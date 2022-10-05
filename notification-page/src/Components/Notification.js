


const Notification = ({ notifications, forRead }) => {
  return (
    <>
      
        <ul>{notifications.map((data) => (<li key={data.id} onDoubleClick={() => forRead(data.id)} className={data.read ? "read" : ""}><img src={data.urlphoto} alt={data.urlphoto}/><strong>{data.name}</strong> {data.activity} <strong>{data.group}</strong>{data.displayphoto ? <img src={data.displayphoto} alt={data.displayphoto} className="displayphoto"></img> : ''}{data.message ? <div className="chat">{data.message}</div> : ''}<div className={!data.read ?"badge-circle-red" : ""}></div><br/><span>{data.time}</span></li>))}</ul>

    </>
  )
}

export default Notification
