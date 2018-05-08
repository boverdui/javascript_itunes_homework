import React from 'react';
import Song from './Song.js';

class SongList extends React.Component {
  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <Song
          title={song["im:name"].label}
          artist={song["im:artist"].label}
          image={song["im:image"][2].label}
          audio={song.link[1].attributes.href}>
        </Song>
      )
    });
    return (
      <div className = "song-list">
        <ol>
          {songs}
        </ol>
      </div>
    );
  }
}

export default SongList;
