// you need to define the action creators below!

export const adoptPet = (pet) => ({
  type: 'ADOPT_PET',
  pet
});

export const previewPet = (pet) => ({
  type: 'PREVIEW_PET',
  pet
});

export const addNewDog = (pet) => ({
  type: 'ADD_NEW_DOG',
  dog: pet
});

export const addNewCat = (pet) => ({
  type: 'ADD_NEW_CAT',
  cat: pet
});

export const removeDog = (pet) => ({
  type: 'REMOVE_DOG',
  dogId: pet.id
});

export const removeCat = (pet) => ({
  type: 'REMOVE_CAT',
  catId: pet.id
});
