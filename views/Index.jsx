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
        <h1 id='index-title'>999 Club</h1>
        <button id='addBtn' class='btn'><a class='anchor'href="/products/new">Add a New Vinyl</a></button>
        <ul id='ul-index'>
          {
            products && products.map((products, i) => {
              return(
                <li id='li-index' style={caseStyle}>
                  <h2><button class='btn selectBtn'><a class='anchor'href={`/products/${products._id}`}>SELECT</a></button><button class='btn'><a class='anchor'href={`/products/${products._id}/edit`}>EDIT</a></button><form method="POST" action={`/products/${products._id}?_method=DELETE`}>
                    <input class='btn' type="submit" value="DELETE"/>
                  </form></h2>
                  <br/>
                  <br/>
                  <img src={products.img}></img>
                  <h3>{products.album}</h3>
                  <h3>Price: ${products.price}</h3>
                  <h3>In-Stock: {products.qty}</h3>
                  <h3>{products.mintcondition? 'Condition: Mint':''}</h3>
                  <h3>{products.goodcondition? 'Condition: Good':''}</h3>
                  <h3>{products.poorcondition? 'Condition: Poor':''}</h3>
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
