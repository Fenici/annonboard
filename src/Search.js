import React, {Component} from 'react'

class Search extends Component {

  constructor(props){
    super(props)
    this.state ={
      search:''

    }

    this.updateSearch = this.updateSearch.bind(this)
  }
  updateSearch(event){
    this.setState({search: event.target.value})
  }
  render() {

    return (
      <form id="form1">
      <div class="input-group">
        <input
          type="text"
          id="ser"
          value={this.state.search}
          onChange={this.updateSearch}
          class="search-input form-control text-center"
          placeholder="What are You looking for?"
       >

       </input>

      </div>

    </form>)

  }

}

export default Search
