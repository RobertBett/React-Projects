import React, { Component } from 'react';
import {Route, NavLink } from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from'./Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';


class Blog extends Component {



    render () {

        return (
            <div className="Blog">
                <header> 
                    <nav>
                        <ul>
                            <li><NavLink to ="/" 
                                        exact
                                        activeClassName="active"
                                        >Home</NavLink></li>
                            <li><NavLink to ={{
                                            pathname:"/newpost",
                                            hash:'#submit',
                                            search: '?quick-submit=true'
                                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/newpost" component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;