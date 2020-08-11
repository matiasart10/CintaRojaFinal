import React, { useState, useEffect } from 'react';
import Section4 from '../Components/Section4';
import BlogNews from '../Components/blog';
import Interes from '../Components/interes';
import axios from 'axios';


const Blog = () => {

    const [noticias, setNoticias] = useState([]);

    const getNoticias = () => {
        const URL = `https://webhose.io/filterWebContent?token=bf5b8225-ce56-4f55-951c-f8a3656f619d&format=json&sort=crawled&q=thread.section_title%3Abitcoin%20site%3Acriptonoticias.com%20language%3Aspanish`;
        axios.get(URL)
            .then(respuesta => setNoticias(respuesta.data.posts))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getNoticias();
    }, []);

    //   console.log(noticias);

    return (

        <div>
            <Section4 />
            <br></br>
            <div className="container">
                <div className="columns is-multiline">
                    {noticias.map(noticias => {
                        return (<BlogNews
                            key={noticias.uuid}
                            imagen={noticias.thread.main_image}
                            titulo={noticias.thread.title}
                            link={noticias.thread.url}
                        />)
                    })}
                </div>
            </div>

            <br></br>
            <Interes />
        </div>
    );
}

export default Blog;
