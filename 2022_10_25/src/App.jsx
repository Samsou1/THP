import { useState} from 'react'
import './styles/main.scss'
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'
import Sidebar from './components/Sidebar'

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [existingNote, setExistingNote] = useState(null);

  const handleMarkdownInput = ([str1, str2]) => {
    setTitle(str1);
    setText(str2);
    setExistingNote(null);
  }

  const handleClickOnExistingNote = (note) => {
    setTitle(note.value.split('++')[0]);
    setText(note.value.split('++')[1]);
    setExistingNote(note);
  }

  return (
    <>
      <Sidebar handleClickOnExistingNote={handleClickOnExistingNote}/>
      <div id='display-container'>
        <NoteDisplay title={title} text={text}/>
        <MarkdownInput existingNote={existingNote} handleMarkdownInput={handleMarkdownInput}/>
      </div>
    </>
  )
}

export default App;
