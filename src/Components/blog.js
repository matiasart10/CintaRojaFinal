import React from 'react';
import './stilo.css';

const BlogNews = (props) => {

    const { titulo, imagen, descripcion, link } = props;

    return (

                    <div className="column is-one-quarter">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by2">
                                    <a href={link} className="card-footer-item">
                                    <img src={imagen} alt={titulo} /></a>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4 has-text-centered">{titulo}</p>
                                        <p className="subtitle is-6">{descripcion}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    )
}


export default BlogNews;