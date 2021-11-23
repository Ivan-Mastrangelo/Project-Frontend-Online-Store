import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SendToCartButton from './SendToCartButton';

class ProductCard extends React.Component {
  render() {
    const {
      title, image, price, sendProductToCart, productId, objectProduct,
    } = this.props;

    return (
      <div data-testid="product">
        <Link
          to={ `/product/${productId}` }
          data-testid="product-detail-link"
        >
          <p>{ title }</p>
          <img src={ image } alt={ title } />
          <p>{ price }</p>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            {/* Quantidade: */}
          </span>
        </Link>
        { objectProduct
          .shipping.free_shipping ? <p data-testid="free-shipping">Frete grátis</p>
          : null}
        <SendToCartButton
          sendProductToCart={ sendProductToCart }
          productId={ productId }
          objectProduct={ objectProduct }
          testId="product-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  sendProductToCart: PropTypes.func.isRequired,
  objectProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default ProductCard;
