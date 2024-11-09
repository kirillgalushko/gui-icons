import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, null, -1),
    e("path", { d: "M21 21l-6 -6" }, null, -1),
    e("path", { d: "M8 8l-2 2l2 2" }, null, -1),
    e("path", { d: "M12 8l2 2l-2 2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};