import React from 'react';

import {
    GET_CARDS,
    GET_CURRENT_CARD,
    CLEAR_STATE,
    SET_LOADING,
  } from "./types";

export const MagicGatheringContext = React.createContext<any>(undefined);
  
export function MagicGatheringProvider({ children }: any) {
  const initialState = {};

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
                item: {}
              };
            case SET_LOADING:
              return {
                ...state,
                loading: true
              };
            default:
              return false;
          }
    };
    return (
        <MagicGatheringContext.Provider 
          value={React.useReducer(reducer, initialState)}
        >
          {children}
        </MagicGatheringContext.Provider>
      );
  }

export const useMagicGatheringState = () =>
  React.useContext(MagicGatheringContext);
