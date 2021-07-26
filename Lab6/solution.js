String.prototype.filter = function (word) {
    if(this.indexOf(word) >= 0) return this.replace(word, '');
}


Array.prototype.bubbleSort = function(){

    let a = this;
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return a;
}

let Person = function(){
     this.name = "default";
    this.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
};


const person = {
    name : "default",
    teach : function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
};

console.log("This house is not nice!".filter("not "));
console.log([6,4,0, 3,-2,1].bubbleSort());

let teacher = new Person();
teacher.name = "Sami";
teacher.teach("WAP");
