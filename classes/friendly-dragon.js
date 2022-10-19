// Your code here
let Dragon = require('./dragon')

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals; //array of goals
        this.friend = friend; //best dragon buddy
    }

    hasLifeGoals(){
        this.lifeGoals.forEach((skill) =>{
            console.log(`${this.name} likes to ${skill}`)}
        )
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`;
    }
}


module.exports = FriendlyDragon;