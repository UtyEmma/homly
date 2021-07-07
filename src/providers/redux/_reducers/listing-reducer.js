import { ListingConstants } from "../_contants/listing-constants";

const { STORE_LISTING, NEW_LISTING_REQUEST, NEW_LISTING_SUCCESS, 
        NEW_LISTING_FAILURE, GETLISTINGS_REQUEST, GETLISTINGS_SUCCESS,
        GETLISTINGS_FAILURE } = ListingConstants;

export function StoreListingReducer (state = {}, actions){
    switch (actions.type) {
        case STORE_LISTING:
            return {...state, store: actions.payload}
        default:
            return state;
    }
}

export function NewListingReducer(state = {}, actions){
    switch(actions.type){
        case NEW_LISTING_REQUEST: 
            return {...state, loading: true}
        case NEW_LISTING_SUCCESS:
            return {...state, loading: false, listing_success: actions.payload}
        case NEW_LISTING_FAILURE:
            return {...state, loading: false, listing_failure: actions.payload }
        default:
            return state
    }
}

export function AgentsListingsReducer(state={}, actions){
    switch(actions.type){
        case GETLISTINGS_REQUEST: 
            return {...state, loading: true}
        case GETLISTINGS_SUCCESS:
            return {...state, loading: false, agents_listings: actions.payload}
        case GETLISTINGS_FAILURE:
            return {...state, loading: false, get_listing_failure: actions.payload }
        default:
            return state
    }
}