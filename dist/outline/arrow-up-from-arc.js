import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
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
function l(i, t) {
  return r(), o("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 9v12" }, null, -1),
    e("path", { d: "M8 17l4 4l4 -4" }, null, -1),
    e("path", { d: "M21 12a9 9 0 0 0 -18 0" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
