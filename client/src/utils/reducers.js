import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of 'update_products', return a new state object with an updated product array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        case UPDATE_CATEGORIES:
            return{
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return{ 
                ...state,
                currentCategory: action.currentCategory
            };
            // if its none of these actions, dont update state at all and keep things the same!
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}