import 'dart:html';
import 'dart:math' as Math;

CanvasElement canvas;
CanvasRenderingContext2D ctx;
int flag_w = 300;
int flag_h = 200;
int flag_w1 = 300;
int flag_h1 = 150;
num circle_x = flag_w / 2;
num circle_y = flag_h / 2;
num circle_a = flag_w / 4;
num circle_b = flag_h / 4;

void main() {
  canvas = querySelector('#canvas');
  ctx = canvas.getContext('2d');

 

  querySelector("#uk").onClick.listen((e) => drawUK(ctx));
  querySelector("#button").onClick.listen((e) => clearCanvas());
}
void drawUK(ctx){
  ctx.clearRect(0, 0, flag_w, flag_h);
  ctx.fillStyle = '#001b69';
  ctx.fillRect(0, 0, flag_w1, flag_h1);
    ctx.strokeStyle="#fff";
  ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.moveTo(0,150);
    ctx.lineTo(300,0);
  ctx.stroke();
  ctx.strokeStyle="#c9072a";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(0,155);
  ctx.lineTo(150,80);
  ctx.stroke();
  ctx.strokeStyle="#c9072a";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(150,70);
  ctx.lineTo(295,-5);
  ctx.stroke();
  ctx.strokeStyle="#c9072a";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(150,70);
  ctx.lineTo(305,145);
  ctx.stroke();
  ctx.strokeStyle="#c9072a";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(150,80);
  ctx.lineTo(-5,5);
  ctx.stroke();
  ctx.strokeStyle="#fff";
  ctx.lineWidth = 50;
    ctx.beginPath();
    ctx.moveTo(0,75);
    ctx.lineTo(300,75);
    ctx.moveTo(150,0);
    ctx.lineTo(150,150);
    ctx.stroke();
  ctx.strokeStyle="#c9072a";
  ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(0,75);
    ctx.lineTo(300,75);
    ctx.moveTo(150,0);
    ctx.lineTo(150,150);
    ctx.stroke();
    ctx.fillStyle = '#fff';
  ctx.fillRect(0, 150, flag_w, flag_h/4);
  
}
void clearCanvas(){
  ctx.clearRect(0, 0, flag_w, flag_h);
}
