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
function a(l, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 21l18 0"></path><path d="M9 8l1 0"></path><path d="M9 12l1 0"></path><path d="M9 16l1 0"></path><path d="M14 8l1 0"></path><path d="M14 12l1 0"></path><path d="M14 16l1 0"></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>', 8)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
