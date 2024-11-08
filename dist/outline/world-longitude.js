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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(i, t) {
  return n(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M11.5 3a11.2 11.2 0 0 0 0 18" }, null, -1),
    e("path", { d: "M12.5 3a11.2 11.2 0 0 1 0 18" }, null, -1),
    e("path", { d: "M12 3l0 18" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
