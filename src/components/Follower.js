import React, { Component } from 'react';

class Follower extends Component {

    render() {
        return (
          <div className="follower">
              <a href={this.props.html_url} target="_blank">
                  <img alt="" style={{backgroundImage: `url(${this.props.avatar_url})`}} src={this.props.avatar_url} />
              </a>
          </div>
        );
    }
}

export default Follower;
