import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { tittle: "No Scrubs", duration: "4:00" },
    { tittle: "Macarena", duration: "2:30" },
    { tittle: "All Star", duration: "3:15" },
    { tittle: "I Want It That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
})