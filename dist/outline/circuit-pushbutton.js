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
    o('<path d="M2 17h2"></path><path d="M20 17h2"></path><path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 11h12"></path><path d="M12 11v-6"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
