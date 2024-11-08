import { openBlock as o, createElementBlock as n, createElementVNode as e } from "vue";
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
function l(i, t) {
  return o(), n("svg", r, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M10.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" }, null, -1),
    e("path", { d: "M16.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
