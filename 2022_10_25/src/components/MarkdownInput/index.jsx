import { useState, useEffect} from 'react';

const MarkdownInput = ({handleMarkdownInput, existingNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleChangeText = (e) => {
    setText(e.target.value);
    setTitle(document.getElementsByTagName('input')[0].value)
    setError(null);
    handleMarkdownInput([document.getElementsByTagName('input')[0].value, e.target.value]);
    e.preventDefault();
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setText(document.getElementsByTagName('textarea')[0].value)
    setError(null);
    handleMarkdownInput([e.target.value, document.getElementsByTagName('textarea')[0].value]);
    e.preventDefault();
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(title === ''){
      setError("Title can't be blank");
    } else {
      setError(null);
      if(existingNote !== null){
        console.log('we tried');
        localStorage.setItem(existingNote.id, title + '++' + text);
      }else{
        localStorage.setItem(`${localStorage.length}`, title + '++' + text);
      }
      alert('You successfully created a note');
    }
  }
  
  return <form onSubmit={handleSubmit} >
    <input type='text' onChange={handleChangeTitle} value={existingNote?.value.split('++')[0]} placeholder='Give a title to your note'></input><br></br>
    <textarea onChange={handleChangeText} value={existingNote?.value.split('++')[1]} placeholder='Type your note here'></textarea><br></br>
    <p>{error}</p>
    <input type="submit" value='Save' data-id={existingNote?.id}></input>
  </form>
}

export default MarkdownInput;