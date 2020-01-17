import React from 'react';
import FeatureItem from './FeatureItem'

import './Features.css';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
export default class Features extends React.Component {
  render(){
    const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map((item, index )=> {
      return <FeatureItem 
        key={[index]}
        selected={this.props.selected} 
        features={this.props.features} 
        updateFeature={this.props.updateFeature} 
        feature={feature} 
        USCurrencyFormat={USCurrencyFormat} item={item} 
        />
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
  return(
    <div>
      {features}
    </div>
  )}
}