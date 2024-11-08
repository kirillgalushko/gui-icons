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
function l(i, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" }, null, -1),
    e("path", { d: "M9.172 20.485a4 4 0 1 0 -5.657 -5.657" }, null, -1),
    e("path", { d: "M14.828 3.515a4 4 0 0 0 5.657 5.657" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
