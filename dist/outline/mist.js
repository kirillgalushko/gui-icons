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
    e("path", { d: "M5 5h3m4 0h9" }, null, -1),
    e("path", { d: "M3 10h11m4 0h1" }, null, -1),
    e("path", { d: "M5 15h5m4 0h7" }, null, -1),
    e("path", { d: "M3 20h9m4 0h3" }, null, -1)
  ]));
}
const m = { render: r };
export {
  m as default,
  r as render
};