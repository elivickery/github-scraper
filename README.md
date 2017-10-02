# GitHub-Scraper

[http://gh-scraper.herokuapp.com](http://gh-scraper.herokuapp.com)

## Enter any GitHub username to generate an 'ID card' with relevant info and a list of followers.

## The Challenge:
Build a small app that allows users to enter a GitHub username and fetches corresponding data from the GitHub API, including user info and a list of the user's followers.  GitHub returns only a portion of total followers, so add a 'load more' button that will fetch and append more followers to the list until all followers have been fetched.


## The Solution:

I chose to build this project as a single-page React app.  React is relatively new to me (within the last 6 months), but I love working with it because it's quick to set up, provides a fast and dynamic front-end experience, and makes it easy to fetch and append API data.

I used [create-react-app](https://github.com/facebookincubator/create-react-app) to generate the basic boilerplate, but the rest of the code is my own.

The GitHub API has a relatively low rate limit of 60 calls per hour unless it is authenticated with an access token, so for scaling reasons, I set up a simple proxy API with Sinatra and hosted it on Heroku so I could add my access token on the server side.

Check out the backend code here: [https://github.com/elivickery/github-user-api.git](https://github.com/elivickery/github-user-api.git).

-----------

![Screenshot](https://github.com/elivickery/github-scraper/blob/master/XwO1JnPjfc.gif?raw=true)

