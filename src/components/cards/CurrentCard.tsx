import {useEffect} from 'react'
import { useMagicGatheringState } from "../../context/MagicGatheringContext";
import Spinner from "../layout/Loading";
import styled from "styled-components";

const CurrentCard = ({ match }: any) => {
    const {getCurrentCard, card, loading, isDark} = useMagicGatheringState()
    const randomNumber = Math.ceil(Math.random() * 100)
    useEffect(() => {
        if(match.params.id){
            getCurrentCard(match.params.id);
        }else {
            getCurrentCard(randomNumber)
        }
        // eslint-disable-next-line
      }, []);
   
    const mana = card?.manaCost?.replace(/[']+/g,'').split('')

    if (loading) {
        return <Spinner />;
      } else {
        return (
            <div className="container">
                <CenterDiv>

                    <CardImage src={`${card?.imageUrl}`} alt='magic card'></CardImage>
                        <div className='col-s12 card'>
                            <SpacedDiv>
                                <TextWrap color={`${isDark ? 'white': 'black'}`} textWeight="bold">{card?.name}</TextWrap>
                                <CenterDiv>
                                    {mana?.map((icon: any) => {
                                        return (<i className={`ms ms-${icon.toLowerCase()}`}></i>)
                                    })}
                                </CenterDiv>   
                            </SpacedDiv>
                            <TextWrap color={`${isDark ? 'white': 'black'}`} textWeight="bold">{card?.originalType}</TextWrap>
                            <TextWrap color={`${isDark ? 'white': 'black'}`} textWeight="100">{card?.originalText}</TextWrap>
                            <TextWrap color={`${isDark ? 'white': 'black'}`} textWeight="bold">{card?.rarity}</TextWrap>
                            <TextWrap color={`${isDark ? 'white': 'black'}`} textWeight="bold">Illustrated by: {card?.artist}</TextWrap>
                          
                        </div>
                        
                </CenterDiv>
                <CenterDiv>
                    <Button color='green' onClick={() => getCurrentCard(randomNumber)}>Show Random Card</Button>
                </CenterDiv>
            </div>
        );
    }
}

let CardImage = styled.img`
  width: 300px;
  height: auto;
`;

type TextWrapType = {
    textWeight: string,
    color: string
}

const Button = styled.button`
  cursor: pointer;
  &:hover {
    background: gray;
    color: white;
  }
  font-size: 1em;
  margin: 3em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: ${props => props.color};
  color: white;
  border: none;
`;

let TextWrap = styled.div<TextWrapType>`
  font-size: 3 em;
  font-weight: ${props => props.textWeight};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${props => props.color};;
  margin: 20px;
  width: 500px;
`;


let CenterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

let SpacedDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default CurrentCard
