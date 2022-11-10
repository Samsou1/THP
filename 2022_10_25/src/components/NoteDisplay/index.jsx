import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = ({title, text}) => {
  const titleContent = {__html: converter.makeHtml(title)};
  const textContent = {__html: converter.makeHtml(text)};

  return (
  <div id='note-display'>
    <div id='title' dangerouslySetInnerHTML={titleContent}></div>
    <div id='note' dangerouslySetInnerHTML={textContent}></div>
  </div>
  )
}

export default NoteDisplay;