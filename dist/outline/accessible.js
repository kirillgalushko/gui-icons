import { openBlock as l, createElementBlock as r, createElementVNode as e } from "vue";
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
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, t) {
  return l(), r("svg", o, t[0] || (t[0] = [
    e("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    e("path", { d: "M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" }, null, -1),
    e("circle", {
      cx: "12",
      cy: "7.5",
      r: ".5",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
