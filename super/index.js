class Hero {
    constructor (name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

var heroA = new Hero('Yasuo', 100, 10);
var heroB = new Hero('Mundo', 150, 7);

// super : sub class can called a constructor, a method from base class, ojdect and it can overriding method...
class RangeHero extends Hero{ // sub class : RangeHero
    constructor (name, hp, damage, range) {
        super(name, hp, damage);
        range = this. range;
    }
    attack(enemy) {
        super.attack(enemy); // call attack method of Hero class
        this.hp += this.damage * 0.5; // but RangeHero can heal from 50% damage 
    }
}

var heroC = new RangeHero('Ashe', 80, 10); 
heroC.attack(heroB); // Ashe attack Mundo
console.log(heroB);
console.log(heroC);