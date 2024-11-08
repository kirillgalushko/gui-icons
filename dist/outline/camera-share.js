import { openBlock as n, createElementBlock as r, createElementVNode as e } from "vue";
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
  return n(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12.5 20h-7.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" }, null, -1),
    e("path", { d: "M14.98 13.347a3 3 0 1 0 -2.39 2.595" }, null, -1),
    e("path", { d: "M16 22l5 -5" }, null, -1),
    e("path", { d: "M21 21.5v-4.5h-4.5" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
