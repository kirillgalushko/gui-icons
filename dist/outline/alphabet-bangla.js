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
function r(c, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M14 12c.904 -.027 3 2 3 7" }, null, -1),
    e("path", { d: "M10 11c0 -.955 0 -2 .786 -2.677c1.262 -1.089 3.025 .55 3.2 2.06c.086 .741 -.215 3.109 -1.489 4.527c-.475 .53 -.904 .992 -1.711 1.074c-.75 .076 -1.364 -.122 -2.076 -.588c-1.138 -.743 -2.327 -1.997 -3.336 -3.73c-1.078 -1.849 -1.66 -3.113 -2.374 -5.666" }, null, -1),
    e("path", { d: "M7.37 7.072c.769 -.836 5.246 -4.094 8.4 -.202c.382 .472 .573 .708 .9 1.63c.326 .921 .326 1.562 .326 2.844v7.656" }, null, -1),
    e("path", { d: "M17 10c0 -1.989 1.5 -4 4 -4" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
