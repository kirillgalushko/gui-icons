import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function o(a, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    r("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5.293 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" }, null, -1)
  ]));
}
const i = { render: o };
export {
  i as default,
  o as render
};
