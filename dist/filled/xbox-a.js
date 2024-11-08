import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), l("svg", r, e[0] || (e[0] = [
    o("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m.936 5.649c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.507 -1.351h3.114l.507 1.351a1 1 0 1 0 1.872 -.702zm-.936 3.199l.807 2.152h-1.614z" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
