import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(i, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    r("path", { d: "M18 3a4 4 0 0 1 3.109 6.516l-.11 .126l.001 8.358a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -3 -3v-8.356l-.116 -.136a4 4 0 0 1 -.728 -3.616l.067 -.21c.532 -1.525 1.93 -2.58 3.601 -2.677l12.079 .001z" }, null, -1)
  ]));
}
const m = { render: o };
export {
  m as default,
  o as render
};
