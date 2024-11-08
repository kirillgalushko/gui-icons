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
    o('<path d="M9 9v10h-6v-14h2"></path><path d="M13 9h9v7h-2m-4 0h-4v-4"></path><path d="M14 19h5"></path><path d="M17 17v2"></path><path d="M6 13v.01"></path><path d="M6 16v.01"></path><path d="M3 3l18 18"></path>', 7)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
