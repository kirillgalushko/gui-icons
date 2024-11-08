import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function p(n, t) {
  return e(), a("svg", o, t[0] || (t[0] = [
    h('<path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 8v8"></path><path d="M18 16v-8"></path><path d="M8 6h8"></path><path d="M16 18h-8"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
