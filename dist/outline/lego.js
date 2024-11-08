import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
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
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M9.5 11l.01 0" }, null, -1),
    e("path", { d: "M14.5 11l.01 0" }, null, -1),
    e("path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, null, -1),
    e("path", { d: "M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
