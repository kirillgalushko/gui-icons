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
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0" }, null, -1),
    e("path", { d: "M8.5 11.5l1.5 -1.5l-1.5 -1.5" }, null, -1),
    e("path", { d: "M15.5 11.5l-1.5 -1.5l1.5 -1.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
