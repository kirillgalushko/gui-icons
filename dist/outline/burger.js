import { openBlock as r, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(h, t) {
  return r(), n("svg", o, t[0] || (t[0] = [
    e("path", { d: "M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" }, null, -1),
    e("path", { d: "M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" }, null, -1),
    e("path", { d: "M5 12h14" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
