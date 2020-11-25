import Songs from '../component/songs';
import sList from "./sList.json"

const NewSongs = ()=>{
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