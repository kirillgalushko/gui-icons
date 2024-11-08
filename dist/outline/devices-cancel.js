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
function n(r, t) {
  return e(), h("svg", o, t[0] || (t[0] = [
    a('<path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5"></path><path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"></path><path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 21l4 -4"></path><path d="M16 9h2"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
