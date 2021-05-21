import {useState} from 'react'
import {useEffect} from 'react'
import {useMagicGatheringState} from "../../context/MagicGatheringContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "../layout/Loading";

const CardEntries = () => {

    const {getCards, cards, loading, isDark} = useMagicGatheringState()

    const [search, setSearch] = useState("");

    useEffect(() => {
        getCards();
        // eslint-disable-next-line
      }, []);
      console.log(cards)

    const SearchOnChange = (e: any) => {
        setSearch(e.target.value);
      };
      //filter search
      const filteredCard = cards.filter((card: Record<string, any>) => {
        return card.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

    return (
        <>
          <div className='container '>
              <input
                className='form-control'
                type='text'
                onChange={SearchOnChange}
                placeholder='Search for Magic Card'
              />
            <CenterDiv className='row'>
            
              <div className='grid-4'>
                {filteredCard.map((card: Record<string, any>) => (
                  loading ? (
                      <div><Spinner/></div>
                  ) : (
                    <div className='card' key={card.id}>
                    <div className='col-s12'>
                      <Link to={`/cards/${card.multiverseid}`}>
                        <PokemonImage
                          src={`${card.imageUrl}`}
                          alt='card'
                        />
                      </Link>

                      <TextWrap className={`${isDark ? 'text-light': 'text-dark'}`}>{card.name}</TextWrap>
                    </div>
                  </div>
                  )
                ))}
              </div>
            </CenterDiv>
          </div>
        </>
    )
}

let PokemonImage = styled.img`
  width: 60%;
  height: auto;
  &:hover {
    transform: translate(0, -5px);
    cursor: pointer;
  }
`;

let CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

let TextWrap = styled.h4`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 5px;
`;

export default CardEntries
