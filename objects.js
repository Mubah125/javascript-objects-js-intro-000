var playlist = {'Slowdive': 'Alison'};

function updatePlaylist(playlist, name, song){

 Object.assign({} , playlist , { name: song })
return playlist;

};
