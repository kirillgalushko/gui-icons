import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
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
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 12v.01" }, null, -1),
    e("path", { d: "M9.172 9.172c-3.906 3.905 -5.805 8.337 -4.243 9.9c1.562 1.561 6 -.338 9.9 -4.244m1.884 -2.113c2.587 -3.277 3.642 -6.502 2.358 -7.786c-1.284 -1.284 -4.508 -.23 -7.784 2.357" }, null, -1),
    e("path", { d: "M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242m-.072 -4.071c-.767 -1.794 -2.215 -3.872 -4.172 -5.828c-1.944 -1.945 -4.041 -3.402 -5.828 -4.172" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
