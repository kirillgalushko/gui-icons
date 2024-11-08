import { openBlock as l, createElementBlock as o, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return l(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 7v5l2 2" }, null, -1),
    e("path", { d: "M17 22l5 -3l-5 -3z" }, null, -1),
    e("path", { d: "M13.017 20.943a9 9 0 1 1 7.831 -7.292" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
