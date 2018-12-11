import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../actions/productActions';
import Product from './Product';
import PropTypes from 'prop-types';
import React from 'react';


class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.props.productActions.fetchProductDefinitions();
    }

    addToCart = (e, productId) => {
        this.props.addToCart(productId);
    };

    render() {

        if (this.props.products && this.props.products.length > 0 ) {
            let productList = [];

            this.props.products.forEach((product, i) => {
                /**
                 * Only render items marked as 'published'
                 */
                if (product.isPublished && product.isPublished === 'true') {
                    productList.push(<Product key={i} product={product} buttonAction={this.addToCart} />);
                }
            });

            return productList;
        } else {
            return <div className='product-list-no-products'>There are no devices available to purchase.</div>
        }
    }
}


ProductList.propTypes = {
    productAction: PropTypes.object,
    products: PropTypes.array
};

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
      productActions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);