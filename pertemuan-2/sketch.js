function setup() {
  createCanvas(640, 480); // membuat kanvas dengan lebar 640 dan tinggi 480
  background(119, 3, 123); // memberikan latar belakang dengan warna ungu
}
function draw() {
  fill(255, 6, 183); // memberikan warna pink pada isi bentuk
  noStroke(); // tidak memberikan garis tepi pada bentuk
  triangle(width/2, height/2 - 90, width/2 - 50, height/2 + 50, width/2 + 200, height/2 + 50); // membuat segitiga di tengah layar
}