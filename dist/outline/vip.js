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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(i, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M3 5h18"></path><path d="M3 19h18"></path><path d="M4 9l2 6h1l2 -6"></path><path d="M12 9v6"></path><path d="M16 15v-6h2a2 2 0 1 1 0 4h-2"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
