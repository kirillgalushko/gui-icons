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
    e("path", { d: "M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" }, null, -1),
    e("path", { d: "M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, null, -1),
    e("path", { d: "M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" }, null, -1),
    e("path", { d: "M12 5v-2" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
