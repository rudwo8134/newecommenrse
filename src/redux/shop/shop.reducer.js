import ShopactionType from './shop.type';


const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopactionType.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFetching:true
      }
    case ShopactionType.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        collections: action.payload
      }
    case ShopactionType.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching:false,
        errorMessage:action.payload
      }
    case ShopactionType.UPDATE_COLLECTIONS:
    return{
      ...state,
      collections: action.payload
    }
    default:
      return state;
  }
};

export default shopReducer;
