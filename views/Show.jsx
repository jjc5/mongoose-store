const React = require('react');

const caseStyle = {
  textTransform: 'capitalize'
}

class Show extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <div title={'Show Page'}>
        <h1>{products.artist}</h1>
        <img src={products.img}></img>
        <h2>{products.album}</h2>
        <h2>Price: {products.price}</h2>
        <h2>Qty: {products.qty}</h2>
        <h3>{products.mintcondition? 'Condition: Mint':''}</h3>
        <h3>{products.goodcondition? 'Condition: Good':''}</h3>
        <h3>{products.poorcondition? 'Condition: Poor':''}</h3>
        <form action={`/products/${this.props.products._id}?_method=PUT`} method="POST">
          <input type="submit" value="Buy"/>
        </form>

        <br/>
        <a href='/products'>BACK</a>
      </div>
    )
  }
}
module.exports = Show;
