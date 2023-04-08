import React , {useContext, useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
</>
  );
};

export default App;














// {
//   "name": "frontend",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@ant-design/icons": "^4.6.2",
//     "@codemirror/autocomplete": "^6.4.2",
//     "@codemirror/closebrackets": "^0.19.2",
//     "@fortawesome/fontawesome-svg-core": "^6.4.0",
//     "@fortawesome/free-solid-svg-icons": "^6.4.0",
//     "@fortawesome/react-fontawesome": "^0.2.0",
//     "@testing-library/jest-dom": "^5.11.10",
//     "@testing-library/react": "^11.2.6",
//     "@testing-library/user-event": "^12.8.3",
//     "@uiw/react-codemirror": "^4.19.11",
//     "antd": "^4.15.1",
//     "codemirror": "^5.65.12",
//     "font-awesome": "^4.7.0",
//     "react": "^17.0.2",
//     "react-codemirror2": "^7.2.1",
//     "react-copy-to-clipboard": "^5.0.3",
//     "react-dom": "^17.0.2",
//     "react-particles-js": "^3.4.1",
//     "react-router-dom": "^5.2.0",
//     "react-scripts": "4.0.3",
//     "react-share": "^4.4.0",
//     "simple-peer": "^9.11.0",
//     "socket.io-client": "^4.0.1",
//     "web-vitals": "^1.1.1"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
