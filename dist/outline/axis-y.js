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
    o('<path d="M11 20h-.01"></path><path d="M15 20h-.01"></path><path d="M19 20h-.01"></path><path d="M4 7l3 -3l3 3"></path><path d="M7 20v-16"></path>', 5)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
