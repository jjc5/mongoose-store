const React = require('react');

const caseStyle = {
  textTransform: 'capitalize'
}

class Index extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <div title={'Products Index Page'}>
        <link rel="stylesheet"  href='/css/indexpage.css' />
        <h1>Products</h1>
        <button><a href="/products/new">Add a New Vinyl</a></button>
        <ul>
          {
            products && products.map((products, i) => {
              return(
                <li style={caseStyle}>
                  <h2>{products.artist}</h2>
                  <img src={products.img}></img>
                  <h3>{products.album}</h3>
                  <h3>Price: ${products.price}</h3>
                  <h3>In-Stock: {products.qty}</h3>
                  <h3>{products.mintcondition? 'Mint':''}</h3>
                  <h3>{products.goodcondition? 'Good':''}</h3>
                  <h3>{products.poorcondition? 'Poor':''}</h3>
                  <button><a href={`/products/${products._id}`}>SELECT</a></button>
                  <form method="POST" action={`/products/${products._id}?_method=DELETE`}>
                    <input type="submit" value="DELETE"/>
                  </form>
                  <button><a href={`/products/${products._id}/edit`}>Edit This Product</a></button>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  }
}


module.exports = Index;
