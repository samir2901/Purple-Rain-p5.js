class Drop{
    
    constructor(){
        this.x = random(0,width);
        this.y = random(-200,-100);
        this.z = random(0,20);
        this.yspeed = map(this.z,0,20,4,10);        
    }
    fall(){
        this.y = this.y + this.yspeed;
        var g = map(this.z,0,20,0,0.2);
        this.yspeed = this.yspeed + g;
        if(this.y > height){
            this.y = random(-200,-100);
            this.yspeed = random(4,10);
        }
    }
    show(){
        var l = map(this.z,0,20,10,20);
        var thickness = map(this.z,0,20,1,2);
        strokeWeight(thickness);
        stroke(138,49,226);
        line(this.x,this.y,this.x,this.y+l);
    }
}


var drops=[];

function setup()
{
    createCanvas(600,400);
    for(var i=0;i<480;i++)
    {
        drops[i] = new Drop();
    }
    
}

function draw()
{
    background(230,230,250);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].fall();
        drops[i].show();
    }
}

