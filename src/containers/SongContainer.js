import React from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      date: ''
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const songsData = JSON.parse(jsonString);
      this.setState({songs: songsData.feed.entry});
      this.setState({date: songsData.feed.updated.label});
    });
    request.send();
  }

  render(){
    return (
      <div>
        <h1>iTunes UK top 20</h1>
        <p className="date">{this.state.date.substring(0,10)}</p>
        <SongList
          songs={this.state.songs}>
        </SongList>
      </div>
    );
  }
}

export default SongContainer;
