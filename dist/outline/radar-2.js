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
    e("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    e("path", { d: "M15.51 15.56a5 5 0 1 0 -3.51 1.44" }, null, -1),
    e("path", { d: "M18.832 17.86a9 9 0 1 0 -6.832 3.14" }, null, -1),
    e("path", { d: "M12 12v9" }, null, -1)
  ]));
}
const h = { render: l };
export {
  h as default,
  l as render
};
