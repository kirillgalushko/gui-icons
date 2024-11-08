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
    h('<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M4 16l16 0"></path><path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4"></path><path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2"></path><path d="M14 7l.01 0"></path>', 5)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};
