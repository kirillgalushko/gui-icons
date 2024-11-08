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
    o('<path d="M4 20h16"></path><path d="M9.4 10h.6m4 0h.6"></path><path d="M7.8 15h7.2"></path><path d="M6 20l3.5 -10.5"></path><path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
