import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const o = {
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
function r(p, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M17 4h1a2 2 0 0 1 2 2v1"></path><path d="M20 17v1a2 2 0 0 1 -2 2h-1"></path><path d="M7 20h-1a2 2 0 0 1 -2 -2v-1"></path><path d="M4 7v-1a2 2 0 0 1 2 -2h1"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 18v2"></path><path d="M4 12h2"></path><path d="M12 4v2"></path><path d="M20 12h-2"></path>', 9)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
