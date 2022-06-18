export type BaseComponent = {
  id: number;
  type: string;
  children?: Component[]
}

export type BoxComponent = {
  type: "box";
  direction: "horizontal" | "vertical";
  width: string;
} & BaseComponent;

export type TextComponent = {
  type: "text";
  size: string;
  color: string;
  value: string;
} & BaseComponent;

export type ButtonComponent = {
  type: "button";
  size: string;
  backgroundColor: string;
  onClick: string;
} & BaseComponent;

export type Component = BoxComponent | TextComponent | ButtonComponent;