import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
const a = {
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
function p(r, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    o('<path d="M6 2h4v4m-4 0h-1v-1"></path><path d="M15 11v-1h5v4h-2"></path><path d="M5 18h5v4h-5z"></path><path d="M5 10h5v4h-5z"></path><path d="M10 12h2"></path><path d="M7.5 7.5v2.5"></path><path d="M7.5 14v4"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
