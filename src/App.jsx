import { useEffect, useState } from "react"
import { fetchData } from "./utils/fetchData";
import Header from "./components/Header";
import Cards from "./components/Cards";

const API_KEY = 'e5017e96df9dee269d124372e8a5d218'

export default function App() {

  const [photos, setPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState("mountain");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then((data) => {
        const arrayPhotos = data.photos.photo;

        const formattedPhotos = arrayPhotos.map((photo) => ({
          id: photo.id,
          title: photo.title,
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        }))
        setIsLoading(false);

        setPhotos(formattedPhotos);
      })
      .catch((error) => console.log(error));
  }, [searchTerm])

  const handleSearch = (event) => {
    event.preventDefault();
    const term = event.target.elements.searchInput.value;
    setSearchTerm(term);
  }

  return (
    <>
      <div className="px-4 mx-auto md:w-[750px] lg:w-[970px]">
        
        <Header
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
        />

        <Cards 
          searchTerm={searchTerm}
          isLoading={isLoading}
          photos={photos}
        />
        
      </div>
    </>
  )
}