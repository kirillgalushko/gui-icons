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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return o(), n("svg", l, t[0] || (t[0] = [
    e("path", { d: "M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" }, null, -1),
    e("path", { d: "M12 13l0 9" }, null, -1),
    e("path", { d: "M9 19l3 3l3 -3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
