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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function p(d, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M3 21h18"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 16h1"></path><path d="M5 21v-16"></path><path d="M7 3h10c1 0 2 1 2 2v10"></path><path d="M19 19v2"></path><path d="M3 3l18 18"></path>', 9)
  ]));
}
const r = { render: p };
export {
  r as default,
  p as render
};
