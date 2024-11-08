import { openBlock as e, createElementBlock as t, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em" }
};
function n(h, l) {
  return e(), t("svg", r, l[0] || (l[0] = [
    o("path", { d: "M18.707 8.293l3 3q .054 .053 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-7.585a1 1 0 0 1 0 -2h7.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0m-13.707 .707a3 3 0 1 1 0 6a3 3 0 0 1 0 -6" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};
