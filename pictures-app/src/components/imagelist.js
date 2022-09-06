import './imagelist.css'
import React from 'react'
import ImageCard from './ImageCard';

const imageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image} />
        );
    });
    
    return (
        <div className='imageList'>
            {images}
        </div>
    );
};

export default imageList;