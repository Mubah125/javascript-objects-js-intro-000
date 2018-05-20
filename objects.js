var playlist = {'Phil Ochs': 'Location'};

function updatePlaylist(playlist, artistName, songTitle){

 return Object.assign({} , playlist , { artistName: songTitle })


};
