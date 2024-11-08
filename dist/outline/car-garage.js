import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    e("path", { d: "M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" }, null, -1),
    e("path", { d: "M3 6l9 -4l9 4" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
