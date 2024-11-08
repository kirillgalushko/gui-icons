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
    e("path", { d: "M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" }, null, -1),
    e("path", { d: "M12 11v-8" }, null, -1),
    e("path", { d: "M14.5 4.5l-5 3" }, null, -1),
    e("path", { d: "M9.5 4.5l5 3" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
