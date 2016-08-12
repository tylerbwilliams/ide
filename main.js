
const { app, BrowserWindow } = require('electron');

const DEBUG = true;

app.on('ready', ()=> {
	
	const browser = new BrowserWindow({
		width: 1000,
		height: 800,
		show: false
	});
	
	browser.loadURL(`file://${__dirname}/lib/index.html`);
	
	DEBUG && browser.webContents.openDevTools();
	
	browser.once('ready-to-show', ()=> {
		browser.show();
	});
	
	app.on('window-all-closed', ()=> {
		app.quit();
	});
});
