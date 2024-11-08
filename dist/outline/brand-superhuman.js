import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function o(i, t) {
  return l(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M16 12l4 3l-8 7l-8 -7l4 -3" }, null, -1),
    e("path", { d: "M12 3l-8 6l8 6l8 -6z" }, null, -1),
    e("path", { d: "M12 15h8" }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
