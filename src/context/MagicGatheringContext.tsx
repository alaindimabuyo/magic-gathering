import React from 'react';
import axios from "axios";
import {
    GET_CARDS,
    GET_CURRENT_CARD,
    CLEAR_STATE,
    SET_LOADING,
    SET_DARK
  } from "./types";
export const MagicGatheringContext = React.createContext<any>(undefined);
  
export function MagicGatheringProvider({ children }: any) {
  const initialState = {
    card: {},
    cards: [],
    loading: false,
    isDark: false
  };

    const reducer = (
      state: any,
      action: {
        type: string;
        payload?: any;
        id?: string;
      }
    ) => {
        switch (action.type) {
            case GET_CARDS:
              return {
                ...state,
                cards: action.payload,
                loading: false
              };
            case GET_CURRENT_CARD:
              return {
                ...state,
                card: action.payload,
                loading: false
              };
            case CLEAR_STATE:
              return {
                ...state,
                card: {},
                item: {},
              };
            case SET_LOADING:
              return {
                ...state,
                loading: true
              };
            case SET_DARK:
              return {
                ...state,
                isDark: !state.isDark
              };
            default:
              return false;
          }
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setLoading = () => {
      dispatch({ type: SET_LOADING });
    };

    const setDark = () => {
      dispatch({ type: SET_DARK });
    };

    const clearState = () => {
      dispatch({ type: CLEAR_STATE });
    };

    const getCards = async () => {
      setLoading();
      const res = await axios.get("https://api.magicthegathering.io/v1/cards");
  
      dispatch({ type: GET_CARDS, payload: res.data.cards });
    };

    const getCurrentCard = async (id:any) => {
      setLoading();
      try {
        const res = await axios.get(`https://api.magicthegathering.io/v1/cards/${id}`);
        dispatch({ type: GET_CURRENT_CARD, payload: res.data.card });
      } catch (error) {
        console.log(error)
      }
    };

    return (
        <MagicGatheringContext.Provider 
          value={{
            getCards,
            getCurrentCard,
            clearState,
            setLoading,
            setDark,
            cards: state.cards,
            card: state.card,
            loading: state.loading,
            isDark: state.isDark
          }}
        >
          {children}
        </MagicGatheringContext.Provider>
      );
  }

export const useMagicGatheringState = () =>
  React.useContext(MagicGatheringContext);
