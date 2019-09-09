import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Map from './Map.jsx';
import SupplyChainUnknown from './SupplyChainUnknown.jsx';

class Container extends Component {
  constructor(){
    super();
    this.state = {
      data: '',

    }
  }




      // ${this.props.match.params.id}

  componentDidMount(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let product = params.get('product');
    // console.log(this.props.match.params.id);
    console.log(window.location.pathname);
    // console.log(this.props.match.params.id);



    if ( product === "blockchain" ) {

      fetch("http://poc-wdicf-Blockcha-17LX18MHH8KKS-1184878718.us-east-1.elb.amazonaws.com/donors/Apple")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          data: result[0]
        });
      })
    } else {
      fetch(`https://wdicf-data.s3-ap-southeast-2.amazonaws.com/${product}.json`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          data: result
        });
        // console.log('this.state.data', this.state.data);
      })
    }

  }



    render(){

      const { company, product, serialNumber, starRating, averageRating, supplyChainMap, moreInfo, unknownPercent } = this.state.data;



      return(
        <div className="no-padding">



          <Header company = {company}
                  product = {product}
                  serialNumber = {serialNumber}
                  starRating = {starRating}
                  averageRating = {averageRating}
                  >
          </Header>

          <Content data = { this.state.data }>
          </Content>

          <Map map = { supplyChainMap } >
          </Map>

          <SupplyChainUnknown percentUnknown = { unknownPercent }>
          </SupplyChainUnknown>



          <p className="left-align">More info on <a target="_blank" href={ moreInfo }> { company } </a></p>


        </div>
      )

    }

  }

  export default Container;
