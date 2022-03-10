import React from 'react'
import './style.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="gtp3_header section__padding" id="home">
      <div className="gtp3_header-content">
        <h1 className="gradient__text">Let’s Build Something
          amazing with GPT-3
          OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <div className="gtp3_header-content_input">
          <input className="" type='email' placeholder="Your Email address"/>
          <button className="" type='buttom' > Get Started</button>
          </div>
          <div className="gtp3_header-content_people ">
            <img src={people} alt="people"/>
            <p>1,600 people requested access a visit in last 24 hours </p> 
          </div>
          </div>
          <div className="gpt3_header-image">
            <img src={ai} alt="ai"/>
          </div>


    </div>
  )
}

export default Header