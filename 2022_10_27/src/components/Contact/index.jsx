import nightMode from "../../assets/nightMode"
import { useContext, useState } from "react"

const Contact = () => {
  const nM = useContext(nightMode);
  if(nM.nM){
    return (
      <div className={'nightModeOn'}>
        <h2>Contact</h2>
        <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
        <form>
          <input type='text' placeholder='Your title here'></input>
          <textarea placeholder='Your message here'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }else{
    return (
      <div className={'nightModeOff'}>
        <h2>Contact</h2>
        <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
        <form>
          <input type='text' placeholder='Your title here'></input>
          <textarea placeholder='Your message here'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
  
}

export default Contact