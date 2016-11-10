#### Regional Differences in Programming Languages

Data visualization using React-Chartjs to illustrate the most popular programming languages by US city according to Indeed.com job search results from the previous 15 days.

Deployed using NGINX and Digital Ocean: http://indeed.meowsergirl.com/

For more details about the data: link to medium

[![Chart](https://github.com/loopDelicious/indeed/blob/master/radar.png)](http://www.indeed.meowsergirl.com/#city-compare)

[![Chart](https://github.com/loopDelicious/indeed/blob/master/bar.png)](http://www.indeed.meowsergirl.com/#all-cities)


### For Development

Start React watcher
   
   `$ npm start`  

Run server
   
   `$ nodemon proxy.js`
   
Start Redis to cache results every hour
   
   `$ redis-server`
   
### For Deployment

Secure shell into remote server
    
Install dependencies

   `# npm install -g react-scripts`
   
   `# npm install -g forever`
   
Start Redis and daemonize server

   `# sudo apt-get install redis-server`
   
   `# forever start src/proxy.js`
   
  
