import NewSongs from "./NewSongs";
import songList from "../../songList.json"
const Songs = (props)=>{
    console.log(props)
    // const songList = props.data
    return <div>
        {
            songList.map((item)=>{
                return<NewSongs
                id = {item.id}
                name={item.name}
                song={item.song}
                image={item.image}
                />
                    
                
            })
        }

    </div>
}

export default Songs;