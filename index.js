import p5 from 'p5js-node';
import { join } from "path";
import fs from "fs";

new p5((p)=>{
	p.setup = function() {
		p.createCanvas(1920,1080);
	};

	p.draw = function () {
		p.background(0);
		p.fill(255);
		p.rect(10,10, 50, 50);
		fs.writeFileSync(join(".","test.png"), p.canvas.toBuffer());
		process.exit();
	};
});
