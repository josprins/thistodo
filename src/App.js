import React from 'react';
import './bootswatch.css'
import './App.css';



class App extends React.Component {
  state = {
    items: [],
    newItem: {
      text: ''
    }
  }

  handleInput = e => {
    this.setState({
      newItem: {
        id: Date.now(),
        text: e.target.value
      }
    })
  }

  addItem = e => {
    e.preventDefault()
    const tempNewItem = this.state.newItem
    if (tempNewItem.text !== "") {
      const items = [...this.state.items, tempNewItem]
      this.setState({
        items: items,
        newItem: {
          id: '',
          text: ''
        }
      })
      this.alertMessage("A todo was added", "primary")
    }
  }

  updateItem = (id, text) => {
    const items = this.state.items
    items.forEach(item => {
      if (item.id === id) {
        item.text = text
      }
    })
    this.setState({
      items: items
    })
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredItems
    })
    this.alertMessage("The todo is deleted", "success")
  }

  alertMessage(message, className) {
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const form = document.querySelector('.form-group')
    container.insertBefore(div, form)

    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 2200)
  }


  render() {
    return (
      <div className="App container">
        <header>
          <h1>This<strong>To</strong>Do</h1>
        </header>
        <form onSubmit={this.addItem} className="form-group form-container">
          <label htmlFor="exampleInputEmail1"></label>
          <input
            type="text"
            value={this.state.newItem.text}
            onChange={this.handleInput}
            className="form-control input-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter a todo.."
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary knop"
          >
            Add Todo
          </button>
        </form>
        <div>
          {this.state.items.map(item =>
            <div
              className="alert alert-dismissible alert-light todo-item"
              key={item.id}
            >
              <input
                type="text"
                className="form-control todo-input"
                onChange={e => { this.updateItem(item.id, e.target.value) }}
                key={item.id}
                value={item.text}
              />
              <button
                onClick={() => this.deleteItem(item.id)}
                type="button"
                className="close"
                data-dismiss="alert"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

}

export default App;
