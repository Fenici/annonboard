import React, {Component} from 'react'

class Message extends Component {
  constructor(props) {
    super(props)

    this.handleThumbsUp =this.handleThumbsUp.bind(this)
    this.handleThumbsDown =this.handleThumbsDown.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleThumbsUp(){
    this.props.onLike(this.props.id)
  }

  handleThumbsDown(){
    this.props.onDisLike(this.props.id)

  }
  handleDelete(){
    this.props.onDelete(this.props.id)

  }

  render() {

    return (<li>
      {this.props.text}
      <i className="fa fa-trash pull-right delete" onClick={this.handleDelete}></i>
      <i className="fa fa-thumbs-down pull-right" onClick={this.handleThumbsDown}></i>
      <i className="fa fa-thumbs-up pull-right" onClick={this.handleThumbsUp}></i>
      <div className="pull-right">{this.props.likes}</div>
    </li>)

  }

}

export default Message
