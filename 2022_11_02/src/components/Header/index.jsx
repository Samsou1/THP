import {Link} from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { fullNameAtom } from '../../stores/user.js';
import { skillsCountAtom } from '../../stores/skills.js';

const Header = () => {
  const fullName = useAtomValue(fullNameAtom);
  const skillCount = useAtomValue(skillsCountAtom); 

  return (
    <div className={'header'}>
      <img src='src/assets/react.svg' alt='react-logo'/>
      <div>
        <Link key={`home`} to={`/`}>Home </Link>
        <Link key={`profile`} to={`/profile`}>Profile </Link>
      </div>
      <div>
        <p key={'fullName'}>{fullName? fullName:'Unknown'}</p>
        <p key={'skillsCount'}>{skillCount !== 0 ? skillCount + ' skills' : 'No skill'}</p>
      </div>
    </div>
  )
}

export default Header;