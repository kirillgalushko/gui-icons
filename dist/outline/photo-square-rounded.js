import { openBlock as o, createElementBlock as l, createElementVNode as e } from "vue";
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
function r(i, t) {
  return o(), l("svg", n, t[0] || (t[0] = [
    e("path", { d: "M15 8h.01" }, null, -1),
    e("path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" }, null, -1),
    e("path", { d: "M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5" }, null, -1),
    e("path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5" }, null, -1)
  ]));
}
const h = { render: r };
export {
  h as default,
  r as render
};
