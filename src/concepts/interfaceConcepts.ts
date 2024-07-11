interface takePhoto {
  camraMode: string;
  filter: string;
  burst: number;
}

interface story {
  createStory(): void;
}
class instagram implements takePhoto {
  constructor(
    public camraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class instaStory implements takePhoto, story {
  constructor(
    public camraMode: string,
    public filter: string,
    public burst: number
  ) {}
  public createStory(): void {
    console.log("story");
  }
}
