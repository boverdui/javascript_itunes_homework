import React from 'react';

class Song extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.image}/>
        <div className="title-artist-audio">
          <p>{this.props.title.toUpperCase()} - {this.props.artist}</p>
          <audio controls>
            <source src={this.props.audio} type='audio/x-m4a'/>
          </audio>
        </div>
      </li>
    );
  }
}

export default Song;
