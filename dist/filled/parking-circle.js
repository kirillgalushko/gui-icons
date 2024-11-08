import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
const i = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function l(o, e) {
  return t(), r("svg", i, e[0] || (e[0] = [
    n("path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m1.334 5h-3.334a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h2.334c1.516 0 2.666 -1.38 2.666 -3s-1.15 -3 -2.666 -3m0 2c.323 0 .666 .411 .666 1s-.343 1 -.666 1h-2.334v-2z" }, null, -1)
  ]));
}
const m = { render: l };
export {
  m as default,
  l as render
};
