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
    o('<path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9"></path><path d="M9 4v13"></path><path d="M15 7v6.5"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path>', 5)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
