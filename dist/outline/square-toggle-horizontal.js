import { openBlock as e, createElementBlock as o, createStaticVNode as h } from "vue";
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
function a(n, t) {
  return e(), o("svg", r, t[0] || (t[0] = [
    h('<path d="M22 12h-20"></path><path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"></path><path d="M18 20a2 2 0 0 0 2 -2"></path><path d="M4 18a2 2 0 0 0 2 2"></path><path d="M14 20l-4 0"></path>', 5)
  ]));
}
const d = { render: a };
export {
  d as default,
  a as render
};
