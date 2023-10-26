/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie';

// eslint-disable-next-line react/prop-types
export const Row = ( {title, fetchUrl, rowID} ) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get(fetchUrl).then((response)=>{
      setMovies(response.data.results)
    })
  },[fetchUrl])

  const slideLeft = () =>{
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  
  const slideRight = () =>{
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id)=>(
            // eslint-disable-next-line react/jsx-key
            < Movie key={id} item={item}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </>
  )
}

export default Row;