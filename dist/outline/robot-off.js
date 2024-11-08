import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
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
function r(p, t) {
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4"></path><path d="M12 2v2"></path><path d="M9 12v9"></path><path d="M15 15v6"></path><path d="M5 16l4 -2"></path><path d="M9 18h6"></path><path d="M14 8v.01"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
