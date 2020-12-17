import {useContext, useEffect,useState} from "react";
import {SoundXContext} from "../xsound/AudioProvider";
import {Table} from "react-bootstrap";
import {SendIcon} from "../util/appIcons"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const {Footer,Title,Header,Body}=Modal;

// const users=[
//     {firstName:"MMFirst",lastName:"LastAA", metaphorAvg:8,punchLineAvg:3,imageryAvg:6},
//     {firstName:"BBFirst",lastName:"LastBB", metaphorAvg:8,punchLineAvg:3,imageryAvg:6},
//     {firstName:"BBFirst",lastName:"LastCC", metaphorAvg:8,punchLineAvg:3,imageryAvg:6},
// ];

const Review = () => {
    const {audioListener} = useContext(SoundXContext);
    const [currentSong, setCurrentSong] = useState(null);
    const [selectedUser, setSelectedUser] = useState(-1);
    const [users, setUsers] = useState([]);

    const [showDetail, setShowDetail] = useState(false);

    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = (user) => {
        setShowDetail(true);
        setSelectedUser(user);
    }

    useEffect(() => {
        audioListener.reviewPage={loaded};
        audioListener.showTopNav(true,false,false);
        audioListener.loadCurrentSong();
        audioListener.stopAll();
        return ()=>{
            audioListener.reviewPage=null
        }

    }, []);

    const loaded = (duration, song) => {
        console.log(`From Review ${duration}`,song);
        setCurrentSong(song);
        fetch(`/audio/review/${song.id}`).then((resp)=>{
            if(resp.ok){
                return resp.json();
            }else{
                alert("Cannot load reviews")
            }
        }).then((data)=>{
            setUsers(data)
        })

    };
    let fullName='';
    if(selectedUser>-1){
        fullName=`${users[selectedUser].firstName} ${users[selectedUser].lastName}`
    }
    return <div>

        <h3>Review Page</h3>
        {currentSong &&
            <>
                {currentSong.title}<br/>
                {currentSong.artists}
                <br/>

                <div style={{padding:30}}>
                    <Table striped bordered hover >
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>User Id</th>
                            <th>Metaphor (Avg)</th>
                            <th>Punch Line (Avg)</th>
                            <th>Imagery (Avg)</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((aUser,idx) => {
                                return <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{aUser.user}</td>
                                    <td>{aUser.MetaphorAvg}</td>
                                    <td>{aUser.Punch_lineAvg}</td>
                                    <td>{aUser.ImageryAvg}</td>
                                    <td><SendIcon onClick={()=>handleShowDetail(idx)}
                                        style={{background:"transparent",color:"green"}}
                                        size={25}/>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </div>

            </>
        }
        <Modal
            show={showDetail}
            onHide={handleCloseDetail}
            backdrop="static"
            keyboard={false}
            size="xl"
            centered={true}
        >
            <Header closeButton>
                <Title>Details for {fullName} </Title>
            </Header>
            <Body>
     <h1>Comming soon!</h1>
            </Body>
            <Footer>
                <Button variant="secondary" onClick={handleCloseDetail}>
                    Close
                </Button>

            </Footer>
        </Modal>
    </div>;
}
 
export default Review;