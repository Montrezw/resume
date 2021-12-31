import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Education from "./Education";
import Experience from "./Experience";
import Exposure from "./Exposure";
import FlipCard from './FlipCard';
import Menu from './Menu';
import SocialMedia from "./SocialMedia";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
      <body>
          <div className="row">
              <ColumnLeftSide />
              <ColumnMiddle />
              <ColumnRightSide />
          </div>
      </body>
  </React.StrictMode>,
  document.getElementById('root')
);

function ColumnLeftSide() {
    return (
        <div className="column side">
            <FlipCard />
            <Exposure />
            <Education />
        </div>
    )
}

function ColumnMiddle() {
    return (
        <div className="column middle">
            <Experience />
        </div>
    )
}

function ColumnRightSide() {
    return (
        <div className="column side">
            <SocialMedia />
        </div>
    )
}