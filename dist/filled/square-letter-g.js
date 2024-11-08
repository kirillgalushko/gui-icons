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
    h("path", { d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-2a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883v2h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2a1 1 0 0 0 0 -2" }, null, -1)
  ]));
}
const l = { render: n };
export {
  l as default,
  n as render
};
