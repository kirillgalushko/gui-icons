import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function m(r, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    o("path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.43 10.162a11 11 0 0 0 -6.6 1.65a1 1 0 0 0 1.06 1.696a9 9 0 0 1 5.4 -1.35a1 1 0 0 0 .14 -1.996zm-6.56 -4.502l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" }, null, -1)
  ]));
}
const i = { render: m };
export {
  i as default,
  m as render
};