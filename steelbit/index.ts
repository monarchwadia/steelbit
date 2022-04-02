import render from "./render";

export default class Steelbit {
  constructor(private outElem: HTMLElement, private componentTree: any[]) {}

  render() {
    render(this.componentTree, this.outElem);
  }
}