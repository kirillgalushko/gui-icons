import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
function r(n, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M17 17l0 .01"></path><path d="M13 17l0 .01"></path><path d="M15 13l0 -2"></path><path d="M11.75 8.75a4 4 0 0 1 6.5 0"></path><path d="M8.5 6.5a8 8 0 0 1 13 0"></path>', 6)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
