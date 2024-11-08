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
function n(a, t) {
  return e(), h("svg", r, t[0] || (t[0] = [
    o('<path d="M4 3h-1v18h1"></path><path d="M20 21h1v-18h-1"></path><path d="M7 9v6"></path><path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"></path><path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
