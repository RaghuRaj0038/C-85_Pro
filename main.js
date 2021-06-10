canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
backgroundImg = "Racetrack.png";

car1_width = 120;
car1_height = 70;
car1_img = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "Car2.png";
car2_x = 10;
car2_y = 100;

background_image = "Car.gif"

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_img;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width,car2_height);
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
     keypress = e.keyCode;
    console.log(keypress);
    if (keypress == '38'){

        up1();
        console.log("up");
    }
    if (keypress == '40'){

        down1();
        console.log("down");
    }
    if (keypress == '37'){

        left1();
        console.log("left");
    }
    if (keypress == '39'){

        right1();
        console.log("right");
    }


    if (keypress == '87'){

        up2();
        console.log("up"); 
    }
    if (keypress == '83'){

        down2();
        console.log("down");
    }
    if (keypress == '65'){

        left2();
        console.log("left");
    }
    if (keypress == '68'){

        right2();
        console.log("right");
    }
}



function up1(){
    if(car1_y>=0){
        car1_y =  car1_y - 10;
        console.log("When up arrow pressed x = "+car1_x+"- y="+car1_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
    
}

function down1(){
    if(car1_y<=400){
        car1_y =  car1_y + 10;
        console.log("When down arrow pressed x = "+car1_x+"|y="+car1_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
    
}

function left1(){
    if(car1_x>=0){
        car1_x =  car1_x - 10;
        console.log("When left arrow pressed x = "+car1_x+"- y="+car1_y);
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
    
}

function right1(){
    if(car1_x<=700){
        car1_x = car1_x + 10;
        console.log("When right arrow pressed x = "+car1_x+"|y="+car1_y);
        if (car1_x > 700){
            console.log("car1 won");
            document.getElementById("game_status").innerHTML="car1 Won!!!"
        }
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
}






function up2(){
    if(car2_y>=0){
        car2_y =  car2_y - 10;
        console.log("When up arrow pressed x = "+car2_x+"- y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
    
}

function down2(){
    if(car2_y<=400){
        car2_y =  car2_y + 10;
        console.log("When down arrow pressed x = "+car2_x+"|y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
    
}

function left2(){
    if(car2_x>=0){
        car2_x =  car2_x - 10;
        console.log("When left arrow pressed x = "+car2_x+"- y="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
    
}

function right2(){
    if(car2_x<=700){
        car2_x =  car2_x + 10;
        console.log("When right arrow pressed x = "+car2_x+"|y="+car2_y);
        if (car2_x > 700 ){
            console.log("car2 won");
            document.getElementById("game_status").innerHTML="car2 Won!!!"
        }
       uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
