import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super()
    console.log("constructor");

    this.state = {
      monsters: [],
      searchField: ''
    };
  } 
  componentDidMount(){
    console.log("componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters:data}))
  }
  render(){
    console.log("render");

    const {monsters, searchField} = this.state;
    const filterMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search field'
          handleChange={e=> this.setState({searchField: e.target.value})}
        />
        <CardList monsters = {filterMonster}/>
      </div>
    )
  }
}

export default App;
