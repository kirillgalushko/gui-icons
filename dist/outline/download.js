import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" }, null, -1),
    e("path", { d: "M7 11l5 5l5 -5" }, null, -1),
    e("path", { d: "M12 4l0 12" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
