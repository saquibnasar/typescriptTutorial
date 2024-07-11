abstract class takePhoto {
  constructor(public camraMode: string, public filter: string) {}
  abstract getSepia(): void;

  //   you can have nomal method with abstract class thats oneoff advantages from using interface

  getRealTime(): string {
    return "some time can't be calculated";
  }
}
class Ainstagram extends takePhoto {
  constructor(
    public camraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(camraMode, filter);
  }
  getSepia(): void {}
}
