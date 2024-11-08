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
    e("path", { d: "M12.004 19.98a9.869 9.869 0 0 1 -4.304 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.994 1.701 2.932 4.045 2.746 6.349" }, null, -1),
    e("path", { d: "M19 22v-6" }, null, -1),
    e("path", { d: "M22 19l-3 -3l-3 3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
