import { openBlock as t, createElementBlock as r, createElementVNode as h } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), r("svg", o, e[0] || (e[0] = [
    h("path", { d: "M15 2a1 1 0 0 1 1 1v2.126c1.726 .445 3 2.01 3 3.874v6a4 4 0 0 1 -3 3.874v2.126a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2.126a4 4 0 0 1 -3 -3.874v-6a4 4 0 0 1 3 -3.874v-2.126a1 1 0 0 1 1 -1zm-1 17h-4v1h4zm0 -15h-4v1h4z" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
