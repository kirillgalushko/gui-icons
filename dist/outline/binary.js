import { openBlock as n, createElementBlock as h, createElementVNode as e } from "vue";
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
function r(l, t) {
  return n(), h("svg", o, t[0] || (t[0] = [
    e("path", { d: "M11 10v-5h-1m8 14v-5h-1" }, null, -1),
    e("path", { d: "M15 5m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z" }, null, -1),
    e("path", { d: "M10 14m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z" }, null, -1),
    e("path", { d: "M6 10h.01m-.01 9h.01" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
