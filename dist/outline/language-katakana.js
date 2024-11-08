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
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" }, null, -1),
    e("path", { d: "M8 8c0 1.5 .5 3 -2 5" }, null, -1),
    e("path", { d: "M12 20l4 -9l4 9" }, null, -1),
    e("path", { d: "M19.1 18h-6.2" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
