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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function r(i, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M8 21h8" }, null, -1),
    e("path", { d: "M12 15v6" }, null, -1),
    e("path", { d: "M12 5m-7 0a7 2 0 1 0 14 0a7 2 0 1 0 -14 0" }, null, -1),
    e("path", { d: "M5 5v.388c0 .432 .126 .853 .362 1.206l5 7.509c.633 .951 1.88 1.183 2.785 .517c.191 -.141 .358 -.316 .491 -.517l5 -7.509c.236 -.353 .362 -.774 .362 -1.206v-.388" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
