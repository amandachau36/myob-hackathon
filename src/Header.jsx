import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Header extends Component {


  render(){

    return(
      <div className="header">
        <div className="header-left">
          <p className="company"><strong> {this.props.company}</strong> {this.props.product}
          </p>
          <p className="small-text">{this.props.serialNumber}</p>
        </div>

        <div className="header-right">
          <StarRatings
            rating={this.props.starRating}
            starRatedColor="orange"
            numberOfStars={5}
            name='rating'
          />
          <p> Average rating for similar products is {this.props.averageRating} </p>
        </div>
      </div>
    )
  }


}

export default Header;
