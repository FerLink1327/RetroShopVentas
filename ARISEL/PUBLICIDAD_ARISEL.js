(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PUBLICIDAD_ARISEL_atlas_1", frames: [[0,0,1920,538],[0,540,683,1024]]},
		{name:"PUBLICIDAD_ARISEL_atlas_2", frames: [[0,1282,1920,538],[0,0,870,1280],[872,0,852,1280]]},
		{name:"PUBLICIDAD_ARISEL_atlas_3", frames: [[0,0,1881,806]]},
		{name:"PUBLICIDAD_ARISEL_atlas_4", frames: [[0,0,1040,1560]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3396,253);


(lib.cyberwow = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cyberwow2 = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.foto_qs = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo_arisel_blanco = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pro1 = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pro2 = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pro3 = function() {
	this.initialize(ss["PUBLICIDAD_ARISEL_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.logo_arisel_blanco();
	this.instance.setTransform(0,0,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,872.6,373.9), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eih6gvgMFD1AAAMAAABfBMlD1AAAg");
	this.shape.setTransform(1036.275,304.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("Eih6AvhMAAAhfBMFD1AAAMAAABfBg");
	this.shape_1.setTransform(1036.275,304.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-1,-1,2074.6,610.2), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro3();
	this.instance.setTransform(0,0,0.7089,0.7089);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,484.2,725.9), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,1698,126.5), null);


(lib.Interpolación18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.logo_arisel_blanco();
	this.instance.setTransform(-436.3,-186.95,0.4639,0.4639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436.3,-186.9,872.6,373.9);


(lib.Interpolación15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eih6gvgMFD1AAAMAAABfBMlD1AAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("Eih6AvhMAAAhfBMFD1AAAMAAABfBg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1037.2,-305,2074.5,610.1);


(lib.Interpolación14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.foto_qs();
	this.instance.setTransform(-282.95,-416.3,0.6505,0.6505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-416.3,565.9,832.6);


(lib.Interpolación13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.foto_qs();
	this.instance.setTransform(-282.95,-416.3,0.6505,0.6505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.9,-416.3,565.9,832.6);


(lib.Interpolación9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro1();
	this.instance.setTransform(-229.95,-345.45,0.5398,0.5398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.9,-345.4,459.9,690.9);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro1();
	this.instance.setTransform(-229.95,-345.45,0.5398,0.5398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.9,-345.4,459.9,690.9);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro2();
	this.instance.setTransform(-255.2,-382.8,0.4908,0.4908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.2,-382.8,510.5,765.7);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro2();
	this.instance.setTransform(-255.2,-382.8,0.4908,0.4908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.2,-382.8,510.5,765.7);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pro3();
	this.instance.setTransform(-242.05,-362.95,0.7089,0.7089);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-362.9,484.1,725.9);


// stage content:
(lib.PUBLICIDAD_ARISEL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_12
	this.instance = new lib.Símbolo4();
	this.instance.setTransform(960.35,224.95,0.0367,0.0367,0,180,0,436.4,186.8);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolación18("synched",0);
	this.instance_1.setTransform(960.3,224.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},131).to({state:[{t:this.instance_1}]},16).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,x:960.3,mode:"synched",startPosition:0},16).wait(11));

	// fondo_fucsia
	this.instance_2 = new lib.Interpolación15("synched",0);
	this.instance_2.setTransform(972.25,848.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Símbolo3();
	this.instance_3.setTransform(972.2,236.1,1,1,0,0,0,1036.2,304.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},119).to({state:[{t:this.instance_3}]},12).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({_off:true,regX:1036.2,regY:304.1,x:972.2,y:236.1,mode:"independent"},12).wait(27));

	// foto1
	this.instance_4 = new lib.Interpolación13("synched",0);
	this.instance_4.setTransform(2271.95,416.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolación14("synched",0);
	this.instance_5.setTransform(1703.95,416.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},100).to({state:[{t:this.instance_5}]},14).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({_off:true,x:1703.95},14).wait(44));

	// foto2
	this.instance_6 = new lib.Interpolación8("synched",0);
	this.instance_6.setTransform(2206.95,254.45);
	this.instance_6._off = true;

	this.instance_7 = new lib.Interpolación9("synched",0);
	this.instance_7.setTransform(1190.95,254.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},85).to({state:[{t:this.instance_7}]},14).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).to({_off:true,x:1190.95},14).wait(59));

	// foto3
	this.instance_8 = new lib.Interpolación4("synched",0);
	this.instance_8.setTransform(2238.2,326.8);
	this.instance_8._off = true;

	this.instance_9 = new lib.Interpolación5("synched",0);
	this.instance_9.setTransform(706.2,331.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},70).to({state:[{t:this.instance_9}]},14).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({_off:true,x:706.2,y:331.8},14).wait(74));

	// foto4
	this.instance_10 = new lib.Interpolación1("synched",0);
	this.instance_10.setTransform(2206.05,346.95);
	this.instance_10._off = true;

	this.instance_11 = new lib.Símbolo2();
	this.instance_11.setTransform(209.1,346.9,1,1,0,0,0,242.1,362.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},55).to({state:[{t:this.instance_11}]},14).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({_off:true,regX:242.1,regY:362.9,x:209.1,y:346.9,mode:"independent"},14).wait(89));

	// Capa_3
	this.instance_12 = new lib.cyberwow2();
	this.instance_12.setTransform(430,77,0.5519,0.5442);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACCAAIkEAA");
	this.shape.setTransform(64.95,495.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("EiZ2AmsMAAAhNXMEztAAAMAAABNXg");
	this.shape_1.setTransform(979.15,232.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_12}]},35).to({state:[]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_12}]},5).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_12}]},2).to({state:[]},3).wait(108));

	// fondo_ciber
	this.instance_13 = new lib.cyberwow();
	this.instance_13.setTransform(430,77,0.5519,0.5519);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECV0AliMkrnAAAEiVzglhMErnAAA");
	this.shape_2.setTransform(969.9,230.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ECVzAliMkrmAAAIkDAAMAAAhLDIEDAAMErmAAAIEFAAMAAABLDg");
	this.shape_3.setTransform(969.95,230.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ECVzAliMkrmAAAIkDAAMAAAhLCIEDAAMErmAAAIEFAAMAAABLCg");
	this.shape_4.setTransform(969.95,227.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("ECV0AAAMkrnAAA");
	this.shape_5.setTransform(984.7,480.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EiZ3AlhMAAAhLBMEzvAAAMAAABLBg");
	this.shape_6.setTransform(979.2,225.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{y:230.9}},{t:this.instance_13}]},30).to({state:[{t:this.shape_4},{t:this.shape_2,p:{y:227.9}},{t:this.instance_13}]},10).to({state:[]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_13}]},5).to({state:[]},5).wait(103));

	// texto
	this.instance_14 = new lib.Símbolo1();
	this.instance_14.setTransform(960.05,225,0.0227,0.0227,0,0,0,849,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:63.2,scaleX:0.9592,scaleY:0.9592,x:959.95},20).wait(10).to({scaleX:1,scaleY:1,x:960.05},0).to({_off:true},21).wait(107));

	// Capa_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EicXAmnMAAAhNNME4vAAAMAAABNNg");
	this.shape_7.setTransform(953.95,225.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(30).to({_off:true},21).wait(107));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(895,134,1659.9,1019.3);
// library properties:
lib.properties = {
	id: '2B3103357B3A41C4B6526D87C046AA3F',
	width: 1920,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/PUBLICIDAD_ARISEL_atlas_1.png", id:"PUBLICIDAD_ARISEL_atlas_1"},
		{src:"images/PUBLICIDAD_ARISEL_atlas_2.png", id:"PUBLICIDAD_ARISEL_atlas_2"},
		{src:"images/PUBLICIDAD_ARISEL_atlas_3.png", id:"PUBLICIDAD_ARISEL_atlas_3"},
		{src:"images/PUBLICIDAD_ARISEL_atlas_4.png", id:"PUBLICIDAD_ARISEL_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2B3103357B3A41C4B6526D87C046AA3F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;