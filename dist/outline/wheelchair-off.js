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
function a(n, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M17.582 17.59a2 2 0 0 0 2.833 2.824"></path><path d="M14 14h-1.4"></path><path d="M6 6v5"></path><path d="M6 8h2m4 0h5"></path><path d="M15 8v3"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const p = { render: a };
export {
  p as default,
  a as render
};
