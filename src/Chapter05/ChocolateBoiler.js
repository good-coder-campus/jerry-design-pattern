"use strict";
class ChocolateBoiler {
    constructor() {
        this.empty = true;
        this.boiled = false;
    }
    static getInstance() {
        if (this.uniqueInstance === null) {
            console.log("Creating unique instance of Chocolate Boiler");
            this.uniqueInstance = new ChocolateBoiler();
        }
        console.log("Returning instance of Chocolate Boiler");
        return this.uniqueInstance;
    }
    fill() {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }
    drain() {
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
        }
    }
    boil() {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
        }
    }
    isEmpty() {
        return this.empty;
    }
    isBoiled() {
        return this.boiled;
    }
}
ChocolateBoiler.uniqueInstance = null;
const boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();
