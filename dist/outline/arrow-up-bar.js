import { openBlock as r, createElementBlock as o, createElementVNode as e } from "vue";
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
function n(i, t) {
  return r(), o("svg", l, t[0] || (t[0] = [
    e("path", { d: "M12 21l0 -18" }, null, -1),
    e("path", { d: "M15 6l-3 -3l-3 3" }, null, -1),
    e("path", { d: "M9 21l6 0" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
