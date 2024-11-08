import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" }, null, -1)
  ]));
}
const s = { render: n };
export {
  s as default,
  n as render
};
