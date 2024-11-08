import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function i(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 4.984h2"></path><path d="M8 4.984h2.5"></path><path d="M14.5 4.984h2.5"></path><path d="M22 4.984h-2"></path><path d="M4 4.984l5.455 14.516l6.545 -14.516"></path><path d="M9 4.984l6 14.516l6 -14.516"></path>', 6)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
