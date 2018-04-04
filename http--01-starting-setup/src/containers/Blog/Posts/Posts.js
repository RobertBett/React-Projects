import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


import './Posts.css';
import Post from '../../../components/Post/Post';

class Posts extends Component {
    state={
        posts:[],
        // selectedPostId: null,
        // error: false
    }

    componentDidMount(){
        console.log(this.props)
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
                    console.log(error);
                    //this.setState({error:true});
                })

    }

    postsSelectedHandler = (id) =>{
        this.setState({selectedPostId:id});
    }

    render(){
        let posts =<h1 style={{textAlign:'center'}}>Something Went Wrong</h1>
        if(!this.state.error){
            posts = this.state.posts.map(post =>{
                return( 
                        <Link to={'/' + post.id} key={post.id} > 
                            <Post 
                            
                            title={post.title} 
                            body={post.body} 
                            author={post.author}
                            clicked={() => this.postsSelectedHandler(post.id)}/>
                        </Link>)
            });
        }
        return(
            <section className="Posts">
            {posts}
            </section>
        );
    }

}

export default Posts;