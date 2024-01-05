import React, { Component } from "react";
import News from "./news";
// import PropTypes from "prop-types";

import Spinner from "./spinner";
export default class Newsitem extends Component {
  static defaultProps = {
    pageSize: "10",  
    // pageSize mtlb 10 articles perpage
    countryName: "in",
    category: "sports",
  };
  // static PropTypes={
  // pageSize:PropTypes.string,
  // countryName:PropTypes.string,
  // category: PropTypes.string,
  // }
  constructor(props) {
    super(props);
    // let {pageSize,countryName,category}=this.props
    // = this way of working
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      // category:this.props.category
    };
  }

  async getData() {
    alert(this.props.category)
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parshedData = await data.json();
    this.setState({ articles: parshedData.articles, loading: false });
  }
  //componentDidMount is used to display the content initially by calling getData()
  //aur getData() mai state change ho raha hai to component fir se render ho jayega.
  async componentDidMount() {
    // alert("comp did mount")
    this.setstate = {
      page: 1,
      // category:this.props.category,
    };
    this.getData();
  }
  handleNextClick = async () => {
    let nextPage = this.state.page + 1;
     this.setState({ page: nextPage });
    await this.getData();
  };
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;

    this.getData();
    this.setState({ page: prevPage });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">
          NewsMonkey - Top headlines from <strong>{this.props.category}</strong>
        </h1>

        <div className="row">
          {this.state.loading && <Spinner />}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              // "!this.state.loading" when this was not page was
              return (
                <div className="col-md-4" key={element.url}>
                  
                  <News
                    title={element.title}
                    desc={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={this.handlePrevClick}
            disabled={false}
            style={{ width: "100px" }}
            className="btn btn-dark"
          >
            &#8249; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            style={{ width: "100px" }}
            className="btn btn-dark"
          >
            Next &#8250;
          </button>
        </div>
      </div>
    );
  }
}
