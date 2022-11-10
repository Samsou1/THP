import Note from '../Note'

const Sidebar = ({handleClickOnExistingNote}) => {
  const notes = () => {
    let ary = [];
    for(let i = 0; i < localStorage.length; i++){
      ary.push({'id' : i, 'value':localStorage.getItem(i)}) ;
    }
    return ary;
  }

  return <div id='sidebar-container'>
    {notes().map((note) => 
      <Note key={note.id} note={note} handleClickOnExistingNote={handleClickOnExistingNote}/>
      )}
  </div>
}

export default Sidebar;