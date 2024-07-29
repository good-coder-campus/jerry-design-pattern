class ChocolateBoiler {
  private static uniqueInstance: ChocolateBoiler | null = null;
  private empty: boolean;
  private boiled: boolean;

  private constructor() {
      this.empty = true;
      this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
      if (this.uniqueInstance === null) {
          console.log("Creating unique instance of Chocolate Boiler");
          this.uniqueInstance = new ChocolateBoiler();
      }
      console.log("Returning instance of Chocolate Boiler");
      return this.uniqueInstance;
  }

  public fill(): void {
      if (this.isEmpty()) {
          this.empty = false;
          this.boiled = false;
      }
  }

  public drain(): void {
      if (!this.isEmpty() && this.isBoiled()) {
          this.empty = true;
      }
  }

  public boil(): void {
      if (!this.isEmpty() && !this.isBoiled()) {
          this.boiled = true;
      }
  }

  public isEmpty(): boolean {
      return this.empty;
  }

  public isBoiled(): boolean {
      return this.boiled;
  }
}

const boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();
