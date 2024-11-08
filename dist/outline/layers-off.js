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
function l(h, t) {
  return n(), o("svg", r, t[0] || (t[0] = [
    e("path", { d: "M8.59 4.581c.362 -.359 .86 -.581 1.41 -.581h8a2 2 0 0 1 2 2v8c0 .556 -.227 1.06 -.594 1.422m-3.406 .578h-6a2 2 0 0 1 -2 -2v-6" }, null, -1),
    e("path", { d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" }, null, -1),
    e("path", { d: "M3 3l18 18" }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
