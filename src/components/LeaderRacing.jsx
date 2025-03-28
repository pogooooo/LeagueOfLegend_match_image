import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const LeaderRacing = () => {

    const LeaderRacing = styled.div`
        width: 500px;
        background-color: #1C192B;
    `

    const Header = styled.div`
        display: flex;
        font-size: 20px;
    `

    const Index = styled.div`
        background-color: #FBC3AE;
        width: 40px;
        height: 40px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    `

    const Title = styled.div`
        background-color: #E2E4F2;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-weight: bold;
    `

    const Content = styled.div`
        color: #E2E4F2;
        display: flex;
        height: ${(props) => `${props.height}px`};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        > div {
            &:first-child>.track {
                border-top: 2px solid #E2E4F2;
            }
        }
    `

    const Race = styled.div`
        display: flex;
        position: relative;
    `

    const Track = styled.div`
        border: 2px solid #E2E4F2;
        border-left: none;
        border-top: none;

        width: 350px;
        height: 30px;

        display: flex;
        align-items: center;

        color: rgba(226, 228, 242);
        background: ${(props) =>
            props.horsePosition >= 330
                ? `linear-gradient(90deg, #1C192B, ${props.winnerColor})`
                : '#1C192B'};
    `

    const TrackNumber = styled.div`
        height: 30px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        
        position: absolute;
        left: 300px;
    `

    const Horse = styled.div`
        position: absolute;
        left: ${(props) => `${props.position}px`}; /* position 값에 따라 위치 조정 */
        top: 5px;
        width: 20px;
        height: 20px;
        background-color: #E2E4F2 ;
        border-radius: 50%;
        z-index: 1;
    `

    //[h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]/[0, 330, 330, 0, 0, 0, 0, 0, 0, 0]/[E2EE83, FF0A07]/[2, 3]/1/hyunjung
    const {roster, position, colors, winner, index, constructor} = useParams();

    const roster_list = roster.slice(1,-1).split(',')
    const roster_number = roster_list.length
    const position_list = position.slice(1,-1).split(',')
    const color_list = colors.slice(1,-1).split(',')
    const winner_list = winner.slice(1,-1).split(',').map(Number);


    return(
        <LeaderRacing>
            <Header>
                <Index>{index}</Index>
                <Title>{constructor}'s scrim</Title>
            </Header>
            <Content height={roster_number*40 + 100}>
                {roster_list.map((item, index) => {
                    const isWinner = winner_list.includes(index + 1); // winner_list는 1-based라고 가정
                    const winnerColor = isWinner ? `#${color_list[winner_list.indexOf(index + 1)]}` : null;

                    return (
                        <Race key={index}>
                            <Track
                                className="track"
                                horsePosition={position_list[index]}
                                isWinner={isWinner}
                                winnerColor= {winnerColor}
                            >
                                {item}
                                {isWinner && (
                                    <>
                                        : TEAM {winner_list.indexOf(index+1)+1}
                                    </>
                                )}
                                <Horse position={position_list[index]} />
                            </Track>
                            <TrackNumber></TrackNumber>
                        </Race>
                    );
                })}
            </Content>
        </LeaderRacing>
    )
}

export default LeaderRacing
