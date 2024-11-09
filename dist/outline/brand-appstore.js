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
function r(h, t) {
  return n(), l("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" }, null, -1),
    e("path", { d: "M7 14h5m2.9 0h2.1" }, null, -1),
    e("path", { d: "M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};