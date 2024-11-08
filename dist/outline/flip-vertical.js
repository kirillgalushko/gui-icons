import { openBlock as l, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 3l0 18" }, null, -1),
    e("path", { d: "M16 7l0 10l5 0l-5 -10" }, null, -1),
    e("path", { d: "M8 7l0 10l-5 0l5 -10" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
