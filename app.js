

/*!
 * Canvas
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Canvas = require('canvas'),
	fs = require("fs");

	
	
	
var canvasToDataURI = { 
	image : '/lol_cat_icanhascheezburger.jpg',
	file : 'test.txt',
	
	
	process: function(){
		fs.readFile(__dirname + canvasToDataURI.image, function(err, data) {
			if (err) throw err;
			canvasToDataURI.drawImage(data);
		});
	},
	getDataURI: function(canvas){
		return canvas.toDataURL();
	},
	
	writeFile: function(dataURI){

		fs.writeFile(canvasToDataURI.file, dataURI, function (err) {
		  if (err) throw err;
		  console.log('written some shit to '+ canvasToDataURI.file);
		});
		
	},
	
	drawImage: function(data){
		var dataURI,
			img = new Canvas.Image();	
		img.src = data,
		canvas = new Canvas(img.width,img.height),
		ctx = canvas.getContext('2d');
			
			
		ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
		
		dataURI = this.getDataURI(canvas);
		
		
		this.writeFile(dataURI);
	}
	
};


canvasToDataURI.process();