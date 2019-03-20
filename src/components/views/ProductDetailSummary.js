import React from 'react';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';
import ReadMore from '../helpers/ReadMore';

export default (props) => {
  return(
    <div className="col-6 col-sm-4">

      <div className="product-box card bg-light mb-3">
        <div className="card-header"><h5 class="card-title"><Link to={"/product-detail/" + props.product.Id}>{props.product.Title}</Link></h5></div>
        <div className="card-body">
          <div className="text-center">
            <Link to={"/product-detail/" + props.product.Id}>
              <img className="card-img-top" src={props.product.ImageUrl} />
            </Link>
          </div>
          <p className="card-text description">
            <ReadMore text={props.product.Description} length="100" />
          </p>
          <p className="card-text"><b>Category:</b> {props.product.Category}</p>
          <p className="card-text"><b>Made by:</b> {props.product.Manufacturer}</p>
          <p className="card-text"><b>Organic:</b> {props.product.Organic ? 'Yes' : 'No' }</p>
          <p className="card-text"><b>Price:</b> ${props.product.Price}</p>
          <AddToCart />
        </div>
      </div>

    </div>
  );
}
