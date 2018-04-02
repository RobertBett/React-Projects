import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId: null,
        error: false
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response =>{
                    const posts = response.data.slice(0,4);
                    const updatedPosts = posts.map(post =>{
                        return {
                            ...post,
                            author:'Rob'
                        }
                    })
                    this.setState({posts: updatedPosts});
                })
                .catch(error =>{
                    // console.log(error);
                    this.setState({error:true});
                })

    }

    postsSelectedHandler = (id) =>{
        this.setState({selectedPostId:id});
    }

    render () {
        let posts =<h1 style={{textAlign:'center'}}>Something Went Wrong</h1>
        if(!this.state.error){
            posts = this.state.posts.map(post =>{
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            body={post.body} 
                            author={post.author}
                            clicked={() => this.postsSelectedHandler(post.id)}/>;
            });
        }

        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;