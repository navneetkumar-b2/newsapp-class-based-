import React, { Component } from "react";
import logo from "../defaultNewsImg.jpg";
export default class News extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
    //this is destructurng, if this is not done . we have to write "this.props.title"  in place of "title" in h5 and respectively in all the props
    return (
      <div>
        <div className="card my-4">
          <span class="badge text-bg-info">{source}</span>
          <img
            src={!imageUrl ? logo : imageUrl}
            className="card-img-top"
            alt="sorry! Error while loading img"
            style={{ width: "100%", height: "270px" }}
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} <br></br>on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {/* <p className="card-text"> <small>on  {new Date(date).toGMTString()} </small></p> */}
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
