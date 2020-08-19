import { combineReducers } from 'redux'

// reducer 1:
const songReducer = () => {
  return [
    { title: 'Backstreets back', duration: '4:05'},
    { title: '99 Luftballons', duration: '3:05'},
    { title: 'Hey Maccarena', duration: '2:25'},
    { title: 'Love me tender', duration: '4:12'}
  ]
};

// reducer 2:
const selectSongReducer = (selectSong=0, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songReducer,
  selectSong: selectSongReducer
});


