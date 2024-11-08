import { openBlock as e, createElementBlock as a, createStaticVNode as o } from "vue";
const r = {
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
function n(h, t) {
  return e(), a("svg", r, t[0] || (t[0] = [
    o('<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"></path><path d="M9 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M15 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M9 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
