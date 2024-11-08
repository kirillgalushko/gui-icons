import { openBlock as h, createElementBlock as e, createStaticVNode as o } from "vue";
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
function p(r, t) {
  return h(), e("svg", a, t[0] || (t[0] = [
    o('<path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388"></path><path d="M8 8v12"></path><path d="M16 4v8m0 4v4"></path><path d="M4 8h4"></path><path d="M4 16h4"></path><path d="M4 12h8m4 0h4"></path><path d="M16 8h4"></path><path d="M3 3l18 18"></path>', 8)
  ]));
}
const d = { render: p };
export {
  d as default,
  p as render
};
