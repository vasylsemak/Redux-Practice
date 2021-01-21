import axios from "axios";

export const GOT_BALLOONS = "GOT_BALLOONS";
export const BALLOONS_ERROR = "BALLOONS_ERROR";

export function createGotBaloonsAction(balloons) {
  return { type: GOT_BALLOONS, balloons };
}

export function createBalloonsErrorAction(error) {
  return { type: BALLOONS_ERROR, error };
}

export const createGetBalloonsThunk = () => async (dispatch) => {
  try {
    const responce = await axios.get("/balloons");
    dispatch(createGotBaloonsAction(responce.data));
  } catch(error) {
    dispatch(createBalloonsErrorAction(error));
  }
}
