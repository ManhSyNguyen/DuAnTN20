import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import apiRequestPs from '../../../../api/postApi'

const PostDetail = props => {
    const id = useParams().id;
    const [post, setPost] = useState({});
    // const product = products.find(item => item.id === id)
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await apiRequestPs.get(id);
                setPost(data)
                console.log(data)
            } catch (error) {
                console.log('Faile to request API', error)
            }
        }
        getPost()
    }, {})
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <div className="blog-top">
                        <div className=" grid_3 grid-1">
                            <h3><a href="#">{post.ten_baiviet}</a></h3>
                            <a href="#"><img src={post.image} style={{ marginLeft: '175px' }} className="img-responsive" alt="" /></a>
                            <div className="blog-poast-info">
                                <ul>
                                    <li><a className="admin" href="#"><i> </i> Admin </a></li>
                                    <li><span><i className="date"> </i>12-04-2015</span></li>
                                    <li><a className="p-blog" href="#"><i className="comment"> </i>No Comments</a></li>
                                </ul>
                            </div>
                            <p>{post.noidung}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PostDetail.propTypes = {

}

export default PostDetail
