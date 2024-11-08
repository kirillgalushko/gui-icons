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
function r(h, t) {
  return l(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M4 20h4l1.5 -3" }, null, -1),
    e("path", { d: "M17 20l-1 -5h-5l1 -7" }, null, -1),
    e("path", { d: "M4 10l4 -1l4 -1l4 1.5l4 1.5" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
