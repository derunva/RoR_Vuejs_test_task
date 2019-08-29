# RoR + Vuejs Blog example

test task

## Getting Started

There are two folders in the project folder

```
cd blog-api
```
next
```
bundle install
```
make migrations
```
rails db:migrate
```
run api server
```
rails server
```
open new terminal at project folder
```
cd blog-app
```
install dependencies
```
npm install
```
run application
```
npm run serve
```

look for locallhost:8080  

## libraries
### used:
axios  for async requests  
vuex for storage  
vuejs for SPA  
vue-router for routing  
bulma for styling  
sass and pug - preprocessors
actioncable-vue - listening websocket

ruby on rails  
rack-cors - CORS  
carrierwave, rmagick - fileupload  
redis - need for actioncable  

## Badly done

websocket client does not reconnect then connection close  
no validation on first capitalized letters, because i storage data in lower regiter and make capitalization by CSS  
forms may need to be redone
