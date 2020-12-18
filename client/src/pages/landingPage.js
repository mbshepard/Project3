import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";
import { Container, Row, Jumbotron, Accordion, Card, Image, Col, Button } from 'react-bootstrap';


const LandingPage = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {

            audioListener.showTopNav(false,false,false);
            audioListener.stopAll();

    }, []);
    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
      }    

    return <div>
        <Container>
            <Jumbotron fluid style={{backgroundColor: "darkgrey"}}>
                <Container>
                    <Image src="https://fontmeme.com/permalink/201129/dca17d39fe55ca4aab3c3e7b4fee6c78.png"></Image>
                    <p>
                 An app to rate snips of music by your favorite artists. Our app loads the song of your choice on XSound, once on queue with a few clicks you can pin point the exact snips of the song you like the most. Your snips get saved and on the review page you can leave a rating for your reference. 
                    </p>
                </Container>
            </Jumbotron>
        </Container>
        <Container fluid style={{backgroundColor: "darkgrey"}}>
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Card.Title>Kendrick Lamar</Card.Title>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image src="https://media.giphy.com/media/Sn1hIvTNc6BvW/giphy.gif"></Image>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Kendrick Lamar, in full Kendrick Lamar Duckworth, (born June 17, 1987, Compton, California, U.S.), American rapper who achieved critical and commercial success with such albums as good kid, m.A.A.d city (2012) and To Pimp a Butterfly (2015).
Duckworth grew up in a high-crime area of Compton, where, ironically, his parents had moved to escape a violent milieu in Chicago. He began writing rhymes as a young teenager, and he released his first mixtape, Youngest Head Nigga in Charge (2003), under the name K. Dot. The music impressed Anthony Tiffith, head of the newly formed record label Top Dawg Entertainment, and he signed the musician. Duckworth put out two more mixtapes as K. Dot—Training Day (2005) and C4 (2009)—before releasing Overly Dedicated (2010) as Kendrick Lamar. He became a popular guest performer on tracks put out by other rappers and also joined fellow Top Dawg artists Ab-Soul, Jay Rock, and ScHoolboy Q in a hip-hop collective known as Black Hippy. In 2011 Top Dawg made Lamar’s album Section.80 available on iTunes, and at a concert that same year Lamar was ceremonially declared the “new king of the West Coast” by veteran rap artists Game, Snoop Dogg, and Dr. Dre.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                <Accordion>
                        <Card>
                        <Card.Title>Jay Z</Card.Title>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image src="https://media.giphy.com/media/RkZqtCBhVh17y/giphy.gif"></Image>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>JAY-Z, previously spelled Jay-Z or Jay Z, original name Shawn Corey Carter, (born December 4, 1969, Brooklyn, New York, U.S.), American rapper and entrepreneur, one of the most influential figures in hip-hop in the 1990s and early 21st century. A string of successful albums followed at a rate of at least one per year through 2003. Vol. 2: Hard Knock Life (1998) not only was the first of Jay-Z’s releases to top the Billboard 200 album chart but also won him his first Grammy Award, for best rap album. The critically acclaimed The Blueprint (2001), featuring the triumphant hit “Izzo (H.O.V.A.),” solidified his status as one of the preeminent voices in hip-hop at the dawn of the 21st century. Shortly after its release, Jay-Z pleaded guilty to assault relating to a 1999 nightclub stabbing and received three years’ probation, but the incident did little to derail his career. Ahead of the release of The Black Album (2003), however, Jay-Z announced his retirement as a performer. The ostensible farewell recording proved to be one of his most popular, with the brash single “99 Problems,” produced by Rick Rubin, attracting considerable attention. In 2004 he assumed the presidency of Def Jam Recordings, making him one of the most highly placed African American executives in the recording industry at the time.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                        <Card.Title>50 Cent</Card.Title>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image src="https://media.giphy.com/media/e7L5LrKymQZDq/giphy.gif"></Image>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>50 Cent (also known as Fitty" or "Fifty") is an American rapper, actor, entrepreneur and executive producer. He was born in Queens, New York City on July 6, 1975. 50 Cent is his public name, but his birth name is Curtis Jackson. Growing up, he never knew his father and his mother were murdered when he was just 8 years old. He grew up in a neighborhood called STP. He learned how to play basketball and football. He got shot nine times in STP. Before becoming a rapper he was a drug dealer. 50 Cent first became successful in rap music in 2002. He was helped by his fellow gang boss Rijaan D. M. (the same person who helped him release track "Wanksta"). Since then, he has sold millions of records. His first album, "Get Rich Or Die Tryin'" broke music records and went multi-platinum. It was number one right away on the Billboard 200. It sold 872,000 copies in the first four days.[4] 50 and the album both won an American Music Award. He won the first Sound of... award by the BBC for new artists. He also won the BET Award for Best New Artist.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                <Accordion>
                        <Card>
                        <Card.Title>J Cole</Card.Title>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <Image src="https://media.giphy.com/media/OSaCKpGMLp0cdYcE3t/giphy.gif"></Image>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Jermaine Lamarr Cole (born January 28, 1985), known professionally as J. Cole, is a German-born American rapper, singer, songwriter, record producer, and record executive. Born on a military base in Germany and raised in Fayetteville, North Carolina, Cole initially gained recognition as a rapper following the release of his debut mixtape, The Come Up, in early 2007. Intent on further pursuing a musical career as a rapper, he went on to release two additional mixtapes, The Warm Up (2009) and Friday Night Lights (2010) both to critical acclaim, after signing to Jay-Z's Roc Nation imprint in 2009. Cole released his debut studio album, Cole World: The Sideline Story, in 2011. It debuted at number one on the US Billboard 200. His next album, Born Sinner (2013), also topped the Billboard 200. Moving into more conscious themes, 2014 Forest Hills Drive (2014) topped the Billboard 200 and earned Cole a Best Rap Album nomination at the 2015 Grammy Awards. His jazz influenced fourth album, 4 Your Eyez Only (2016), debuted at number one on the Billboard 200. Cole's fifth album, KOD (2018), became his fifth number-one album on the Billboard 200 and featured a then-record six simultaneous top 20 hits on the Billboard Hot 100, tying The Beatles.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        <div style={phantom}></div>
    </div>;
}
 
export default LandingPage;

