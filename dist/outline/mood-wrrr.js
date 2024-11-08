import { openBlock as t, createElementBlock as o, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, l) {
  return t(), o("svg", r, l[0] || (l[0] = [
    e("path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" }, null, -1),
    e("path", { d: "M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" }, null, -1),
    e("path", { d: "M8.5 11.5l1.5 -1.5l-1.5 -1.5" }, null, -1),
    e("path", { d: "M15.5 11.5l-1.5 -1.5l1.5 -1.5" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};