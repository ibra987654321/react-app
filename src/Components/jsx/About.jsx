import n from '../css/About.css'
import x from '../css/Content.css'
import Skill from './Skill'

const About = () => {
  return (
    <div className="about">
      <div className="content__pic">
        <img src="https://stickerzone.shop/wp-content/uploads/2018/05/%D0%A2%D0%BE%D0%BD%D0%B8-%D0%A1%D1%82%D0%B0%D1%80%D0%BA.png" alt=""/>
      </div>
      <div className="content__text">
        <h3>About</h3>
        <h1>Why You Hire Me?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum maxime quod molestias asperiores, sequi qui earum autem vel obcaecati minima rerum cum quia aspernatur fuga quisquam recusandae atque iste!</p>
        <div className="about__skill">
          <Skill title="HTML/CSS" percent="87" />
          <Skill title="JavaScript" percent="67"/>
          <Skill title="React" percent="40"/>
          <Skill title="Vue" percent="50"/>
          <Skill title="Docker" percent="60"/>
        </div>
      </div>
    </div>
  )
}

export default About;