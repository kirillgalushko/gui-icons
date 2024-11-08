import { openBlock as l, createElementBlock as t, createElementVNode as a } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(o, e) {
  return l(), t("svg", r, e[0] || (e[0] = [
    a("path", { d: "M17 2a3 3 0 0 1 2.995 2.824l.005 .176a3 3 0 0 1 3 3a6 6 0 0 1 -5.775 5.996l-.225 .004h-4l.15 .005a2 2 0 0 1 1.844 1.838l.006 .157v4a2 2 0 0 1 -1.85 1.995l-.15 .005h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-4a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a1 1 0 0 1 .883 -.993l.117 -.007h5a4 4 0 0 0 4 -4a1 1 0 0 0 -.883 -.993l-.117 -.007l-.005 .176a3 3 0 0 1 -2.819 2.819l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h10z" }, null, -1)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
