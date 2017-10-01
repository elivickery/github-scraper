import React, { Component } from 'react';
import Follower from '../components/Follower'


let axios = require('axios');

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            error: null,
            name: undefined,
            avatar_url: undefined,
            html_url: undefined,
            followers_count: undefined,
            followers_url: undefined,
            location: "Location not visible",
            email: "No public email",
            followers: [],
            followers_page: 1
        };
    }



    componentDidMount() {
        axios.get('https://github-user-data-api.herokuapp.com/' + this.props.username)
        .then(response => {
            let data = response.data;
            console.log(data);
            if(data["message"] !== "Not Found") {
                this.setState({
                    valid: true,
                    error: null,
                    username: data["login"],
                    name: data["name"],
                    avatar_url: data["avatar_url"],
                    html_url: data["html_url"],
                    followers_count: data["followers"],
                    followers_url: data["followers_url"],
                });

                if(data["location"] !== null) {
                    this.setState({
                        location: data["location"]
                    });
                }

                if(data["email"] !== null) {
                    this.setState({
                        email: data["email"]
                    });
                }

            } else {
                this.setState({
                    valid: false,
                    error: "That user doesn't exist. Try again."
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

    }
    render() {
        return (
          <div>
              <div id="error">{this.state.error}</div>
              <div id="user" className={'valid-' + this.state.valid}>
                    <div id="card">

                        <a id="avatar" href={this.state.html_url} target="_blank">
                                <img alt="" style={{backgroundImage: `url(${this.state.avatar_url})`}} />
                        </a>
                      <h2><a href={this.state.html_url} target="_blank">{this.state.username}</a></h2>
                      <h3>{this.state.name}</h3>
                      <h4>{this.state.followers_count} followers</h4>
                      <h4>{this.state.location}</h4>
                      <h4>{this.state.email}</h4>
                    </div>
              </div>
          </div>
        );
    }
}

export default User;
