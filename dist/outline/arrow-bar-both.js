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
function n(i, t) {
  return e(), o("svg", h, t[0] || (t[0] = [
    r('<path d="M8 12h-6"></path><path d="M5 15l-3 -3l3 -3"></path><path d="M22 12h-6"></path><path d="M19 15l3 -3l-3 -3"></path><path d="M12 4v16"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};