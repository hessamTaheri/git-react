import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  const renderList = () => {
    return songs.map((song) => (
      <div className="item" key={song.tittle}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => {
              selectSong(song);
            }}
          >
            Select
          </button>
        </div>
        <div className="content">{song.tittle}</div>
      </div>
    ));
  };
  console.log(songs, selectSong);
  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
