import type { On } from "snabbdom";

export type Component = {
  id: number;
  type: string;
  props?: {
    [key: string]: any;
  };
  style?: {
    [key: string]: any;
  };
  on?: Record<keyof On, string>;
  children?: (Component | String)[];
}
