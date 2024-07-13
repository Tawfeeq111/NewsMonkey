import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  state = {
    progress: 0
  }

  updateProgess = (val) => {
    this.setState({progress: val})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News updateProgess={this.updateProgess}  key="general" pageSize={9} country={'in'} category="general"/>}/>
          <Route exact path="/business" element={<News updateProgess={this.updateProgess}  key="business" pageSize={9} country={'in'} category="business"/>}/>
          <Route exact path="/entertainment" element={<News updateProgess={this.updateProgess}  key="entertainment" pageSize={9} country={'in'} category="entertainment"/>}/>
          <Route exact path="/health" element={<News updateProgess={this.updateProgess}  key="health"  pageSize={9} country={'in'} category="health"/>}/>
          <Route exact path="/science" element={<News updateProgess={this.updateProgess}  key="science" pageSize={9} country={'in'} category="science"/>}/>
          <Route exact path="/sports" element={<News updateProgess={this.updateProgess}  key="sports" pageSize={9} country={'in'} category="sports"/>}/>
          <Route exact path="/technology" element={<News updateProgess={this.updateProgess}  key="technology" pageSize={9} country={'in'} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
