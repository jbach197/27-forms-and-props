'use-strict';

import React from 'react';
import SearchForm from './searchForm.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics:[]
    }
  }


  render() {

    return ( 
      <main>Hello World</main>
    )
  }
    
}
