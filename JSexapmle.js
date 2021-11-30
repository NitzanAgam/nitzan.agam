let txt = "abcdefghijklmnopqrstuvwxyz";
let txt0 = txt.length;
console.log(txt0);

let txt1 = "please visit Michrosoft!";
let txt2 = txt1.replace("Michrosoft", "BGU");
console.log(txt2);

let txt3 = txt1.concat(" and ", txt2);
console.log(txt3);

function greet () {    
    const d = new Date();
    console.log(d);
    var h = d.getHours();
    console.log(h);
    if (h < 12) {
        let g = "Good Morning!";
        console.log(g);
        document.getElementById("1").innerHTML = g ;
    }
    else if (h < 18) {
        g = "good Afternoon!"
        console.log(g);
        document.getElementById("1").innerHTML = g ;
    }
    else {
        g = "Good Evening!";
        console.log(g);
        document.getElementById("1").innerHTML = g ;
    }
}

let cars = ['toyota','honda','opel'];
console.log(cars);
text = "";
var i;
for (i = 0; i< cars.length; i++) {
    text += cars[i] + " ";
    console.log(text);
}

let pics = ["images/seed-frames_orig2.png",
"images/seed-frames_orig3.png",
"images/seed-frames_orig4.png",
"images/seed-frames_orig5.png",
"images/seed-frames_orig6.png",
"images/seed-frames_orig7.png"];
var i = 0;

function stopMotion () {
    setTimeout(() => { /* אם עושים סט טיים אאוט רק ברקורסיה ולא בלולאה*/
        /* script is running faster than images so without timeout we won't see the stop motion*/
        document.getElementById("SMimg").src = pics[i];
        i++;
        if (i < pics.length) { /*רקורסיה*/
            stopMotion()
        }
        else {
            i=0;
        }
    }, 200);
}

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());
