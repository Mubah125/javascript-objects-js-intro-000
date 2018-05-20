var playlist = {'Khalid': 'Location'};

function updatePlaylist(playlist, name, song){

 Object.assign({} , playlist , { name: song })
return playlist;

};
