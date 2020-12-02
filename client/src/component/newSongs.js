import { useEffect, useState } from 'react';
import Songs from '../component/songs';

const NewSongs = ()=>{
  const [sList, setSList] = useState([]);
  useEffect(() => {
    fetch("/api/songs").then((res)=>{
      if(res.ok){
        return res.json()
      }
    }).then((data)=>{
      setSList(data)
    })
  }, []);
    return <div> 
          <h1>New Songs</h1>

    {
        sList.map((item,index)=>{
          return <Songs
          id = {item.id}
          key= {index}
          name={item.name}
          image={item.image}
          song={item.song}
        />
        })
      }

    
      </div>
}
export default NewSongs;