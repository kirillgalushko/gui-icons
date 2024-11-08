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
function p(r, t) {
  return h(), e("svg", o, t[0] || (t[0] = [
    a('<path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409"></path><path d="M4 8h4m4 0h8"></path><path d="M20 12h-4m-4 0h-8"></path><path d="M4 16h12"></path><path d="M9 4v1"></path><path d="M14 8v2"></path><path d="M8 12v4"></path><path d="M11 16v4"></path><path d="M3 3l18 18"></path>', 9)
  ]));
}
const n = { render: p };
export {
  n as default,
  p as render
};
