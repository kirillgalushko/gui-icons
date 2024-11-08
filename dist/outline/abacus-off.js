import { openBlock as h, createElementBlock as e, createStaticVNode as a } from "vue";
const p = {
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
function d(o, t) {
  return h(), e("svg", p, t[0] || (t[0] = [
    a('<path d="M5 5v16"></path><path d="M19 21v-2m0 -4v-12"></path><path d="M5 7h2m4 0h8"></path><path d="M5 15h10"></path><path d="M8 13v4"></path><path d="M11 13v4"></path><path d="M16 16v1"></path><path d="M14 5v4"></path><path d="M11 5v2"></path><path d="M8 8v1"></path><path d="M3 21h18"></path><path d="M3 3l18 18"></path>', 12)
  ]));
}
const n = { render: d };
export {
  n as default,
  d as render
};
