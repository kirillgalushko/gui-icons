import { openBlock as l, createElementBlock as r, createElementVNode as e } from "vue";
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
function o(i, t) {
  return l(), r("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 4l0 10" }, null, -1),
    e("path", { d: "M12 4l4 4" }, null, -1),
    e("path", { d: "M12 4l-4 4" }, null, -1),
    e("path", { d: "M4 20l16 0" }, null, -1)
  ]));
}
const h = { render: o };
export {
  h as default,
  o as render
};
