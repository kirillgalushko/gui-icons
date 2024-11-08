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
    e("path", { d: "M3 10v8l7 -3v-2.6z" }, null, -1),
    e("path", { d: "M3 6l9 3l9 -3l-9 -3z" }, null, -1),
    e("path", { d: "M14 12.3v8.7l7 -3v-8z" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
