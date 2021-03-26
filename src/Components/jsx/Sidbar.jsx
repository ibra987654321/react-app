import React from "react";
import s from '../css/Sidbar.module.css';
import Reviews from "./SidbarComponents/Reviews";
import Message from "./SidbarComponents/Message";
import { addUserActionCreator } from "../../Redux/State";



const Sidbar = (props) => {
  let Reviewses = props.review.map(el => <Reviews name={el.name} id={el.id} />)

  let newUserElement = React.createRef();
  let addUser = () => {
    let text = newUserElement.current.value;
    props.dispatch(addUserActionCreator(text))
    newUserElement.current.value = '';
  }
  return (
    <div className={s.back}>
      <div className={s.reviews}>
        <div className={s.add__message}>
          <h3>Messages</h3>
          <form method="#">
            <input ref={newUserElement} type="text" name="" placeholder="Ваше Имя" id=""/>
            <button onClick={addUser}>Add</button>
          </form>
        </div>
        {Reviewses}
      </div>
      <div className={s.reviews__mess}>
       <Message  review={props.review} 
        message={props.message} dispatch={props.dispatch}/>
      </div>
    </div>
  )
}

export default Sidbar;
