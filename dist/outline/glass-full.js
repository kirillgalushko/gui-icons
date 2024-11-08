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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M8 21l8 0" }, null, -1),
    e("path", { d: "M12 15l0 6" }, null, -1),
    e("path", { d: "M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" }, null, -1),
    e("path", { d: "M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
