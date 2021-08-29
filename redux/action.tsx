
import axios from "axios";
import { Dispatch } from "redux";

const http = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1/neo/",
});

const key = 'XEXvkyZvA8JUgfjddI8fKVChSOOv2zdgMeoLl4Xa';
const getAstroid = (id: number, navigation: any) => (dispatch: Dispatch) => {
  return http.get(`${id}?api_key=${key}`).then((astoid) => {
    // console.log(astoid);
    dispatch({
      type: "SET_ASTROID",
      payload: astoid.data,
    });
    navigation.navigate("Astroid");
  });
};

const getRandomAstroid = (navigation: any) => (dispatch: Dispatch) => {
  return http.get(`browse?api_key=${key}`).then((res) => {
    //   console.log(res.data);
    const randomAstroidId =
      res.data.near_earth_objects[
        Math.floor(Math.random() * res.data.near_earth_objects.length)
      ].id;
    // console.log(randomAstroidId);
    http.get(`${randomAstroidId}?api_key=${key}`).then((res) => {
      // console.log(res.data);
      dispatch({ type: "SET_ASTROID", payload: res.data });
      navigation.navigate("Astroid");
    });
  });
};

export { getAstroid, getRandomAstroid };