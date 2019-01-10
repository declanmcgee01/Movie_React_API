import React, {Component} from 'react';
import axios from 'axios';

class SearchDB extends Component{

    constructor(){
        super();
        this.state = {
            movies: "hey",
            title: ''
        }
        this.update = this.update.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({title:document.getElementById("text").value});
    }

    update = (event) =>{
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?t='+this.state.title+'&apikey=a6026eb0',
            responseType: 'json'
    }).then(response =>{
     this.setState({movies:response.data});
    console.log(response.data);
    })  
    }   

    render(){
        return(
            <form onSubmit={this.update}>
                <label>
                    Movie:
                    <input id="text" type="text" onChange={(this.handleInput)}></input>
            <input type="button" onClick = {this.update} value = "Find Film"></input>
            </label>
            </form> 
        );
    }

}
export default SearchDB;