import style from '../css/Content.css'

const Content = () => {
  return (
    <div className="content">
      <div className="content__text">
        <h3>Hello I'm</h3>
        <h1>Orozobaev Ibragim</h1>
        <h5>Front-End Developer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum maxime quod molestias asperiores, sequi qui earum autem vel obcaecati minima rerum cum quia aspernatur fuga quisquam recusandae atque iste!</p>
        <a href="#"> Hire Me</a>
      </div>
      <div className="content__pic">
        {/* <div className="content__back"></div> */}
        <img src="https://stickerzone.shop/wp-content/uploads/2018/05/%D0%A2%D0%BE%D0%BD%D0%B8-%D0%A1%D1%82%D0%B0%D1%80%D0%BA.png" alt=""/>
      </div>
    </div>
  )
}

export default Content;
