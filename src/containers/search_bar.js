import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:''};

        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});

    }


    //Form element usage
    //The reason for using the form elements is when user types any text on the search box and press enter it will perform submit event. 
    // without the form element we need to handle the condition of when the user press enter the search term needs to be submitted. 
render(){
    return (
        <form className="input-group" onSubmit={this.onFormSubmit}>
            <input 
               className="form-control"
               value={this.state.term}
               onChange={this.onInputChange}
               placeholder="Get a five day forecast in your favorite cities" />
            <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Submit</button>
            </span>
            </form>
    );
}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);