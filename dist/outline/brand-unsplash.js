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
function h(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" }, null, -1)
  ]));
}
const s = { render: h };
export {
  s as default,
  h as render
};
