import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const SearchPost = () => {
    const { searchtext } = useParams();
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/search/${searchtext}`)
        .then(response => setRelatedPosts(response.data))
        .catch(error => console.error('Error fetching posts:', error));
    }, [searchtext]);

    return (
        <div className="post-container mb-23 d-flex flex-column align-items-center">
            {relatedPosts?.map(post => {
                if (!post) { // Verifico si post es null
                    return null; // sino no renderizo
                }

                return (
                    <div id="post" key={post.idPost}>
                        <div className='user-info d-flex mt-4 ms-1 mb-4'>
                            <img className="profile-image ms-2 mt-2" src={post.userCreator.imagen_url} alt="User profile" />
                            <h3 className="user-name ms-2 text-break">{post.userCreator.nickname}</h3>
                        </div>
                        <p className='theme-post d-flex ms-2 text-break'>{post.tema}</p>
                        <p className='title-post d-flex ms-2 text-break'>{post.titulo}</p>
                        <p className='d-flex ms-2 text-start text-break'>{post.contenido}</p>
                        <p className='date-post d-flex mt-4 ms-2 text-break'>{post.datePost}</p>
                        {post.imagen ? (
                            <img id="preview-image" src={post.imagen} />
                        ) : null} 
                    </div>
                );
            })}
        </div>
    );
};
