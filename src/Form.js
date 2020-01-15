import React from 'react';
import Features from './Features';

export default class Form extends React.Component{
    render(){
        return(

        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
            selected={this.props.selected} 
            features={this.props.features} 
            updateFeature={this.props.updateFeature} />
        </form>
        )
    }
}