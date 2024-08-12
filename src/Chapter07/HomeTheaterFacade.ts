interface Amplifier {
  on(): void;
  off(): void;
  setVolume(volume: number): void;
  setStreamingPlayer(player: StreamingPlayer): void;
  setSurroundSound(): void;
  setTuner(tuner: Tuner): void;
}

interface Tuner {
  on(): void;
  off(): void;
  setFrequency(frequency: number): void;
}

interface StreamingPlayer {
  on(): void;
  off(): void;
  play(movie: string): void;
  stop(): void;
}

interface CdPlayer {
  on(): void;
  off(): void;
  play(cd: string): void;
}

interface Projector {
  on(): void;
  off(): void;
  wideScreenMode(): void;
}

interface TheaterLights {
  on(): void;
  off(): void;
  dim(level: number): void;
}

interface ProjectorScreen {
  down(): void;
  up(): void;
}

interface PopcornPopper {
  on(): void;
  off(): void;
  pop(): void;
}

class HomeTheaterFacade {
  private amp: Amplifier;
  private tuner: Tuner;
  private player: StreamingPlayer;
  private projector: Projector;
  private screen: ProjectorScreen;
  private lights: TheaterLights;
  private popper: PopcornPopper;

  constructor(
      amp: Amplifier,
      tuner: Tuner,
      player: StreamingPlayer,
      projector: Projector,
      screen: ProjectorScreen,
      lights: TheaterLights,
      popper: PopcornPopper
  ) {
      this.amp = amp;
      this.tuner = tuner;
      this.player = player;
      this.projector = projector;
      this.screen = screen;
      this.lights = lights;
      this.popper = popper;
  }

  watchMovie(movie: string): void {
      this.popper.on();
      this.popper.pop();
      this.lights.dim(10);
      this.screen.down();
      this.projector.on();
      this.projector.wideScreenMode();
      this.amp.on();
      this.amp.setStreamingPlayer(this.player);
      this.amp.setSurroundSound();
      this.amp.setVolume(5);
      this.player.on();
      this.player.play(movie);
  }

  endMovie(): void {
      this.popper.off();
      this.lights.on();
      this.screen.up();
      this.projector.off();
      this.amp.off();
      this.player.stop();
      this.player.off();
  }

  listenToRadio(frequency: number): void {
      this.tuner.on();
      this.tuner.setFrequency(frequency);
      this.amp.on();
      this.amp.setVolume(5);
      this.amp.setTuner(this.tuner);
  }

  endRadio(): void {
      this.tuner.off();
      this.amp.off();
  }
}

const amp: Amplifier = {
  on: () => console.log("Amplifier on"),
  off: () => console.log("Amplifier off"),
  setVolume: (volume: number) => console.log(`Setting volume to ${volume}`),
  setStreamingPlayer: (player: StreamingPlayer) => console.log("Setting streaming player ", player),
  setSurroundSound: () => console.log("Surround sound on"),
  setTuner: (tuner: Tuner) => console.log("Setting tuner ", tuner)
};

const tuner: Tuner = {
  on: () => console.log("Tuner on"),
  off: () => console.log("Tuner off"),
  setFrequency: (frequency: number) => console.log("Setting frequency ", frequency),
};

const player: StreamingPlayer = {
  on: () => console.log("Tuner on"),
  off: () => console.log("Tuner off"),
  play: (cd: string) => console.log("CD play :", cd),
  stop: () => console.log("Stop"),
};

const projector: Projector = {
  on: () => console.log("Tuner on"),
  off: () => console.log("Tuner off"),
  wideScreenMode: () => console.log("WideScreenMode on"),
};

const projectorScreen: ProjectorScreen = {
  down: () => console.log("Down"),
  up: () => console.log("Up"),
};

const lights: TheaterLights = {
  on: () => console.log("Tuner on"),
  off: () => console.log("Tuner off"),
  dim: (level: number) => console.log("Dim ", level),
};

const popper: PopcornPopper = {
  on: () => console.log("Tuner on"),
  off: () => console.log("Tuner off"),
  pop: () => console.log("Pop"),
};

const homeTheater = new HomeTheaterFacade(amp, tuner, player, projector, projectorScreen, lights, popper);

homeTheater.watchMovie("Inception");
homeTheater.endMovie();
homeTheater.listenToRadio(101.1);
homeTheater.endRadio();