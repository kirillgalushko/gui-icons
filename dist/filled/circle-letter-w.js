import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  style: { width: "1em", "min-width": "1em", height: "1em", "min-height": "1em", fill: "currentColor" }
};
function n(i, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    r("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.008 5.876l-.52 4.153l-.56 -1.4c-.319 -.799 -1.41 -.837 -1.803 -.114l-.053 .114l-.561 1.4l-.519 -4.153a1 1 0 0 0 -1 -.876l-.116 .008a1 1 0 0 0 -.868 1.116l1 8c.128 1.025 1.537 1.207 1.92 .247l1.072 -2.678l1.072 2.678c.383 .96 1.792 .778 1.92 -.247l1 -8a1 1 0 0 0 -1.984 -.248" }, null, -1)
  ]));
}
const m = { render: n };
export {
  m as default,
  n as render
};