import React, { Component } from 'react';

class SupplyChainUnknown extends Component {

  render(){
    return(
      <div className="percent-unknown">
         <img src={process.env.PUBLIC_URL + '/images/exclamation.svg'} />

        {this.props.percentUnknown}% of the supply chain is unknown.
      </div>
    )
  }
}

export default SupplyChainUnknown;
