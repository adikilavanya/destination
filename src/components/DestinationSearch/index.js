import {Component} from 'react'
import '.index.css'
import DestinationItem from '../Destinationitem'
class DestinationSearch extends Component {
  state = {searchInput : ""}
  onChange = (event)=>{
    this.setState({searchInput:event.target.value})

  }
  render() {
    const {searchInput} = this.state
    const {DestinationList} = this.props
    const searchResults= DestinationList.filter(eachUser=>{eachUser.name.toLocaleLowerCase.includes(searchInput.toLocaleLowerCase())})
    return (
      <div>
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            alt="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png " className = "img"
          />
        </div>
        <ul>
          {searchResults}.map((eachUser)=>{
            <DestinationItem key = {eachUser.id} destinantionDetails ={eachUser}/>
          })
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
