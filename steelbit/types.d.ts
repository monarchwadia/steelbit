export type Component = {
  id: number;
  type: string;
  props: {
    [key: string]: any;
    children?: Component[];
  }
}
