import { openBlock as r, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(i, t) {
  return r(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" }, null, -1),
    e("path", { d: "M16 9a5 5 0 1 0 -7 7" }, null, -1),
    e("path", { d: "M20.486 9a9 9 0 1 0 -11.482 11.495" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
