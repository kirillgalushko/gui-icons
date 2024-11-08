import { openBlock as t, createElementBlock as r, createElementVNode as l } from "vue";
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
function n(i, e) {
  return t(), r("svg", o, e[0] || (e[0] = [
    l("path", { d: "M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
