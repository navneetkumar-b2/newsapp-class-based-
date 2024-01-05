import React, { Component }  from 'react';
import News from './news';
export default class Newsitem extends Component {
 constructor(props){
super(props);
// let {pageSize,desc,imageUrl,newsUrl}=this.props  = this way of working  
this.state = {
  page:1,
  articles:[]
}
      }
     async getData(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=21ee09d47b1c4781a51dc5e1d42d0657&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        let parshedData=await data.json()
        this.setState({articles:parshedData.articles})
      }
      async componentDidMount(){
        this.setstate = {
          page:1
        }
       this.getData()
      }
      handleNextClick= async()=>{
         let nextPage=this.state.page+1;
        await this.setState({ page : nextPage })
         await this.getData()
      }
      handlePrevClick=async()=>{
        let prevPage=this.state.page-1;
      
       this.getData()
       this.setState({ page : prevPage })
      }
  render() {
    return (
        <div className="container my-3">
        <h1 className='text-center my-4'>NewsMonkey - Top headlines</h1>
          {/* {alert("i am inside return")} */}
        {console.log("helloddy")}
        <div className="row"> 
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <News title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
      </div>
        })}      
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" onClick={this.handlePrevClick} disabled={false} style={{width: "100px"}}className="btn btn-dark">&#8249; Previous</button>
        <button type="button" onClick={this.handleNextClick} style={{width: "100px"}} className="btn btn-dark">Next &#8250;</button>
        </div>
    </div>
    )
  }
}