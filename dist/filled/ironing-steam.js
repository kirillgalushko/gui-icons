import { openBlock as l, createElementBlock as a, createElementVNode as e } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function r(o, t) {
  return l(), a("svg", n, t[0] || (t[0] = [
    e("path", { d: "M12 18a1 1 0 0 1 1 1v2a1 1 0 0 1 -2 0v-2a1 1 0 0 1 1 -1" }, null, -1),
    e("path", { d: "M16.459 3a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2z" }, null, -1),
    e("path", { d: "M7.106 18.553a1 1 0 0 1 1.788 .894l-1 2a1 1 0 0 1 -1.788 -.894z" }, null, -1),
    e("path", { d: "M15.553 18.106a1 1 0 0 1 1.341 .447l1 2a1 1 0 0 1 -1.788 .894l-1 -2a1 1 0 0 1 .447 -1.341" }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};