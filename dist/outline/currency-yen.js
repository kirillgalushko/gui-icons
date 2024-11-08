import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
function o(i, t) {
  return n(), r("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 19v-7l-5 -7m10 0l-5 7" }, null, -1),
    e("path", { d: "M8 17l8 0" }, null, -1),
    e("path", { d: "M8 13l8 0" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
