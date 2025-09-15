import { __esmMin as e } from "./rolldown-runtime.wPLyQg-T.mjs";
import {
  Y as t,
  ae as ee,
  init_jsx_runtime as n,
  init_npm_react_18_2 as r,
  p as i,
  pe as a,
  se as o,
  u as s,
  x as c,
} from "./react.Cd8yx0tA.mjs";
import {
  LayoutGroup as te,
  init_framer_motion_5EXT2AMG as l,
  motion as ne,
} from "./motion.BvMEYU-E.mjs";
import {
  ComponentViewportProvider as u,
  Container as d,
  GeneratedComponentContext as re,
  PropertyOverrides2 as f,
  RichText as p,
  SVG as m,
  addFonts as h,
  cx as g,
  getFonts as _,
  getFontsFromSharedStyle as v,
  init_framer_MRKGI23E as y,
  useComponentViewport as ie,
  useCustomCursors as ae,
  useHydratedBreakpointVariants as oe,
  useIsOnFramerCanvas as b,
  useLocaleInfo as se,
  useMetadata as ce,
  useRouteElementId as x,
  withCSS as S,
  withVariantAppearEffect as C,
} from "./framer.DERDik75.mjs";
import {
  FramerYwA1diXfH as w,
  FramerlicEmhkfK as T,
  init_YwA1diXfH as E,
  init_licEmhkfK as D,
} from "./shared-lib.BgYLzAGg.mjs";
import {
  SmoothScroll as O,
  init_SmoothScroll_Prod as le,
} from "./SmoothScroll_Prod.BFCicXDY.mjs";
import {
  className as ue,
  className$1 as de,
  css as k,
  css$1 as A,
  fonts as j,
  fonts$1 as M,
  init_Z4rzRSIez as N,
  init_pdnK4tFIz as P,
} from "./Z4rzRSIez.B9wmqB7A.mjs";
import {
  className as fe,
  css as pe,
  fonts as me,
  init_gTtZK0Q4d as F,
} from "./gTtZK0Q4d.BgsrqHgO.mjs";
import {
  className as I,
  css as L,
  fonts as R,
  init_ECTXUYyOQ as he,
} from "./ECTXUYyOQ.G2rndKpB.mjs";
import { init_ZK2wKnzbL as ge, metadata as _e } from "./ZK2wKnzbL.CABwnAFs.mjs";
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  ve = e(() => {
    n(),
      y(),
      l(),
      r(),
      le(),
      D(),
      E(),
      he(),
      F(),
      P(),
      N(),
      ge(),
      (z = _(w)),
      (B = C(w)),
      (V = _(T)),
      (H = _(O)),
      (U = {
        Ttr7eksrJ: `(min-width: 1200px)`,
        UxgoFFX0K: `(min-width: 810px) and (max-width: 1199px)`,
        xrovjidtC: `(max-width: 809px)`,
      }),
      (W = `framer-79F7v`),
      (G = {
        Ttr7eksrJ: `framer-v-1yozbkx`,
        UxgoFFX0K: `framer-v-1km9m5t`,
        xrovjidtC: `framer-v-1y306ta`,
      }),
      (K = (e, t) => `translateX(-50%) ${t}`),
      (q = ({ value: e }) => {
        let t = b();
        return t
          ? null
          : i(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (J = { Desktop: `Ttr7eksrJ`, Phone: `xrovjidtC`, Tablet: `UxgoFFX0K` }),
      (Y = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: J[n.variant] ?? n.variant ?? `Ttr7eksrJ`,
      })),
      (X = t(function (e, t) {
        let n = a(null),
          r = t ?? n,
          l = ee(),
          { activeLocale: h, setLocale: _ } = se(),
          v = ie(),
          { style: y, className: b, layoutId: S, variant: C, ...w } = Y(e),
          E = o(() => _e(void 0, h), [void 0, h]);
        ce(E);
        let [D, le] = oe(C, U, !1),
          k = [ue, de, I, fe],
          A = g(W, ...k),
          j = a(null),
          M = x(`P9giXMsVx`),
          N = x(`BYCF0rlAy`),
          P = a(null);
        return (
          ae({}),
          i(re.Provider, {
            value: { primaryVariantId: `Ttr7eksrJ`, variantClassNames: G },
            children: s(te, {
              id: S ?? l,
              children: [
                i(q, {
                  value: `html body { background: var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229)); }`,
                }),
                s(ne.div, {
                  ...w,
                  className: g(A, `framer-1yozbkx`, b),
                  ref: r,
                  style: { ...y },
                  children: [
                    i(f, {
                      breakpoint: D,
                      overrides: {
                        xrovjidtC: {
                          width: `calc(${v?.width || `100vw`} - 20px)`,
                        },
                      },
                      children: i(u, {
                        height: 62,
                        y: 10,
                        children: i(f, {
                          breakpoint: D,
                          overrides: {
                            xrovjidtC: { transformTemplate: void 0 },
                          },
                          children: i(d, {
                            className: `framer-6kzvi-container`,
                            layoutScroll: !0,
                            nodeId: `LjnDI3qAz`,
                            rendersWithMotion: !0,
                            scopeId: `ZK2wKnzbL`,
                            transformTemplate: K,
                            children: i(f, {
                              breakpoint: D,
                              overrides: {
                                UxgoFFX0K: { variant: `JiVdFNcDQ` },
                                xrovjidtC: {
                                  __framer__variantAppearEffectEnabled: void 0,
                                  style: { width: `100%` },
                                  variant: `rqcL3VnZ6`,
                                },
                              },
                              children: i(B, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: j, target: `Iwzg9GxlV` },
                                ],
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `LjnDI3qAz`,
                                layoutId: `LjnDI3qAz`,
                                variant: `eaBCOesTw`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(`section`, {
                      className: `framer-1wsr4cj`,
                      "data-framer-name": `privacy policy`,
                      children: s(`div`, {
                        className: `framer-ccro9m`,
                        "data-framer-name": `container`,
                        children: [
                          s(`div`, {
                            className: `framer-1ruqxbl`,
                            children: [
                              s(`div`, {
                                className: `framer-zi9fsa`,
                                "data-framer-name": `headings`,
                                id: M,
                                ref: j,
                                children: [
                                  i(p, {
                                    __fromCanvasComponent: !0,
                                    children: i(c, {
                                      children: i(`h1`, {
                                        className: `framer-styles-preset-bdsobh`,
                                        "data-styles-preset": `Z4rzRSIez`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `Privacy Policy`,
                                      }),
                                    }),
                                    className: `framer-7ol6op`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  i(p, {
                                    __fromCanvasComponent: !0,
                                    children: i(c, {
                                      children: i(`h4`, {
                                        className: `framer-styles-preset-8b8zds`,
                                        "data-styles-preset": `pdnK4tFIz`,
                                        children: `Last updated on 25th July 2025`,
                                      }),
                                    }),
                                    className: `framer-vrvawg`,
                                    "data-framer-name": `Date`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`p`, {
                                    className: `framer-styles-preset-mpr3v6`,
                                    "data-styles-preset": `ECTXUYyOQ`,
                                    children: `At Gerbo, we’re committed to protecting your privacy. This policy explains what personal data we collect, how we use it, and your rights under SA data protection law.`,
                                  }),
                                }),
                                className: `framer-9fpncw`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-152859e`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1v8sgqb`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-c4y71`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `1. Who we are`,
                                  }),
                                }),
                                className: `framer-1bzapod`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: s(`p`, {
                                    className: `framer-styles-preset-mpr3v6`,
                                    "data-styles-preset": `ECTXUYyOQ`,
                                    children: [
                                      `Gerbo is an AI-powered call answering service designed to help small businesses capture more leads and reduce missed opportunities. Our service is operated by [Insert Company Name], registered in the UK.`,
                                      i(`br`, {}),
                                      i(`br`, {}),
                                      `If you have any questions about this policy, you can contact us at:`,
                                      i(`br`, {}),
                                      `📧 support@gerbospeaks.com`,
                                    ],
                                  }),
                                }),
                                className: `framer-ts8lkj`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-tugxe4`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-46r33i`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-lz39sz`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `2. What data we collect`,
                                  }),
                                }),
                                className: `framer-pcyh07`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  xrovjidtC: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `When you visit our website:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•IP address and browser type (for analytics and security)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Device information`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            `•Pages visited and time spent (via cookies)`,
                                            i(`br`, {}),
                                            i(`br`, {}),
                                            `When you use our demo or sign up:`,
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Your name and business details`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `•Contact details (email and/or phone number)`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            `•Call recordings or summaries generated during demos`,
                                            i(`br`, {}),
                                            i(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `When your customers call via Gerbo:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: ` • Caller name (if given)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: ` • Caller phone number`,
                                        }),
                                        s(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: [
                                            ` • Call content and intent summary`,
                                            i(`br`, {}),
                                            i(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          ],
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: `Note: We only process this data to provide you with the Gerbo service and do not sell it to third parties.`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: `When you visit our website:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • IP address and browser type (for analytics and security)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • Device information`,
                                      }),
                                      s(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: [
                                          ` • Pages visited and time spent (via cookies)`,
                                          i(`br`, {}),
                                          i(`br`, {}),
                                          `When you use our demo or sign up:`,
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • Your name and business details`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • Contact details (email and/or phone number)`,
                                      }),
                                      s(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: [
                                          ` • Call recordings or summaries generated during demos`,
                                          i(`br`, {}),
                                          i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: `When your customers call via Gerbo:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • Caller name (if given)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: ` • Caller phone number`,
                                      }),
                                      s(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: [
                                          ` • Call content and intent summary`,
                                          i(`br`, {}),
                                          i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        ],
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: `Note: We only process this data to provide you with the Gerbo service and do not sell it to third parties.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-2gryyu`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1byxuw8`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-vn7wwy`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-1gqp5fp`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `3. How we use your data`,
                                  }),
                                }),
                                className: `framer-ony67u`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  xrovjidtC: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We use your data to:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Operate and deliver the Gerbo service`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Email or text you your call summaries`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Improve our product through anonymised analytics`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Respond to your queries or support requests`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Send occasional updates (if you’ve opted in)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We only retain data for as long as needed to provide the service or comply with legal obligation`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `We use your data to:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Operate and deliver the Gerbo service`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Email or text you your call summaries`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Improve our product through anonymised analytics`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Respond to your queries or support requests`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Send occasional updates (if you’ve opted in)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `We only retain data for as long as needed to provide the service or comply with legal obligation`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: i(`br`, {
                                          className: `trailing-break`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  className: `framer-le7qch`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-mpnway`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-fj29r6`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-1svuajm`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `4. Legal basis for processing`,
                                  }),
                                }),
                                className: `framer-1043skn`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  xrovjidtC: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `Under SA GDPR, our lawful bases include:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Performance of a contract – e.g. providing the Gerbo service to you`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Legitimate interest – e.g. improving our website or preventing fraud`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Consent – e.g. marketing communications (you can opt out anytime`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `Under SA GDPR, our lawful bases include:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Performance of a contract – e.g. providing the Gerbo service to you`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Legitimate interest – e.g. improving our website or preventing fraud`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Consent – e.g. marketing communications (you can opt out anytime`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: i(`br`, {
                                          className: `trailing-break`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  className: `framer-18xjwz4`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-11ppiad`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-lqy0rv`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-1w1oggd`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `5. Sharing your data`,
                                  }),
                                }),
                                className: `framer-9tc0d7`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  xrovjidtC: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `We don’t sell your personal data. We may share it with:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Trusted service providers (e.g. Twilio, OpenAI, ElevenLabs) who help power Gerbo`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Legal authorities, if required to comply with SA law`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Third-party platforms like email or SMS providers to deliver your call summaries`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `All partners are GDPR-compliant and under strict data protection agreements.`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          children: i(`br`, {
                                            className: `trailing-break`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `We don’t sell your personal data. We may share it with:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Trusted service providers (e.g. Twilio, OpenAI, ElevenLabs) who help power Gerbo`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Legal authorities, if required to comply with SA law`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Third-party platforms like email or SMS providers to deliver your call summaries`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `All partners are GDPR-compliant and under strict data protection agreements.`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        children: i(`br`, {
                                          className: `trailing-break`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  className: `framer-s5ze6g`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-1hdbj79`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-1p1py7a`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-1kbedcd`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `6. Your rights`,
                                  }),
                                }),
                                className: `framer-1dylc3s`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(f, {
                                breakpoint: D,
                                overrides: {
                                  xrovjidtC: {
                                    children: s(c, {
                                      children: [
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `You have the right to:`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Access any personal data we hold about you`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Correct inaccuracies in your data`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Request deletion of your data (“right to be forgotten”)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Object to or restrict how we use your data`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `•Withdraw consent at any time (for marketing or non-essential processing)`,
                                        }),
                                        i(`p`, {
                                          className: `framer-styles-preset-mpr3v6`,
                                          "data-styles-preset": `ECTXUYyOQ`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                          },
                                          children: `To exercise your rights, email us at support@gerbospeaks.com`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: i(p, {
                                  __fromCanvasComponent: !0,
                                  children: s(c, {
                                    children: [
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `You have the right to:`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Access any personal data we hold about you`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Correct inaccuracies in your data`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Request deletion of your data (“right to be forgotten”)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Object to or restrict how we use your data`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: ` • Withdraw consent at any time (for marketing or non-essential processing)`,
                                      }),
                                      i(`p`, {
                                        className: `framer-styles-preset-mpr3v6`,
                                        "data-styles-preset": `ECTXUYyOQ`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: `To exercise your rights, email us at support@gerbospeaks.com`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1en9ze1`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-6blp9q`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-fv1dej`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-23rp9u`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `7. Cookies`,
                                  }),
                                }),
                                className: `framer-5z5t6h`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `We use essential and optional cookies for functionality and analytics. You can adjust your cookie preferences via your browser settings.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `For more detail, see our [Cookie Policy]`,
                                    }),
                                  ],
                                }),
                                className: `framer-85pggn`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-18fj6rp`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-11s626w`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-18cuqa4`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `8. Data storage & security`,
                                  }),
                                }),
                                className: `framer-1vm84et`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `All data is stored securely using industry-standard encryption. Voice models and processing are SA-based and fully GDPR-compliant.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `We regularly review our security measures to keep your data safe`,
                                    }),
                                  ],
                                }),
                                className: `framer-kv2fu5`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-di3fqj`,
                            "data-framer-name": `Text Container`,
                            children: [
                              i(`div`, {
                                className: `framer-103yb7q`,
                                "data-framer-name": `Separator Line`,
                                children: i(m, {
                                  className: `framer-esbx2a`,
                                  "data-framer-name": `Separator Line`,
                                  opacity: 0.5,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2"><path d="M 0.001 0.5 L 1.001 0.5" fill="transparent" stroke="rgba(NaN,NaN,NaN,0.3)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                  svgContentId: 10875031224,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: i(c, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-bn74vv`,
                                    "data-styles-preset": `gTtZK0Q4d`,
                                    children: `9. Changes to this policy`,
                                  }),
                                }),
                                className: `framer-17k3n76`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              i(p, {
                                __fromCanvasComponent: !0,
                                children: s(c, {
                                  children: [
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `We may update this policy to reflect changes to our service or the law. The latest version will always be available on this page.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `⸻`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Thank you for trusting Gerbo.`,
                                    }),
                                    i(`p`, {
                                      className: `framer-styles-preset-mpr3v6`,
                                      "data-styles-preset": `ECTXUYyOQ`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: `Your privacy is as important to us as your calls are to you.`,
                                    }),
                                  ],
                                }),
                                className: `framer-qj9nk9`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    i(f, {
                      breakpoint: D,
                      overrides: {
                        xrovjidtC: { y: (v?.y || 0) + 0 + 10885.4 },
                      },
                      children: i(u, {
                        height: 306,
                        width: v?.width || `100vw`,
                        y: (v?.y || 0) + 0 + 10925.4,
                        children: i(d, {
                          className: `framer-1lnp1t2-container`,
                          id: N,
                          nodeId: `BYCF0rlAy`,
                          ref: P,
                          scopeId: `ZK2wKnzbL`,
                          children: i(f, {
                            breakpoint: D,
                            overrides: {
                              UxgoFFX0K: { variant: `zGNwQKXPE` },
                              xrovjidtC: { variant: `pOmGhkHnU` },
                            },
                            children: i(T, {
                              height: `100%`,
                              id: `BYCF0rlAy`,
                              layoutId: `BYCF0rlAy`,
                              style: { width: `100%` },
                              variant: `EbpapWQsU`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    i(u, {
                      children: i(d, {
                        className: `framer-104x917-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `IVRLDCTSZ`,
                        scopeId: `ZK2wKnzbL`,
                        children: i(O, {
                          height: `100%`,
                          id: `IVRLDCTSZ`,
                          intensity: 10,
                          layoutId: `IVRLDCTSZ`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Z = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-79F7v.framer-5w79lc, .framer-79F7v .framer-5w79lc { display: block; }`,
        `.framer-79F7v.framer-1yozbkx { align-content: center; align-items: center; background-color: var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, #d8dfe5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-79F7v .framer-6kzvi-container { flex: none; height: auto; left: 50%; position: fixed; top: 10px; transform: translateX(-50%); width: auto; z-index: 9; }`,
        `.framer-79F7v .framer-1wsr4cj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 40px 100px 40px; position: relative; width: 100%; }`,
        `.framer-79F7v .framer-ccro9m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1000px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-79F7v .framer-1ruqxbl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-79F7v .framer-zi9fsa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-79F7v .framer-7ol6op { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-79F7v .framer-vrvawg { flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-79F7v .framer-9fpncw, .framer-79F7v .framer-1bzapod, .framer-79F7v .framer-ts8lkj, .framer-79F7v .framer-pcyh07, .framer-79F7v .framer-2gryyu, .framer-79F7v .framer-ony67u, .framer-79F7v .framer-le7qch, .framer-79F7v .framer-1043skn, .framer-79F7v .framer-18xjwz4, .framer-79F7v .framer-9tc0d7, .framer-79F7v .framer-s5ze6g, .framer-79F7v .framer-1dylc3s, .framer-79F7v .framer-1en9ze1, .framer-79F7v .framer-5z5t6h, .framer-79F7v .framer-85pggn, .framer-79F7v .framer-1vm84et, .framer-79F7v .framer-kv2fu5, .framer-79F7v .framer-17k3n76, .framer-79F7v .framer-qj9nk9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-79F7v .framer-152859e, .framer-79F7v .framer-tugxe4, .framer-79F7v .framer-1byxuw8, .framer-79F7v .framer-mpnway, .framer-79F7v .framer-11ppiad, .framer-79F7v .framer-1hdbj79, .framer-79F7v .framer-6blp9q, .framer-79F7v .framer-18fj6rp, .framer-79F7v .framer-di3fqj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-79F7v .framer-1v8sgqb, .framer-79F7v .framer-46r33i, .framer-79F7v .framer-vn7wwy, .framer-79F7v .framer-fj29r6, .framer-79F7v .framer-lqy0rv, .framer-79F7v .framer-1p1py7a, .framer-79F7v .framer-fv1dej, .framer-79F7v .framer-11s626w, .framer-79F7v .framer-103yb7q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 3px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-79F7v .framer-c4y71, .framer-79F7v .framer-lz39sz, .framer-79F7v .framer-1gqp5fp, .framer-79F7v .framer-1svuajm, .framer-79F7v .framer-1w1oggd, .framer-79F7v .framer-1kbedcd, .framer-79F7v .framer-23rp9u, .framer-79F7v .framer-18cuqa4, .framer-79F7v .framer-esbx2a { background-color: var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)); flex: 1 0 0px; height: 2px; opacity: 0.5; position: relative; width: 1px; }`,
        `.framer-79F7v .framer-1lnp1t2-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-79F7v .framer-104x917-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...k,
        ...A,
        ...L,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-79F7v.framer-1yozbkx { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-79F7v.framer-1yozbkx { width: 390px; } .framer-79F7v .framer-6kzvi-container { left: 10px; right: 10px; transform: unset; width: unset; } .framer-79F7v .framer-1wsr4cj { padding: 160px 20px 100px 20px; }}`,
      ]),
      (Q = S(X, Z, `framer-79F7v`)),
      (Q.displayName = `Privacy`),
      (Q.defaultProps = { height: 4965.6, width: 1200 }),
      h(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...z,
          ...V,
          ...H,
          ...v(j),
          ...v(M),
          ...v(R),
          ...v(me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($ = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerZK2wKnzbL`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerResponsiveScreen: ``,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `4965.6`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UxgoFFX0K":{"layout":["fixed","auto"]},"xrovjidtC":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerScrollSections: `{"P9giXMsVx":{"pattern":":P9giXMsVx","name":"header"},"BYCF0rlAy":{"pattern":":BYCF0rlAy","name":"footer"}}`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
ve();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=3AChmpEwokhktDO8vgLyh1E_d2OpwiYjvZBOV8opd3I.CXPo0dDp.mjs.map
