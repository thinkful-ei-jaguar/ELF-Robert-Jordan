import React from 'react';
import SummaryOption from './SummaryOption'
import SummaryTotal from './SummaryTotal'
import "./Cart.css"


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
export default class Cart extends React.Component{
    
    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
             <SummaryOption 
              key={[idx]}
              feature={feature} featureHash={featureHash} selectedOption={selectedOption}/>
            );
          });
          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                
                <SummaryTotal USCurrencyFormat={USCurrencyFormat} total={total}/>
            </section>
        )
    }


}