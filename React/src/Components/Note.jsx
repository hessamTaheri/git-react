import React, { Component } from "react";
import "./Note.css";
class note extends Component {
  state = {
    notes: [
      { name: "Hessam", text: "note 1" },
      { name: "ali", text: "note 2" },
      { name: "akbar", text: "note 3" },
      { name: "hossein", text: "note 4" },
      { name: "mansour", text: "note 5" },
    ],
  };

  checkNotes() {
    const { notes } = this.state;
    return notes.length === 0 ? "no notes" : notes[0].name;
  }
  render() {
    return (
      <div className={this.DynamicClass()}>
        <h1>{this.checkNotes()}</h1>
        <ul>
            {this.state.notes.map((note) => (
              <li>
                {note.name} : {note.text}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  DynamicClass() {
    let classes = "font-size ";
    classes += this.state.notes.length === 0 ? "red" : "green";
    return classes;
  }
}

export default note;


// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: []
// };


//   const onFormSubmit = (e) => {
//     e.preventDefault();
  
//     const option = e.target.elements.option.value;
  
//     if (option) {
//       app.options.push(option);
//       e.target.elements.option.value = '';
//       render();
//     }
//   };
  
//   const onRemoveAll = () => {
//     app.options = [];
//     render();
//   };
  
//   const appRoot = document.getElementById('app');
  
//   const render = () => {
//     const template = (
//       <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <p>{app.options.length}</p>
//         <button onClick={onRemoveAll}>Remove All</button>
//         <ol>
//           {
//             app.options.map((option) => <li key={option}>{option}</li>)
//           }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
  
//     ReactDOM.render(template, appRoot);
//   };
  
//   render();
  