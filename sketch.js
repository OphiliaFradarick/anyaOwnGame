
var gamestate = "level1";
var letterCount = 0;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

function preload() {
	backgroundImg = loadImage("wood background.jpg");
	restartButtonImg = loadImage("restart_button.png");
	letterStackImg = loadImage("letter stack.png");
	muteButtonImg = loadImage("MuteSound.png");
	catImg = loadImage("cat.png");
	letterA = loadImage("letter a.png");
	letterB = loadImage("letter b.png");
	letterC = loadImage("letter c.png");
	letterD = loadImage("letter d.png");
	letterE = loadImage("letter e.png");
	letterF = loadImage("letter f.png");
	letterG = loadImage("letter g.png");
	letterH = loadImage("letter h.png");
	letterI = loadImage("letter i.png");
	letterJ = loadImage("letter j.png");
	letterK = loadImage("letter k.png");
	letterL = loadImage("letter l.png");
	letterM = loadImage("letter m.png");
	letterN = loadImage("letter n.png");
	letterO = loadImage("letter o.png");
	letterP = loadImage("letter p.png");
	letterQ = loadImage("letter q.png");
	letterR = loadImage("letter r.png");
	letterS = loadImage("letter s.png");
	letterT = loadImage("letter t.png");
	letterU = loadImage("letter u.png");
	letterV = loadImage("letter v.png");
	letterW = loadImage("letter w.png");
	letterX = loadImage("letter x.png");
	letterY = loadImage("letter y.png");
	letterZ = loadImage("letter z.png");


}

function setup() {
	createCanvas(800, 700);

	edges = createEdgeSprites()

	//Create the Bodies Here.
	cat = createSprite(100, 600)
	cat.addImage(catImg)
	cat.scale = 0.3
	cat.debug = true;
	cat.setCollider("circle", 0, 10, 120)

	ground2 = createSprite(0, 680, 800, 10);
	ground2.visible = false;

	a = createSprite(850, Math.round(random(70, 590)))
	a.addImage(letterA)
	a.scale = 0.2
	a.debug = true;
	aGroup = new Group();
	//A.velocityX = -(random(4, 6))

	c = createSprite(850, Math.round(random(70, 590)))
	c.addImage(letterC)
	c.scale = 0.2;
	c.debug = true;
	cGroup = new Group();
	//C.velocityX = -(random(4, 6))

	d = createSprite(850, Math.round(random(70, 590)))
	d.addImage(letterD)
	d.scale = 0.2
	d.debug = true;
	dGroup = new Group();
	//D.velocityX = -(random(4, 6))

	e = createSprite(850, Math.round(random(70, 590)))
	e.addImage(letterE)
	e.scale = 0.2
	e.debug = true;
	eGroup = new Group();
	//E.velocityX = -(random(4, 6))

	g = createSprite(850, Math.round(random(70, 590)))
	g.addImage(letterG)
	g.scale = 0.2
	g.debug = true;
	gGroup = new Group();
	//G.velocityX = -(random(4, 6))

	n = createSprite(850, Math.round(random(70, 590)))
	n.addImage(letterN)
	n.scale = 0.2
	n.debug = true;
	nGroup = new Group();
	//N.velocityX = -(random(4, 6))

	o = createSprite(850, Math.round(random(70, 590)))
	o.addImage(letterO)
	o.scale = 0.2
	o.debug = true;
	oGroup = new Group();
	//O.velocityX = -(random(4, 6))


	r = createSprite(850, Math.round(random(70, 590)))
	r.addImage(letterR)
	r.scale = 0.2
	r.debug = true;
	rGroup = new Group();
	//R.velocityX = -(random(4, 6))

	s = createSprite(850, Math.round(random(70, 590)))
	s.addImage(letterS)
	s.scale = 0.2
	s.debug = true;
	sGroup = new Group();
	//S.velocityX = -(random(4, 6))


	w = createSprite(850, Math.round(random(70, 590)))
	w.addImage(letterW)
	w.scale = 0.2
	w.debug = true;
	wGroup = new Group();
	//W.velocityX = -(random(4, 6))

}


function draw() {
	background(backgroundImg);
	drawSprites();

	if (keyDown("UP_ARROW") && cat.y > 50) {
		cat.y = cat.y - 6;
	}

	if (keyDown("LEFT_ARROW") && cat.x > 50) {
		cat.x = cat.x - 6;
	}

	if (keyDown("RIGHT_ARROW") && cat.x < 650) {
		cat.x = cat.x + 6;
	}

	if (keyDown("DOWN_ARROW")) {
		cat.y = cat.y + 6;
	}

	textSize(40);
	fill("white");
	stroke("black");
	strokeWeight(3);
	text("CATCH THE WORD - O R A N G E", 100, 200);
	text("LETTER COUNT - " + letterCount, 190, 270);

	spawnTheWordORANGE();

	// if (gamestate === "level1") {
	// 	textSize(40);
	// 	fill("white");
	// 	stroke("black");
	// 	strokeWeight(3);
	// 	text("CATCH THE WORD - O R A N G E", 100, 200);
	// 	text("LETTER COUNT - " +letterCount, 190, 270);
	// 	spawnTheWordORANGE()
	// }


}

function spawnTheWordORANGE() {
	if (frameCount % 10 === 0) {

		a.velocityX = -(random(4, 6))
		aGroup.add(a);

		c.velocityX = -(random(1, 6))
		cGroup.add(c);

		d.velocityX = -(random(4, 6))
		dGroup.add(d);

		e.velocityX = -(random(2, 6))
		eGroup.add(e);

		g.velocityX = -(random(4, 6))
		gGroup.add(g);

		n.velocityX = -(random(2, 6))
		nGroup.add(n);

		o.velocityX = -(random(1, 6))
		oGroup.add(o);

		r.velocityX = -(random(2, 6))
		rGroup.add(r);

		s.velocityX = -(random(4, 6))
		sGroup.add(s);

		w.velocityX = -(random(1, 6))
		wGroup.add(w);

		if (oGroup.isTouching(cat)) {
            oGroup[0].destroy();
			letterCount += 1;
		}

		else if (rGroup.isTouching(cat)) {
           
			letterCount += 1;
			rGroup[0].destroy();
		}

		else if (aGroup.isTouching(cat)) {

			letterCount += 1;
			aGroup[0].destroy();
		}

		else if (nGroup.isTouching(cat)) {

			letterCount += 1;
			nGroup[0].destroy();
		}

		else if (gGroup.isTouching(cat)) {

			letterCount += 1;
			gGroup[0].destroy();
		}

		else if (eGroup.isTouching(cat)) {

			letterCount += 1;
			eGroup[0].destroy();
		}


	}
}

