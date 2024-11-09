import { openBlock as t, createElementBlock as o, createElementVNode as e } from "vue";
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
function r(i, l) {
  return t(), o("svg", n, l[0] || (l[0] = [
    e("path", { d: "M4 17a3 3 0 0 0 3 3" }, null, -1),
    e("path", { d: "M14.805 6.37l2.783 -2.784a2 2 0 1 1 2.829 2.828l-2.784 2.786" }, null, -1),
    e("path", { d: "M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176 .184l-1.867 1.867a3.48 3.48 0 0 0 -1.013 2.234l-.008 .23v.934c0 .327 -.13 .64 -.36 .871a.51 .51 0 0 1 -.652 .06l-.07 -.06l-9.385 -9.384a.51 .51 0 0 1 0 -.722c.198 -.198 .456 -.322 .732 -.353l.139 -.008h.933c.848 0 1.663 -.309 2.297 -.864l.168 -.157l1.867 -1.867l.16 -.153a5.105 5.105 0 0 1 7.059 .153z" }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};