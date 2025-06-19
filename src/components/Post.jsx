import './Post.css';
import React, { useEffect, useState } from 'react';

export function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    if (posts.length === 0) {
        return (
            <h4 className="d-flex justify-content-center align-items-center text-white mt-4">
                No se encontraron posts
            </h4>
        );
    }

    return (
        <div className="post-container mb-23 d-flex flex-column align-items-center">
            {posts?.map(post => (
                <div id="post" key={post.idPost}>
                    <div className='user-info d-flex mt-4 ms-1 mb-4'>
                        <img className="profile-image ms-2 mt-2" src={post.userCreator.imagen_url} alt="User profile" />
                        <h3 className="user-name ms-2 text-break">{post.userCreator.nickname}</h3>
                    </div>
                    <p className='theme-post d-flex ms-2 text-break mb-1'>{post.tema}</p>
                    <p className='title-post d-flex ms-2 text-break fw-bold'>{post.titulo}</p>
                    <p className='d-flex text-start text-break ms-2'>{post.contenido}</p>
                    <p className='date-post d-flex mt-2 mb-1 text-break border-top ps-2 p-3'>{post.datePost}</p>
                    {post.imagen ? (
                            <img id="preview-image" src={post.imagen} />
                    ) : null} 
                </div>
            ))}
        </div>
    );
}