const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter(stateSong => stateSong.id === song.id);
    setCurrentSong(selectedSong[0]);
    if (isPlaying) {
      const playSong = audioRef.current.play();
      if (playSong !== undefined) {
        playSong.then(data => {
          audioRef.current.play();
          // console.log(playSong);
          // console.log(data);
        });
      }
    }
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
