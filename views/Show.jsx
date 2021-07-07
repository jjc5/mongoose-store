const React = require('react');

const caseStyle = {
  textTransform: 'capitalize'
}

class Show extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <div title={'Show Page'} style={caseStyle}>
        <link rel="stylesheet"  href='/css/showpage.css' />
        <h1>{products.artist}</h1>
        <img src={products.img}></img>
        <h2>{products.album}</h2>
        <h2>Price: {products.price}</h2>
        <h2>Qty: {products.qty}</h2>
        <h3>{products.mintcondition? 'Condition: Mint':''}</h3>
        <h3>{products.goodcondition? 'Condition: Good':''}</h3>
        <h3>{products.poorcondition? 'Condition: Poor':''}</h3>
        <form action={`/products/${this.props.products._id}/buy`}>
          <input class='btn'type="submit" value="BUY"/>
        </form>

        <br/>
        <a class='anchor'href='/products'>BACK</a>
      </div>
    )
  }
}
module.exports = Show;
