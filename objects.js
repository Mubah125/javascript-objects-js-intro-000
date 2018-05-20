var playlist = {'Kalid': 'Location'};

function updatePlaylist(list, name, song){

Object.assign({}, list,{[name]: song});

}
