const React = require('react');

class Edit extends React.Component{
  render() {
    const products = this.props.products;
    return(
      <div title="Edit Product">
      <link rel="stylesheet"  href='/css/editpage.css' />
      <img src={products.img}></img>
      <form id='editForm' action={`/products/${this.props.products._id}?_method=PUT`} method="POST">
        Artist: <input type="text" name="artist" defaultValue={this.props.products.artist}/><br/>
        Img: <input type="text" name="img" defaultValue={this.props.products.img}/><br/>
        Album: <input type="text" name="album"  defaultValue={this.props.products.album}/><br/>
        Price: <input type="number" name="price"  defaultValue={this.props.products.price}/><br/>
        Qty: <input type="number" name="qty"  defaultValue={this.props.products.qty}/><br/>
        Condition: Mint<input type="checkbox" name="mintcondition"  defaultValue={this.props.products.mintcondition}/>&nbsp;&nbsp;&nbsp;Good<input type="checkbox" name="goodcondition"  defaultValue={this.props.products.goodcondition}/>&nbsp;&nbsp;&nbsp;Poor<input type="checkbox" name="poorcondition"  defaultValue={this.props.products.poorcondition}/>
        <br/>
        <input type="submit" value="SAVE"/>
      </form>
      </div>
    )
  }
}
module.exports = Edit;
