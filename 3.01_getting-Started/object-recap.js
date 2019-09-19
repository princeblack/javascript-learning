// Object literal

const circle = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log('draw');
        
    }
};

circle.draw()

// Factory function
function createCircle(radius) {
    return{
        radius,
        location:{
            x:1,
            y:1
        },
        draw:function(){
            console.log('draw');
            
        }
    }
}

const theCircle = createCircle(1)
theCircle.draw()

// Constructor Function

function Circle(radius) {
    console.log('this',this);
    
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle('1')