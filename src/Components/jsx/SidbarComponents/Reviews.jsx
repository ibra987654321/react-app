import React from "react";
import { NavLink } from "react-router-dom";
import s from '../../css/Sidbar.module.css';

const Reviews = (props) => {
  let path = "/Sidbar/" + props.id;
  return (
    <NavLink to={path}>
    <div className={s.icon__profil}>
     <img className={s.prof__img}  src="https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325" alt=""/>
    <h3 >{props.name}</h3>
    </div></NavLink>
  )
}
export default Reviews;
