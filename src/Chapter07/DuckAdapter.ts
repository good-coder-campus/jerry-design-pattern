interface Duck {
  quack(): void;
  fly(): void;
}

interface Turkey {
  gobble(): void;
  fly(): void;
}

class TurkeyAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
      this.turkey = turkey;
  }

  quack(): void {
      this.turkey.gobble();
  }

  fly(): void {
      for(let i=0;i<5;i++) {
        this.turkey.fly();
      }
  }
}

class WildTurkey implements Turkey {
  gobble(): void {
      console.log("골골");
  }

  fly(): void {
      console.log("짧게 날다");
  }
}

const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

turkeyAdapter.quack();
turkeyAdapter.fly();

console.log("--------------------")

class DuckAdapter implements Turkey {
  private duck: Duck;

  constructor(duck: Duck) {
      this.duck = duck;
  }

  gobble(): void {
      this.duck.quack();
  }

  fly(): void {
    this.duck.fly();
  }
}

class MallardDuck implements Duck {
  quack(): void {
      console.log("꽥");
  }

  fly(): void {
      console.log("오리 날다");
  }
}

const duck = new MallardDuck();
const duckAdapter = new DuckAdapter(duck);

duckAdapter.gobble();
duckAdapter.fly();

console.log("--------------------")