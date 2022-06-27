import { On, vnode, VNode, VNodeChildren } from "snabbdom";
import {h, patch} from "./snabbdomProvider";
import { Component } from "./types";

export default class Steelbit {
  constructor(private outElem: HTMLElement, private componentTree: Component[]) {}

  render() {
    const vNodeChildren: VNode[] = this.componentTree.map((component) => toVnode(component)));
    console.log(vNodeChildren)
    patch(this.outElem, h("div", null, vNodeChildren));
  }
}

const toVnode = (component: Component): VNode => h(
  component.type,
  {
    props: component.props,
    style: component.style,
    on: component.on && processEventHandlers(component.on)
  },
  component.children && processChildren(component.children)
)

const processChildren = (children: (String | Component)[]): (VNode | String)[] => children.flatMap((c) => {
  if (typeof c === "string") {
    return c;
  } else {
    return toVnode(c as Component);
  }
})

const processEventHandlers = (on: Record<keyof On, string>): On => Object.entries(on).reduce((prev, curr): On => {
  const [key, val] = curr;
  prev[key] = eval(val);
  return prev;
}, {} as On)