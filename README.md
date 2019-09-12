# sportify
A single page web application for OmSU.  
[Link to app](https://vue-omsu-6aa01.web.app/).

### Project uses
- Vue framework
- Vue Router
- Vuex store
- Firebase database and hosting
- SweetAlert popups
- Chart.js

### Actions with project
```
npm install //setup

npm run serve //compiles and hot-reloads for development

npm run build //compiles and minifies for production
```

### Compilation
Note that you will receive error in console of your browser if you want to clone this repository and run compilation locally. This is because the `/src/firebase/init.js` file contains empty config values ​​due to security reasons.

To try the app, you can follow the link above or add your firebase project initialization file in `/src/firebase/init.js`.  
[Here](https://firebase.google.com/docs/web/setup) are the detailed steps how to do that.  
You will also need to create two firestore collections in your firebase project: `exercises` and `user-statistics`.  
Here is the structure of collections:

#### excercises:
| Field     | Type              |
| --------- | ----------------- |
| steps     | array of strings  |
| tags      | array of strings  |
| text      | string            |
| steps     | string            |

#### user-statistics:
| Field       | Type   |
| ----------- | ------ |
| figureType  | string |
| idealWeight | number |
| physicalLvl | string |
| pulseRange  | string |
| weightType  | string |