import { openBlock as t, createElementBlock as l, createElementVNode as e } from "vue";
const n = {
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
function o(i, r) {
  return t(), l("svg", n, r[0] || (r[0] = [
    e("path", { d: "M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" }, null, -1),
    e("path", { d: "M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" }, null, -1),
    e("circle", {
      cx: "17.5",
      cy: "15.5",
      r: "1",
      fill: "currentColor"
    }, null, -1),
    e("circle", {
      cx: "6.5",
      cy: "8.5",
      r: "1",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
