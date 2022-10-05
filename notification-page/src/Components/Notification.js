


const Notification = ({ notifications, forRead }) => {
  return (
    <>
        {notifications.map((data) => (<div key={data.id} onDoubleClick={() => forRead(data.id)} className={data.read ? "notification read" : "notification"}>

          <img src={data.urlphoto} alt={data.urlphoto}/>

          <strong>{data.name}</strong>

           {data.activity} 

           <strong>{data.group}</strong>

           {data.displayphoto ? <img src={data.displayphoto} alt={data.displayphoto} className="displayphoto"></img> : ''}
           
           {data.message ? <div className="chat">{data.message}</div> : ''}
           <div className={!data.read ?"badge-circle-red" : ""}></div><br/><span>{data.time}</span></div>))}
    </>
  )
}

export default Notification
