import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Message from './Message'
import PostMessage from './postMessage'
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          id: uuid.v4(),
          text: "hello",
          likes: 0
        }, {
          id: uuid.v4(),
          text: "Apple",
          likes: 1
        }, {
          id: uuid.v4(),
          text: "Orange",
          likes: 2
        }, {
          id: uuid.v4(),
          text: "Fruits xxxxxxxx",
          likes: 3
        }
      ]
    }
    //why ?
    this.handleLike = this.handleLike.bind(this)
    this.handleDisLike = this.handleDisLike.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }
  //repsent argument pass in

  // handle submit function
  handleSubmit(text) {

    const messages = {
      id: uuid.v4(),
      text: text,
      likes: 0
    }

    this.state.messages.push(messages)

    this.setState({messages: this.state.messages})

    console.log(messages)
  }

  handleLike(id) {
    const message = this.state.messages.find(message => message.id === id)

    message.likes = message.likes + 1

    this.setState({message: this.state.messages})
  }

  handleDisLike(id) {
    const message = this.state.messages.find(message => message.id === id)
    message.likes = message.likes - 1

    this.setState({message: this.state.messages})
  }

  handleDelete(id) {
    const newMessage = this.state.messages.filter(message => message.id != id)

    this.setState({messages: newMessage})
  }

  handleSort() {
// using sorting method provide by Native JS
    const messages = this.state.messages.sort((a, b) => {
      if (a.likes > b.likes) {
        this.setState({ title: "New title" });

        return a.likes - b.likes

      } else {
        return b.likes - a.likes
      }
    })
    console.log(this.state.messages);

    this.setState({messages: this.state.messages})

  }

  handleOrder() {}

  render() {
    //return JSX
    return (<div>
      <Header title={`Chuck`}/>

      <div className="container">
        <div className="panel-group">
          <div className="panel panel-primary">
            <div className="panel-heading">Post a message</div>
            <PostMessage onSubmit={this.handleSubmit}/>
          </div>
        </div>

        <hr/> {/*
          <div clasName="row">

            <form class="navbar-form navbar-left pull-right">
                   <div class="form-group">
                     <input type="text" class="form-control" placeholder="Search" />
                   </div>
                   <button type="submit" class="btn btn-default">Submit</button>
              </form>

          </div> */
        }

        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">Message Board

              <div className="pull-right">
                <button onClick={this.handleSort}>Sort</button>
              </div>
              <div className="pull-right col-md-1">
                <button onClick={this.handleOrder}>Newest</button>
              </div>

            </div>

            <div className="panel-body">
              <ul className="message-board">

                {
                  this.state.messages.map(message => {
                    return < Message
                    text = {
                      message.text
                    }
                    likes = {
                      message.likes
                    }
                    id = {
                      message.id
                    }
                    onLike = {
                      this.handleLike
                    }

                    onDisLike = {
                      this.handleDisLike
                    }

                    onDelete = {
                      this.handleDelete
                    }

                    onChange = {

                      this.handleChange
                    }
                    />
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
//Default able to reuse the Component
export default App;
