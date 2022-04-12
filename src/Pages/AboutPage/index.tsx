import React, { Component } from "react";
import { AboutPageProps } from "./interface";

export default class AboutPage extends Component<AboutPageProps> {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Name : {this.props.match.params.username}</p>
      </div>
    );
  }
}
