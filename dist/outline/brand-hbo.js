import { openBlock as e, createElementBlock as h, createStaticVNode as a } from "vue";
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
function r(n, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M2 16v-8"></path><path d="M6 8v8"></path><path d="M2 12h4"></path><path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z"></path><path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>', 6)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
