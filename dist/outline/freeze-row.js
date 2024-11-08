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
    o('<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path><path d="M21 9h-18"></path><path d="M15 3l-6 6"></path><path d="M9.5 3l-6 6"></path><path d="M20 3.5l-5.5 5.5"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
