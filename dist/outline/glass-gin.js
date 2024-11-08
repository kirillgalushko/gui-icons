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
    e("path", { d: "M8 21h8" }, null, -1),
    e("path", { d: "M12 15v6" }, null, -1),
    e("path", { d: "M12 5m-6.5 0a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0" }, null, -1),
    e("path", { d: "M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
