import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


// class MyList extends Component {
  
//   state ={
//     toDoItemArray: ['ice cream', 'dinosaurs', 'hobbits']
//   }

//   clearList (e) {
//     this.setState({
//       toDoItemArray: null
//     })
//   }

//   render() {
    
//     let excitedPhrases = this.state.toDoItemArray.map( (phrase, index) => {
//       return <ListItem key={index} doThis={phrase}/>
//     })

//     return (
//       <div>
//         <h1> Things I should stop procrastinating:</h1>
//         <ul>
//           { excitedPhrases }
//         </ul>
//         <button onClick={(e) => this.clearList}>Clear List</button>
//       </div>
//     )
//   }
// }

// export default MyList

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: ['ice cream', 'dinosaurs', 'hobbits'],
      newItem: ''
    }
  }

  clearList (e) {
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e){
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e){
    e.preventDefault()
    const newArray = this.state.toDoItemArray
    newArray.push(this.state.newItem)
        
    this.setState({
      toDoItemArray: newArray
    })
   
  }

  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList