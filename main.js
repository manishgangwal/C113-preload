function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,350);
    video=createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image(video,150,150,140,140);
    tint(tint_color);
    fill(200,0,0);
    circle(375,40,70);
    fill(200,0,0);
    circle(39,40,70);
    fill(200,0,0);
    circle(39,350,70);
    fill(200,0,0);
    circle(375,350,70);
    fill(0,200,0);
    rect(30,20,350,20);
    rect(30,20,20,350);
    rect(30,350,350,20);
    rect(370,20,20,350);
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}