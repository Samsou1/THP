import { atom } from 'jotai';
import { atomWithReducer } from 'jotai/utils';

export const skillsAtom = atom([]);

export const skillsCountAtom = atom((get) => {
  const skills = get(skillsAtom)
  return skills.length;
})