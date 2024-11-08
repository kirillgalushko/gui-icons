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
    o('<path d="M4 16v-6a2 2 0 1 1 4 0v6"></path><path d="M4 13h4"></path><path d="M11 8v8h4"></path><path d="M16 8h4"></path><path d="M18 8v8"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
