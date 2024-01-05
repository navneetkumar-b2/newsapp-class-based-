import React, { Component }  from 'react';
import News from './news';
export default class Newsitem extends Component {
 constructor(){
super();
console.log("i am inside constructor and i am executed")
this.state = {
  page:1,
  articles:[]
}
      }
      async componentDidMount(){
        console.log("cmd");
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=1&pageSize=5`
        let data= await fetch(url);
        let parshedData= await data.json()
        console.log(parshedData);
        this.setState({articles:parshedData.articles})
      }
      async handlePrevClick() {
        alert("pre clicked")
        let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=3&pageSize=5"
        let data= await fetch(url);
        let parshedData= await data.json()
        this.setState({articles:parshedData.articles})
      }
      handleNextClick = async ()=>{
        let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=2&pageSize=5"
        let data= await fetch(url);
        let parshedData= await data.json()
        this.setState({articles:parshedData.articles})
        // alert(this.state.articles)
       }
  render() {
    return (
        <div className="container my-3">
        <h1>NewsMonkey - Top headlines</h1>
          {/* {alert("i am inside return")} */}
        {console.log("helloddy")}
        <div className="row"> 
        {this.state.articles.map((element)=>{
          // alert(element);
          return <div className="col-md-4" key={element.url}>
          <News  title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
        })}      
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" onClick={this.handlePrevClick} style={{width: "100px"}}className="btn btn-dark">&#8249; Previous</button>
        <button type="button" onClick={this.handleNextClick} style={{width: "100px"}} className="btn btn-dark">Next &#8250;</button>
        </div>
    </div>
    )
  }
}
