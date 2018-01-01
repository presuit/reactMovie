import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends Component {

  state = {
  
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "http://i.telegraph.co.uk/multimedia/archive/02784/matrix-system-fail_2784216b.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://resizing.flixster.com/r39TD4V1AxykXZ_PZ7vC6UMJa0E=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NjM0OzEyMDA7ODAwOzEyMDA"
          },
          {
            title : "Old Boy",
            poster : "https://i.ytimg.com/vi/2HkjrJ6IK5E/hqdefault.jpg"
          },
          {
            title : "Star Wars",
            poster : "https://lumiere-a.akamaihd.net/v1/images/swbfii_keyart_clean_final_flat_8d03e069.jpeg?region=0%2C37%2C1024%2C576&width=600"
          },
          {
            title : "Ripple",
            poster :  "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/ripple.png"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {
      return <Movie title={movies.title} poster={movies.poster} key={index} />
    });

    return movies;
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
