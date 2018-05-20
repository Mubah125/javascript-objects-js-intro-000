var playlist = {'Phil Ochs': 'Slowdive'};

function updatePlaylist(playlist, artistName, songTitle){

 return Object.assign({} , playlist , { [artistName]: songTitle })


};

function removeFromPlaylist(playlist, artistName){

 delete playlist.artistname;
return playlist;
};
