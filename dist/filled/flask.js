import { openBlock as t, createElementBlock as l, createElementVNode as h } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(r, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    h("path", { d: "M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034 .077a1.7 1.7 0 0 1 -.002 1.193l-.07 .162a1.7 1.7 0 0 1 -1.213 .911l-.181 .017h-11l-.181 -.017a1.7 1.7 0 0 1 -1.285 -2.266l.039 -.09l3.927 -10.804v-4.823a1 1 0 1 1 0 -2h6zm-2 2h-2v4h2v-4z" }, null, -1)
  ]));
}
const m = { render: o };
export {
  m as default,
  o as render
};
