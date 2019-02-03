import React from 'react';
import VideoList from './VideoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
    }
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(pageName) {
    this.setState({
      currentPage: pageName
    })
  }

  render () {
    if (this.state.currentPage === 'VideoList') {
      return (
        <VideoList updatePage={this.updatePage}/>
      );
    } if (this.state.currentPage === 'Home') {
      return (
        <div className="container">
          <h1>
            <span>
              Inspiratory
            </span>
          </h1>
          <h2>Our mission is to help the local communities solve a problem by educating them through hands-on technology learning. </h2>
          <h3>Without the knowledge of technology, a student body would not know the potential they have in using that technology to solve a local problem.</h3>
          <span>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/gbJB3387xUw"></iframe>
          </span>

          <a onClick={() => this.setState({currentPage: 'VideoList'})} className="btn">
          Begin Your Inspiratory Journey
          </a>
          {/* <VideoList /> */}
        </div>
      );
    }
  }
}

export default App;