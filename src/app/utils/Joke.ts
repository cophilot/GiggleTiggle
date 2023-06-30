export class Joke {
  public id: number;
  public text: string;
  public category: string;
  public flags: string[];
  public isTwoPart: boolean;
  public answer: string;

  constructor(
    id: number,
    text: string,
    category: string,
    flags: string[] = [],
    isTwoPart: boolean = false,
    answer: string = ''
  ) {
    this.id = id;
    this.text = text;
    this.category = category;
    this.flags = flags;
    this.isTwoPart = isTwoPart;
    this.answer = answer;
  }

  getFlagsAsHashtags(): string {
    return this.flags.map((flag) => '#' + flag).join(' ');
  }
}
