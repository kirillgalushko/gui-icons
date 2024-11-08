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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M1 8h22v7h-12v2h-4v-2h-6z"></path><path d="M7 8v7"></path><path d="M14 8v7"></path><path d="M17 11v4"></path><path d="M4 11v4"></path><path d="M11 11v1"></path><path d="M20 11v4"></path>', 7)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
