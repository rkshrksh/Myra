/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';
import NewsCard from "./NewsCard";

class NewsComponent extends Component {

    constructor() {
        super();
        this.state = {news: []};
        this.getNewsFromApiAsync();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            (10 * 60 * 1000)
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.getNewsFromApiAsync();
    }

    getNewsFromApiAsync() {
        let NEWS_URL = "https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest" +
            "&apiKey=6ef7bc181f304077b7e94902bee3a46d";

        fetch(NEWS_URL)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    news: json.articles.map((item) => item.title)
                })
            });
    }

    render() {
        let array = this.state.news;
        let array2 = array.splice(5);
        return (
            <div className="card card-inverse bg-inverse text-white text-justify animated fadeIn">
                <h4 className="card-header">News Headlines</h4>
                <div id="newsCarousel" className="carousel slide" data-interval="10000" data-ride="carousel"
                     data-wrap="true">
                    <div className="carousel-inner" role="listbox">
                        <NewsCard items={array} active="active"/>
                        <NewsCard items={array2} active=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsComponent;
