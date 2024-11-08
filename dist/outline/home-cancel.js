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
    e("path", { d: "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    e("path", { d: "M17 21l4 -4" }, null, -1),
    e("path", { d: "M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" }, null, -1),
    e("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2c.58 0 1.103 .247 1.468 .642" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
