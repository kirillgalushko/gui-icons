import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M6 21l12 -7v-7.5l-6 -3.5l-6 3.5l6 3.5v7.5l-6 -3.5z" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};
