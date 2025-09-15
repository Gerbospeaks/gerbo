import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  init_jsx_runtime as t,
  init_npm_react_18_2 as n,
  init_ssg_sandbox_shims as r,
  p as i,
  pe as a,
  ue as o,
  window as s,
} from "./react.Cd8yx0tA.mjs";
import {
  ControlType as c,
  addPropertyControls as l,
  init_framer_MRKGI23E as u,
  withCSS as d,
} from "./framer.DERDik75.mjs";
function f(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    r(),
      (p = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            (this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0));
          else {
            this.currentTime += e;
            let n = f(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          t && this.stop(), this.onUpdate?.(this.value, t);
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          {
            lerp: n = 0.1,
            duration: r = 1,
            easing: i = (e) => e,
            onStart: a,
            onUpdate: o,
          },
        ) {
          (this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o);
        }
      }),
      (m = class {
        constructor({
          wrapper: e,
          content: t,
          autoResize: n = !0,
          debounce: r = 250,
        } = {}) {
          (this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t));
                };
              })(this.resize, r)),
              this.wrapper === s
                ? s.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            s.removeEventListener(`resize`, this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === s
            ? ((this.width = s.innerWidth), (this.height = s.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === s
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (h = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (g = 100 / 6),
      (_ = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new h()),
            s.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            });
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          this.emitter.destroy(),
            s.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e });
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e });
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          (t *= r === 1 ? g : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? g : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e });
        };
        onWindowResize = () => {
          (this.windowWidth = s.innerWidth),
            (this.windowHeight = s.innerHeight);
        };
      }),
      (v = class {
        constructor({
          wrapper: e = s,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: c = 35,
          duration: l,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = !l && 0.1,
          infinite: f = !1,
          orientation: g = `vertical`,
          gestureOrientation: v = `vertical`,
          touchMultiplier: y = 1,
          wheelMultiplier: b = 1,
          autoResize: x = !0,
          prevent: S = !1,
          __experimental__naiveDimensions: C = !1,
        } = {}) {
          (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching =
                  n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find((e) => {
                  var t, n, a, o, s;
                  return (
                    (typeof c == `function` ? c?.(e) : c) ||
                    (t = e.hasAttribute)?.call(e, `data-lenis-prevent`) ||
                    (r &&
                      (n = e.hasAttribute)?.call(
                        e,
                        `data-lenis-prevent-touch`,
                      )) ||
                    (i &&
                      (a = e.hasAttribute)?.call(
                        e,
                        `data-lenis-prevent-wheel`,
                      )) ||
                    ((o = e.classList)?.contains(`lenis`) &&
                      !(s = e.classList)?.contains(`lenis-stopped`))
                  );
                })
              )
                return;
              if (this.isStopped || this.isLocked)
                return void n.preventDefault();
              if (
                !(
                  (this.options.syncTouch && r) ||
                  (this.options.smoothWheel && i)
                )
              )
                return (this.isScrolling = `native`), void this.animate.stop();
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        },
                  ),
                );
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (
                !1 === this.isScrolling ||
                this.isScrolling === `native`
              ) {
                let e = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      (this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit();
                    }, 400));
              }
            }),
            (s.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = s),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: c,
              duration: l,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: v,
              orientation: g,
              touchMultiplier: y,
              wheelMultiplier: b,
              autoResize: x,
              prevent: S,
              __experimental__naiveDimensions: C,
            }),
            (this.animate = new p()),
            (this.emitter = new h()),
            (this.dimensions = new m({
              wrapper: e,
              content: t,
              autoResize: x,
            })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            (this.virtualScroll = new _(r, {
              touchMultiplier: y,
              wheelMultiplier: b,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
              !1,
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName();
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = e)
            : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          (this.userData = e),
            this.emitter.emit(`scroll`, this),
            (this.userData = {});
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          (this.time = e), this.animate.advance(0.001 * t);
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: c,
            onComplete: l,
            force: u = !1,
            programmatic: d = !0,
            userData: p = {},
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== s) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = f(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (l == null || l(this))
                );
              e !== this.targetScroll &&
                (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    r && (this.isLocked = !0),
                      (this.isScrolling = `smooth`),
                      c?.(this);
                  },
                  onUpdate: (e, t) => {
                    (this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit({ userData: p }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: p }),
                        l?.(this),
                        (this.__preventNextNativeScrollEvent = !0));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === s
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e &&
            ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e &&
            ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e &&
            ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim());
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      });
  });
function b(e) {
  let { intensity: t } = e,
    n = a(null);
  return (
    o(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    o(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        (t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: [`style`],
            }));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          t && t.disconnect(), r && r.disconnect();
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    o(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = s.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    o(() => {
      try {
        if (typeof v != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new v({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                n.current.raf(t), requestAnimationFrame(e);
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              n.current.destroy(), (n.current = null);
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return console.error(`Error initializing Lenis:`, e), () => {};
      }
    }, [t]),
    o(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(s.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = s.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return console.error(`Error processing anchor:`, e), null;
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) });
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n),
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return console.error(`Error setting up anchor links:`, e), () => {};
      }
    }, [n]),
    i(`div`, { style: e.style })
  );
}
var x,
  S = e(() => {
    r(),
      t(),
      u(),
      y(),
      n(),
      (x = d(
        b,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``,
      )),
      (x.displayName = `Smooth Scroll`),
      l(x, {
        intensity: {
          title: `Intensity`,
          type: c.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      });
  });
export { x as SmoothScroll, S as init_SmoothScroll_Prod };
//# sourceMappingURL=SmoothScroll_Prod.BFCicXDY.mjs.map
