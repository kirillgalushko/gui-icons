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
function a(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path><path d="M6 9l12 0"></path><path d="M6 12l3 0"></path><path d="M6 15l2 0"></path>', 6)
  ]));
}
const l = { render: a };
export {
  l as default,
  a as render
};
