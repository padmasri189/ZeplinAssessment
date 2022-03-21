import {Component} from 'react'

class TableViewComponent extends Component {
  render() {
    return (
      <div>
        <h1>Observations Assigned to me</h1>
        <table>
          <thead>
            <th>Name</th>
          </thead>
          <tbody>
            <tr>Padma</tr>
            <tr>Sai</tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableViewComponent
