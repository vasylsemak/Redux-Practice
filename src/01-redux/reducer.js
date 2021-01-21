const initialState = {
  cats: [],
  dogs: [],
  petToPreview: {},
  petToAdopt: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'PREVIEW_PET':
      return { ...state, petToPreview: action.pet };
    case 'ADOPT_PET':
      return { ...state, petToAdopt: action.pet };
    case 'ADD_NEW_DOG':
      return { ...state, dogs: [ ...state.dogs, action.dog ]};
    case 'ADD_NEW_CAT':
      return { ...state, cats: [ ...state.cats, action.cat ]};
    case 'REMOVE_DOG':
      return {
        ...state,
        dogs: [ ...state.dogs.filter(d => d.id !== action.dogId) ]
      };
    case 'REMOVE_CAT':
      return {
        ...state,
        cats: [ ...state.cats.filter(c => c.id !== action.catId)]
      }

    default:
      return state;
  }
}
