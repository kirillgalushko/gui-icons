import { openBlock as t, createElementBlock as n, createElementVNode as e } from "vue";
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
function r(i, l) {
  return t(), n("svg", o, l[0] || (l[0] = [
    e("path", { d: "M3 3l18 18" }, null, -1),
    e("path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" }, null, -1),
    e("path", { d: "M9 15l-4.5 4.5" }, null, -1),
    e("path", { d: "M14.5 4l5.5 5.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};