
const nodemon = require('nodemon');

nodemon({
	exec: [
		"npm run build",
		"npm start"
	].join(" && "),
	watch: "app"
});

nodemon.on('start', ()=> {
	console.log('App is starting.');
});

nodemon.on('restart', files => {
	console.log('App restarted due to:', files );
});

nodemon.on('quit', ()=> {
	console.log('App has quit.');
});
