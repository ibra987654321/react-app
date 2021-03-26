import n from '../css/About.css'
import x from '../css/Content.css'

const Skill = (props) => {
  return (
          <div className="skill__item">
            <div className="skill__head">
              <h6>{props.title}</h6>
              <p><span className="counter">{props.percent}</span>"%"</p>
            </div>
            <div className="skill__bar">
              <div className="skill__line" style={{ width:props.percent+'%'}} ></div>
            </div>
          </div>
  )
}

export default Skill;