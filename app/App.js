import React from 'react'
import appStyles from './App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import BlogApp from './components/BlogApp.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      when: new Date(),
      sample_posts: [{ id: 3, title: 'sample title', contents: 'sample body' }]
    };
  }

  render() {
    return (
      <div>
        <br/>
        <div className={bootstrap.container}>

          <div className={bootstrap.jumbotron}>
            <h1>My Blag</h1>
            <p>Building a simple blog with React.js and Webpack and stuff</p>
          </div>

          <BlogApp />

        </div>

      </div>
      );
  }
}
