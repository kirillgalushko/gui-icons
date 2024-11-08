import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M4 18v-5l4 -2l4 2v5l-4 2z" }, null, -1),
    e("path", { d: "M8 11v-5l4 -2l4 2v5" }, null, -1),
    e("path", { d: "M12 13l4 -2l4 2v5l-4 2l-4 -2" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
