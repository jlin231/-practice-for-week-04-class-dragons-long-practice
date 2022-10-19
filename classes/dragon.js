// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    let output = []
    dragons.forEach((dragon)=>{
      output.push(dragon.name)
    })
    return output;
  }
}
// const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}