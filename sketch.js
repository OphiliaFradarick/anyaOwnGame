
var gamestate = "level1";

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

	ground2 = createSprite(0, 680, 800, 10);
	ground2.visible = false;

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

	if (gamestate === "level1") {
		textSize(40);
		fill("white");
		stroke("black");
		strokeWeight(3);
		text("CATCH THE WORD - O R A N G E", 100, 200);
		spawnTheWordORANGE()
	}

	cat.overlap(ground2);

}

function spawnTheWordORANGE() {
	if (frameCount % 50 == 0) {

		A = createSprite(810, Math.round(random(70, 590)))
		A.addImage(letterA)
		A.scale = 0.2
		A.velocityX = -(random(4, 6))



		C = createSprite(810, Math.round(random(70, 590)))
		C.addImage(letterC)
		C.scale = 0.2;
		C.velocityX = -(random(4, 6))

		D = createSprite(810, Math.round(random(70, 590)))
		D.addImage(letterD)
		D.scale = 0.2
		D.velocityX = -(random(4, 6))

		E = createSprite(810, Math.round(random(70, 590)))
		E.addImage(letterE)
		E.scale = 0.2
		E.velocityX = -(random(4, 6))



		G = createSprite(810, Math.round(random(70, 590)))
		G.addImage(letterG)
		G.scale = 0.2
		G.velocityX = -(random(4, 6))



		N = createSprite(810, Math.round(random(70, 590)))
		N.addImage(letterN)
		N.scale = 0.2
		N.velocityX = -(random(4, 6))

		O = createSprite(810, Math.round(random(70, 590)))
		O.addImage(letterO)
		O.scale = 0.2
		O.velocityX = -(random(4, 6))


		R = createSprite(810, Math.round(random(70, 590)))
		R.addImage(letterR)
		R.scale = 0.2
		R.velocityX = -(random(4, 6))

		S = createSprite(810, Math.round(random(70, 590)))
		S.addImage(letterS)
		S.scale = 0.2
		S.velocityX = -(random(4, 6))


		W = createSprite(810, Math.round(random(70, 590)))
		W.addImage(letterW)
		W.scale = 0.2
		W.velocityX = -(random(4, 6))

		if (cat.overlap(O)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("O", 80, 270);
		}

		else if (cat.overlap(R)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("R", 86, 270);
		}

		else if (cat.overlap(A)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("A", 90, 270);
		}

		else if (cat.overlap(N)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("N", 95, 270);
		}

		else if (cat.overlap(G)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("G", 100, 270);
		}

		else if (cat.overlap(E)) {
			textSize(47);
			fill("green");
			stroke("black");
			strokeWeight(3);
			text("E", 105, 270);
		}


	}
}

