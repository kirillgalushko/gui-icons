import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
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
function a(p, t) {
  return h(), e("svg", r, t[0] || (t[0] = [
    o('<path d="M7 7h-4v-4"></path><path d="M17 3h4v4h-4z"></path><path d="M10 6v-3h4v4h-3"></path><path d="M3 10h4v4h-4z"></path><path d="M17 13v-3h4v4h-3"></path><path d="M14 14h-4v-4"></path><path d="M10 17h4v4h-4z"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const n = { render: a };
export {
  n as default,
  a as render
};
