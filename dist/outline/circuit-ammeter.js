import { openBlock as e, createElementBlock as r, createStaticVNode as o } from "vue";
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
function i(n, t) {
  return e(), r("svg", h, t[0] || (t[0] = [
    o('<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M5 12h-3"></path><path d="M19 12h3"></path><path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3"></path><path d="M14 12h-4"></path>', 5)
  ]));
}
const d = { render: i };
export {
  d as default,
  i as render
};
