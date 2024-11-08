import { openBlock as e, createElementBlock as l, createStaticVNode as o } from "vue";
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
function a(n, t) {
  return e(), l("svg", r, t[0] || (t[0] = [
    o('<path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M5 21l3 -3l.75 -1.5"></path><path d="M14 21v-4l-4 -3l.5 -6"></path><path d="M5 12l1 -3l4.5 -1l3.5 3l4 1"></path><path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor"></path>', 5)
  ]));
}
const i = { render: a };
export {
  i as default,
  a as render
};
