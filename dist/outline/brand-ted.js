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
    o('<path d="M2 8h4"></path><path d="M4 8v8"></path><path d="M13 8h-4v8h4"></path><path d="M9 12h2.5"></path><path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z"></path>', 5)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
