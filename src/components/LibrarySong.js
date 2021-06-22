const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter(stateSong => stateSong.id === song.id);
    setCurrentSong(selectedSong[0]);
    // Add active state
    const newSongs = songs.map(newSong => {
      if (newSong.id === song.id) {
        return {
          ...newSong,
          active: true,
        };
      } else {
        return {
          ...newSong,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    // Check if the song playing
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
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
