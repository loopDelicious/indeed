#### Regional Differences in Programming Languages

Data visualization using React-Chartjs to illustrate the most popular programming languages by US city according to Indeed.com job search results from the previous 15 days.

[Deployed](http://indeed.meowsergirl.com/) using NGINX and Digital Ocean

[Blog post on Medium](https://medium.com/@joycelin.codes/always-be-coding-regional-differences-in-programming-languages-9957785dd4e6#.oq7bf9wki)

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
   
Update repository - or clone if the first time

   `# git clone`
   
Build react files

   `# npm run build`

Start Redis and daemonize server

   `# sudo apt-get install redis-server`
   
   `# forever start src/proxy.js`
   
  
