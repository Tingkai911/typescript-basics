class Player {
    private _health: number;
    private _speed: number;

    constructor(health: number, speed: number) {
        this._health = health;
        this._speed = speed;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            throw new Error("The value cannot be negative");
        }
        this._health = value;
    }


    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        if (value < 0) {
            throw new Error("The value cannot be negative");
        }
        this._speed = value;
    }

    move() {
        console.log("Move");
    }
}

class Mario extends Player {
    constructor(health: number, speed: number) {
        super(health, speed);
    }

    // Overriding
    move(): void;
    // Overloading
    move(name: string): void;
    // Unified implementation
    move(name?: string): void {
        if (name) {
            console.log("Mario " + name);
        } else {
            console.log("Mario Pound");
        }
    }
}

abstract class AbstractPlayer {
    private _health: number;
    private _speed: number;

    protected constructor(health: number, speed: number) {
        this._health = health;
        this._speed = speed;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            throw new Error("The value cannot be negative");
        }
        this._health = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        if (value < 0) {
            throw new Error("The value cannot be negative");
        }
        this._speed = value;
    }

    abstract move(): void;
    abstract move(name: string): void;
}

class Luigi extends AbstractPlayer {
    constructor(health: number, speed: number) {
        super(health, speed)
    }

    move(): void;
    move(name: string): void;
    move(name?: string): void {
        if (name) {
            console.log("Luigi " + name);
        } else {
            console.log("Luigi Pound");
        }
    }
}

abstract class Character {
    hunger: number;
    health: number;
    constructor(health: number, hunger: number) {
        this.health = health;
        this.hunger = hunger
    }
    abstract eat(): void;
}

interface Hero extends Character {
    heroId: number;
}

interface Enemy extends Character {
    enemyId: number;
}

class Spy implements Hero, Enemy {
    enemyId: number;
    heroId: number;
    health: number;
    hunger: number;

    constructor(enemyId: number, heroId: number, health: number, hunger: number) {
        this.enemyId = enemyId;
        this.heroId = heroId;
        this.health = health;
        this.hunger = hunger;
    }

    eat(): void {
        console.log("Spy is eating");
    }
}

export module OOP {
    export function Run() {
        // Encapsulation
        const player: Player = new Player(10, 10);
        console.log(player);
        console.log(player.speed);
        console.log(player.health);
        // try {
        //     player.speed = -10
        // } catch (error) {
        //     console.log(error)
        // }

        // Inheritance
        const mario1: Mario = new Mario(10, 10);
        mario1.move();
        mario1.move("fire");

        // Polymorphism
        const mario2: Player = new Mario(10, 10);
        mario2.move();
        // mario2.move("ice");  // NOT ALLOWED!!

        // Abstraction
        const luigi1: Luigi = new Luigi(10, 10);
        luigi1.move();
        luigi1.move("thunder");
        const luigi2: AbstractPlayer = new Luigi(10, 10);
        luigi2.move();
        luigi2.move("ice");

        // Multiple Inheritance - Interface
        const spy1: Spy = new Spy(10, 10, 10, 10);
        spy1.eat();
        const spy2: Hero = new Spy(10, 10, 10, 10);
        spy2.eat();
        const spy3: Enemy = new Spy(10, 10, 10, 10);
        spy3.eat();
    }
}