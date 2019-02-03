import React from 'react';
import VideoList from './VideoList.jsx';
import videoData from '../videoData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
      currentVideo: videoData[0],
      notes: '',
    }
    this.updatePage = this.updatePage.bind(this);
    this.updateCurrentVideo = this.updateCurrentVideo.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  updatePage(pageName) {
    this.setState({
      currentPage: pageName,
    })
  }

  updateCurrentVideo(aVideo) {
    this.setState({
      currentVideo: aVideo
    });
  }

  updateNotes(e) {
    this.setState({
      notes: e.target.value
    });
  }

  render () {
    if (this.state.currentPage === 'VideoList') {
      return (
        <VideoList
          updatePage={this.updatePage}
          handleClick={this.updateCurrentVideo.bind(this)}
          currentVideo={this.state.currentVideo}
          updateCurrentVideo={this.updateCurrentVideo}
          updateNotes={this.updateNotes}
          notes={this.state.notes}
        />
      );
    } if (this.state.currentPage === 'Home') {
      return (
        <div className="container">
          <h1>
            <span>
              inspireLab
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
        </div>
      );
    }
  }
}

export default App;