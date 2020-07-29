const initialState = {
  searchText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_NEWS':
      return { ...state, searchText: action.payload.searchText }
      break;
  }

  return state;
}
