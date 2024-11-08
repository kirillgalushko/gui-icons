import { openBlock as n, createElementBlock as l, createElementVNode as e } from "vue";
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
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1),
    e("path", { d: "M12.789 21.324a2 2 0 0 1 -2.202 -.424l-4.244 -4.243a8 8 0 1 1 13.59 -4.626" }, null, -1),
    e("path", { d: "M19 22v-6" }, null, -1),
    e("path", { d: "M22 19l-3 -3l-3 3" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
