import React, { Fragment } from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { ListGroup, ListGroupItem } from "reactstrap";
require("isomorphic-fetch");

class ProductList extends React.Component {
  state = {
    products: [],
    loading: true
  };

  componentDidMount() {
    const { params } = this.props;
    const top = params && params.top ? params.top : 1;

    const uri = `https://jssbootcamp910/sitecore/api/ssc/aggregate/content/Items('%7BDD2003EF-DD83-5EF5-9C38-475F401E7E5A%7D')/Children?$top=${top}&sc_apikey={B933AC04-CF02-4507-909A-2B6E202D8510}`;

    fetch(uri)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        const products = data.value;
        if (products) {
          this.setState({ products: products, loading: false });
        }
      });
  }

  render() {
    const { loading, products } = this.state;
    const { fields } = this.props;
    if (loading) {
      return <h1>Loading products...</h1>;
    }

    return (
      <Fragment>
        <Text tag="h1" field={fields.heading} className="display-3" />
        <ListGroup>
          {products.map((product, index) => (
            <ListGroupItem key={index}>
              <h6>{product.DisplayName}</h6>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    );
  }
}

export default ProductList;
