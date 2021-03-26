import React from "react";
import { addPostActionCreator } from "../../../Redux/State";
import s from '../../css/Sidbar.module.css';


const Message = (props) => {

  let Messages = props.message.map(messag =>
    <div className={s.message}>
      <img className={s.prof__img} src="https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325" alt="" />
      <div className={s.mess__text} >
        {messag.mess}
      </div>
    </div>
  )

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator(text))
    newPostElement.current.value = '';
  }
  return (
    <div className={s.mess__block}>
      <div className={s.mess__header}>
        <div className={s.mess__profil}>
          <img className={s.prof__img} src="https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325" alt="" />
          <h3 >Andrew</h3>
        </div>
      </div>
      <div className={s.enter__mess}>
        {Messages}
        <form action="#">
          <textarea placeholder="Добавьте коментарий" ref={newPostElement} ></textarea>
          <button onClick={addPost}><svg width="30" height="30" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.4469 49.4321C39.435 49.4299 38.4528 49.0899 37.6561 48.4662L28.6024 41.4229L22.5089 48.1209C22.2407 48.4154 21.8991 48.6334 21.5191 48.7527C21.139 48.872 20.7342 48.8883 20.3458 48.7999C19.9574 48.7115 19.5994 48.5216 19.3085 48.2496C19.0175 47.9776 18.8039 47.6333 18.6896 47.2517L14.1743 32.2087L6.02387 29.3553C5.14396 29.0467 4.37878 28.4777 3.82997 27.7239C3.28117 26.97 2.97473 26.067 2.95136 25.1349C2.928 24.2027 3.18881 23.2855 3.69916 22.5051C4.20951 21.7247 4.94523 21.1181 5.80857 20.7658L46.1617 4.56895C46.9317 4.25779 47.7716 4.16109 48.5921 4.28914C49.4127 4.41719 50.1832 4.7652 50.8217 5.29617C51.4603 5.82715 51.943 6.52123 52.2186 7.30464C52.4942 8.08805 52.5524 8.93151 52.3869 9.74533L44.9719 45.7675C44.7524 46.8047 44.1829 47.7348 43.359 48.402C42.5352 49.0692 41.507 49.4329 40.4468 49.4321L40.4469 49.4321Z" fill="#A2A1FF" />
            <path d="M20.8396 48.8559C20.3568 48.8551 19.887 48.6988 19.4998 48.4103C19.1127 48.1219 18.8286 47.7164 18.6896 47.254L13.8447 31.1359C13.6932 30.6336 13.7222 30.0942 13.9267 29.6111C14.1311 29.128 14.4981 28.7316 14.9641 28.4907L38.7661 16.16C39.2432 15.9122 39.7933 15.8436 40.3167 15.9664C40.8401 16.0893 41.3021 16.3955 41.6192 16.8297C41.9363 17.2639 42.0874 17.7972 42.0451 18.3332C42.0028 18.8691 41.77 19.3722 41.3888 19.7513L25.4194 35.6553L23.0471 47.063C22.9458 47.5532 22.6837 47.9955 22.3026 48.3199C21.9214 48.6443 21.4429 48.8322 20.9428 48.8539C20.9077 48.8561 20.8725 48.856 20.8396 48.8559Z" fill="#6563FF" />
          </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
export default Message;
