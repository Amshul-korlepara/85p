canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
images=["mars.jpg","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630920405189C00_DXXX.jpg"];
var random_num=Math.floor(Math.random()*4);
background_image_C=images[random_num];
rover_image="rover.png";

function add() {
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image_C;
    rover_img=new Image();
    rover_img.onload=uploadRover;
    rover_img.src=rover_image;
    
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
   
}

function uploadRover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", keydown);

function keydown(e) {
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=="38") {
    up();
    console.log("up key is pressed");
}
if (keypressed=="40") {
    down();
    console.log("down key is pressed");
}
if (keypressed=="37") {
    left();
    console.log("left key is pressed");
}
if (keypressed=="39") {
    right();
    console.log("right key is pressed");
}
}


function up(){
if (rover_y>=10) {
    rover_y-=10;
    uploadBackground();
    uploadRover();
}
} 

function down(){
    if (rover_y<=500) {
        rover_y+=10;
        uploadBackground();
        uploadRover();
    }
    } 
    function left(){
        if (rover_x>=10) {
            rover_x-=10;
            uploadBackground();
            uploadRover();
        }
        } 

        function right(){
            if (rover_x<=690) {
                rover_x+=10;
                uploadBackground();
                uploadRover();
            }
            } 
    
