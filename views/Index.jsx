const React = require('react');

class Index extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <div title={'Products Index Page'}>
        <h1>Products</h1>
        <button><a href="/products/new">Add a New Vinyl</a></button>
        <ul>
          {
            products && products.map((products, i) => {
              return(
                <li>
                  <h2>{products.artist}</h2>
                  <h3>{products.album}</h3>
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
