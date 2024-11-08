import { openBlock as e, createElementBlock as o, createStaticVNode as r } from "vue";
const h = {
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
function n(a, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M9 5h10a2 2 0 0 1 2 2v10"></path><path d="M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2"></path><path d="M7 15v-6l2 2l1 -1m1 1v4"></path><path d="M17.5 13.5l.5 -.5m-2 -1v-3"></path><path d="M3 3l18 18"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
