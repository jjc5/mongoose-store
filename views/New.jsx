const React = require('react');

class New extends React.Component {
  render() {
    return(
      <div>
        <h1>New Page</h1>
        <form action="/products" method="POST">
            Artist: <input type="text" name="artist" /><br/>
            Album: <input type="textarea" name="album" /><br/>
            Condition: Mint<input type="checkbox" name="vinylIsMint" />&nbsp;&nbsp;&nbsp;Good<input type="checkbox" name="vinylIsGood" />&nbsp;&nbsp;&nbsp;Poor<input type="checkbox" name="vinylIsPoor" /><br/>
            <input type="submit" name="" value="Submit"/>
        </form>
      </div>
    )
  }
}
module.exports = New;
