import { openBlock as n, createElementBlock as o, createElementVNode as e } from "vue";
const r = {
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
function i(l, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 5a5 5 0 1 0 -4 8" }, null, -1),
    e("path", { d: "M16 13a5 5 0 1 0 -4 -8" }, null, -1),
    e("path", { d: "M12 21l0 -16" }, null, -1)
  ]));
}
const h = { render: i };
export {
  h as default,
  i as render
};
