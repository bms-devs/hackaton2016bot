# wcbot

Slack bot returning the occupation status.

Based on ChuckNorris tutorial https://scotch.io/tutorials/building-a-slack-bot-with-node-js-and-chuck-norris-super-powers
 
# local setup
1. Install [node.js](https://nodejs.org/en/)
1. install [npm](https://www.npmjs.com/package/npm)
1. clone repository
1. run npm install
1. get the slack API token, as described [here](https://scotch.io/tutorials/building-a-slack-bot-with-node-js-and-chuck-norris-super-powers#create-a-new-bot-on-your-slack-organization)
1. export acquired token as environment variable BOT_API_KEY
1. run the application `node bin\wcbot.js`
1. the application expects rest endpoint, configured via config\default.json, which returns JSON array in following format:

```json
[  
   {  
      "id":1,
      "name":"name 1",
      "occupied":false,
      "lastUpdateDate":"2016-12-18T11:43:57"
   },
   {  
      "id":2,
      "name":"name 2",
      "occupied":true,
      "lastUpdateDate":"2016-12-18T14:43:57"
   }
]
```
