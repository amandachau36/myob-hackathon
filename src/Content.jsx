import React, { Component } from 'react';


class Content extends Component {

  constructor(){
  super();

  this.imageLookup = {
    "yes": '/images/tick.svg',
    "no": '/images/cross.svg',
    "unknown": '/images/unknown.svg'
  };

}

  // componentDidMount(){
  //   this.setState({
  //     data: this.props.data
  //   });
  //
  // }

  // <p><strong>Child Labour:</strong> {this.props.data.childLabour} </p>
  // <p><strong>Ethical Conditions:</strong> {this.props.data.ethicalLabourConditions}</p>

  render(){



    return(
      <div className="icon-grid-container">
      <div className="icon-grid">
        <div className="icon">
           <img src={process.env.PUBLIC_URL + '/images/child-labour.svg'} />
         </div>
         <p>No child labour</p>
           <br/>
         <img src={process.env.PUBLIC_URL + `${this.imageLookup[this.props.data.childLabour]}`}/>

       </div>
       <div className="icon-grid">
        <div className="icon">
           <img src={process.env.PUBLIC_URL + '/images/ethical-work-conditions.svg'} />
           </div>
           <p>Ethical work conditions</p>
            <img src={process.env.PUBLIC_URL + `${this.imageLookup[this.props.data.ethicalLabourConditions]}`}/>
       </div>
       <div className="icon-grid">
         <div className="icon">
           <img src={process.env.PUBLIC_URL + '/images/earth.svg'} />
         </div>
         <p>Environmental responsibility</p>
         <img src={process.env.PUBLIC_URL + `${this.imageLookup[this.props.data.environmentalResponsibility]}`}/>
       </div>


      </div>

    )
  }


}

export default Content;
