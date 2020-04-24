import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import ImageCard from  './components/ImageCard'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')


  useEffect(()=>{
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
         setImages(data.hits)
         setIsLoading(false)
      }).catch(err => {
      })
  },[term])

  return (
    <div className="App">
     <Header serachText={text => setTerm(text)}/>
     <div className='o-container o-container--fluid'>
       <div className="u-row">
       {!isLoading && images.length === 0 && <h1>No Images Found :(</h1>}
       {isLoading ? <h1>Loading....</h1> : images.map(image => (
          <ImageCard key={image.id} image={image}/>
       ))}
       </div>
     </div>
    </div>
  );
}

export default App;
