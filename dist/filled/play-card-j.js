import { openBlock as t, createElementBlock as a, createElementVNode as h } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(o, e) {
  return t(), a("svg", r, e[0] || (e[0] = [
    h("path", { d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.01 -10h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h3v3a1 1 0 0 1 -2 0a1 1 0 0 0 -2 0a3 3 0 0 0 6 0v-4a1 1 0 0 0 -1 -1m-6.99 -4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
