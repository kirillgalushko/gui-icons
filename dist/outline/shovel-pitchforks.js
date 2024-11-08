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
    o('<path d="M5 3h4"></path><path d="M7 3v12"></path><path d="M4 15h6v3a3 3 0 0 1 -6 0v-3z"></path><path d="M14 21v-3a3 3 0 0 1 6 0v3"></path><path d="M17 21v-18"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
