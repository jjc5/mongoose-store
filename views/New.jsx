const React = require('react');

class New extends React.Component {
  render() {
    return(
      <div>
        <h1>New Vinyl</h1>
        <form action="/products" method="POST">
          <link rel="stylesheet"  href='/css/newpage.css' />
          <label>Artist:</label><input type="text" name="artist" /><br/>
          <label>Album:</label><input type="textarea" name="album" /><br/>
          <label>Img:</label><input type="text" name="img" /><br/>
          <label>Price:</label><input type="number" name="price" /><br/>
          <label>Qty:</label><input type="number" name="qty" /><br/>
          <br/>
          <div id='condition'>Condition: Mint<input id='conditionInput' type="checkbox" name="mintcondition"/>Good<input id='conditionInput'type="checkbox" name="goodcondition" />Poor<input id='conditionInput'type="checkbox" name="poorcondition" /></div><br/>
          <input id='submitBtn'type="submit" name="" value="Submit"/>
        </form>
      </div>
    )
  }
}
module.exports = New;
