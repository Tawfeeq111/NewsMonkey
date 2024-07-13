import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    articles = [];

    capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            article: this.articles,
            loading: false,
            page: 0,
            totalResults: 0
        }
        document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
    }

    async componentDidMount() {
        this.props.updateProgess(20);
        this.setState({ loading: true });
        let URL = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=3129b871495741a096b87b3742d6b841&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(URL);
        let JsonedData = await data.json();
        this.setState({ article: JsonedData.articles, totalResults: JsonedData.totalResults, loading: false, page: this.state.page + 1 });
        this.props.updateProgess(100);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let URL = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=3129b871495741a096b87b3742d6b841&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(URL);
        let JsonedData = await data.json();
        this.setState({
            article: this.state.article.concat(JsonedData.articles),
            totalResults: JsonedData.totalResults
        })
    }

    render() {
        return (
            <>
                    <h2 className='text-center' style={{ margin: '20px 0px' }}>NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h2>
                    {this.state.loading ? <Spinner/> : <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.article.map((element, index) => {
                                    return (
                                        <div key={index} className="col-md-4">
                                            <NewsItem title={element.title}
                                                description={element.description}
                                                imageUrl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2024/01/15/1600x900/MYANMAR-CONFLICT-3_1705306627734_1705306643744.jpg"}
                                                url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>}
            </>
        );
    }
}