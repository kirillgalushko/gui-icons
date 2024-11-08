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
function h(r, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M8 9h1m4 0h3" }, null, -1),
    e("path", { d: "M8 13h5" }, null, -1),
    e("path", { d: "M8 4h10a3 3 0 0 1 3 3v8c0 .57 -.16 1.104 -.436 1.558m-2.564 1.442h-3l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8c0 -1.084 .575 -2.034 1.437 -2.561" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: h };
export {
  d as default,
  h as render
};
