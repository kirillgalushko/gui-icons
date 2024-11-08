import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function h(a, t) {
  return e(), r("svg", n, t[0] || (t[0] = [
    o('<path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0"></path><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M3 16l9 -6.5"></path><path d="M6 9h9"></path><path d="M13 5l5.65 5"></path>', 5)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
