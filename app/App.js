import React from 'react'
import styles from './App.css'
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

        <div className={styles.app}>Live reload is dope as heck</div>

        <div className='container'>

          <div className="jumbotron jumbotron-primary">
            <h1>My Blag</h1>
            <p>Building a simple blog with React.js and Webpack and stuff</p>
          </div>

          <BlogApp />

        </div>

      </div>
      );
  }
}
