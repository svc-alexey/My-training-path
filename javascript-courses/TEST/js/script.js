function duck(sound) {
    this.sound = sound;
    this.quack = function () {
        console.log(this.sound);
    }
}

let toy = new duck('quack quack');

toy.quack();

console.log(typeof toy);
console.log(toy instanceof duck);