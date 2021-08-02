import React, {Component} from 'react';

import axios from 'axios';
import './home.css';

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost/practical_test/Trainee-Associate-Assignment/bizlogic/api/read.php')
        .then(response =>{
            this.setState({
                posts: response.data
            })
        })
    }
    
    render(){
        const {posts} = this.state
        return (
          posts.map(post => 
            <div className ="fullCard">
            <div>{post.id}</div>  
            <div>{post.name}</div>
            <div>{post.username}</div>
            <div>{post.email}</div>
          </div>
          
          )
        )
    }
}
export default Home
