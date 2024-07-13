import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        const { title, description, imageUrl, url, author, date, source} = this.props;
        return (
            <>
                <div className="card my-3">
                    <img 
                    src={imageUrl}
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "88%", zIndex: "1"}}>{source}</span>
                        <h5 className="card-title">{title ? title.slice(0, 50) : ""}...</h5>
                        <p className="card-text">{description ? description.slice(0, 83) : ""}...</p>
                        <p className='card-text'><small className='text-muted'>By {author==null? "Unknown" : author } on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_black" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </>
        );
    }
}