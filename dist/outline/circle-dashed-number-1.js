import { openBlock as e, createElementBlock as a, createStaticVNode as h } from "vue";
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
function o(p, t) {
  return e(), a("svg", r, t[0] || (t[0] = [
    h('<path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path><path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path><path d="M10 10l2 -2v8"></path>', 9)
  ]));
}
const n = { render: o };
export {
  n as default,
  o as render
};
