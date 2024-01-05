import React, { Component } from 'react';
import News from './news';

export default class Newsitem extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=${this.state.page}&pageSize=6`;
    await this.getData(url);
  }

  getData = async (url) => {
    try {
      let response = await fetch(url);
      let parsedData = await response.json();
      this.setState({ articles: parsedData.articles });
    } catch (error) {
      alert("something went wrong")
      console.error('Error fetching data:', error);
    }
  };

  handleNextClick = async () => {
    let nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=${nextPage}&pageSize=6`;
    await this.getData(url);
    this.setState({ page: nextPage });
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      let prevPage = this.state.page - 1;
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=${prevPage}&pageSize=6`;
      await this.getData(url);
      this.setState({ page: prevPage });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <News
                  title={element.title}
                  desc={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={this.handlePrevClick}
            style={{ width: '100px' }}
            className="btn btn-dark"
            disabled={this.state.page === 1}
          >
            &#8249; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            style={{ width: '100px' }}
            className="btn btn-dark"
          >
            Next &#8250;
          </button>
        </div>
      </div>
    );
  }
}
