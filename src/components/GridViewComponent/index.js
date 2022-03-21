import {Component} from 'react'

class GridViewComponent extends Component {
  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const options = {method: 'GET'}
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const fetchedData = await fetch(apiUrl, options)
    console.log(fetchedData)
    const data = await fetchedData.json()
    console.log(data)
  }

  render() {
    return <p>GridViewData</p>
  }
}

export default GridViewComponent
