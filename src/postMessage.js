import React, {Component} from 'react'

class PostMessage extends Component {

  constructor(props) {
    super(props)

    //add Array
    this.state = {text: ''}

    //set for binding
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    this.props.onSubmit(this.state.text)

  }

  render() {
    return (<div className="panel-body">
      <div className="form-group">
        <label>Message:</label>
        <textarea id="message" type="text" className="form-control" value={this.state.text} onChange={this.handleChange}></textarea>
      </div>
      <button id="submit" className="btn btn-default" onClick={this.handleSubmit}>Post to board</button>
    </div>)

  }

}

export default PostMessage
