import {useState} from 'react';
import { firstNameAtom, lastNameAtom } from '../../stores/user.js';
import { skillsAtom } from '../../stores/skills.js';
import { useSetAtom } from 'jotai';

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [skills, setSkills] = useState("");

  const setSkillsAtome = useSetAtom(skillsAtom);
  const setFirstNameAtome = useSetAtom(firstNameAtom);
  const setLastNameAtome = useSetAtom(lastNameAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {'firstNname': firstName, 'lastName': lastName, 'skills': skills.trim().split(',') };
    setSkillsAtome(skills.trim().split(','));
    setFirstNameAtome(firstName);
    setLastNameAtome(lastName);
  }

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.attributes.name.nodeValue){
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "skills":
        setSkills(e.target.value);
        break;
    }
  }

  return (
    <div className='content'>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label key={"first_name"}>
          First name:
          <input name="firstName" type="text" required onChange={handleChange} value={firstName}/>
        </label>
        <label key={"last_name"}>
          Last name:
          <input name="lastName" type="text" required onChange={handleChange} value={lastName}/>
        </label>
        <label key={"skills"}>
          Skills:
          <input name="skills" type="text" onChange={handleChange} value={skills}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Profile;