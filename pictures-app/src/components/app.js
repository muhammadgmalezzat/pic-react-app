//import react , react dom

import React from 'react'
import Axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from '../components/imagelist'

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = (term) => { 
        Axios.get('https://api.unsplash.com/search/photos', {
            params:{query: term},
            headers: {
                Authorization:'Client-ID uz3teIMCybSwxpT-vT-2v_hI3MewgUu7zsA6fYX9Afw'
            }
        }).then((res) => {
            this.setState({ images: res.data.results })
        })
        
    }

    render() { 
        return (
        <div className="ui container" style={{marginTop: '20px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                found : {this.state.images.length} images
                <ImageList images={this.state.images }/>
        </div>
    );
    }
    
}


export default App;