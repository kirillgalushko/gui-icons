import { openBlock as e, createElementBlock as h, createStaticVNode as o } from "vue";
const a = {
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
  return e(), h("svg", a, t[0] || (t[0] = [
    o('<path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2"></path><path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4"></path><path d="M7 13h4"></path><path d="M17 9v4"></path><path d="M16.115 12.131c.33 .149 .595 .412 .747 .74"></path><path d="M3 3l18 18"></path>', 6)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
