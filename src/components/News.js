import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor (){
        super();
        console.log("Hello World");
        
        
        }
    render() {
        return (
            <div className= "container my-3">
                <h2>NewsSingh -- Top Headlines </h2>
                
                <div className="row">
                    <div className="col-md-4">
                <NewsItem title = "myTitle" description = "myDesc" imageUrl = "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-887657568.jpg?w=600" />

                    </div>
                    <div className="col-md-4">
                <NewsItem title = "myTitle" description = "myDesc" />

                    </div>
                    <div className="col-md-4">
                <NewsItem title = "myTitle" description = "myDesc" />

                    </div>
                
                </div>

                
            </div>
        )
    }
}

export default News
