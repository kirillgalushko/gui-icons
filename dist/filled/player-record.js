import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, e) {
  return t(), r("svg", l, e[0] || (e[0] = [
    o("path", { d: "M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
