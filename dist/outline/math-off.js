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
    o('<path d="M14 19l2.5 -2.5"></path><path d="M18.5 14.5l1.5 -1.5"></path><path d="M3 3l18 18"></path><path d="M19 5h-7l-.646 2.262"></path><path d="M10.448 10.431l-2.448 8.569l-3 -6h-2"></path>', 5)
  ]));
}
const a = { render: n };
export {
  a as default,
  n as render
};
