var CABLES = (function(t) {
	var e = {}
	function i(s) {
		if (e[s]) return e[s].exports
		var r = (e[s] = { i: s, l: !1, exports: {} })
		return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports
	}
	return (
		(i.m = t),
		(i.c = e),
		(i.d = function(t, e, s) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s })
		}),
		(i.r = function(t) {
			'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 })
		}),
		(i.t = function(t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t
			if (4 & e && 'object' == typeof t && t && t.__esModule) return t
			var s = Object.create(null)
			if ((i.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
				for (var r in t)
					i.d(
						s,
						r,
						function(e) {
							return t[e]
						}.bind(null, r)
					)
			return s
		}),
		(i.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t.default
					  }
					: function() {
							return t
					  }
			return i.d(e, 'a', e), e
		}),
		(i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}),
		(i.p = ''),
		i((i.s = 0))
	)
})([
	function(t, e, i) {
		t.exports = i(2)
	},
	function(t, e, i) {
		/**!

 @license
 handlebars v4.5.3

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
		var s
		;(s = function() {
			return (function(t) {
				var e = {}
				function i(s) {
					if (e[s]) return e[s].exports
					var r = (e[s] = { exports: {}, id: s, loaded: !1 })
					return t[s].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports
				}
				return (i.m = t), (i.c = e), (i.p = ''), i(0)
			})([
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = s(i(2)),
						n = s(i(40)),
						o = i(41),
						a = i(46),
						h = s(i(49)),
						l = s(i(44)),
						u = s(i(39)),
						c = r.default.create
					function p() {
						var t = c()
						return (
							(t.compile = function(e, i) {
								return a.compile(e, i, t)
							}),
							(t.precompile = function(e, i) {
								return a.precompile(e, i, t)
							}),
							(t.AST = n.default),
							(t.Compiler = a.Compiler),
							(t.JavaScriptCompiler = h.default),
							(t.Parser = o.parser),
							(t.parse = o.parse),
							(t.parseWithoutProcessing = o.parseWithoutProcessing),
							t
						)
					}
					var d = p()
					;(d.create = p), u.default(d), (d.Visitor = l.default), (d.default = d), (e.default = d), (t.exports = e.default)
				},
				function(t, e) {
					'use strict'
					;(e.default = function(t) {
						return t && t.__esModule ? t : { default: t }
					}),
						(e.__esModule = !0)
				},
				function(t, e, i) {
					'use strict'
					var s = i(3).default,
						r = i(1).default
					e.__esModule = !0
					var n = s(i(4)),
						o = r(i(33)),
						a = r(i(6)),
						h = s(i(5)),
						l = s(i(34)),
						u = r(i(39))
					function c() {
						var t = new n.HandlebarsEnvironment()
						return (
							h.extend(t, n),
							(t.SafeString = o.default),
							(t.Exception = a.default),
							(t.Utils = h),
							(t.escapeExpression = h.escapeExpression),
							(t.VM = l),
							(t.template = function(e) {
								return l.template(e, t)
							}),
							t
						)
					}
					var p = c()
					;(p.create = c), u.default(p), (p.default = p), (e.default = p), (t.exports = e.default)
				},
				function(t, e) {
					'use strict'
					;(e.default = function(t) {
						if (t && t.__esModule) return t
						var e = {}
						if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
						return (e.default = t), e
					}),
						(e.__esModule = !0)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					;(e.__esModule = !0), (e.HandlebarsEnvironment = l)
					var r = i(5),
						n = s(i(6)),
						o = i(10),
						a = i(30),
						h = s(i(32))
					function l(t, e, i) {
						;(this.helpers = t || {}), (this.partials = e || {}), (this.decorators = i || {}), o.registerDefaultHelpers(this), a.registerDefaultDecorators(this)
					}
					;(e.VERSION = '4.5.3'),
						(e.COMPILER_REVISION = 8),
						(e.LAST_COMPATIBLE_COMPILER_REVISION = 7),
						(e.REVISION_CHANGES = {
							1: '<= 1.0.rc.2',
							2: '== 1.0.0-rc.3',
							3: '== 1.0.0-rc.4',
							4: '== 1.x.x',
							5: '== 2.0.0-alpha.x',
							6: '>= 2.0.0-beta.1',
							7: '>= 4.0.0 <4.3.0',
							8: '>= 4.3.0'
						}),
						(l.prototype = {
							constructor: l,
							logger: h.default,
							log: h.default.log,
							registerHelper: function(t, e) {
								if ('[object Object]' === r.toString.call(t)) {
									if (e) throw new n.default('Arg not supported with multiple helpers')
									r.extend(this.helpers, t)
								} else this.helpers[t] = e
							},
							unregisterHelper: function(t) {
								delete this.helpers[t]
							},
							registerPartial: function(t, e) {
								if ('[object Object]' === r.toString.call(t)) r.extend(this.partials, t)
								else {
									if (void 0 === e) throw new n.default('Attempting to register a partial called "' + t + '" as undefined')
									this.partials[t] = e
								}
							},
							unregisterPartial: function(t) {
								delete this.partials[t]
							},
							registerDecorator: function(t, e) {
								if ('[object Object]' === r.toString.call(t)) {
									if (e) throw new n.default('Arg not supported with multiple decorators')
									r.extend(this.decorators, t)
								} else this.decorators[t] = e
							},
							unregisterDecorator: function(t) {
								delete this.decorators[t]
							}
						})
					var u = h.default.log
					;(e.log = u), (e.createFrame = r.createFrame), (e.logger = h.default)
				},
				function(t, e) {
					'use strict'
					;(e.__esModule = !0),
						(e.extend = o),
						(e.indexOf = function(t, e) {
							for (var i = 0, s = t.length; i < s; i++) if (t[i] === e) return i
							return -1
						}),
						(e.escapeExpression = function(t) {
							if ('string' != typeof t) {
								if (t && t.toHTML) return t.toHTML()
								if (null == t) return ''
								if (!t) return t + ''
								t = '' + t
							}
							return r.test(t) ? t.replace(s, n) : t
						}),
						(e.isEmpty = function(t) {
							return (!t && 0 !== t) || !(!l(t) || 0 !== t.length)
						}),
						(e.createFrame = function(t) {
							var e = o({}, t)
							return (e._parent = t), e
						}),
						(e.blockParams = function(t, e) {
							return (t.path = e), t
						}),
						(e.appendContextPath = function(t, e) {
							return (t ? t + '.' : '') + e
						})
					var i = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;', '=': '&#x3D;' },
						s = /[&<>"'`=]/g,
						r = /[&<>"'`=]/
					function n(t) {
						return i[t]
					}
					function o(t) {
						for (var e = 1; e < arguments.length; e++)
							for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i])
						return t
					}
					var a = Object.prototype.toString
					e.toString = a
					var h = function(t) {
						return 'function' == typeof t
					}
					h(/x/) &&
						(e.isFunction = h = function(t) {
							return 'function' == typeof t && '[object Function]' === a.call(t)
						}),
						(e.isFunction = h)
					var l =
						Array.isArray ||
						function(t) {
							return !(!t || 'object' != typeof t) && '[object Array]' === a.call(t)
						}
					e.isArray = l
				},
				function(t, e, i) {
					'use strict'
					var s = i(7).default
					e.__esModule = !0
					var r = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack']
					function n(t, e) {
						var i = e && e.loc,
							o = void 0,
							a = void 0,
							h = void 0,
							l = void 0
						i && ((o = i.start.line), (a = i.end.line), (h = i.start.column), (l = i.end.column), (t += ' - ' + o + ':' + h))
						for (var u = Error.prototype.constructor.call(this, t), c = 0; c < r.length; c++) this[r[c]] = u[r[c]]
						Error.captureStackTrace && Error.captureStackTrace(this, n)
						try {
							i &&
								((this.lineNumber = o),
								(this.endLineNumber = a),
								s
									? (Object.defineProperty(this, 'column', { value: h, enumerable: !0 }),
									  Object.defineProperty(this, 'endColumn', { value: l, enumerable: !0 }))
									: ((this.column = h), (this.endColumn = l)))
						} catch (t) {}
					}
					;(n.prototype = new Error()), (e.default = n), (t.exports = e.default)
				},
				function(t, e, i) {
					t.exports = { default: i(8), __esModule: !0 }
				},
				function(t, e, i) {
					var s = i(9)
					t.exports = function(t, e, i) {
						return s.setDesc(t, e, i)
					}
				},
				function(t, e) {
					var i = Object
					t.exports = {
						create: i.create,
						getProto: i.getPrototypeOf,
						isEnum: {}.propertyIsEnumerable,
						getDesc: i.getOwnPropertyDescriptor,
						setDesc: i.defineProperty,
						setDescs: i.defineProperties,
						getKeys: i.keys,
						getNames: i.getOwnPropertyNames,
						getSymbols: i.getOwnPropertySymbols,
						each: [].forEach
					}
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					;(e.__esModule = !0),
						(e.registerDefaultHelpers = function(t) {
							r.default(t), n.default(t), o.default(t), a.default(t), h.default(t), l.default(t), u.default(t)
						}),
						(e.moveHelperToHooks = function(t, e, i) {
							t.helpers[e] && ((t.hooks[e] = t.helpers[e]), i || delete t.helpers[e])
						})
					var r = s(i(11)),
						n = s(i(12)),
						o = s(i(25)),
						a = s(i(26)),
						h = s(i(27)),
						l = s(i(28)),
						u = s(i(29))
				},
				function(t, e, i) {
					'use strict'
					e.__esModule = !0
					var s = i(5)
					;(e.default = function(t) {
						t.registerHelper('blockHelperMissing', function(e, i) {
							var r = i.inverse,
								n = i.fn
							if (!0 === e) return n(this)
							if (!1 === e || null == e) return r(this)
							if (s.isArray(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : r(this)
							if (i.data && i.ids) {
								var o = s.createFrame(i.data)
								;(o.contextPath = s.appendContextPath(i.data.contextPath, i.name)), (i = { data: o })
							}
							return n(e, i)
						})
					}),
						(t.exports = e.default)
				},
				function(t, e, i) {
					;(function(s) {
						'use strict'
						var r = i(13).default,
							n = i(1).default
						e.__esModule = !0
						var o = i(5),
							a = n(i(6))
						;(e.default = function(t) {
							t.registerHelper('each', function(t, e) {
								if (!e) throw new a.default('Must pass iterator to #each')
								var i,
									n = e.fn,
									h = e.inverse,
									l = 0,
									u = '',
									c = void 0,
									p = void 0
								function d(e, i, s) {
									c && ((c.key = e), (c.index = i), (c.first = 0 === i), (c.last = !!s), p && (c.contextPath = p + e)),
										(u += n(t[e], { data: c, blockParams: o.blockParams([t[e], e], [p + e, null]) }))
								}
								if (
									(e.data && e.ids && (p = o.appendContextPath(e.data.contextPath, e.ids[0]) + '.'),
									o.isFunction(t) && (t = t.call(this)),
									e.data && (c = o.createFrame(e.data)),
									t && 'object' == typeof t)
								)
									if (o.isArray(t)) for (var f = t.length; l < f; l++) l in t && d(l, l, l === t.length - 1)
									else if (s.Symbol && t[s.Symbol.iterator]) {
										for (var g = [], _ = t[s.Symbol.iterator](), m = _.next(); !m.done; m = _.next()) g.push(m.value)
										for (f = (t = g).length; l < f; l++) d(l, l, l === t.length - 1)
									} else
										(i = void 0),
											r(t).forEach(function(t) {
												void 0 !== i && d(i, l - 1), (i = t), l++
											}),
											void 0 !== i && d(i, l - 1, !0)
								return 0 === l && (u = h(this)), u
							})
						}),
							(t.exports = e.default)
					}.call(
						e,
						(function() {
							return this
						})()
					))
				},
				function(t, e, i) {
					t.exports = { default: i(14), __esModule: !0 }
				},
				function(t, e, i) {
					i(15), (t.exports = i(21).Object.keys)
				},
				function(t, e, i) {
					var s = i(16)
					i(18)('keys', function(t) {
						return function(e) {
							return t(s(e))
						}
					})
				},
				function(t, e, i) {
					var s = i(17)
					t.exports = function(t) {
						return Object(s(t))
					}
				},
				function(t, e) {
					t.exports = function(t) {
						if (null == t) throw TypeError("Can't call method on  " + t)
						return t
					}
				},
				function(t, e, i) {
					var s = i(19),
						r = i(21),
						n = i(24)
					t.exports = function(t, e) {
						var i = (r.Object || {})[t] || Object[t],
							o = {}
						;(o[t] = e(i)),
							s(
								s.S +
									s.F *
										n(function() {
											i(1)
										}),
								'Object',
								o
							)
					}
				},
				function(t, e, i) {
					var s = i(20),
						r = i(21),
						n = i(22),
						o = function(t, e, i) {
							var a,
								h,
								l,
								u = t & o.F,
								c = t & o.G,
								p = t & o.S,
								d = t & o.P,
								f = t & o.B,
								g = t & o.W,
								_ = c ? r : r[e] || (r[e] = {}),
								m = c ? s : p ? s[e] : (s[e] || {}).prototype
							for (a in (c && (i = e), i))
								((h = !u && m && a in m) && a in _) ||
									((l = h ? m[a] : i[a]),
									(_[a] =
										c && 'function' != typeof m[a]
											? i[a]
											: f && h
											? n(l, s)
											: g && m[a] == l
											? (function(t) {
													var e = function(e) {
														return this instanceof t ? new t(e) : t(e)
													}
													return (e.prototype = t.prototype), e
											  })(l)
											: d && 'function' == typeof l
											? n(Function.call, l)
											: l),
									d && ((_.prototype || (_.prototype = {}))[a] = l))
						}
					;(o.F = 1), (o.G = 2), (o.S = 4), (o.P = 8), (o.B = 16), (o.W = 32), (t.exports = o)
				},
				function(t, e) {
					var i = (t.exports =
						'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')())
					'number' == typeof __g && (__g = i)
				},
				function(t, e) {
					var i = (t.exports = { version: '1.2.6' })
					'number' == typeof __e && (__e = i)
				},
				function(t, e, i) {
					var s = i(23)
					t.exports = function(t, e, i) {
						if ((s(t), void 0 === e)) return t
						switch (i) {
							case 1:
								return function(i) {
									return t.call(e, i)
								}
							case 2:
								return function(i, s) {
									return t.call(e, i, s)
								}
							case 3:
								return function(i, s, r) {
									return t.call(e, i, s, r)
								}
						}
						return function() {
							return t.apply(e, arguments)
						}
					}
				},
				function(t, e) {
					t.exports = function(t) {
						if ('function' != typeof t) throw TypeError(t + ' is not a function!')
						return t
					}
				},
				function(t, e) {
					t.exports = function(t) {
						try {
							return !!t()
						} catch (t) {
							return !0
						}
					}
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = s(i(6))
					;(e.default = function(t) {
						t.registerHelper('helperMissing', function() {
							if (1 !== arguments.length) throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
						})
					}),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = i(5),
						n = s(i(6))
					;(e.default = function(t) {
						t.registerHelper('if', function(t, e) {
							if (2 != arguments.length) throw new n.default('#if requires exactly one argument')
							return r.isFunction(t) && (t = t.call(this)), (!e.hash.includeZero && !t) || r.isEmpty(t) ? e.inverse(this) : e.fn(this)
						}),
							t.registerHelper('unless', function(e, i) {
								if (2 != arguments.length) throw new n.default('#unless requires exactly one argument')
								return t.helpers.if.call(this, e, { fn: i.inverse, inverse: i.fn, hash: i.hash })
							})
					}),
						(t.exports = e.default)
				},
				function(t, e) {
					'use strict'
					;(e.__esModule = !0),
						(e.default = function(t) {
							t.registerHelper('log', function() {
								for (var e = [void 0], i = arguments[arguments.length - 1], s = 0; s < arguments.length - 1; s++) e.push(arguments[s])
								var r = 1
								null != i.hash.level ? (r = i.hash.level) : i.data && null != i.data.level && (r = i.data.level), (e[0] = r), t.log.apply(t, e)
							})
						}),
						(t.exports = e.default)
				},
				function(t, e) {
					'use strict'
					e.__esModule = !0
					var i = /^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/
					;(e.dangerousPropertyRegex = i),
						(e.default = function(t) {
							t.registerHelper('lookup', function(t, e) {
								return t ? (!i.test(String(e)) || Object.prototype.propertyIsEnumerable.call(t, e) ? t[e] : void 0) : t
							})
						})
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = i(5),
						n = s(i(6))
					;(e.default = function(t) {
						t.registerHelper('with', function(t, e) {
							if (2 != arguments.length) throw new n.default('#with requires exactly one argument')
							r.isFunction(t) && (t = t.call(this))
							var i = e.fn
							if (r.isEmpty(t)) return e.inverse(this)
							var s = e.data
							return (
								e.data && e.ids && ((s = r.createFrame(e.data)).contextPath = r.appendContextPath(e.data.contextPath, e.ids[0])),
								i(t, { data: s, blockParams: r.blockParams([t], [s && s.contextPath]) })
							)
						})
					}),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					;(e.__esModule = !0),
						(e.registerDefaultDecorators = function(t) {
							r.default(t)
						})
					var r = s(i(31))
				},
				function(t, e, i) {
					'use strict'
					e.__esModule = !0
					var s = i(5)
					;(e.default = function(t) {
						t.registerDecorator('inline', function(t, e, i, r) {
							var n = t
							return (
								e.partials ||
									((e.partials = {}),
									(n = function(r, n) {
										var o = i.partials
										i.partials = s.extend({}, o, e.partials)
										var a = t(r, n)
										return (i.partials = o), a
									})),
								(e.partials[r.args[0]] = r.fn),
								n
							)
						})
					}),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					e.__esModule = !0
					var s = i(5),
						r = {
							methodMap: ['debug', 'info', 'warn', 'error'],
							level: 'info',
							lookupLevel: function(t) {
								if ('string' == typeof t) {
									var e = s.indexOf(r.methodMap, t.toLowerCase())
									t = e >= 0 ? e : parseInt(t, 10)
								}
								return t
							},
							log: function(t) {
								if (((t = r.lookupLevel(t)), 'undefined' != typeof console && r.lookupLevel(r.level) <= t)) {
									var e = r.methodMap[t]
									console[e] || (e = 'log')
									for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) s[n - 1] = arguments[n]
									console[e].apply(console, s)
								}
							}
						}
					;(e.default = r), (t.exports = e.default)
				},
				function(t, e) {
					'use strict'
					function i(t) {
						this.string = t
					}
					;(e.__esModule = !0),
						(i.prototype.toString = i.prototype.toHTML = function() {
							return '' + this.string
						}),
						(e.default = i),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(35).default,
						r = i(3).default,
						n = i(1).default
					;(e.__esModule = !0),
						(e.checkRevision = function(t) {
							var e = (t && t[0]) || 1,
								i = h.COMPILER_REVISION
							if (!(e >= h.LAST_COMPATIBLE_COMPILER_REVISION && e <= h.COMPILER_REVISION)) {
								if (e < h.LAST_COMPATIBLE_COMPILER_REVISION) {
									var s = h.REVISION_CHANGES[i],
										r = h.REVISION_CHANGES[e]
									throw new a.default(
										'Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (' +
											s +
											') or downgrade your runtime to an older version (' +
											r +
											').'
									)
								}
								throw new a.default(
									'Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (' +
										t[1] +
										').'
								)
							}
						}),
						(e.template = function(t, e) {
							if (!e) throw new a.default('No environment passed to template')
							if (!t || !t.main) throw new a.default('Unknown template object: ' + typeof t)
							;(t.main.decorator = t.main_d), e.VM.checkRevision(t.compiler)
							var i = t.compiler && 7 === t.compiler[0],
								r = {
									strict: function(t, e, i) {
										if (!(t && e in t)) throw new a.default('"' + e + '" not defined in ' + t, { loc: i })
										return t[e]
									},
									lookup: function(t, e) {
										for (var i = t.length, s = 0; s < i; s++) if (t[s] && null != t[s][e]) return t[s][e]
									},
									lambda: function(t, e) {
										return 'function' == typeof t ? t.call(e) : t
									},
									escapeExpression: o.escapeExpression,
									invokePartial: function(i, s, r) {
										r.hash && ((s = o.extend({}, s, r.hash)), r.ids && (r.ids[0] = !0)), (i = e.VM.resolvePartial.call(this, i, s, r))
										var n = o.extend({}, r, { hooks: this.hooks }),
											h = e.VM.invokePartial.call(this, i, s, n)
										if ((null == h && e.compile && ((r.partials[r.name] = e.compile(i, t.compilerOptions, e)), (h = r.partials[r.name](s, n))), null != h)) {
											if (r.indent) {
												for (var l = h.split('\n'), u = 0, c = l.length; u < c && (l[u] || u + 1 !== c); u++) l[u] = r.indent + l[u]
												h = l.join('\n')
											}
											return h
										}
										throw new a.default('The partial ' + r.name + ' could not be compiled when running in runtime-only mode')
									},
									fn: function(e) {
										var i = t[e]
										return (i.decorator = t[e + '_d']), i
									},
									programs: [],
									program: function(t, e, i, s, r) {
										var n = this.programs[t],
											o = this.fn(t)
										return e || r || s || i ? (n = u(this, t, o, e, i, s, r)) : n || (n = this.programs[t] = u(this, t, o)), n
									},
									data: function(t, e) {
										for (; t && e--; ) t = t._parent
										return t
									},
									nullContext: s({}),
									noop: e.VM.noop,
									compilerInfo: t.compiler
								}
							function n(e) {
								var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
									s = i.data
								n._setup(i),
									!i.partial &&
										t.useData &&
										(s = (function(t, e) {
											return (e && 'root' in e) || ((e = e ? h.createFrame(e) : {}).root = t), e
										})(e, s))
								var o = void 0,
									a = t.useBlockParams ? [] : void 0
								function l(e) {
									return '' + t.main(r, e, r.helpers, r.partials, s, a, o)
								}
								return (
									t.useDepths && (o = i.depths ? (e != i.depths[0] ? [e].concat(i.depths) : i.depths) : [e]), (l = p(t.main, l, r, i.depths || [], s, a))(e, i)
								)
							}
							return (
								(n.isTop = !0),
								(n._setup = function(s) {
									if (s.partial) (r.helpers = s.helpers), (r.partials = s.partials), (r.decorators = s.decorators), (r.hooks = s.hooks)
									else {
										;(r.helpers = o.extend({}, e.helpers, s.helpers)),
											t.usePartial && (r.partials = o.extend({}, e.partials, s.partials)),
											(t.usePartial || t.useDecorators) && (r.decorators = o.extend({}, e.decorators, s.decorators)),
											(r.hooks = {})
										var n = s.allowCallsToHelperMissing || i
										l.moveHelperToHooks(r, 'helperMissing', n), l.moveHelperToHooks(r, 'blockHelperMissing', n)
									}
								}),
								(n._child = function(e, i, s, n) {
									if (t.useBlockParams && !s) throw new a.default('must pass block params')
									if (t.useDepths && !n) throw new a.default('must pass parent depths')
									return u(r, e, t[e], i, 0, s, n)
								}),
								n
							)
						}),
						(e.wrapProgram = u),
						(e.resolvePartial = function(t, e, i) {
							return (
								t ? t.call || i.name || ((i.name = t), (t = i.partials[t])) : (t = '@partial-block' === i.name ? i.data['partial-block'] : i.partials[i.name]),
								t
							)
						}),
						(e.invokePartial = function(t, e, i) {
							var s = i.data && i.data['partial-block']
							;(i.partial = !0), i.ids && (i.data.contextPath = i.ids[0] || i.data.contextPath)
							var r = void 0
							if (
								(i.fn &&
									i.fn !== c &&
									(function() {
										i.data = h.createFrame(i.data)
										var t = i.fn
										;(r = i.data['partial-block'] = function(e) {
											var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
											return (i.data = h.createFrame(i.data)), (i.data['partial-block'] = s), t(e, i)
										}),
											t.partials && (i.partials = o.extend({}, i.partials, t.partials))
									})(),
								void 0 === t && r && (t = r),
								void 0 === t)
							)
								throw new a.default('The partial ' + i.name + ' could not be found')
							if (t instanceof Function) return t(e, i)
						}),
						(e.noop = c)
					var o = r(i(5)),
						a = n(i(6)),
						h = i(4),
						l = i(10)
					function u(t, e, i, s, r, n, o) {
						function a(e) {
							var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
								a = o
							return (
								!o || e == o[0] || (e === t.nullContext && null === o[0]) || (a = [e].concat(o)),
								i(t, e, t.helpers, t.partials, r.data || s, n && [r.blockParams].concat(n), a)
							)
						}
						return ((a = p(i, a, t, o, s, n)).program = e), (a.depth = o ? o.length : 0), (a.blockParams = r || 0), a
					}
					function c() {
						return ''
					}
					function p(t, e, i, s, r, n) {
						if (t.decorator) {
							var a = {}
							;(e = t.decorator(e, a, i, s && s[0], r, n, s)), o.extend(e, a)
						}
						return e
					}
				},
				function(t, e, i) {
					t.exports = { default: i(36), __esModule: !0 }
				},
				function(t, e, i) {
					i(37), (t.exports = i(21).Object.seal)
				},
				function(t, e, i) {
					var s = i(38)
					i(18)('seal', function(t) {
						return function(e) {
							return t && s(e) ? t(e) : e
						}
					})
				},
				function(t, e) {
					t.exports = function(t) {
						return 'object' == typeof t ? null !== t : 'function' == typeof t
					}
				},
				function(t, e) {
					;(function(i) {
						'use strict'
						;(e.__esModule = !0),
							(e.default = function(t) {
								var e = void 0 !== i ? i : window,
									s = e.Handlebars
								t.noConflict = function() {
									return e.Handlebars === t && (e.Handlebars = s), t
								}
							}),
							(t.exports = e.default)
					}.call(
						e,
						(function() {
							return this
						})()
					))
				},
				function(t, e) {
					'use strict'
					e.__esModule = !0
					var i = {
						helpers: {
							helperExpression: function(t) {
								return (
									'SubExpression' === t.type || (('MustacheStatement' === t.type || 'BlockStatement' === t.type) && !!((t.params && t.params.length) || t.hash))
								)
							},
							scopedId: function(t) {
								return /^\.|this\b/.test(t.original)
							},
							simpleId: function(t) {
								return 1 === t.parts.length && !i.helpers.scopedId(t) && !t.depth
							}
						}
					}
					;(e.default = i), (t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default,
						r = i(3).default
					;(e.__esModule = !0),
						(e.parseWithoutProcessing = u),
						(e.parse = function(t, e) {
							var i = u(t, e)
							return new o.default(e).accept(i)
						})
					var n = s(i(42)),
						o = s(i(43)),
						a = r(i(45)),
						h = i(5)
					e.parser = n.default
					var l = {}
					function u(t, e) {
						return 'Program' === t.type
							? t
							: ((n.default.yy = l),
							  (l.locInfo = function(t) {
									return new l.SourceLocation(e && e.srcName, t)
							  }),
							  n.default.parse(t))
					}
					h.extend(l, a)
				},
				function(t, e) {
					'use strict'
					e.__esModule = !0
					var i = (function() {
						var t = {
								trace: function() {},
								yy: {},
								symbols_: {
									error: 2,
									root: 3,
									program: 4,
									EOF: 5,
									program_repetition0: 6,
									statement: 7,
									mustache: 8,
									block: 9,
									rawBlock: 10,
									partial: 11,
									partialBlock: 12,
									content: 13,
									COMMENT: 14,
									CONTENT: 15,
									openRawBlock: 16,
									rawBlock_repetition0: 17,
									END_RAW_BLOCK: 18,
									OPEN_RAW_BLOCK: 19,
									helperName: 20,
									openRawBlock_repetition0: 21,
									openRawBlock_option0: 22,
									CLOSE_RAW_BLOCK: 23,
									openBlock: 24,
									block_option0: 25,
									closeBlock: 26,
									openInverse: 27,
									block_option1: 28,
									OPEN_BLOCK: 29,
									openBlock_repetition0: 30,
									openBlock_option0: 31,
									openBlock_option1: 32,
									CLOSE: 33,
									OPEN_INVERSE: 34,
									openInverse_repetition0: 35,
									openInverse_option0: 36,
									openInverse_option1: 37,
									openInverseChain: 38,
									OPEN_INVERSE_CHAIN: 39,
									openInverseChain_repetition0: 40,
									openInverseChain_option0: 41,
									openInverseChain_option1: 42,
									inverseAndProgram: 43,
									INVERSE: 44,
									inverseChain: 45,
									inverseChain_option0: 46,
									OPEN_ENDBLOCK: 47,
									OPEN: 48,
									mustache_repetition0: 49,
									mustache_option0: 50,
									OPEN_UNESCAPED: 51,
									mustache_repetition1: 52,
									mustache_option1: 53,
									CLOSE_UNESCAPED: 54,
									OPEN_PARTIAL: 55,
									partialName: 56,
									partial_repetition0: 57,
									partial_option0: 58,
									openPartialBlock: 59,
									OPEN_PARTIAL_BLOCK: 60,
									openPartialBlock_repetition0: 61,
									openPartialBlock_option0: 62,
									param: 63,
									sexpr: 64,
									OPEN_SEXPR: 65,
									sexpr_repetition0: 66,
									sexpr_option0: 67,
									CLOSE_SEXPR: 68,
									hash: 69,
									hash_repetition_plus0: 70,
									hashSegment: 71,
									ID: 72,
									EQUALS: 73,
									blockParams: 74,
									OPEN_BLOCK_PARAMS: 75,
									blockParams_repetition_plus0: 76,
									CLOSE_BLOCK_PARAMS: 77,
									path: 78,
									dataName: 79,
									STRING: 80,
									NUMBER: 81,
									BOOLEAN: 82,
									UNDEFINED: 83,
									NULL: 84,
									DATA: 85,
									pathSegments: 86,
									SEP: 87,
									$accept: 0,
									$end: 1
								},
								terminals_: {
									2: 'error',
									5: 'EOF',
									14: 'COMMENT',
									15: 'CONTENT',
									18: 'END_RAW_BLOCK',
									19: 'OPEN_RAW_BLOCK',
									23: 'CLOSE_RAW_BLOCK',
									29: 'OPEN_BLOCK',
									33: 'CLOSE',
									34: 'OPEN_INVERSE',
									39: 'OPEN_INVERSE_CHAIN',
									44: 'INVERSE',
									47: 'OPEN_ENDBLOCK',
									48: 'OPEN',
									51: 'OPEN_UNESCAPED',
									54: 'CLOSE_UNESCAPED',
									55: 'OPEN_PARTIAL',
									60: 'OPEN_PARTIAL_BLOCK',
									65: 'OPEN_SEXPR',
									68: 'CLOSE_SEXPR',
									72: 'ID',
									73: 'EQUALS',
									75: 'OPEN_BLOCK_PARAMS',
									77: 'CLOSE_BLOCK_PARAMS',
									80: 'STRING',
									81: 'NUMBER',
									82: 'BOOLEAN',
									83: 'UNDEFINED',
									84: 'NULL',
									85: 'DATA',
									87: 'SEP'
								},
								productions_: [
									0,
									[3, 2],
									[4, 1],
									[7, 1],
									[7, 1],
									[7, 1],
									[7, 1],
									[7, 1],
									[7, 1],
									[7, 1],
									[13, 1],
									[10, 3],
									[16, 5],
									[9, 4],
									[9, 4],
									[24, 6],
									[27, 6],
									[38, 6],
									[43, 2],
									[45, 3],
									[45, 1],
									[26, 3],
									[8, 5],
									[8, 5],
									[11, 5],
									[12, 3],
									[59, 5],
									[63, 1],
									[63, 1],
									[64, 5],
									[69, 1],
									[71, 3],
									[74, 3],
									[20, 1],
									[20, 1],
									[20, 1],
									[20, 1],
									[20, 1],
									[20, 1],
									[20, 1],
									[56, 1],
									[56, 1],
									[79, 2],
									[78, 1],
									[86, 3],
									[86, 1],
									[6, 0],
									[6, 2],
									[17, 0],
									[17, 2],
									[21, 0],
									[21, 2],
									[22, 0],
									[22, 1],
									[25, 0],
									[25, 1],
									[28, 0],
									[28, 1],
									[30, 0],
									[30, 2],
									[31, 0],
									[31, 1],
									[32, 0],
									[32, 1],
									[35, 0],
									[35, 2],
									[36, 0],
									[36, 1],
									[37, 0],
									[37, 1],
									[40, 0],
									[40, 2],
									[41, 0],
									[41, 1],
									[42, 0],
									[42, 1],
									[46, 0],
									[46, 1],
									[49, 0],
									[49, 2],
									[50, 0],
									[50, 1],
									[52, 0],
									[52, 2],
									[53, 0],
									[53, 1],
									[57, 0],
									[57, 2],
									[58, 0],
									[58, 1],
									[61, 0],
									[61, 2],
									[62, 0],
									[62, 1],
									[66, 0],
									[66, 2],
									[67, 0],
									[67, 1],
									[70, 1],
									[70, 2],
									[76, 1],
									[76, 2]
								],
								performAction: function(t, e, i, s, r, n, o) {
									var a = n.length - 1
									switch (r) {
										case 1:
											return n[a - 1]
										case 2:
											this.$ = s.prepareProgram(n[a])
											break
										case 3:
										case 4:
										case 5:
										case 6:
										case 7:
										case 8:
											this.$ = n[a]
											break
										case 9:
											this.$ = { type: 'CommentStatement', value: s.stripComment(n[a]), strip: s.stripFlags(n[a], n[a]), loc: s.locInfo(this._$) }
											break
										case 10:
											this.$ = { type: 'ContentStatement', original: n[a], value: n[a], loc: s.locInfo(this._$) }
											break
										case 11:
											this.$ = s.prepareRawBlock(n[a - 2], n[a - 1], n[a], this._$)
											break
										case 12:
											this.$ = { path: n[a - 3], params: n[a - 2], hash: n[a - 1] }
											break
										case 13:
											this.$ = s.prepareBlock(n[a - 3], n[a - 2], n[a - 1], n[a], !1, this._$)
											break
										case 14:
											this.$ = s.prepareBlock(n[a - 3], n[a - 2], n[a - 1], n[a], !0, this._$)
											break
										case 15:
											this.$ = { open: n[a - 5], path: n[a - 4], params: n[a - 3], hash: n[a - 2], blockParams: n[a - 1], strip: s.stripFlags(n[a - 5], n[a]) }
											break
										case 16:
										case 17:
											this.$ = { path: n[a - 4], params: n[a - 3], hash: n[a - 2], blockParams: n[a - 1], strip: s.stripFlags(n[a - 5], n[a]) }
											break
										case 18:
											this.$ = { strip: s.stripFlags(n[a - 1], n[a - 1]), program: n[a] }
											break
										case 19:
											var h = s.prepareBlock(n[a - 2], n[a - 1], n[a], n[a], !1, this._$),
												l = s.prepareProgram([h], n[a - 1].loc)
											;(l.chained = !0), (this.$ = { strip: n[a - 2].strip, program: l, chain: !0 })
											break
										case 20:
											this.$ = n[a]
											break
										case 21:
											this.$ = { path: n[a - 1], strip: s.stripFlags(n[a - 2], n[a]) }
											break
										case 22:
										case 23:
											this.$ = s.prepareMustache(n[a - 3], n[a - 2], n[a - 1], n[a - 4], s.stripFlags(n[a - 4], n[a]), this._$)
											break
										case 24:
											this.$ = {
												type: 'PartialStatement',
												name: n[a - 3],
												params: n[a - 2],
												hash: n[a - 1],
												indent: '',
												strip: s.stripFlags(n[a - 4], n[a]),
												loc: s.locInfo(this._$)
											}
											break
										case 25:
											this.$ = s.preparePartialBlock(n[a - 2], n[a - 1], n[a], this._$)
											break
										case 26:
											this.$ = { path: n[a - 3], params: n[a - 2], hash: n[a - 1], strip: s.stripFlags(n[a - 4], n[a]) }
											break
										case 27:
										case 28:
											this.$ = n[a]
											break
										case 29:
											this.$ = { type: 'SubExpression', path: n[a - 3], params: n[a - 2], hash: n[a - 1], loc: s.locInfo(this._$) }
											break
										case 30:
											this.$ = { type: 'Hash', pairs: n[a], loc: s.locInfo(this._$) }
											break
										case 31:
											this.$ = { type: 'HashPair', key: s.id(n[a - 2]), value: n[a], loc: s.locInfo(this._$) }
											break
										case 32:
											this.$ = s.id(n[a - 1])
											break
										case 33:
										case 34:
											this.$ = n[a]
											break
										case 35:
											this.$ = { type: 'StringLiteral', value: n[a], original: n[a], loc: s.locInfo(this._$) }
											break
										case 36:
											this.$ = { type: 'NumberLiteral', value: Number(n[a]), original: Number(n[a]), loc: s.locInfo(this._$) }
											break
										case 37:
											this.$ = { type: 'BooleanLiteral', value: 'true' === n[a], original: 'true' === n[a], loc: s.locInfo(this._$) }
											break
										case 38:
											this.$ = { type: 'UndefinedLiteral', original: void 0, value: void 0, loc: s.locInfo(this._$) }
											break
										case 39:
											this.$ = { type: 'NullLiteral', original: null, value: null, loc: s.locInfo(this._$) }
											break
										case 40:
										case 41:
											this.$ = n[a]
											break
										case 42:
											this.$ = s.preparePath(!0, n[a], this._$)
											break
										case 43:
											this.$ = s.preparePath(!1, n[a], this._$)
											break
										case 44:
											n[a - 2].push({ part: s.id(n[a]), original: n[a], separator: n[a - 1] }), (this.$ = n[a - 2])
											break
										case 45:
											this.$ = [{ part: s.id(n[a]), original: n[a] }]
											break
										case 46:
											this.$ = []
											break
										case 47:
											n[a - 1].push(n[a])
											break
										case 48:
											this.$ = []
											break
										case 49:
											n[a - 1].push(n[a])
											break
										case 50:
											this.$ = []
											break
										case 51:
											n[a - 1].push(n[a])
											break
										case 58:
											this.$ = []
											break
										case 59:
											n[a - 1].push(n[a])
											break
										case 64:
											this.$ = []
											break
										case 65:
											n[a - 1].push(n[a])
											break
										case 70:
											this.$ = []
											break
										case 71:
											n[a - 1].push(n[a])
											break
										case 78:
											this.$ = []
											break
										case 79:
											n[a - 1].push(n[a])
											break
										case 82:
											this.$ = []
											break
										case 83:
											n[a - 1].push(n[a])
											break
										case 86:
											this.$ = []
											break
										case 87:
											n[a - 1].push(n[a])
											break
										case 90:
											this.$ = []
											break
										case 91:
											n[a - 1].push(n[a])
											break
										case 94:
											this.$ = []
											break
										case 95:
											n[a - 1].push(n[a])
											break
										case 98:
											this.$ = [n[a]]
											break
										case 99:
											n[a - 1].push(n[a])
											break
										case 100:
											this.$ = [n[a]]
											break
										case 101:
											n[a - 1].push(n[a])
									}
								},
								table: [
									{
										3: 1,
										4: 2,
										5: [2, 46],
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{ 1: [3] },
									{ 5: [1, 4] },
									{
										5: [2, 2],
										7: 5,
										8: 6,
										9: 7,
										10: 8,
										11: 9,
										12: 10,
										13: 11,
										14: [1, 12],
										15: [1, 20],
										16: 17,
										19: [1, 23],
										24: 15,
										27: 16,
										29: [1, 21],
										34: [1, 22],
										39: [2, 2],
										44: [2, 2],
										47: [2, 2],
										48: [1, 13],
										51: [1, 14],
										55: [1, 18],
										59: 19,
										60: [1, 24]
									},
									{ 1: [2, 1] },
									{
										5: [2, 47],
										14: [2, 47],
										15: [2, 47],
										19: [2, 47],
										29: [2, 47],
										34: [2, 47],
										39: [2, 47],
										44: [2, 47],
										47: [2, 47],
										48: [2, 47],
										51: [2, 47],
										55: [2, 47],
										60: [2, 47]
									},
									{
										5: [2, 3],
										14: [2, 3],
										15: [2, 3],
										19: [2, 3],
										29: [2, 3],
										34: [2, 3],
										39: [2, 3],
										44: [2, 3],
										47: [2, 3],
										48: [2, 3],
										51: [2, 3],
										55: [2, 3],
										60: [2, 3]
									},
									{
										5: [2, 4],
										14: [2, 4],
										15: [2, 4],
										19: [2, 4],
										29: [2, 4],
										34: [2, 4],
										39: [2, 4],
										44: [2, 4],
										47: [2, 4],
										48: [2, 4],
										51: [2, 4],
										55: [2, 4],
										60: [2, 4]
									},
									{
										5: [2, 5],
										14: [2, 5],
										15: [2, 5],
										19: [2, 5],
										29: [2, 5],
										34: [2, 5],
										39: [2, 5],
										44: [2, 5],
										47: [2, 5],
										48: [2, 5],
										51: [2, 5],
										55: [2, 5],
										60: [2, 5]
									},
									{
										5: [2, 6],
										14: [2, 6],
										15: [2, 6],
										19: [2, 6],
										29: [2, 6],
										34: [2, 6],
										39: [2, 6],
										44: [2, 6],
										47: [2, 6],
										48: [2, 6],
										51: [2, 6],
										55: [2, 6],
										60: [2, 6]
									},
									{
										5: [2, 7],
										14: [2, 7],
										15: [2, 7],
										19: [2, 7],
										29: [2, 7],
										34: [2, 7],
										39: [2, 7],
										44: [2, 7],
										47: [2, 7],
										48: [2, 7],
										51: [2, 7],
										55: [2, 7],
										60: [2, 7]
									},
									{
										5: [2, 8],
										14: [2, 8],
										15: [2, 8],
										19: [2, 8],
										29: [2, 8],
										34: [2, 8],
										39: [2, 8],
										44: [2, 8],
										47: [2, 8],
										48: [2, 8],
										51: [2, 8],
										55: [2, 8],
										60: [2, 8]
									},
									{
										5: [2, 9],
										14: [2, 9],
										15: [2, 9],
										19: [2, 9],
										29: [2, 9],
										34: [2, 9],
										39: [2, 9],
										44: [2, 9],
										47: [2, 9],
										48: [2, 9],
										51: [2, 9],
										55: [2, 9],
										60: [2, 9]
									},
									{ 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{ 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{
										4: 37,
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										39: [2, 46],
										44: [2, 46],
										47: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{
										4: 38,
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										44: [2, 46],
										47: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{ 15: [2, 48], 17: 39, 18: [2, 48] },
									{
										20: 41,
										56: 40,
										64: 42,
										65: [1, 43],
										72: [1, 35],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										4: 44,
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										47: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{
										5: [2, 10],
										14: [2, 10],
										15: [2, 10],
										18: [2, 10],
										19: [2, 10],
										29: [2, 10],
										34: [2, 10],
										39: [2, 10],
										44: [2, 10],
										47: [2, 10],
										48: [2, 10],
										51: [2, 10],
										55: [2, 10],
										60: [2, 10]
									},
									{ 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{ 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{ 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{
										20: 41,
										56: 48,
										64: 42,
										65: [1, 43],
										72: [1, 35],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] },
									{
										23: [2, 33],
										33: [2, 33],
										54: [2, 33],
										65: [2, 33],
										68: [2, 33],
										72: [2, 33],
										75: [2, 33],
										80: [2, 33],
										81: [2, 33],
										82: [2, 33],
										83: [2, 33],
										84: [2, 33],
										85: [2, 33]
									},
									{
										23: [2, 34],
										33: [2, 34],
										54: [2, 34],
										65: [2, 34],
										68: [2, 34],
										72: [2, 34],
										75: [2, 34],
										80: [2, 34],
										81: [2, 34],
										82: [2, 34],
										83: [2, 34],
										84: [2, 34],
										85: [2, 34]
									},
									{
										23: [2, 35],
										33: [2, 35],
										54: [2, 35],
										65: [2, 35],
										68: [2, 35],
										72: [2, 35],
										75: [2, 35],
										80: [2, 35],
										81: [2, 35],
										82: [2, 35],
										83: [2, 35],
										84: [2, 35],
										85: [2, 35]
									},
									{
										23: [2, 36],
										33: [2, 36],
										54: [2, 36],
										65: [2, 36],
										68: [2, 36],
										72: [2, 36],
										75: [2, 36],
										80: [2, 36],
										81: [2, 36],
										82: [2, 36],
										83: [2, 36],
										84: [2, 36],
										85: [2, 36]
									},
									{
										23: [2, 37],
										33: [2, 37],
										54: [2, 37],
										65: [2, 37],
										68: [2, 37],
										72: [2, 37],
										75: [2, 37],
										80: [2, 37],
										81: [2, 37],
										82: [2, 37],
										83: [2, 37],
										84: [2, 37],
										85: [2, 37]
									},
									{
										23: [2, 38],
										33: [2, 38],
										54: [2, 38],
										65: [2, 38],
										68: [2, 38],
										72: [2, 38],
										75: [2, 38],
										80: [2, 38],
										81: [2, 38],
										82: [2, 38],
										83: [2, 38],
										84: [2, 38],
										85: [2, 38]
									},
									{
										23: [2, 39],
										33: [2, 39],
										54: [2, 39],
										65: [2, 39],
										68: [2, 39],
										72: [2, 39],
										75: [2, 39],
										80: [2, 39],
										81: [2, 39],
										82: [2, 39],
										83: [2, 39],
										84: [2, 39],
										85: [2, 39]
									},
									{
										23: [2, 43],
										33: [2, 43],
										54: [2, 43],
										65: [2, 43],
										68: [2, 43],
										72: [2, 43],
										75: [2, 43],
										80: [2, 43],
										81: [2, 43],
										82: [2, 43],
										83: [2, 43],
										84: [2, 43],
										85: [2, 43],
										87: [1, 50]
									},
									{ 72: [1, 35], 86: 51 },
									{
										23: [2, 45],
										33: [2, 45],
										54: [2, 45],
										65: [2, 45],
										68: [2, 45],
										72: [2, 45],
										75: [2, 45],
										80: [2, 45],
										81: [2, 45],
										82: [2, 45],
										83: [2, 45],
										84: [2, 45],
										85: [2, 45],
										87: [2, 45]
									},
									{ 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] },
									{ 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] },
									{ 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] },
									{ 13: 62, 15: [1, 20], 18: [1, 61] },
									{ 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] },
									{ 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] },
									{ 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] },
									{ 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{ 26: 65, 47: [1, 66] },
									{ 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] },
									{ 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] },
									{ 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] },
									{ 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] },
									{
										20: 74,
										33: [2, 80],
										50: 71,
										63: 72,
										64: 75,
										65: [1, 43],
										69: 73,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 72: [1, 79] },
									{
										23: [2, 42],
										33: [2, 42],
										54: [2, 42],
										65: [2, 42],
										68: [2, 42],
										72: [2, 42],
										75: [2, 42],
										80: [2, 42],
										81: [2, 42],
										82: [2, 42],
										83: [2, 42],
										84: [2, 42],
										85: [2, 42],
										87: [1, 50]
									},
									{
										20: 74,
										53: 80,
										54: [2, 84],
										63: 81,
										64: 75,
										65: [1, 43],
										69: 82,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 26: 83, 47: [1, 66] },
									{ 47: [2, 55] },
									{
										4: 84,
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										39: [2, 46],
										44: [2, 46],
										47: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{ 47: [2, 20] },
									{ 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{
										4: 86,
										6: 3,
										14: [2, 46],
										15: [2, 46],
										19: [2, 46],
										29: [2, 46],
										34: [2, 46],
										47: [2, 46],
										48: [2, 46],
										51: [2, 46],
										55: [2, 46],
										60: [2, 46]
									},
									{ 26: 87, 47: [1, 66] },
									{ 47: [2, 57] },
									{
										5: [2, 11],
										14: [2, 11],
										15: [2, 11],
										19: [2, 11],
										29: [2, 11],
										34: [2, 11],
										39: [2, 11],
										44: [2, 11],
										47: [2, 11],
										48: [2, 11],
										51: [2, 11],
										55: [2, 11],
										60: [2, 11]
									},
									{ 15: [2, 49], 18: [2, 49] },
									{
										20: 74,
										33: [2, 88],
										58: 88,
										63: 89,
										64: 75,
										65: [1, 43],
										69: 90,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] },
									{
										5: [2, 25],
										14: [2, 25],
										15: [2, 25],
										19: [2, 25],
										29: [2, 25],
										34: [2, 25],
										39: [2, 25],
										44: [2, 25],
										47: [2, 25],
										48: [2, 25],
										51: [2, 25],
										55: [2, 25],
										60: [2, 25]
									},
									{ 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 },
									{
										20: 74,
										31: 93,
										33: [2, 60],
										63: 94,
										64: 75,
										65: [1, 43],
										69: 95,
										70: 76,
										71: 77,
										72: [1, 78],
										75: [2, 60],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										20: 74,
										33: [2, 66],
										36: 96,
										63: 97,
										64: 75,
										65: [1, 43],
										69: 98,
										70: 76,
										71: 77,
										72: [1, 78],
										75: [2, 66],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										20: 74,
										22: 99,
										23: [2, 52],
										63: 100,
										64: 75,
										65: [1, 43],
										69: 101,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										20: 74,
										33: [2, 92],
										62: 102,
										63: 103,
										64: 75,
										65: [1, 43],
										69: 104,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 33: [1, 105] },
									{ 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] },
									{ 33: [2, 81] },
									{
										23: [2, 27],
										33: [2, 27],
										54: [2, 27],
										65: [2, 27],
										68: [2, 27],
										72: [2, 27],
										75: [2, 27],
										80: [2, 27],
										81: [2, 27],
										82: [2, 27],
										83: [2, 27],
										84: [2, 27],
										85: [2, 27]
									},
									{
										23: [2, 28],
										33: [2, 28],
										54: [2, 28],
										65: [2, 28],
										68: [2, 28],
										72: [2, 28],
										75: [2, 28],
										80: [2, 28],
										81: [2, 28],
										82: [2, 28],
										83: [2, 28],
										84: [2, 28],
										85: [2, 28]
									},
									{ 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] },
									{ 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] },
									{
										23: [2, 45],
										33: [2, 45],
										54: [2, 45],
										65: [2, 45],
										68: [2, 45],
										72: [2, 45],
										73: [1, 108],
										75: [2, 45],
										80: [2, 45],
										81: [2, 45],
										82: [2, 45],
										83: [2, 45],
										84: [2, 45],
										85: [2, 45],
										87: [2, 45]
									},
									{
										23: [2, 44],
										33: [2, 44],
										54: [2, 44],
										65: [2, 44],
										68: [2, 44],
										72: [2, 44],
										75: [2, 44],
										80: [2, 44],
										81: [2, 44],
										82: [2, 44],
										83: [2, 44],
										84: [2, 44],
										85: [2, 44],
										87: [2, 44]
									},
									{ 54: [1, 109] },
									{ 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] },
									{ 54: [2, 85] },
									{
										5: [2, 13],
										14: [2, 13],
										15: [2, 13],
										19: [2, 13],
										29: [2, 13],
										34: [2, 13],
										39: [2, 13],
										44: [2, 13],
										47: [2, 13],
										48: [2, 13],
										51: [2, 13],
										55: [2, 13],
										60: [2, 13]
									},
									{ 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] },
									{ 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] },
									{ 47: [2, 18] },
									{
										5: [2, 14],
										14: [2, 14],
										15: [2, 14],
										19: [2, 14],
										29: [2, 14],
										34: [2, 14],
										39: [2, 14],
										44: [2, 14],
										47: [2, 14],
										48: [2, 14],
										51: [2, 14],
										55: [2, 14],
										60: [2, 14]
									},
									{ 33: [1, 113] },
									{ 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] },
									{ 33: [2, 89] },
									{
										20: 74,
										63: 115,
										64: 75,
										65: [1, 43],
										67: 114,
										68: [2, 96],
										69: 116,
										70: 76,
										71: 77,
										72: [1, 78],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{ 33: [1, 117] },
									{ 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] },
									{ 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] },
									{ 33: [2, 61], 75: [2, 61] },
									{ 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] },
									{ 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] },
									{ 33: [2, 67], 75: [2, 67] },
									{ 23: [1, 123] },
									{ 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] },
									{ 23: [2, 53] },
									{ 33: [1, 124] },
									{ 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] },
									{ 33: [2, 93] },
									{
										5: [2, 22],
										14: [2, 22],
										15: [2, 22],
										19: [2, 22],
										29: [2, 22],
										34: [2, 22],
										39: [2, 22],
										44: [2, 22],
										47: [2, 22],
										48: [2, 22],
										51: [2, 22],
										55: [2, 22],
										60: [2, 22]
									},
									{ 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] },
									{ 73: [1, 108] },
									{
										20: 74,
										63: 125,
										64: 75,
										65: [1, 43],
										72: [1, 35],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										5: [2, 23],
										14: [2, 23],
										15: [2, 23],
										19: [2, 23],
										29: [2, 23],
										34: [2, 23],
										39: [2, 23],
										44: [2, 23],
										47: [2, 23],
										48: [2, 23],
										51: [2, 23],
										55: [2, 23],
										60: [2, 23]
									},
									{ 47: [2, 19] },
									{ 47: [2, 77] },
									{
										20: 74,
										33: [2, 72],
										41: 126,
										63: 127,
										64: 75,
										65: [1, 43],
										69: 128,
										70: 76,
										71: 77,
										72: [1, 78],
										75: [2, 72],
										78: 26,
										79: 27,
										80: [1, 28],
										81: [1, 29],
										82: [1, 30],
										83: [1, 31],
										84: [1, 32],
										85: [1, 34],
										86: 33
									},
									{
										5: [2, 24],
										14: [2, 24],
										15: [2, 24],
										19: [2, 24],
										29: [2, 24],
										34: [2, 24],
										39: [2, 24],
										44: [2, 24],
										47: [2, 24],
										48: [2, 24],
										51: [2, 24],
										55: [2, 24],
										60: [2, 24]
									},
									{ 68: [1, 129] },
									{ 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] },
									{ 68: [2, 97] },
									{
										5: [2, 21],
										14: [2, 21],
										15: [2, 21],
										19: [2, 21],
										29: [2, 21],
										34: [2, 21],
										39: [2, 21],
										44: [2, 21],
										47: [2, 21],
										48: [2, 21],
										51: [2, 21],
										55: [2, 21],
										60: [2, 21]
									},
									{ 33: [1, 130] },
									{ 33: [2, 63] },
									{ 72: [1, 132], 76: 131 },
									{ 33: [1, 133] },
									{ 33: [2, 69] },
									{ 15: [2, 12], 18: [2, 12] },
									{ 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] },
									{ 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] },
									{ 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] },
									{ 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] },
									{ 33: [2, 73], 75: [2, 73] },
									{
										23: [2, 29],
										33: [2, 29],
										54: [2, 29],
										65: [2, 29],
										68: [2, 29],
										72: [2, 29],
										75: [2, 29],
										80: [2, 29],
										81: [2, 29],
										82: [2, 29],
										83: [2, 29],
										84: [2, 29],
										85: [2, 29]
									},
									{
										14: [2, 15],
										15: [2, 15],
										19: [2, 15],
										29: [2, 15],
										34: [2, 15],
										39: [2, 15],
										44: [2, 15],
										47: [2, 15],
										48: [2, 15],
										51: [2, 15],
										55: [2, 15],
										60: [2, 15]
									},
									{ 72: [1, 137], 77: [1, 136] },
									{ 72: [2, 100], 77: [2, 100] },
									{
										14: [2, 16],
										15: [2, 16],
										19: [2, 16],
										29: [2, 16],
										34: [2, 16],
										44: [2, 16],
										47: [2, 16],
										48: [2, 16],
										51: [2, 16],
										55: [2, 16],
										60: [2, 16]
									},
									{ 33: [1, 138] },
									{ 33: [2, 75] },
									{ 33: [2, 32] },
									{ 72: [2, 101], 77: [2, 101] },
									{
										14: [2, 17],
										15: [2, 17],
										19: [2, 17],
										29: [2, 17],
										34: [2, 17],
										39: [2, 17],
										44: [2, 17],
										47: [2, 17],
										48: [2, 17],
										51: [2, 17],
										55: [2, 17],
										60: [2, 17]
									}
								],
								defaultActions: {
									4: [2, 1],
									54: [2, 55],
									56: [2, 20],
									60: [2, 57],
									73: [2, 81],
									82: [2, 85],
									86: [2, 18],
									90: [2, 89],
									101: [2, 53],
									104: [2, 93],
									110: [2, 19],
									111: [2, 77],
									116: [2, 97],
									119: [2, 63],
									122: [2, 69],
									135: [2, 75],
									136: [2, 32]
								},
								parseError: function(t, e) {
									throw new Error(t)
								},
								parse: function(t) {
									var e = this,
										i = [0],
										s = [null],
										r = [],
										n = this.table,
										o = '',
										a = 0,
										h = 0,
										l = 0
									this.lexer.setInput(t),
										(this.lexer.yy = this.yy),
										(this.yy.lexer = this.lexer),
										(this.yy.parser = this),
										void 0 === this.lexer.yylloc && (this.lexer.yylloc = {})
									var u = this.lexer.yylloc
									r.push(u)
									var c = this.lexer.options && this.lexer.options.ranges
									'function' == typeof this.yy.parseError && (this.parseError = this.yy.parseError)
									for (var p, d, f, g, _, m, v, E, b, y, T = {}; ; ) {
										if (
											((f = i[i.length - 1]),
											this.defaultActions[f]
												? (g = this.defaultActions[f])
												: (null == p && ((y = void 0), 'number' != typeof (y = e.lexer.lex() || 1) && (y = e.symbols_[y] || y), (p = y)),
												  (g = n[f] && n[f][p])),
											void 0 === g || !g.length || !g[0])
										) {
											var A = ''
											if (!l) {
												for (m in ((b = []), n[f])) this.terminals_[m] && m > 2 && b.push("'" + this.terminals_[m] + "'")
												;(A = this.lexer.showPosition
													? 'Parse error on line ' +
													  (a + 1) +
													  ':\n' +
													  this.lexer.showPosition() +
													  '\nExpecting ' +
													  b.join(', ') +
													  ", got '" +
													  (this.terminals_[p] || p) +
													  "'"
													: 'Parse error on line ' + (a + 1) + ': Unexpected ' + (1 == p ? 'end of input' : "'" + (this.terminals_[p] || p) + "'")),
													this.parseError(A, { text: this.lexer.match, token: this.terminals_[p] || p, line: this.lexer.yylineno, loc: u, expected: b })
											}
										}
										if (g[0] instanceof Array && g.length > 1) throw new Error('Parse Error: multiple actions possible at state: ' + f + ', token: ' + p)
										switch (g[0]) {
											case 1:
												i.push(p),
													s.push(this.lexer.yytext),
													r.push(this.lexer.yylloc),
													i.push(g[1]),
													(p = null),
													d
														? ((p = d), (d = null))
														: ((h = this.lexer.yyleng), (o = this.lexer.yytext), (a = this.lexer.yylineno), (u = this.lexer.yylloc), l > 0 && l--)
												break
											case 2:
												if (
													((v = this.productions_[g[1]][1]),
													(T.$ = s[s.length - v]),
													(T._$ = {
														first_line: r[r.length - (v || 1)].first_line,
														last_line: r[r.length - 1].last_line,
														first_column: r[r.length - (v || 1)].first_column,
														last_column: r[r.length - 1].last_column
													}),
													c && (T._$.range = [r[r.length - (v || 1)].range[0], r[r.length - 1].range[1]]),
													void 0 !== (_ = this.performAction.call(T, o, h, a, this.yy, g[1], s, r)))
												)
													return _
												v && ((i = i.slice(0, -1 * v * 2)), (s = s.slice(0, -1 * v)), (r = r.slice(0, -1 * v))),
													i.push(this.productions_[g[1]][0]),
													s.push(T.$),
													r.push(T._$),
													(E = n[i[i.length - 2]][i[i.length - 1]]),
													i.push(E)
												break
											case 3:
												return !0
										}
									}
									return !0
								}
							},
							e = (function() {
								var t = {
									EOF: 1,
									parseError: function(t, e) {
										if (!this.yy.parser) throw new Error(t)
										this.yy.parser.parseError(t, e)
									},
									setInput: function(t) {
										return (
											(this._input = t),
											(this._more = this._less = this.done = !1),
											(this.yylineno = this.yyleng = 0),
											(this.yytext = this.matched = this.match = ''),
											(this.conditionStack = ['INITIAL']),
											(this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
											this.options.ranges && (this.yylloc.range = [0, 0]),
											(this.offset = 0),
											this
										)
									},
									input: function() {
										var t = this._input[0]
										return (
											(this.yytext += t),
											this.yyleng++,
											this.offset++,
											(this.match += t),
											(this.matched += t),
											t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
											this.options.ranges && this.yylloc.range[1]++,
											(this._input = this._input.slice(1)),
											t
										)
									},
									unput: function(t) {
										var e = t.length,
											i = t.split(/(?:\r\n?|\n)/g)
										;(this._input = t + this._input), (this.yytext = this.yytext.substr(0, this.yytext.length - e - 1)), (this.offset -= e)
										var s = this.match.split(/(?:\r\n?|\n)/g)
										;(this.match = this.match.substr(0, this.match.length - 1)),
											(this.matched = this.matched.substr(0, this.matched.length - 1)),
											i.length - 1 && (this.yylineno -= i.length - 1)
										var r = this.yylloc.range
										return (
											(this.yylloc = {
												first_line: this.yylloc.first_line,
												last_line: this.yylineno + 1,
												first_column: this.yylloc.first_column,
												last_column: i
													? (i.length === s.length ? this.yylloc.first_column : 0) + s[s.length - i.length].length - i[0].length
													: this.yylloc.first_column - e
											}),
											this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]),
											this
										)
									},
									more: function() {
										return (this._more = !0), this
									},
									less: function(t) {
										this.unput(this.match.slice(t))
									},
									pastInput: function() {
										var t = this.matched.substr(0, this.matched.length - this.match.length)
										return (t.length > 20 ? '...' : '') + t.substr(-20).replace(/\n/g, '')
									},
									upcomingInput: function() {
										var t = this.match
										return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? '...' : '')).replace(/\n/g, '')
									},
									showPosition: function() {
										var t = this.pastInput(),
											e = new Array(t.length + 1).join('-')
										return t + this.upcomingInput() + '\n' + e + '^'
									},
									next: function() {
										if (this.done) return this.EOF
										var t, e, i, s, r
										this._input || (this.done = !0), this._more || ((this.yytext = ''), (this.match = ''))
										for (
											var n = this._currentRules(), o = 0;
											o < n.length &&
											(!(i = this._input.match(this.rules[n[o]])) || (e && !(i[0].length > e[0].length)) || ((e = i), (s = o), this.options.flex));
											o++
										);
										return e
											? ((r = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += r.length),
											  (this.yylloc = {
													first_line: this.yylloc.last_line,
													last_line: this.yylineno + 1,
													first_column: this.yylloc.last_column,
													last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
											  }),
											  (this.yytext += e[0]),
											  (this.match += e[0]),
											  (this.matches = e),
											  (this.yyleng = this.yytext.length),
											  this.options.ranges && (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
											  (this._more = !1),
											  (this._input = this._input.slice(e[0].length)),
											  (this.matched += e[0]),
											  (t = this.performAction.call(this, this.yy, this, n[s], this.conditionStack[this.conditionStack.length - 1])),
											  this.done && this._input && (this.done = !1),
											  t || void 0)
											: '' === this._input
											? this.EOF
											: this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
													text: '',
													token: null,
													line: this.yylineno
											  })
									},
									lex: function() {
										var t = this.next()
										return void 0 !== t ? t : this.lex()
									},
									begin: function(t) {
										this.conditionStack.push(t)
									},
									popState: function() {
										return this.conditionStack.pop()
									},
									_currentRules: function() {
										return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
									},
									topState: function() {
										return this.conditionStack[this.conditionStack.length - 2]
									},
									pushState: function(t) {
										this.begin(t)
									},
									options: {},
									performAction: function(t, e, i, s) {
										function r(t, i) {
											return (e.yytext = e.yytext.substring(t, e.yyleng - i + t))
										}
										switch (i) {
											case 0:
												if (
													('\\\\' === e.yytext.slice(-2)
														? (r(0, 1), this.begin('mu'))
														: '\\' === e.yytext.slice(-1)
														? (r(0, 1), this.begin('emu'))
														: this.begin('mu'),
													e.yytext)
												)
													return 15
												break
											case 1:
												return 15
											case 2:
												return this.popState(), 15
											case 3:
												return this.begin('raw'), 15
											case 4:
												return this.popState(), 'raw' === this.conditionStack[this.conditionStack.length - 1] ? 15 : (r(5, 9), 'END_RAW_BLOCK')
											case 5:
												return 15
											case 6:
												return this.popState(), 14
											case 7:
												return 65
											case 8:
												return 68
											case 9:
												return 19
											case 10:
												return this.popState(), this.begin('raw'), 23
											case 11:
												return 55
											case 12:
												return 60
											case 13:
												return 29
											case 14:
												return 47
											case 15:
											case 16:
												return this.popState(), 44
											case 17:
												return 34
											case 18:
												return 39
											case 19:
												return 51
											case 20:
												return 48
											case 21:
												this.unput(e.yytext), this.popState(), this.begin('com')
												break
											case 22:
												return this.popState(), 14
											case 23:
												return 48
											case 24:
												return 73
											case 25:
											case 26:
												return 72
											case 27:
												return 87
											case 28:
												break
											case 29:
												return this.popState(), 54
											case 30:
												return this.popState(), 33
											case 31:
												return (e.yytext = r(1, 2).replace(/\\"/g, '"')), 80
											case 32:
												return (e.yytext = r(1, 2).replace(/\\'/g, "'")), 80
											case 33:
												return 85
											case 34:
											case 35:
												return 82
											case 36:
												return 83
											case 37:
												return 84
											case 38:
												return 81
											case 39:
												return 75
											case 40:
												return 77
											case 41:
												return 72
											case 42:
												return (e.yytext = e.yytext.replace(/\\([\\\]])/g, '$1')), 72
											case 43:
												return 'INVALID'
											case 44:
												return 5
										}
									},
									rules: [
										/^(?:[^\x00]*?(?=(\{\{)))/,
										/^(?:[^\x00]+)/,
										/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
										/^(?:\{\{\{\{(?=[^\/]))/,
										/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
										/^(?:[^\x00]+?(?=(\{\{\{\{)))/,
										/^(?:[\s\S]*?--(~)?\}\})/,
										/^(?:\()/,
										/^(?:\))/,
										/^(?:\{\{\{\{)/,
										/^(?:\}\}\}\})/,
										/^(?:\{\{(~)?>)/,
										/^(?:\{\{(~)?#>)/,
										/^(?:\{\{(~)?#\*?)/,
										/^(?:\{\{(~)?\/)/,
										/^(?:\{\{(~)?\^\s*(~)?\}\})/,
										/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
										/^(?:\{\{(~)?\^)/,
										/^(?:\{\{(~)?\s*else\b)/,
										/^(?:\{\{(~)?\{)/,
										/^(?:\{\{(~)?&)/,
										/^(?:\{\{(~)?!--)/,
										/^(?:\{\{(~)?![\s\S]*?\}\})/,
										/^(?:\{\{(~)?\*?)/,
										/^(?:=)/,
										/^(?:\.\.)/,
										/^(?:\.(?=([=~}\s\/.)|])))/,
										/^(?:[\/.])/,
										/^(?:\s+)/,
										/^(?:\}(~)?\}\})/,
										/^(?:(~)?\}\})/,
										/^(?:"(\\["]|[^"])*")/,
										/^(?:'(\\[']|[^'])*')/,
										/^(?:@)/,
										/^(?:true(?=([~}\s)])))/,
										/^(?:false(?=([~}\s)])))/,
										/^(?:undefined(?=([~}\s)])))/,
										/^(?:null(?=([~}\s)])))/,
										/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
										/^(?:as\s+\|)/,
										/^(?:\|)/,
										/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
										/^(?:\[(\\\]|[^\]])*\])/,
										/^(?:.)/,
										/^(?:$)/
									],
									conditions: {
										mu: {
											rules: [
												7,
												8,
												9,
												10,
												11,
												12,
												13,
												14,
												15,
												16,
												17,
												18,
												19,
												20,
												21,
												22,
												23,
												24,
												25,
												26,
												27,
												28,
												29,
												30,
												31,
												32,
												33,
												34,
												35,
												36,
												37,
												38,
												39,
												40,
												41,
												42,
												43,
												44
											],
											inclusive: !1
										},
										emu: { rules: [2], inclusive: !1 },
										com: { rules: [6], inclusive: !1 },
										raw: { rules: [3, 4, 5], inclusive: !1 },
										INITIAL: { rules: [0, 1, 44], inclusive: !0 }
									}
								}
								return t
							})()
						function i() {
							this.yy = {}
						}
						return (t.lexer = e), (i.prototype = t), (t.Parser = i), new i()
					})()
					;(e.default = i), (t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = s(i(44))
					function n() {
						var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
						this.options = t
					}
					function o(t, e, i) {
						void 0 === e && (e = t.length)
						var s = t[e - 1],
							r = t[e - 2]
						return s ? ('ContentStatement' === s.type ? (r || !i ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(s.original) : void 0) : i
					}
					function a(t, e, i) {
						void 0 === e && (e = -1)
						var s = t[e + 1],
							r = t[e + 2]
						return s ? ('ContentStatement' === s.type ? (r || !i ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(s.original) : void 0) : i
					}
					function h(t, e, i) {
						var s = t[null == e ? 0 : e + 1]
						if (s && 'ContentStatement' === s.type && (i || !s.rightStripped)) {
							var r = s.value
							;(s.value = s.value.replace(i ? /^\s+/ : /^[ \t]*\r?\n?/, '')), (s.rightStripped = s.value !== r)
						}
					}
					function l(t, e, i) {
						var s = t[null == e ? t.length - 1 : e - 1]
						if (s && 'ContentStatement' === s.type && (i || !s.leftStripped)) {
							var r = s.value
							return (s.value = s.value.replace(i ? /\s+$/ : /[ \t]+$/, '')), (s.leftStripped = s.value !== r), s.leftStripped
						}
					}
					;(n.prototype = new r.default()),
						(n.prototype.Program = function(t) {
							var e = !this.options.ignoreStandalone,
								i = !this.isRootSeen
							this.isRootSeen = !0
							for (var s = t.body, r = 0, n = s.length; r < n; r++) {
								var u = s[r],
									c = this.accept(u)
								if (c) {
									var p = o(s, r, i),
										d = a(s, r, i),
										f = c.openStandalone && p,
										g = c.closeStandalone && d,
										_ = c.inlineStandalone && p && d
									c.close && h(s, r, !0),
										c.open && l(s, r, !0),
										e && _ && (h(s, r), l(s, r) && 'PartialStatement' === u.type && (u.indent = /([ \t]+$)/.exec(s[r - 1].original)[1])),
										e && f && (h((u.program || u.inverse).body), l(s, r)),
										e && g && (h(s, r), l((u.inverse || u.program).body))
								}
							}
							return t
						}),
						(n.prototype.BlockStatement = n.prototype.DecoratorBlock = n.prototype.PartialBlockStatement = function(t) {
							this.accept(t.program), this.accept(t.inverse)
							var e = t.program || t.inverse,
								i = t.program && t.inverse,
								s = i,
								r = i
							if (i && i.chained) for (s = i.body[0].program; r.chained; ) r = r.body[r.body.length - 1].program
							var n = { open: t.openStrip.open, close: t.closeStrip.close, openStandalone: a(e.body), closeStandalone: o((s || e).body) }
							if ((t.openStrip.close && h(e.body, null, !0), i)) {
								var u = t.inverseStrip
								u.open && l(e.body, null, !0),
									u.close && h(s.body, null, !0),
									t.closeStrip.open && l(r.body, null, !0),
									!this.options.ignoreStandalone && o(e.body) && a(s.body) && (l(e.body), h(s.body))
							} else t.closeStrip.open && l(e.body, null, !0)
							return n
						}),
						(n.prototype.Decorator = n.prototype.MustacheStatement = function(t) {
							return t.strip
						}),
						(n.prototype.PartialStatement = n.prototype.CommentStatement = function(t) {
							var e = t.strip || {}
							return { inlineStandalone: !0, open: e.open, close: e.close }
						}),
						(e.default = n),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					e.__esModule = !0
					var r = s(i(6))
					function n() {
						this.parents = []
					}
					function o(t) {
						this.acceptRequired(t, 'path'), this.acceptArray(t.params), this.acceptKey(t, 'hash')
					}
					function a(t) {
						o.call(this, t), this.acceptKey(t, 'program'), this.acceptKey(t, 'inverse')
					}
					function h(t) {
						this.acceptRequired(t, 'name'), this.acceptArray(t.params), this.acceptKey(t, 'hash')
					}
					;(n.prototype = {
						constructor: n,
						mutating: !1,
						acceptKey: function(t, e) {
							var i = this.accept(t[e])
							if (this.mutating) {
								if (i && !n.prototype[i.type]) throw new r.default('Unexpected node type "' + i.type + '" found when accepting ' + e + ' on ' + t.type)
								t[e] = i
							}
						},
						acceptRequired: function(t, e) {
							if ((this.acceptKey(t, e), !t[e])) throw new r.default(t.type + ' requires ' + e)
						},
						acceptArray: function(t) {
							for (var e = 0, i = t.length; e < i; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, i--)
						},
						accept: function(t) {
							if (t) {
								if (!this[t.type]) throw new r.default('Unknown type: ' + t.type, t)
								this.current && this.parents.unshift(this.current), (this.current = t)
								var e = this[t.type](t)
								return (this.current = this.parents.shift()), !this.mutating || e ? e : !1 !== e ? t : void 0
							}
						},
						Program: function(t) {
							this.acceptArray(t.body)
						},
						MustacheStatement: o,
						Decorator: o,
						BlockStatement: a,
						DecoratorBlock: a,
						PartialStatement: h,
						PartialBlockStatement: function(t) {
							h.call(this, t), this.acceptKey(t, 'program')
						},
						ContentStatement: function() {},
						CommentStatement: function() {},
						SubExpression: o,
						PathExpression: function() {},
						StringLiteral: function() {},
						NumberLiteral: function() {},
						BooleanLiteral: function() {},
						UndefinedLiteral: function() {},
						NullLiteral: function() {},
						Hash: function(t) {
							this.acceptArray(t.pairs)
						},
						HashPair: function(t) {
							this.acceptRequired(t, 'value')
						}
					}),
						(e.default = n),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(1).default
					;(e.__esModule = !0),
						(e.SourceLocation = function(t, e) {
							;(this.source = t), (this.start = { line: e.first_line, column: e.first_column }), (this.end = { line: e.last_line, column: e.last_column })
						}),
						(e.id = function(t) {
							return /^\[.*\]$/.test(t) ? t.substring(1, t.length - 1) : t
						}),
						(e.stripFlags = function(t, e) {
							return { open: '~' === t.charAt(2), close: '~' === e.charAt(e.length - 3) }
						}),
						(e.stripComment = function(t) {
							return t.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '')
						}),
						(e.preparePath = function(t, e, i) {
							i = this.locInfo(i)
							for (var s = t ? '@' : '', n = [], o = 0, a = 0, h = e.length; a < h; a++) {
								var l = e[a].part,
									u = e[a].original !== l
								if (((s += (e[a].separator || '') + l), u || ('..' !== l && '.' !== l && 'this' !== l))) n.push(l)
								else {
									if (n.length > 0) throw new r.default('Invalid path: ' + s, { loc: i })
									'..' === l && o++
								}
							}
							return { type: 'PathExpression', data: t, depth: o, parts: n, original: s, loc: i }
						}),
						(e.prepareMustache = function(t, e, i, s, r, n) {
							var o = s.charAt(3) || s.charAt(2),
								a = '{' !== o && '&' !== o
							return { type: /\*/.test(s) ? 'Decorator' : 'MustacheStatement', path: t, params: e, hash: i, escaped: a, strip: r, loc: this.locInfo(n) }
						}),
						(e.prepareRawBlock = function(t, e, i, s) {
							n(t, i), (s = this.locInfo(s))
							var r = { type: 'Program', body: e, strip: {}, loc: s }
							return {
								type: 'BlockStatement',
								path: t.path,
								params: t.params,
								hash: t.hash,
								program: r,
								openStrip: {},
								inverseStrip: {},
								closeStrip: {},
								loc: s
							}
						}),
						(e.prepareBlock = function(t, e, i, s, o, a) {
							s && s.path && n(t, s)
							var h = /\*/.test(t.open)
							e.blockParams = t.blockParams
							var l = void 0,
								u = void 0
							if (i) {
								if (h) throw new r.default('Unexpected inverse block on decorator', i)
								i.chain && (i.program.body[0].closeStrip = s.strip), (u = i.strip), (l = i.program)
							}
							return (
								o && ((o = l), (l = e), (e = o)),
								{
									type: h ? 'DecoratorBlock' : 'BlockStatement',
									path: t.path,
									params: t.params,
									hash: t.hash,
									program: e,
									inverse: l,
									openStrip: t.strip,
									inverseStrip: u,
									closeStrip: s && s.strip,
									loc: this.locInfo(a)
								}
							)
						}),
						(e.prepareProgram = function(t, e) {
							if (!e && t.length) {
								var i = t[0].loc,
									s = t[t.length - 1].loc
								i && s && (e = { source: i.source, start: { line: i.start.line, column: i.start.column }, end: { line: s.end.line, column: s.end.column } })
							}
							return { type: 'Program', body: t, strip: {}, loc: e }
						}),
						(e.preparePartialBlock = function(t, e, i, s) {
							return (
								n(t, i),
								{
									type: 'PartialBlockStatement',
									name: t.path,
									params: t.params,
									hash: t.hash,
									program: e,
									openStrip: t.strip,
									closeStrip: i && i.strip,
									loc: this.locInfo(s)
								}
							)
						})
					var r = s(i(6))
					function n(t, e) {
						if (((e = e.path ? e.path.original : e), t.path.original !== e)) {
							var i = { loc: t.path.loc }
							throw new r.default(t.path.original + " doesn't match " + e, i)
						}
					}
				},
				function(t, e, i) {
					'use strict'
					var s = i(47).default,
						r = i(1).default
					;(e.__esModule = !0),
						(e.Compiler = l),
						(e.precompile = function(t, e, i) {
							if (null == t || ('string' != typeof t && 'Program' !== t.type))
								throw new n.default('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + t)
							'data' in (e = e || {}) || (e.data = !0), e.compat && (e.useDepths = !0)
							var s = i.parse(t, e),
								r = new i.Compiler().compile(s, e)
							return new i.JavaScriptCompiler().compile(r, e)
						}),
						(e.compile = function(t, e, i) {
							if ((void 0 === e && (e = {}), null == t || ('string' != typeof t && 'Program' !== t.type)))
								throw new n.default('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + t)
							'data' in (e = o.extend({}, e)) || (e.data = !0), e.compat && (e.useDepths = !0)
							var s = void 0
							function r() {
								var s = i.parse(t, e),
									r = new i.Compiler().compile(s, e),
									n = new i.JavaScriptCompiler().compile(r, e, void 0, !0)
								return i.template(n)
							}
							function a(t, e) {
								return s || (s = r()), s.call(this, t, e)
							}
							return (
								(a._setup = function(t) {
									return s || (s = r()), s._setup(t)
								}),
								(a._child = function(t, e, i, n) {
									return s || (s = r()), s._child(t, e, i, n)
								}),
								a
							)
						})
					var n = r(i(6)),
						o = i(5),
						a = r(i(40)),
						h = [].slice
					function l() {}
					function u(t, e) {
						if (t === e) return !0
						if (o.isArray(t) && o.isArray(e) && t.length === e.length) {
							for (var i = 0; i < t.length; i++) if (!u(t[i], e[i])) return !1
							return !0
						}
					}
					function c(t) {
						if (!t.path.parts) {
							var e = t.path
							t.path = { type: 'PathExpression', data: !1, depth: 0, parts: [e.original + ''], original: e.original + '', loc: e.loc }
						}
					}
					l.prototype = {
						compiler: l,
						equals: function(t) {
							var e = this.opcodes.length
							if (t.opcodes.length !== e) return !1
							for (var i = 0; i < e; i++) {
								var s = this.opcodes[i],
									r = t.opcodes[i]
								if (s.opcode !== r.opcode || !u(s.args, r.args)) return !1
							}
							for (e = this.children.length, i = 0; i < e; i++) if (!this.children[i].equals(t.children[i])) return !1
							return !0
						},
						guid: 0,
						compile: function(t, e) {
							return (
								(this.sourceNode = []),
								(this.opcodes = []),
								(this.children = []),
								(this.options = e),
								(this.stringParams = e.stringParams),
								(this.trackIds = e.trackIds),
								(e.blockParams = e.blockParams || []),
								(e.knownHelpers = o.extend(
									s(null),
									{ helperMissing: !0, blockHelperMissing: !0, each: !0, if: !0, unless: !0, with: !0, log: !0, lookup: !0 },
									e.knownHelpers
								)),
								this.accept(t)
							)
						},
						compileProgram: function(t) {
							var e = new this.compiler().compile(t, this.options),
								i = this.guid++
							return (this.usePartial = this.usePartial || e.usePartial), (this.children[i] = e), (this.useDepths = this.useDepths || e.useDepths), i
						},
						accept: function(t) {
							if (!this[t.type]) throw new n.default('Unknown type: ' + t.type, t)
							this.sourceNode.unshift(t)
							var e = this[t.type](t)
							return this.sourceNode.shift(), e
						},
						Program: function(t) {
							this.options.blockParams.unshift(t.blockParams)
							for (var e = t.body, i = e.length, s = 0; s < i; s++) this.accept(e[s])
							return this.options.blockParams.shift(), (this.isSimple = 1 === i), (this.blockParams = t.blockParams ? t.blockParams.length : 0), this
						},
						BlockStatement: function(t) {
							c(t)
							var e = t.program,
								i = t.inverse
							;(e = e && this.compileProgram(e)), (i = i && this.compileProgram(i))
							var s = this.classifySexpr(t)
							'helper' === s
								? this.helperSexpr(t, e, i)
								: 'simple' === s
								? (this.simpleSexpr(t),
								  this.opcode('pushProgram', e),
								  this.opcode('pushProgram', i),
								  this.opcode('emptyHash'),
								  this.opcode('blockValue', t.path.original))
								: (this.ambiguousSexpr(t, e, i),
								  this.opcode('pushProgram', e),
								  this.opcode('pushProgram', i),
								  this.opcode('emptyHash'),
								  this.opcode('ambiguousBlockValue')),
								this.opcode('append')
						},
						DecoratorBlock: function(t) {
							var e = t.program && this.compileProgram(t.program),
								i = this.setupFullMustacheParams(t, e, void 0),
								s = t.path
							;(this.useDecorators = !0), this.opcode('registerDecorator', i.length, s.original)
						},
						PartialStatement: function(t) {
							this.usePartial = !0
							var e = t.program
							e && (e = this.compileProgram(t.program))
							var i = t.params
							if (i.length > 1) throw new n.default('Unsupported number of partial arguments: ' + i.length, t)
							i.length ||
								(this.options.explicitPartialContext ? this.opcode('pushLiteral', 'undefined') : i.push({ type: 'PathExpression', parts: [], depth: 0 }))
							var s = t.name.original,
								r = 'SubExpression' === t.name.type
							r && this.accept(t.name), this.setupFullMustacheParams(t, e, void 0, !0)
							var o = t.indent || ''
							this.options.preventIndent && o && (this.opcode('appendContent', o), (o = '')), this.opcode('invokePartial', r, s, o), this.opcode('append')
						},
						PartialBlockStatement: function(t) {
							this.PartialStatement(t)
						},
						MustacheStatement: function(t) {
							this.SubExpression(t), t.escaped && !this.options.noEscape ? this.opcode('appendEscaped') : this.opcode('append')
						},
						Decorator: function(t) {
							this.DecoratorBlock(t)
						},
						ContentStatement: function(t) {
							t.value && this.opcode('appendContent', t.value)
						},
						CommentStatement: function() {},
						SubExpression: function(t) {
							c(t)
							var e = this.classifySexpr(t)
							'simple' === e ? this.simpleSexpr(t) : 'helper' === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
						},
						ambiguousSexpr: function(t, e, i) {
							var s = t.path,
								r = s.parts[0],
								n = null != e || null != i
							this.opcode('getContext', s.depth),
								this.opcode('pushProgram', e),
								this.opcode('pushProgram', i),
								(s.strict = !0),
								this.accept(s),
								this.opcode('invokeAmbiguous', r, n)
						},
						simpleSexpr: function(t) {
							var e = t.path
							;(e.strict = !0), this.accept(e), this.opcode('resolvePossibleLambda')
						},
						helperSexpr: function(t, e, i) {
							var s = this.setupFullMustacheParams(t, e, i),
								r = t.path,
								o = r.parts[0]
							if (this.options.knownHelpers[o]) this.opcode('invokeKnownHelper', s.length, o)
							else {
								if (this.options.knownHelpersOnly) throw new n.default('You specified knownHelpersOnly, but used the unknown helper ' + o, t)
								;(r.strict = !0), (r.falsy = !0), this.accept(r), this.opcode('invokeHelper', s.length, r.original, a.default.helpers.simpleId(r))
							}
						},
						PathExpression: function(t) {
							this.addDepth(t.depth), this.opcode('getContext', t.depth)
							var e = t.parts[0],
								i = a.default.helpers.scopedId(t),
								s = !t.depth && !i && this.blockParamIndex(e)
							s
								? this.opcode('lookupBlockParam', s, t.parts)
								: e
								? t.data
									? ((this.options.data = !0), this.opcode('lookupData', t.depth, t.parts, t.strict))
									: this.opcode('lookupOnContext', t.parts, t.falsy, t.strict, i)
								: this.opcode('pushContext')
						},
						StringLiteral: function(t) {
							this.opcode('pushString', t.value)
						},
						NumberLiteral: function(t) {
							this.opcode('pushLiteral', t.value)
						},
						BooleanLiteral: function(t) {
							this.opcode('pushLiteral', t.value)
						},
						UndefinedLiteral: function() {
							this.opcode('pushLiteral', 'undefined')
						},
						NullLiteral: function() {
							this.opcode('pushLiteral', 'null')
						},
						Hash: function(t) {
							var e = t.pairs,
								i = 0,
								s = e.length
							for (this.opcode('pushHash'); i < s; i++) this.pushParam(e[i].value)
							for (; i--; ) this.opcode('assignToHash', e[i].key)
							this.opcode('popHash')
						},
						opcode: function(t) {
							this.opcodes.push({ opcode: t, args: h.call(arguments, 1), loc: this.sourceNode[0].loc })
						},
						addDepth: function(t) {
							t && (this.useDepths = !0)
						},
						classifySexpr: function(t) {
							var e = a.default.helpers.simpleId(t.path),
								i = e && !!this.blockParamIndex(t.path.parts[0]),
								s = !i && a.default.helpers.helperExpression(t),
								r = !i && (s || e)
							if (r && !s) {
								var n = t.path.parts[0],
									o = this.options
								o.knownHelpers[n] ? (s = !0) : o.knownHelpersOnly && (r = !1)
							}
							return s ? 'helper' : r ? 'ambiguous' : 'simple'
						},
						pushParams: function(t) {
							for (var e = 0, i = t.length; e < i; e++) this.pushParam(t[e])
						},
						pushParam: function(t) {
							var e = null != t.value ? t.value : t.original || ''
							if (this.stringParams)
								e.replace && (e = e.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.')),
									t.depth && this.addDepth(t.depth),
									this.opcode('getContext', t.depth || 0),
									this.opcode('pushStringParam', e, t.type),
									'SubExpression' === t.type && this.accept(t)
							else {
								if (this.trackIds) {
									var i = void 0
									if ((!t.parts || a.default.helpers.scopedId(t) || t.depth || (i = this.blockParamIndex(t.parts[0])), i)) {
										var s = t.parts.slice(1).join('.')
										this.opcode('pushId', 'BlockParam', i, s)
									} else
										(e = t.original || e).replace &&
											(e = e
												.replace(/^this(?:\.|$)/, '')
												.replace(/^\.\//, '')
												.replace(/^\.$/, '')),
											this.opcode('pushId', t.type, e)
								}
								this.accept(t)
							}
						},
						setupFullMustacheParams: function(t, e, i, s) {
							var r = t.params
							return (
								this.pushParams(r), this.opcode('pushProgram', e), this.opcode('pushProgram', i), t.hash ? this.accept(t.hash) : this.opcode('emptyHash', s), r
							)
						},
						blockParamIndex: function(t) {
							for (var e = 0, i = this.options.blockParams.length; e < i; e++) {
								var s = this.options.blockParams[e],
									r = s && o.indexOf(s, t)
								if (s && r >= 0) return [e, r]
							}
						}
					}
				},
				function(t, e, i) {
					t.exports = { default: i(48), __esModule: !0 }
				},
				function(t, e, i) {
					var s = i(9)
					t.exports = function(t, e) {
						return s.create(t, e)
					}
				},
				function(t, e, i) {
					'use strict'
					var s = i(13).default,
						r = i(1).default
					e.__esModule = !0
					var n = i(4),
						o = r(i(6)),
						a = i(5),
						h = r(i(50)),
						l = i(28)
					function u(t) {
						this.value = t
					}
					function c() {}
					;(c.prototype = {
						nameLookup: function(t, e) {
							return l.dangerousPropertyRegex.test(e)
								? ['(', [this.aliasable('container.propertyIsEnumerable'), '.call(', t, ',', JSON.stringify(e), ')'], '?', i(), ' : undefined)']
								: i()
							function i() {
								return c.isValidJavaScriptVariableName(e) ? [t, '.', e] : [t, '[', JSON.stringify(e), ']']
							}
						},
						depthedLookup: function(t) {
							return [this.aliasable('container.lookup'), '(depths, "', t, '")']
						},
						compilerInfo: function() {
							var t = n.COMPILER_REVISION
							return [t, n.REVISION_CHANGES[t]]
						},
						appendToBuffer: function(t, e, i) {
							return (
								a.isArray(t) || (t = [t]),
								(t = this.source.wrap(t, e)),
								this.environment.isSimple ? ['return ', t, ';'] : i ? ['buffer += ', t, ';'] : ((t.appendToBuffer = !0), t)
							)
						},
						initializeBuffer: function() {
							return this.quotedString('')
						},
						compile: function(t, e, i, s) {
							;(this.environment = t),
								(this.options = e),
								(this.stringParams = this.options.stringParams),
								(this.trackIds = this.options.trackIds),
								(this.precompile = !s),
								(this.name = this.environment.name),
								(this.isChild = !!i),
								(this.context = i || { decorators: [], programs: [], environments: [] }),
								this.preamble(),
								(this.stackSlot = 0),
								(this.stackVars = []),
								(this.aliases = {}),
								(this.registers = { list: [] }),
								(this.hashes = []),
								(this.compileStack = []),
								(this.inlineStack = []),
								(this.blockParams = []),
								this.compileChildren(t, e),
								(this.useDepths = this.useDepths || t.useDepths || t.useDecorators || this.options.compat),
								(this.useBlockParams = this.useBlockParams || t.useBlockParams)
							var r = t.opcodes,
								n = void 0,
								a = void 0,
								h = void 0,
								l = void 0
							for (h = 0, l = r.length; h < l; h++) (n = r[h]), (this.source.currentLocation = n.loc), (a = a || n.loc), this[n.opcode].apply(this, n.args)
							if (((this.source.currentLocation = a), this.pushSource(''), this.stackSlot || this.inlineStack.length || this.compileStack.length))
								throw new o.default('Compile completed with content left on stack')
							this.decorators.isEmpty()
								? (this.decorators = void 0)
								: ((this.useDecorators = !0),
								  this.decorators.prepend('var decorators = container.decorators;\n'),
								  this.decorators.push('return fn;'),
								  s
										? (this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]))
										: (this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n'),
										  this.decorators.push('}\n'),
										  (this.decorators = this.decorators.merge())))
							var u = this.createFunctionContext(s)
							if (this.isChild) return u
							var c = { compiler: this.compilerInfo(), main: u }
							this.decorators && ((c.main_d = this.decorators), (c.useDecorators = !0))
							var p = this.context,
								d = p.programs,
								f = p.decorators
							for (h = 0, l = d.length; h < l; h++) d[h] && ((c[h] = d[h]), f[h] && ((c[h + '_d'] = f[h]), (c.useDecorators = !0)))
							return (
								this.environment.usePartial && (c.usePartial = !0),
								this.options.data && (c.useData = !0),
								this.useDepths && (c.useDepths = !0),
								this.useBlockParams && (c.useBlockParams = !0),
								this.options.compat && (c.compat = !0),
								s
									? (c.compilerOptions = this.options)
									: ((c.compiler = JSON.stringify(c.compiler)),
									  (this.source.currentLocation = { start: { line: 1, column: 0 } }),
									  (c = this.objectLiteral(c)),
									  e.srcName ? ((c = c.toStringWithSourceMap({ file: e.destName })).map = c.map && c.map.toString()) : (c = c.toString())),
								c
							)
						},
						preamble: function() {
							;(this.lastContext = 0), (this.source = new h.default(this.options.srcName)), (this.decorators = new h.default(this.options.srcName))
						},
						createFunctionContext: function(t) {
							var e = this,
								i = '',
								r = this.stackVars.concat(this.registers.list)
							r.length > 0 && (i += ', ' + r.join(', '))
							var n = 0
							s(this.aliases).forEach(function(t) {
								var s = e.aliases[t]
								s.children && s.referenceCount > 1 && ((i += ', alias' + ++n + '=' + t), (s.children[0] = 'alias' + n))
							})
							var o = ['container', 'depth0', 'helpers', 'partials', 'data']
							;(this.useBlockParams || this.useDepths) && o.push('blockParams'), this.useDepths && o.push('depths')
							var a = this.mergeSource(i)
							return t ? (o.push(a), Function.apply(this, o)) : this.source.wrap(['function(', o.join(','), ') {\n  ', a, '}'])
						},
						mergeSource: function(t) {
							var e = this.environment.isSimple,
								i = !this.forceBuffer,
								s = void 0,
								r = void 0,
								n = void 0,
								o = void 0
							return (
								this.source.each(function(t) {
									t.appendToBuffer
										? (n ? t.prepend('  + ') : (n = t), (o = t))
										: (n && (r ? n.prepend('buffer += ') : (s = !0), o.add(';'), (n = o = void 0)), (r = !0), e || (i = !1))
								}),
								i
									? n
										? (n.prepend('return '), o.add(';'))
										: r || this.source.push('return "";')
									: ((t += ', buffer = ' + (s ? '' : this.initializeBuffer())),
									  n ? (n.prepend('return buffer + '), o.add(';')) : this.source.push('return buffer;')),
								t && this.source.prepend('var ' + t.substring(2) + (s ? '' : ';\n')),
								this.source.merge()
							)
						},
						blockValue: function(t) {
							var e = this.aliasable('container.hooks.blockHelperMissing'),
								i = [this.contextName(0)]
							this.setupHelperArgs(t, 0, i)
							var s = this.popStack()
							i.splice(1, 0, s), this.push(this.source.functionCall(e, 'call', i))
						},
						ambiguousBlockValue: function() {
							var t = this.aliasable('container.hooks.blockHelperMissing'),
								e = [this.contextName(0)]
							this.setupHelperArgs('', 0, e, !0), this.flushInline()
							var i = this.topStack()
							e.splice(1, 0, i), this.pushSource(['if (!', this.lastHelper, ') { ', i, ' = ', this.source.functionCall(t, 'call', e), '}'])
						},
						appendContent: function(t) {
							this.pendingContent ? (t = this.pendingContent + t) : (this.pendingLocation = this.source.currentLocation), (this.pendingContent = t)
						},
						append: function() {
							if (this.isInline())
								this.replaceStack(function(t) {
									return [' != null ? ', t, ' : ""']
								}),
									this.pushSource(this.appendToBuffer(this.popStack()))
							else {
								var t = this.popStack()
								this.pushSource(['if (', t, ' != null) { ', this.appendToBuffer(t, void 0, !0), ' }']),
									this.environment.isSimple && this.pushSource(['else { ', this.appendToBuffer("''", void 0, !0), ' }'])
							}
						},
						appendEscaped: function() {
							this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']))
						},
						getContext: function(t) {
							this.lastContext = t
						},
						pushContext: function() {
							this.pushStackLiteral(this.contextName(this.lastContext))
						},
						lookupOnContext: function(t, e, i, s) {
							var r = 0
							s || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[r++])),
								this.resolvePath('context', t, r, e, i)
						},
						lookupBlockParam: function(t, e) {
							;(this.useBlockParams = !0), this.push(['blockParams[', t[0], '][', t[1], ']']), this.resolvePath('context', e, 1)
						},
						lookupData: function(t, e, i) {
							t ? this.pushStackLiteral('container.data(data, ' + t + ')') : this.pushStackLiteral('data'), this.resolvePath('data', e, 0, !0, i)
						},
						resolvePath: function(t, e, i, s, r) {
							var n = this
							if (this.options.strict || this.options.assumeObjects)
								this.push(
									(function(t, e, i, s) {
										var r = e.popStack(),
											n = 0,
											o = i.length
										for (t && o--; n < o; n++) r = e.nameLookup(r, i[n], s)
										return t ? [e.aliasable('container.strict'), '(', r, ', ', e.quotedString(i[n]), ', ', JSON.stringify(e.source.currentLocation), ' )'] : r
									})(this.options.strict && r, this, e, t)
								)
							else
								for (var o = e.length; i < o; i++)
									this.replaceStack(function(r) {
										var o = n.nameLookup(r, e[i], t)
										return s ? [' && ', o] : [' != null ? ', o, ' : ', r]
									})
						},
						resolvePossibleLambda: function() {
							this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')'])
						},
						pushStringParam: function(t, e) {
							this.pushContext(), this.pushString(e), 'SubExpression' !== e && ('string' == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
						},
						emptyHash: function(t) {
							this.trackIds && this.push('{}'), this.stringParams && (this.push('{}'), this.push('{}')), this.pushStackLiteral(t ? 'undefined' : '{}')
						},
						pushHash: function() {
							this.hash && this.hashes.push(this.hash), (this.hash = { values: {}, types: [], contexts: [], ids: [] })
						},
						popHash: function() {
							var t = this.hash
							;(this.hash = this.hashes.pop()),
								this.trackIds && this.push(this.objectLiteral(t.ids)),
								this.stringParams && (this.push(this.objectLiteral(t.contexts)), this.push(this.objectLiteral(t.types))),
								this.push(this.objectLiteral(t.values))
						},
						pushString: function(t) {
							this.pushStackLiteral(this.quotedString(t))
						},
						pushLiteral: function(t) {
							this.pushStackLiteral(t)
						},
						pushProgram: function(t) {
							null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
						},
						registerDecorator: function(t, e) {
							var i = this.nameLookup('decorators', e, 'decorator'),
								s = this.setupHelperArgs(e, t)
							this.decorators.push(['fn = ', this.decorators.functionCall(i, '', ['fn', 'props', 'container', s]), ' || fn;'])
						},
						invokeHelper: function(t, e, i) {
							var s = this.popStack(),
								r = this.setupHelper(t, e),
								n = []
							i && n.push(r.name), n.push(s), this.options.strict || n.push(this.aliasable('container.hooks.helperMissing'))
							var o = ['(', this.itemsSeparatedBy(n, '||'), ')'],
								a = this.source.functionCall(o, 'call', r.callParams)
							this.push(a)
						},
						itemsSeparatedBy: function(t, e) {
							var i = []
							i.push(t[0])
							for (var s = 1; s < t.length; s++) i.push(e, t[s])
							return i
						},
						invokeKnownHelper: function(t, e) {
							var i = this.setupHelper(t, e)
							this.push(this.source.functionCall(i.name, 'call', i.callParams))
						},
						invokeAmbiguous: function(t, e) {
							this.useRegister('helper')
							var i = this.popStack()
							this.emptyHash()
							var s = this.setupHelper(0, t, e),
								r = ['(', '(helper = ', (this.lastHelper = this.nameLookup('helpers', t, 'helper')), ' || ', i, ')']
							this.options.strict || ((r[0] = '(helper = '), r.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'))),
								this.push([
									'(',
									r,
									s.paramsInit ? ['),(', s.paramsInit] : [],
									'),',
									'(typeof helper === ',
									this.aliasable('"function"'),
									' ? ',
									this.source.functionCall('helper', 'call', s.callParams),
									' : helper))'
								])
						},
						invokePartial: function(t, e, i) {
							var s = [],
								r = this.setupParams(e, 1, s)
							t && ((e = this.popStack()), delete r.name),
								i && (r.indent = JSON.stringify(i)),
								(r.helpers = 'helpers'),
								(r.partials = 'partials'),
								(r.decorators = 'container.decorators'),
								t ? s.unshift(e) : s.unshift(this.nameLookup('partials', e, 'partial')),
								this.options.compat && (r.depths = 'depths'),
								(r = this.objectLiteral(r)),
								s.push(r),
								this.push(this.source.functionCall('container.invokePartial', '', s))
						},
						assignToHash: function(t) {
							var e = this.popStack(),
								i = void 0,
								s = void 0,
								r = void 0
							this.trackIds && (r = this.popStack()), this.stringParams && ((s = this.popStack()), (i = this.popStack()))
							var n = this.hash
							i && (n.contexts[t] = i), s && (n.types[t] = s), r && (n.ids[t] = r), (n.values[t] = e)
						},
						pushId: function(t, e, i) {
							'BlockParam' === t
								? this.pushStackLiteral('blockParams[' + e[0] + '].path[' + e[1] + ']' + (i ? ' + ' + JSON.stringify('.' + i) : ''))
								: 'PathExpression' === t
								? this.pushString(e)
								: 'SubExpression' === t
								? this.pushStackLiteral('true')
								: this.pushStackLiteral('null')
						},
						compiler: c,
						compileChildren: function(t, e) {
							for (var i = t.children, s = void 0, r = void 0, n = 0, o = i.length; n < o; n++) {
								;(s = i[n]), (r = new this.compiler())
								var a = this.matchExistingProgram(s)
								if (null == a) {
									this.context.programs.push('')
									var h = this.context.programs.length
									;(s.index = h),
										(s.name = 'program' + h),
										(this.context.programs[h] = r.compile(s, e, this.context, !this.precompile)),
										(this.context.decorators[h] = r.decorators),
										(this.context.environments[h] = s),
										(this.useDepths = this.useDepths || r.useDepths),
										(this.useBlockParams = this.useBlockParams || r.useBlockParams),
										(s.useDepths = this.useDepths),
										(s.useBlockParams = this.useBlockParams)
								} else
									(s.index = a.index),
										(s.name = 'program' + a.index),
										(this.useDepths = this.useDepths || a.useDepths),
										(this.useBlockParams = this.useBlockParams || a.useBlockParams)
							}
						},
						matchExistingProgram: function(t) {
							for (var e = 0, i = this.context.environments.length; e < i; e++) {
								var s = this.context.environments[e]
								if (s && s.equals(t)) return s
							}
						},
						programExpression: function(t) {
							var e = this.environment.children[t],
								i = [e.index, 'data', e.blockParams]
							return (
								(this.useBlockParams || this.useDepths) && i.push('blockParams'), this.useDepths && i.push('depths'), 'container.program(' + i.join(', ') + ')'
							)
						},
						useRegister: function(t) {
							this.registers[t] || ((this.registers[t] = !0), this.registers.list.push(t))
						},
						push: function(t) {
							return t instanceof u || (t = this.source.wrap(t)), this.inlineStack.push(t), t
						},
						pushStackLiteral: function(t) {
							this.push(new u(t))
						},
						pushSource: function(t) {
							this.pendingContent &&
								(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), (this.pendingContent = void 0)),
								t && this.source.push(t)
						},
						replaceStack: function(t) {
							var e = ['('],
								i = void 0,
								s = void 0,
								r = void 0
							if (!this.isInline()) throw new o.default('replaceStack on non-inline')
							var n = this.popStack(!0)
							if (n instanceof u) (e = ['(', (i = [n.value])]), (r = !0)
							else {
								s = !0
								var a = this.incrStack()
								;(e = ['((', this.push(a), ' = ', n, ')']), (i = this.topStack())
							}
							var h = t.call(this, i)
							r || this.popStack(), s && this.stackSlot--, this.push(e.concat(h, ')'))
						},
						incrStack: function() {
							return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push('stack' + this.stackSlot), this.topStackName()
						},
						topStackName: function() {
							return 'stack' + this.stackSlot
						},
						flushInline: function() {
							var t = this.inlineStack
							this.inlineStack = []
							for (var e = 0, i = t.length; e < i; e++) {
								var s = t[e]
								if (s instanceof u) this.compileStack.push(s)
								else {
									var r = this.incrStack()
									this.pushSource([r, ' = ', s, ';']), this.compileStack.push(r)
								}
							}
						},
						isInline: function() {
							return this.inlineStack.length
						},
						popStack: function(t) {
							var e = this.isInline(),
								i = (e ? this.inlineStack : this.compileStack).pop()
							if (!t && i instanceof u) return i.value
							if (!e) {
								if (!this.stackSlot) throw new o.default('Invalid stack pop')
								this.stackSlot--
							}
							return i
						},
						topStack: function() {
							var t = this.isInline() ? this.inlineStack : this.compileStack,
								e = t[t.length - 1]
							return e instanceof u ? e.value : e
						},
						contextName: function(t) {
							return this.useDepths && t ? 'depths[' + t + ']' : 'depth' + t
						},
						quotedString: function(t) {
							return this.source.quotedString(t)
						},
						objectLiteral: function(t) {
							return this.source.objectLiteral(t)
						},
						aliasable: function(t) {
							var e = this.aliases[t]
							return e ? (e.referenceCount++, e) : (((e = this.aliases[t] = this.source.wrap(t)).aliasable = !0), (e.referenceCount = 1), e)
						},
						setupHelper: function(t, e, i) {
							var s = []
							return {
								params: s,
								paramsInit: this.setupHelperArgs(e, t, s, i),
								name: this.nameLookup('helpers', e, 'helper'),
								callParams: [this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})')].concat(s)
							}
						},
						setupParams: function(t, e, i) {
							var s = {},
								r = [],
								n = [],
								o = [],
								a = !i,
								h = void 0
							a && (i = []),
								(s.name = this.quotedString(t)),
								(s.hash = this.popStack()),
								this.trackIds && (s.hashIds = this.popStack()),
								this.stringParams && ((s.hashTypes = this.popStack()), (s.hashContexts = this.popStack()))
							var l = this.popStack(),
								u = this.popStack()
							;(u || l) && ((s.fn = u || 'container.noop'), (s.inverse = l || 'container.noop'))
							for (var c = e; c--; )
								(h = this.popStack()),
									(i[c] = h),
									this.trackIds && (o[c] = this.popStack()),
									this.stringParams && ((n[c] = this.popStack()), (r[c] = this.popStack()))
							return (
								a && (s.args = this.source.generateArray(i)),
								this.trackIds && (s.ids = this.source.generateArray(o)),
								this.stringParams && ((s.types = this.source.generateArray(n)), (s.contexts = this.source.generateArray(r))),
								this.options.data && (s.data = 'data'),
								this.useBlockParams && (s.blockParams = 'blockParams'),
								s
							)
						},
						setupHelperArgs: function(t, e, i, s) {
							var r = this.setupParams(t, e, i)
							return (
								(r.loc = JSON.stringify(this.source.currentLocation)),
								(r = this.objectLiteral(r)),
								s ? (this.useRegister('options'), i.push('options'), ['options=', r]) : i ? (i.push(r), '') : r
							)
						}
					}),
						(function() {
							for (
								var t = 'break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false'.split(
										' '
									),
									e = (c.RESERVED_WORDS = {}),
									i = 0,
									s = t.length;
								i < s;
								i++
							)
								e[t[i]] = !0
						})(),
						(c.isValidJavaScriptVariableName = function(t) {
							return !c.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
						}),
						(e.default = c),
						(t.exports = e.default)
				},
				function(t, e, i) {
					'use strict'
					var s = i(13).default
					e.__esModule = !0
					var r = i(5),
						n = void 0
					function o(t, e, i) {
						if (r.isArray(t)) {
							for (var s = [], n = 0, o = t.length; n < o; n++) s.push(e.wrap(t[n], i))
							return s
						}
						return 'boolean' == typeof t || 'number' == typeof t ? t + '' : t
					}
					function a(t) {
						;(this.srcFile = t), (this.source = [])
					}
					n ||
						((n = function(t, e, i, s) {
							;(this.src = ''), s && this.add(s)
						}).prototype = {
							add: function(t) {
								r.isArray(t) && (t = t.join('')), (this.src += t)
							},
							prepend: function(t) {
								r.isArray(t) && (t = t.join('')), (this.src = t + this.src)
							},
							toStringWithSourceMap: function() {
								return { code: this.toString() }
							},
							toString: function() {
								return this.src
							}
						}),
						(a.prototype = {
							isEmpty: function() {
								return !this.source.length
							},
							prepend: function(t, e) {
								this.source.unshift(this.wrap(t, e))
							},
							push: function(t, e) {
								this.source.push(this.wrap(t, e))
							},
							merge: function() {
								var t = this.empty()
								return (
									this.each(function(e) {
										t.add(['  ', e, '\n'])
									}),
									t
								)
							},
							each: function(t) {
								for (var e = 0, i = this.source.length; e < i; e++) t(this.source[e])
							},
							empty: function() {
								var t = this.currentLocation || { start: {} }
								return new n(t.start.line, t.start.column, this.srcFile)
							},
							wrap: function(t) {
								var e = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || { start: {} } : arguments[1]
								return t instanceof n ? t : ((t = o(t, this, e)), new n(e.start.line, e.start.column, this.srcFile, t))
							},
							functionCall: function(t, e, i) {
								return (i = this.generateList(i)), this.wrap([t, e ? '.' + e + '(' : '(', i, ')'])
							},
							quotedString: function(t) {
								return (
									'"' +
									(t + '')
										.replace(/\\/g, '\\\\')
										.replace(/"/g, '\\"')
										.replace(/\n/g, '\\n')
										.replace(/\r/g, '\\r')
										.replace(/\u2028/g, '\\u2028')
										.replace(/\u2029/g, '\\u2029') +
									'"'
								)
							},
							objectLiteral: function(t) {
								var e = this,
									i = []
								s(t).forEach(function(s) {
									var r = o(t[s], e)
									'undefined' !== r && i.push([e.quotedString(s), ':', r])
								})
								var r = this.generateList(i)
								return r.prepend('{'), r.add('}'), r
							},
							generateList: function(t) {
								for (var e = this.empty(), i = 0, s = t.length; i < s; i++) i && e.add(','), e.add(o(t[i], this))
								return e
							},
							generateArray: function(t) {
								var e = this.generateList(t)
								return e.prepend('['), e.add(']'), e
							}
						}),
						(e.default = a),
						(t.exports = e.default)
				}
			])
		}),
			(t.exports = s())
	},
	function(t, e, s) {
		'use strict'
		s.r(e)
		var r = {}
		s.r(r),
			s.d(r, 'base64Chars', function() {
				return h
			}),
			s.d(r, 'base64lookup', function() {
				return c
			}),
			s.d(r, 'b64encTypesArray', function() {
				return p
			}),
			s.d(r, 'b64decTypedArray', function() {
				return d
			})
		var n = {}
		s.r(n),
			s.d(n, 'shuffleArray', function() {
				return v
			}),
			s.d(n, 'shortId', function() {
				return y
			}),
			s.d(n, 'uuid', function() {
				return A
			}),
			s.d(n, 'generateUUID', function() {
				return x
			}),
			s.d(n, 'simpleId', function() {
				return I
			}),
			s.d(n, 'smoothStep', function() {
				return O
			}),
			s.d(n, 'smootherStep', function() {
				return S
			}),
			s.d(n, 'map', function() {
				return R
			}),
			s.d(n, 'cacheBust', function() {
				return N
			}),
			s.d(n, 'jsonp', function() {
				return M
			}),
			s.d(n, 'ajaxSync', function() {
				return F
			}),
			s.d(n, 'ajax', function() {
				return C
			}),
			s.d(n, 'request', function() {
				return w
			}),
			s.d(n, 'UTILS', function() {
				return m
			})
		var o = {}
		s.r(o),
			s.d(o, 'easeExpoIn', function() {
				return G
			}),
			s.d(o, 'easeExpoOut', function() {
				return H
			}),
			s.d(o, 'easeExpoInOut', function() {
				return W
			}),
			s.d(o, 'easeCubicIn', function() {
				return Y
			}),
			s.d(o, 'easeCubicOut', function() {
				return z
			}),
			s.d(o, 'easeCubicInOut', function() {
				return K
			}),
			s.d(o, 'ANIM', function() {
				return V
			}),
			s.d(o, 'Anim', function() {
				return X
			}),
			s.d(o, 'TL', function() {
				return j
			})
		var a = {}
		s.r(a),
			s.d(a, 'togglePacoRenderer', function() {
				return Bt
			}),
			s.d(a, 'showPacoRenderer', function() {
				return Ut
			}),
			s.d(a, 'PatchConnectionReceiver', function() {
				return Dt
			}),
			s.d(a, 'PatchConnectionSender', function() {
				return Vt
			}),
			s.d(a, 'PatchConnectorBroadcastChannel', function() {
				return Gt
			})
		const h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
			l = new Uint8Array(256)
		for (var u = 0; u < h.length; u++) l[h.charCodeAt(u)] = u
		const c = l,
			p = function(t) {
				t.buffer && (t = t.buffer)
				var e,
					i = new Uint8Array(t),
					s = i.length,
					r = ''
				for (e = 0; e < s; e += 3)
					(r += h[i[e] >> 2]), (r += h[((3 & i[e]) << 4) | (i[e + 1] >> 4)]), (r += h[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]), (r += h[63 & i[e + 2]])
				return s % 3 == 2 ? (r = r.substring(0, r.length - 1) + '=') : s % 3 == 1 && (r = r.substring(0, r.length - 2) + '=='), r
			},
			d = function(t) {
				var e,
					i,
					s,
					r,
					n,
					o = 0.75 * t.length,
					a = t.length,
					h = 0
				'=' === t[t.length - 1] && (o--, '=' === t[t.length - 2] && o--)
				var l = new ArrayBuffer(o),
					u = new Uint8Array(l)
				for (e = 0; e < a; e += 4)
					(i = c[t.charCodeAt(e)]),
						(s = c[t.charCodeAt(e + 1)]),
						(r = c[t.charCodeAt(e + 2)]),
						(n = c[t.charCodeAt(e + 3)]),
						(u[h++] = (i << 2) | (s >> 4)),
						(u[h++] = ((15 & s) << 4) | (r >> 2)),
						(u[h++] = ((3 & r) << 6) | (63 & n))
				return l
			}
		var f = !1
		const g = {
				log: function() {
					if (f) return
					const t = ['[core]']
					t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
				},
				warn: function(t) {
					if (!f) {
						var e = ['[core]']
						e.push.apply(e, arguments), Function.prototype.apply.apply(console.warn, [console, e])
					}
				},
				error: function(t) {
					var e = ['[core]']
					e.push.apply(e, arguments), Function.prototype.apply.apply(console.error, [console, e])
				},
				setSilent: function(t) {
					f = t
				}
			},
			_ = function() {
				;(this._eventCallbacks = {}),
					(this._logName = ''),
					(this._log = !1),
					(this.addEventListener = this.on = function(t, e) {
						this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : (this._eventCallbacks[t] = [e])
					}),
					(this.hasEventListener = function(t, e) {
						if (t && e) {
							if (this._eventCallbacks[t]) return -1 != this._eventCallbacks[t].indexOf(e)
						} else g.warn('hasListener: missing parameters')
					}),
					(this.removeEventListener = function(t, e) {
						if (this._eventCallbacks[t]) {
							var i = this._eventCallbacks[t].indexOf(e)
							;-1 == i ? g.warn('eventlistener ' + t + ' not found...') : this._eventCallbacks[t].splice(i)
						}
					}),
					(this.logEvents = function(t, e) {
						;(this._log = t), (this._logName = e)
					}),
					(this.emitEvent = function(t, e, i, s, r, n, o) {
						if ((this._log && console.log('[event] ', this._logName, t, this._eventCallbacks), this._eventCallbacks[t]))
							for (var a = 0; a < this._eventCallbacks[t].length; a++) this._eventCallbacks[t][a] && this._eventCallbacks[t][a](e, i, s, r, n, o)
					})
			},
			m = {
				float32Concat: function(t, e) {
					t instanceof Float32Array || (t = new Float32Array(t)), e instanceof Float32Array || (e = new Float32Array(e))
					var i = t.length,
						s = new Float32Array(i + e.length)
					return s.set(t), s.set(e, i), s
				}
			},
			v = function(t) {
				for (var e = t.length - 1; e > 0; e--) {
					var i = Math.floor(Math.seededRandom() * (e + 1)),
						s = t[e]
					;(t[e] = t[i]), (t[i] = s)
				}
				return t
			},
			E = {},
			b = function() {
				const t = Math.random()
					.toString(36)
					.substr(2, 9)
				return E.hasOwnProperty(t) && (t = b()), (E[t] = !0), t
			},
			y = b,
			T = function() {
				var t = new Date().getTime()
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, e => {
					var i = (t + 16 * Math.random()) % 16 | 0
					return (t = Math.floor(t / 16)), ('x' == e ? i : (3 & i) | 8).toString(16)
				})
			},
			A = T,
			x = T
		var P = 0
		const I = function() {
				return ++P
			},
			O = function(t) {
				var e = Math.max(0, Math.min(1, (t - 0) / 1))
				return (t = e * e * (3 - 2 * e))
			},
			S = function(t) {
				var e = Math.max(0, Math.min(1, (t - 0) / 1))
				return (t = e * e * e * (e * (6 * e - 15) + 10))
			},
			R = function(t, e, i, s, r, n) {
				if (t >= i) return r
				if (t <= e) return s
				var o = !1,
					a = Math.min(e, i),
					h = Math.max(e, i)
				a != e && (o = !0)
				var l = !1,
					u = Math.min(s, r),
					c = Math.max(s, r)
				u != s && (l = !0)
				var p = 0,
					d = 0
				return (
					(p = o ? ((h - t) * (c - u)) / (h - a) : ((t - a) * (c - u)) / (h - a)),
					(d = l ? c - p : p + u),
					n
						? 1 == n
							? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * (3 - 2 * t) * (r - s)
							: 2 == n
							? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * t * (t * (6 * t - 15) + 10) * (r - s)
							: d
						: d
				)
			}
		;(Math.randomSeed = 1),
			(Math.seededRandom = function(t, e) {
				return (
					0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()),
					(t = t || 1),
					(e = e || 0),
					(Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280),
					e + (Math.randomSeed / 233280) * (t - e)
				)
			}),
			(m.arrayWriteToEnd = function(t, e) {
				for (var i = 1; i < t.length; i++) t[i - 1] = t[i]
				t[t.length - 1] = e
			}),
			(m.isNumeric = function(t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			}),
			(m.isArray = function(t) {
				return '[object Array]' === Object.prototype.toString.call(t)
			}),
			(String.prototype.endl = function() {
				return this + '\n'
			}),
			(String.prototype.startsWith = function(t) {
				return 0 === this.indexOf(t)
			}),
			(String.prototype.endsWith = function(t) {
				return this.match(t + '$') == t
			})
		const N = function(t) {
			return t.indexOf('?') > -1 ? (t += '&') : (t += '?'), t + 'cb=' + CABLES.uuid()
		}
		var k = null
		const M = function(t, e) {
				k = k || 0
				var i = ++k
				CABLES['jsonpFunc' + i] = function(t) {
					e(!1, t)
				}
				var s = '?'
				t.indexOf(s) > -1 && (s = '&')
				var r = document.createElement('script')
				r.setAttribute('src', t + s + 'callback=CABLES.jsonpFunc' + i), document.body.appendChild(r)
			},
			F = function(t, e, i, s, r) {
				w({ url: t, cb: e, method: i, data: s, contenttype: r, sync: !0 })
			},
			C = function(t, e, i, s, r, n, o = {}) {
				w({ url: t, cb: e, method: i, 'data:': s, contenttype: r, sync: !1, jsonp: n, headers: o })
			},
			w = function(t) {
				var e
				t.hasOwnProperty('asynch') || (t.asynch = !0)
				try {
					e = new XMLHttpRequest()
				} catch (t) {}
				if (
					((e.onreadystatechange = function() {
						4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e) : t.cb(!0, e.responseText, e))
					}),
					e.addEventListener('progress', t => {}),
					e.open(t.method ? t.method.toUpperCase() : 'GET', t.url, !t.sync),
					'object' == typeof t.headers)
				) {
					const i = Object.keys(t.headers)
					for (let s = 0; s < i.length; s++) {
						const r = i[s],
							n = t.headers[r]
						e.setRequestHeader(r, n)
					}
				}
				t.post || t.data
					? (e.setRequestHeader('Content-type', t.contenttype ? t.contenttype : 'application/x-www-form-urlencoded'), e.send(t.data || t.post))
					: e.send()
			}
		window.performance = window.performance || {
			offset: Date.now(),
			now: function() {
				return Date.now() - this.offset
			}
		}
		const L = {
				ANIM: {
					EASINGS: [
						'linear',
						'absolute',
						'smoothstep',
						'smootherstep',
						'Cubic In',
						'Cubic Out',
						'Cubic In Out',
						'Expo In',
						'Expo Out',
						'Expo In Out',
						'Sin In',
						'Sin Out',
						'Sin In Out',
						'Quart In',
						'Quart Out',
						'Quart In Out',
						'Quint In',
						'Quint Out',
						'Quint In Out',
						'Back In',
						'Back Out',
						'Back In Out',
						'Elastic In',
						'Elastic Out',
						'Elastic In Out',
						'Bounce In',
						'Bounce Out'
					],
					EASING_LINEAR: 0,
					EASING_ABSOLUTE: 1,
					EASING_SMOOTHSTEP: 2,
					EASING_SMOOTHERSTEP: 3,
					EASING_BEZIER: 4,
					EASING_CUBIC_IN: 5,
					EASING_CUBIC_OUT: 6,
					EASING_CUBIC_INOUT: 7,
					EASING_EXPO_IN: 8,
					EASING_EXPO_OUT: 9,
					EASING_EXPO_INOUT: 10,
					EASING_SIN_IN: 11,
					EASING_SIN_OUT: 12,
					EASING_SIN_INOUT: 13,
					EASING_BACK_IN: 14,
					EASING_BACK_OUT: 15,
					EASING_BACK_INOUT: 16,
					EASING_ELASTIC_IN: 17,
					EASING_ELASTIC_OUT: 18,
					EASING_BOUNCE_IN: 19,
					EASING_BOUNCE_OUT: 21,
					EASING_QUART_IN: 22,
					EASING_QUART_OUT: 23,
					EASING_QUART_INOUT: 24,
					EASING_QUINT_IN: 25,
					EASING_QUINT_OUT: 26,
					EASING_QUINT_INOUT: 27
				},
				OP: {
					OP_PORT_TYPE_VALUE: 0,
					OP_PORT_TYPE_FUNCTION: 1,
					OP_PORT_TYPE_OBJECT: 2,
					OP_PORT_TYPE_TEXTURE: 2,
					OP_PORT_TYPE_ARRAY: 3,
					OP_PORT_TYPE_DYNAMIC: 4,
					OP_PORT_TYPE_STRING: 5,
					OP_VERSION_PREFIX: '_v'
				},
				PORT: { PORT_DIR_IN: 0, PORT_DIR_OUT: 1 },
				PACO: {
					PACO_CLEAR: 0,
					PACO_VALUECHANGE: 1,
					PACO_OP_DELETE: 2,
					PACO_UNLINK: 3,
					PACO_LINK: 4,
					PACO_LOAD: 5,
					PACO_OP_CREATE: 6,
					PACO_OP_ENABLE: 7,
					PACO_OP_DISABLE: 8
				}
			},
			B = function(t, e, i, s) {
				_.apply(this),
					(this.data = {}),
					(this.direction = L.PORT.PORT_DIR_IN),
					(this.id = x()),
					(this.parent = t),
					(this.links = []),
					(this.value = 0),
					(this.name = e),
					(this.type = i || L.OP.OP_PORT_TYPE_VALUE),
					(this.uiAttribs = s || {}),
					(this.anim = null),
					(this._oldAnimVal = -5711),
					(this.defaultValue = null),
					(this._uiActiveState = !0),
					(this.ignoreValueSerialize = !1),
					(this.onLinkChanged = null),
					(this.crashed = !1),
					(this._valueBeforeLink = null),
					(this._lastAnimFrame = -1),
					(this._animated = !1),
					(this.onValueChanged = null),
					(this.onTriggered = null),
					(this.onUiActiveStateChange = null),
					(this.changeAlways = !1),
					(this._warnedDeprecated = !1),
					(this._useVariableName = null),
					Object.defineProperty(this, 'val', {
						get() {
							return (this._warnedDeprecated = !0), this.get()
						},
						set(t) {
							this.setValue(t), (this._warnedDeprecated = !0)
						}
					})
			}
		;(B.prototype.onAnimToggle = function() {}),
			(B.prototype._onAnimToggle = function() {
				this.onAnimToggle()
			}),
			(B.prototype.hidePort = function() {
				this.setUiAttribs({ hidePort: !0 })
			}),
			(B.prototype.remove = function() {
				this.removeLinks(), this.parent.removePort(this)
			}),
			(B.prototype.setUiAttribs = function(t) {
				for (var e in (this.uiAttribs || (this.uiAttribs = {}), t)) this.uiAttribs[e] = t[e]
				this.emitEvent('onUiAttrChange', t)
			}),
			(B.prototype.getUiAttribs = function() {
				return this.uiAttribs
			}),
			(B.prototype.getUiAttrib = function(t) {
				return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null
			}),
			(B.prototype.get = function() {
				return (
					this._animated &&
						this._lastAnimFrame != this.parent.patch.getFrameNum() &&
						((this._lastAnimFrame = this.parent.patch.getFrameNum()),
						(this.value = this.anim.getValue(this.parent.patch.timer.getTime())),
						(this._oldAnimVal = this.value),
						this.forceChange()),
					this.value
				)
			}),
			(B.prototype.set = B.prototype.setValue = function(t) {
				if (
					void 0 !== t &&
					this.parent.enabled &&
					!this.crashed &&
					(t !== this.value || this.changeAlways || this.type == L.OP.OP_PORT_TYPE_TEXTURE || this.type == L.OP.OP_PORT_TYPE_ARRAY)
				) {
					if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t)
					else {
						try {
							;(this.value = t), this.forceChange()
						} catch (t) {
							;(this.crashed = !0),
								(this.setValue = function(t) {}),
								(this.onTriggered = function() {}),
								console.error('onvaluechanged exception cought', t),
								g.log(t.stack),
								g.log('exception in: ' + this.parent.name),
								this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent),
								this.parent.patch.emitEvent('exception'.ex, this.parent)
						}
						this.parent.patch.isEditorMode() && this.type == L.OP.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this)
					}
					if (this.direction == L.PORT.PORT_DIR_OUT) for (var e = 0; e < this.links.length; ++e) this.links[e].setValue()
				}
			}),
			(B.prototype.updateAnim = function() {
				this._animated &&
					((this.value = this.get()),
					(this._oldAnimVal != this.value || this.changeAlways) && ((this._oldAnimVal = this.value), this.forceChange()),
					(this._oldAnimVal = this.value))
			}),
			(B.args = function(t) {
				return (t + '')
					.replace(/[\/][\/].*$/gm, '')
					.replace(/\s+/g, '')
					.replace(/[\/][*][^\/*]*[*][\/]/g, '')
					.split('){', 1)[0]
					.replace(/^[^(]*[(]/, '')
					.replace(/=[^,]+/g, '')
					.split(',')
					.filter(Boolean)
			}),
			(B.prototype.forceChange = function() {
				this.onValueChanged || this.onChange, this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value)
			}),
			(B.prototype.getTypeString = function() {
				return this.type == L.OP.OP_PORT_TYPE_VALUE
					? 'Number'
					: this.type == L.OP.OP_PORT_TYPE_FUNCTION
					? 'Trigger'
					: this.type == L.OP.OP_PORT_TYPE_OBJECT
					? 'Object'
					: this.type == L.OP.OP_PORT_TYPE_DYNAMIC
					? 'Dynamic'
					: this.type == L.OP.OP_PORT_TYPE_ARRAY
					? 'Array'
					: this.type == L.OP.OP_PORT_TYPE_STRING
					? 'String'
					: 'Unknown'
			}),
			(B.prototype.getSerialized = function() {
				var t = {}
				if (
					((t.name = this.getName()),
					this.ignoreValueSerialize ||
						0 !== this.links.length ||
						(this.type == L.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) ||
						(t.value = this.value),
					this._useVariableName && (t.useVariable = this._useVariableName),
					this._animated && (t.animated = !0),
					this.anim && (t.anim = this.anim.getSerialized()),
					'file' == this.uiAttribs.display && (t.display = this.uiAttribs.display),
					this.direction == L.PORT.PORT_DIR_IN && this.links.length > 0)
				)
					for (var e in ((t.links = []), this.links)) this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized())
				return t
			}),
			(B.prototype.shouldLink = function() {
				return !0
			}),
			(B.prototype.removeLinks = function() {
				for (var t = 0; this.links.length > 0; ) {
					if (++t > 5e3) {
						console.warn('could not delete links... / infinite loop'), (this.links.length = 0)
						break
					}
					this.links[0].remove()
				}
			}),
			(B.prototype.removeLink = function(t) {
				for (var e in this.links) this.links[e] == t && this.links.splice(e, 1)
				this.direction == L.PORT.PORT_DIR_IN &&
					(this.type == L.OP.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)),
					this.onLinkChanged && this.onLinkChanged(),
					this.emitEvent('onLinkChanged')
			}),
			(B.prototype.getName = function() {
				return this.name
			}),
			(B.prototype.addLink = function(t) {
				;(this._valueBeforeLink = this.value), this.links.push(t), this.onLinkChanged && this.onLinkChanged(), this.emitEvent('onLinkChanged')
			}),
			(B.prototype.getLinkTo = function(t) {
				for (var e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e]
			}),
			(B.prototype.removeLinkTo = function(t) {
				for (var e in this.links)
					if (this.links[e].portIn == t || this.links[e].portOut == t)
						return this.links[e].remove(), this.onLinkChanged && this.onLinkChanged(), void this.emitEvent('onLinkChanged')
			}),
			(B.prototype.isLinkedTo = function(t) {
				for (var e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return !0
				return !1
			}),
			(B.prototype.trigger = function() {
				if (0 !== this.links.length && this.parent.enabled) {
					var t = null
					try {
						for (var e = 0; e < this.links.length; ++e)
							this.links[e].portIn && (t = this.links[e].portIn)._onTriggered(), this.links[e] && this.links[e].activity()
					} catch (e) {
						;(this.parent.enabled = !1),
							this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent('exception'.ex, t.parent), window.gui && gui.showOpCrash(t.parent)),
							g.log('exception!'),
							console.error('ontriggered exception cought', e),
							g.log(e.stack),
							g.log('exception in: ' + t.parent.name)
					}
				}
			}),
			(B.prototype.call = function() {
				g.log('call deprecated - use trigger() '), this.trigger()
			}),
			(B.prototype.execute = function() {
				g.log('### execute port: ' + this.getName(), this.goals.length)
			}),
			(B.prototype.setVariableName = function(t) {
				this._useVariableName = t
			}),
			(B.prototype.getVariableName = function() {
				return this._useVariableName
			}),
			(B.prototype.setVariable = function(t) {
				this.setAnimated(!1)
				var e = { useVariable: !1 }
				this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), (this._variableIn = null)),
					t
						? ((this._variableIn = this.parent.patch.getVar(t)),
						  this._variableIn
								? (this._variableIn.addListener(this.set.bind(this)), this.set(this._variableIn.getValue()))
								: console.log('PORT VAR NOT FOUND!!!'),
						  (this._useVariableName = t),
						  (e.useVariable = !0),
						  (e.variableName = this._useVariableName))
						: ((e.variableName = this._useVariableName = null), (e.useVariable = !1)),
					this.setUiAttribs(e)
			}),
			(B.prototype.setAnimated = function(t) {
				this._animated != t && ((this._animated = t), this._animated && !this.anim && (this.anim = new X()), this._onAnimToggle()),
					this.setUiAttribs({ isAnimated: this._animated })
			}),
			(B.prototype.toggleAnim = function(t) {
				;(this._animated = !this._animated),
					this._animated && !this.anim && (this.anim = new X()),
					this.setAnimated(this._animated),
					this._onAnimToggle(),
					this.setUiAttribs({ isAnimated: this._animated })
			}),
			(B.prototype.getType = function() {
				return this.type
			}),
			(B.prototype.isLinked = function() {
				return this.links.length > 0
			}),
			(B.prototype.isBoundToVar = function() {
				return null != this._useVariableName
			}),
			(B.prototype.isAnimated = function() {
				return this._animated
			}),
			(B.prototype.isHidden = function() {
				return this.uiAttribs.hidePort
			}),
			(B.prototype._onTriggered = function() {
				this.parent.updateAnims(), this.parent.enabled && this.onTriggered && this.onTriggered()
			}),
			(B.prototype._onSetProfiling = function(t) {
				this.parent.patch.profiler.add('port', this), this.setValue(t), this.parent.patch.profiler.add('port', null)
			}),
			(B.prototype._onTriggeredProfiling = function() {
				this.parent.patch.profiler.add('port', this),
					this.parent.enabled && this.onTriggered && this.onTriggered(),
					this.parent.patch.profiler.add('port', null)
			}),
			(B.prototype.onValueChange = function(t) {
				this.onChange = t
			}),
			(B.prototype.getUiActiveState = function() {
				return this._uiActiveState
			}),
			(B.prototype.setUiActiveState = function(t) {
				;(this._uiActiveState = t), this.onUiActiveStateChange && this.onUiActiveStateChange()
			}),
			(B.portTypeNumberToString = function(t) {
				return t == L.OP.OP_PORT_TYPE_VALUE
					? 'value'
					: t == L.OP.OP_PORT_TYPE_FUNCTION
					? 'function'
					: t == L.OP.OP_PORT_TYPE_OBJECT
					? 'object'
					: t == L.OP.OP_PORT_TYPE_ARRAY
					? 'array'
					: t == L.OP.OP_PORT_TYPE_STRING
					? 'string'
					: t == L.OP.OP_PORT_TYPE_DYNAMIC
					? 'dynamic'
					: 'unknown'
			})
		class U extends B {
			constructor(t, e, i, s, r) {
				super(t, e, i, s),
					(r.set = t => {
						const e = s.values
						if (!e) return void console.log('has no values')
						let i = Math.floor(t)
						;(i = Math.min(i, e.length - 1)),
							(i = Math.max(i, 0)),
							r.setValue(i),
							this.set(e[i]),
							this.parent.patch.isEditorMode() && window.gui && gui.patch().isCurrentOp(this.parent) && gui.patch().showOpParams(this.parent)
					})
			}
		}
		class D extends U {}
		const V = {
			Key: function(t) {
				;(this.time = 0),
					(this.value = 0),
					(this.ui = {}),
					(this.onChange = null),
					(this._easing = 0),
					(this.bezTime = 0.5),
					(this.bezValue = 0),
					(this.bezTimeIn = -0.5),
					(this.bezValueIn = 0),
					(this.cb = null),
					(this.cbTriggered = !1)
				;(this._updateBezier = !1), this.setEasing(L.ANIM.EASING_LINEAR), this.set(t)
			}
		}
		;(V.Key.linear = function(t, e, i) {
			return parseFloat(e.value) + parseFloat(i.value - e.value) * t
		}),
			(V.Key.easeLinear = function(t, e) {
				return V.Key.linear(t, this, e)
			}),
			(V.Key.easeAbsolute = function(t, e) {
				return this.value
			})
		const G = function(t) {
			return Math.pow(2, 10 * (t - 1))
		}
		V.Key.easeExpoIn = function(t, e) {
			return (t = G(t)), V.Key.linear(t, this, e)
		}
		const H = function(t) {
			return (t = 1 - Math.pow(2, -10 * t))
		}
		V.Key.easeExpoOut = function(t, e) {
			return (t = H(t)), V.Key.linear(t, this, e)
		}
		const W = function(t) {
			return (t *= 2) < 1 ? (t = 0.5 * Math.pow(2, 10 * (t - 1))) : (t--, (t = 0.5 * (2 - Math.pow(2, -10 * t)))), t
		}
		;(V.Key.easeExpoInOut = function(t, e) {
			return (t = W(t)), V.Key.linear(t, this, e)
		}),
			(V.Key.easeSinIn = function(t, e) {
				return (t = -1 * Math.cos((t * Math.PI) / 2) + 1), V.Key.linear(t, this, e)
			}),
			(V.Key.easeSinOut = function(t, e) {
				return (t = Math.sin((t * Math.PI) / 2)), V.Key.linear(t, this, e)
			}),
			(V.Key.easeSinInOut = function(t, e) {
				return (t = -0.5 * (Math.cos(Math.PI * t) - 1)), V.Key.linear(t, this, e)
			})
		const Y = function(t) {
			return (t *= t * t)
		}
		;(V.Key.easeCubicIn = function(t, e) {
			return (t = Y(t)), V.Key.linear(t, this, e)
		}),
			(V.Key.easeInQuint = function(t, e) {
				return (t *= t * t * t * t), V.Key.linear(t, this, e)
			}),
			(V.Key.easeOutQuint = function(t, e) {
				return (t = (t -= 1) * t * t * t * t + 1), V.Key.linear(t, this, e)
			}),
			(V.Key.easeInOutQuint = function(t, e) {
				return (t /= 0.5) < 1 ? (t *= 0.5 * t * t * t * t) : (t = 0.5 * ((t -= 2) * t * t * t * t + 2)), V.Key.linear(t, this, e)
			}),
			(V.Key.easeInQuart = function(t, e) {
				return (t *= t * t * t), V.Key.linear(t, this, e)
			}),
			(V.Key.easeOutQuart = function(t, e) {
				return (t = -1 * ((t -= 1) * t * t * t - 1)), V.Key.linear(t, this, e)
			}),
			(V.Key.easeInOutQuart = function(t, e) {
				return (t /= 0.5) < 1 ? (t *= 0.5 * t * t * t) : (t = -0.5 * ((t -= 2) * t * t * t - 2)), V.Key.linear(t, this, e)
			}),
			(V.Key.bounce = function(t) {
				return (
					(t /= 1) < 1 / 2.75
						? (t *= 7.5625 * t)
						: (t =
								t < 2 / 2.75
									? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
									: t < 2.5 / 2.75
									? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
									: 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
					t
				)
			}),
			(V.Key.easeInBounce = function(t, e) {
				return V.Key.linear(V.Key.bounce(t), this, e)
			}),
			(V.Key.easeOutBounce = function(t, e) {
				return V.Key.linear(V.Key.bounce(t), this, e)
			}),
			(V.Key.easeInElastic = function(t, e) {
				var i = 1.70158,
					s = 0,
					r = 1
				return (
					0 === t
						? (t = 0)
						: 1 == (t /= 1)
						? (t = 1)
						: (s || (s = 0.3),
						  r < Math.abs(1) ? ((r = 1), (i = s / 4)) : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
						  (t = -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((1 * t - i) * (2 * Math.PI)) / s) + 0)),
					V.Key.linear(t, this, e)
				)
			}),
			(V.Key.easeOutElastic = function(t, e) {
				var i = 1.70158,
					s = 0,
					r = 1
				return (
					0 === t
						? (t = 0)
						: 1 == (t /= 1)
						? (t = 1)
						: (s || (s = 0.3),
						  r < Math.abs(1) ? ((r = 1), (i = s / 4)) : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
						  (t = r * Math.pow(2, -10 * t) * Math.sin(((1 * t - i) * (2 * Math.PI)) / s) + 1 + 0)),
					V.Key.linear(t, this, e)
				)
			}),
			(V.Key.easeInBack = function(t, e) {
				var i = 1.70158
				return (t = t * t * ((i + 1) * t - i)), V.Key.linear(t, this, e)
			}),
			(V.Key.easeOutBack = function(t, e) {
				var i = 1.70158
				return (t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1), V.Key.linear(t, this, e)
			}),
			(V.Key.easeInOutBack = function(t, e) {
				var i = 1.70158
				return (
					(t = (t /= 0.5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2)), V.Key.linear(t, this, e)
				)
			})
		const z = function(t) {
			return (t = --t * t * t + 1)
		}
		V.Key.easeCubicOut = function(t, e) {
			return (t = z(t)), V.Key.linear(t, this, e)
		}
		const K = function(t) {
			return (t *= 2) < 1 ? (t *= 0.5 * t * t) : (t = 0.5 * ((t -= 2) * t * t + 2)), t
		}
		;(V.Key.easeCubicInOut = function(t, e) {
			return (t = K(t)), V.Key.linear(t, this, e)
		}),
			(V.Key.easeSmoothStep = function(t, e) {
				var i = Math.max(0, Math.min(1, t))
				return (t = i * i * (3 - 2 * i)), V.Key.linear(t, this, e)
			}),
			(V.Key.easeSmootherStep = function(t, e) {
				var i = Math.max(0, Math.min(1, (t - 0) / 1))
				return (t = i * i * i * (i * (6 * i - 15) + 10)), V.Key.linear(t, this, e)
			}),
			(V.Key.prototype.setEasing = function(t) {
				;(this._easing = t),
					this._easing == L.ANIM.EASING_ABSOLUTE
						? (this.ease = V.Key.easeAbsolute)
						: this._easing == L.ANIM.EASING_SMOOTHSTEP
						? (this.ease = V.Key.easeSmoothStep)
						: this._easing == L.ANIM.EASING_SMOOTHERSTEP
						? (this.ease = V.Key.easeSmootherStep)
						: this._easing == L.ANIM.EASING_CUBIC_IN
						? (this.ease = V.Key.easeCubicIn)
						: this._easing == L.ANIM.EASING_CUBIC_OUT
						? (this.ease = V.Key.easeCubicOut)
						: this._easing == L.ANIM.EASING_CUBIC_INOUT
						? (this.ease = V.Key.easeCubicInOut)
						: this._easing == L.ANIM.EASING_EXPO_IN
						? (this.ease = V.Key.easeExpoIn)
						: this._easing == L.ANIM.EASING_EXPO_OUT
						? (this.ease = V.Key.easeExpoOut)
						: this._easing == L.ANIM.EASING_EXPO_INOUT
						? (this.ease = V.Key.easeExpoInOut)
						: this._easing == L.ANIM.EASING_SIN_IN
						? (this.ease = V.Key.easeSinIn)
						: this._easing == L.ANIM.EASING_SIN_OUT
						? (this.ease = V.Key.easeSinOut)
						: this._easing == L.ANIM.EASING_SIN_INOUT
						? (this.ease = V.Key.easeSinInOut)
						: this._easing == L.ANIM.EASING_BACK_OUT
						? (this.ease = V.Key.easeOutBack)
						: this._easing == L.ANIM.EASING_BACK_IN
						? (this.ease = V.Key.easeInBack)
						: this._easing == L.ANIM.EASING_BACK_INOUT
						? (this.ease = V.Key.easeInOutBack)
						: this._easing == L.ANIM.EASING_ELASTIC_IN
						? (this.ease = V.Key.easeInElastic)
						: this._easing == L.ANIM.EASING_ELASTIC_OUT
						? (this.ease = V.Key.easeOutElastic)
						: this._easing == L.ANIM.EASING_BOUNCE_IN
						? (this.ease = V.Key.easeInBounce)
						: this._easing == L.ANIM.EASING_BOUNCE_OUT
						? (this.ease = V.Key.easeOutBounce)
						: this._easing == L.ANIM.EASING_QUART_OUT
						? (this.ease = V.Key.easeOutQuart)
						: this._easing == L.ANIM.EASING_QUART_IN
						? (this.ease = V.Key.easeInQuart)
						: this._easing == L.ANIM.EASING_QUART_INOUT
						? (this.ease = V.Key.easeInOutQuart)
						: this._easing == L.ANIM.EASING_QUINT_OUT
						? (this.ease = V.Key.easeOutQuint)
						: this._easing == L.ANIM.EASING_QUINT_IN
						? (this.ease = V.Key.easeInQuint)
						: this._easing == L.ANIM.EASING_QUINT_INOUT
						? (this.ease = V.Key.easeInOutQuint)
						: this._easing == L.ANIM.EASING_BEZIER
						? ((this._updateBezier = !0), (this.ease = V.Key.easeBezier))
						: ((this._easing = L.ANIM.EASING_LINEAR), (this.ease = V.Key.easeLinear))
			}),
			(V.Key.prototype.trigger = function() {
				this.cb(), (this.cbTriggered = !0)
			}),
			(V.Key.prototype.setValue = function(t) {
				;(this.value = t), (this._updateBezier = !0), null !== this.onChange && this.onChange()
			}),
			(V.Key.prototype.set = function(t) {
				t &&
					(t.e && this.setEasing(t.e),
					t.cb && ((this.cb = t.cb), (this.cbTriggered = !1)),
					t.b && ((this.bezTime = t.b[0]), (this.bezValue = t.b[1]), (this.bezTimeIn = t.b[2]), (this.bezValueIn = t.b[3]), (this._updateBezier = !0)),
					t.hasOwnProperty('t') && (this.time = t.t),
					t.hasOwnProperty('time') && (this.time = t.time),
					t.hasOwnProperty('v') ? (this.value = t.v) : t.hasOwnProperty('value') && (this.value = t.value)),
					null !== this.onChange && this.onChange()
			}),
			(V.Key.prototype.getSerialized = function() {
				var t = {}
				return (
					(t.t = this.time),
					(t.v = this.value),
					(t.e = this._easing),
					this._easing == L.ANIM.EASING_BEZIER && (t.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn]),
					t
				)
			}),
			(V.Key.prototype.getEasing = function() {
				return this._easing
			})
		const X = function(t) {
			;(this.keys = []),
				(this.onChange = null),
				(this.stayInTimeline = !1),
				(this.loop = !1),
				(this.defaultEasing = L.ANIM.EASING_LINEAR),
				(this.onLooped = null),
				(this._timesLooped = 0),
				(this._needsSort = !1)
		}
		;(X.prototype.forceChangeCallback = function() {
			null !== this.onChange && this.onChange()
		}),
			(X.prototype.hasEnded = function(t) {
				return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
			}),
			(X.prototype.isRising = function(t) {
				if (this.hasEnded(t)) return !1
				var e = this.getKeyIndex(t)
				return this.keys[e].value < this.keys[e + 1].value
			}),
			(X.prototype.clear = function(t) {
				var e = 0
				t && (e = this.getValue(t)), (this.keys.length = 0), t && this.setValue(t, e), null !== this.onChange && this.onChange()
			}),
			(X.prototype.sortKeys = function() {
				this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)), (this._needsSort = !1)
			}),
			(X.prototype.getLength = function() {
				return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time
			}),
			(X.prototype.getKeyIndex = function(t) {
				for (var e = 0, i = 0; i < this.keys.length; i++) if ((t >= this.keys[i].time && (e = i), this.keys[i].time > t)) return e
				return e
			}),
			(X.prototype.setValue = function(t, e, i) {
				var s = !1
				for (var r in this.keys)
					if (this.keys[r].time == t) {
						;(s = this.keys[r]), this.keys[r].setValue(e), (this.keys[r].cb = i)
						break
					}
				s || this.keys.push(new V.Key({ time: t, value: e, e: this.defaultEasing, cb: i })), this.onChange && this.onChange(), (this._needsSort = !0)
			}),
			(X.prototype.getSerialized = function() {
				var t = { keys: [] }
				for (var e in ((t.loop = this.loop), this.keys)) t.keys.push(this.keys[e].getSerialized())
				return t
			}),
			(X.prototype.getKey = function(t) {
				var e = this.getKeyIndex(t)
				return this.keys[e]
			}),
			(X.prototype.getNextKey = function(t) {
				var e = this.getKeyIndex(t) + 1
				return e >= this.keys.length && (e = this.keys.length - 1), this.keys[e]
			}),
			(X.prototype.isFinished = function(t) {
				return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
			}),
			(X.prototype.isStarted = function(t) {
				return !(this.keys.length <= 0) && t >= this.keys[0].time
			}),
			(X.prototype.getValue = function(t) {
				if (0 === this.keys.length) return 0
				if ((this._needsSort && this.sortKeys(), t < this.keys[0].time)) return this.keys[0].value
				var e = this.keys.length - 1
				this.loop &&
					t > this.keys[e].time &&
					(t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()),
					(t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time)),
					(t += this.keys[0].time))
				var i = this.getKeyIndex(t)
				if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(), this.keys[e].value
				var s = parseInt(i, 10) + 1,
					r = this.keys[i],
					n = this.keys[s]
				if ((r.cb && !r.cbTriggered && r.trigger(), !n)) return -1
				var o = (t - r.time) / (n.time - r.time)
				return r.ease(o, n)
			}),
			(X.prototype.addKey = function(t) {
				void 0 === t.time ? g.log('key time undefined, ignoring!') : (this.keys.push(t), null !== this.onChange && this.onChange())
			}),
			(X.prototype.easingFromString = function(t) {
				return 'linear' == t
					? L.ANIM.EASING_LINEAR
					: 'absolute' == t
					? L.ANIM.EASING_ABSOLUTE
					: 'smoothstep' == t
					? L.ANIM.EASING_SMOOTHSTEP
					: 'smootherstep' == t
					? L.ANIM.EASING_SMOOTHERSTEP
					: 'Cubic In' == t
					? L.ANIM.EASING_CUBIC_IN
					: 'Cubic Out' == t
					? L.ANIM.EASING_CUBIC_OUT
					: 'Cubic In Out' == t
					? L.ANIM.EASING_CUBIC_INOUT
					: 'Expo In' == t
					? L.ANIM.EASING_EXPO_IN
					: 'Expo Out' == t
					? L.ANIM.EASING_EXPO_OUT
					: 'Expo In Out' == t
					? L.ANIM.EASING_EXPO_INOUT
					: 'Sin In' == t
					? L.ANIM.EASING_SIN_IN
					: 'Sin Out' == t
					? L.ANIM.EASING_SIN_OUT
					: 'Sin In Out' == t
					? L.ANIM.EASING_SIN_INOUT
					: 'Back In' == t
					? L.ANIM.EASING_BACK_IN
					: 'Back Out' == t
					? L.ANIM.EASING_BACK_OUT
					: 'Back In Out' == t
					? L.ANIM.EASING_BACK_INOUT
					: 'Elastic In' == t
					? L.ANIM.EASING_ELASTIC_IN
					: 'Elastic Out' == t
					? L.ANIM.EASING_ELASTIC_OUT
					: 'Bounce In' == t
					? L.ANIM.EASING_BOUNCE_IN
					: 'Bounce Out' == t
					? L.ANIM.EASING_BOUNCE_OUT
					: 'Quart Out' == t
					? L.ANIM.EASING_QUART_OUT
					: 'Quart In' == t
					? L.ANIM.EASING_QUART_IN
					: 'Quart In Out' == t
					? L.ANIM.EASING_QUART_INOUT
					: 'Quint Out' == t
					? L.ANIM.EASING_QUINT_OUT
					: 'Quint In' == t
					? L.ANIM.EASING_QUINT_IN
					: 'Quint In Out' == t
					? L.ANIM.EASING_QUINT_INOUT
					: void 0
			}),
			(X.prototype.createPort = function(t, e, i) {
				var s = t.addInPort(new B(t, e, L.OP.OP_PORT_TYPE_VALUE, { display: 'dropdown', values: L.ANIM.EASINGS }))
				return (
					s.set('linear'),
					(s.defaultValue = 'linear'),
					(s.onChange = function() {
						;(this.defaultEasing = this.easingFromString(s.get())), i && i()
					}.bind(this)),
					s
				)
			}),
			(X.slerpQuaternion = function(t, e, i, s, r, n) {
				X.slerpQuaternion.q1 || ((X.slerpQuaternion.q1 = quat.create()), (X.slerpQuaternion.q2 = quat.create()))
				var o = i.getKeyIndex(t),
					a = o + 1
				if ((a >= i.keys.length && (a = i.keys.length - 1), o == a)) quat.set(e, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value)
				else {
					var h = i.keys[o].time,
						l = (t - h) / (i.keys[a].time - h)
					quat.set(X.slerpQuaternion.q1, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value),
						quat.set(X.slerpQuaternion.q2, i.keys[a].value, s.keys[a].value, r.keys[a].value, n.keys[a].value),
						quat.slerp(e, X.slerpQuaternion.q1, X.slerpQuaternion.q2, l)
				}
				return e
			})
		const j = V
		j.Anim = X
		const $ = function(t) {
			_.apply(this), (this.id = CABLES.uuid()), (this.portIn = null), (this.portOut = null), (this.scene = t), (this.activityCounter = 0)
		}
		;($.prototype.setValue = function(t) {
			void 0 === t ? this._setValue() : this.portIn.set(t)
		}),
			($.prototype.activity = function() {
				this.activityCounter++
			}),
			($.prototype._setValue = function() {
				if (this.portOut) {
					var t = this.portOut.get()
					t == t &&
						(this.portIn.type != L.OP.OP_PORT_TYPE_FUNCTION && this.activity(),
						this.portIn.get() !== t ? this.portIn.set(t) : this.portIn.changeAlways && this.portIn.set(t))
				} else this.remove()
			}),
			($.prototype.getOtherPort = function(t) {
				return t == this.portIn ? this.portOut : this.portIn
			}),
			($.prototype.remove = function() {
				this.portIn && this.portIn.removeLink(this),
					this.portOut && this.portOut.removeLink(this),
					this.scene && this.scene.emitEvent('onUnLink', this.portIn, this.portOut, this),
					!this.portIn ||
						(this.portIn.type != L.OP.OP_PORT_TYPE_OBJECT && this.portIn.type != L.OP.OP_PORT_TYPE_ARRAY) ||
						(this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())),
					this.portIn && this.portIn.parent._checkLinksNeededToWork(),
					this.portOut && this.portOut.parent._checkLinksNeededToWork(),
					(this.portIn = null),
					(this.portOut = null),
					(this.scene = null)
			}),
			($.prototype.link = function(t, e) {
				if (!$.canLink(t, e)) return g.log('cannot link ports!'), !1
				t.direction == L.PORT.PORT_DIR_IN ? ((this.portIn = t), (this.portOut = e)) : ((this.portIn = e), (this.portOut = t)),
					t.addLink(this),
					e.addLink(this),
					this.setValue(),
					t.onLink && t.onLink(this),
					e.onLink && e.onLink(this),
					t.parent._checkLinksNeededToWork(),
					e.parent._checkLinksNeededToWork()
			}),
			($.prototype.getSerialized = function() {
				var t = {}
				return (
					(t.portIn = this.portIn.getName()), (t.portOut = this.portOut.getName()), (t.objIn = this.portIn.parent.id), (t.objOut = this.portOut.parent.id), t
				)
			}),
			($.canLinkText = function(t, e) {
				if (t.direction == e.direction) {
					var i = '(out)'
					return e.direction == L.PORT.PORT_DIR_IN && (i = '(in)'), 'can not link: same direction ' + i
				}
				return t.parent == e.parent
					? 'can not link: same op'
					: t.type != L.OP.OP_PORT_TYPE_DYNAMIC && e.type != L.OP.OP_PORT_TYPE_DYNAMIC && t.type != e.type
					? 'can not link: different type'
					: t
					? e
						? t.direction == L.PORT.PORT_DIR_IN && t.isAnimated()
							? 'can not link: is animated'
							: e.direction == L.PORT.PORT_DIR_IN && e.isAnimated()
							? 'can not link: is animated'
							: t.isLinkedTo(e)
							? 'ports already linked'
							: (t.canLink && !t.canLink(e)) || (e.canLink && !e.canLink(t))
							? 'Incompatible'
							: 'can link'
						: 'can not link: port 2 invalid'
					: 'can not link: port 1 invalid'
			}),
			($.canLink = function(t, e) {
				return (
					!!t &&
					!!e &&
					(t.direction != L.PORT.PORT_DIR_IN || !t.isAnimated()) &&
					(e.direction != L.PORT.PORT_DIR_IN || !e.isAnimated()) &&
					!t.isHidden() &&
					!e.isHidden() &&
					!t.isLinkedTo(e) &&
					t.direction != e.direction &&
					(t.type == e.type || t.type == L.OP.OP_PORT_TYPE_DYNAMIC || e.type == L.OP.OP_PORT_TYPE_DYNAMIC) &&
					(t.type == L.OP.OP_PORT_TYPE_DYNAMIC ||
						e.type == L.OP.OP_PORT_TYPE_DYNAMIC ||
						(t.parent != e.parent && !(t.canLink && !t.canLink(e)) && !(e.canLink && !e.canLink(t))))
				)
			})
		const q = function() {
			if (
				((this.data = {}),
				(this.objName = ''),
				(this.portsOut = []),
				(this.portsIn = []),
				(this.portsInData = []),
				(this.opId = ''),
				(this.uiAttribs = {}),
				(this.enabled = !0),
				(this.patch = arguments[0]),
				(this.name = arguments[1]),
				(this.errors = {}),
				(this._needsLinkedToWork = []),
				(this._needsParentOp = null),
				(this._shortOpName = ''),
				arguments[1])
			) {
				if (((this._shortOpName = arguments[1].split('.')[arguments[1].split('.').length - 1]), this._shortOpName.indexOf(L.OP.OP_VERSION_PREFIX) > 0)) {
					var t = this._shortOpName.split(L.OP.OP_VERSION_PREFIX)[1]
					this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (L.OP.OP_VERSION_PREFIX + t).length)
				}
				this.uiAttribs.title = this._shortOpName
			}
			;(this.id = arguments[2] || A()),
				(this.onAddPort = null),
				(this.onCreate = null),
				(this.onResize = null),
				(this.onLoaded = null),
				(this.onDelete = null),
				(this.onUiAttrChange = null),
				(this._eventCallbacks = {}),
				(this._instances = null),
				(this.preRender = null),
				(this.init = null)
		}
		{
			;(q.prototype.clearUiAttrib = function(t) {
				var e = { name: null }
				this.uiAttrib(e)
			}),
				(q.prototype.setTitle = function(t) {
					var e = this.name != t
					;(this.name = t), this.uiAttr({ title: t }), e && this.fireEvent('onTitleChange', t)
				})
			const t = function(t) {
				for (var e in (this.uiAttribs || (this.uiAttribs = {}), t)) this.uiAttribs[e] = t[e]
				this.fireEvent('onUiAttribsChange', t)
			}
			;(q.prototype.setUiAttrib = t),
				(q.prototype.uiAttr = t),
				(q.prototype.getName = function() {
					return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split('.')
				}),
				(q.prototype.addOutPort = function(t) {
					return (t.direction = L.PORT.PORT_DIR_OUT), (t.parent = this), this.portsOut.push(t), this.onAddPort && this.onAddPort(t), t
				}),
				(q.prototype.hasPort = function(t) {
					for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[i].getName() == t) return !0
					return !1
				}),
				(q.prototype.hasDynamicPort = function() {
					var t = 0
					for (t = 0; t < this.portsIn.length; t++) {
						if (this.portsIn[t].type == L.OP.OP_PORT_TYPE_DYNAMIC) return !0
						if ('dyn' == this.portsIn[t].getName()) return !0
					}
					for (t = 0; t < this.portsOut.length; t++) {
						if (this.portsOut[t].type == L.OP.OP_PORT_TYPE_DYNAMIC) return !0
						if ('dyn' == this.portsOut[t].getName()) return !0
					}
					return !1
				}),
				(q.prototype.addInPort = function(t) {
					if (!(t instanceof B)) throw new Error('parameter is not a port!')
					return (t.direction = L.PORT.PORT_DIR_IN), (t.parent = this), this.portsIn.push(t), this.onAddPort && this.onAddPort(t), t
				}),
				(q.prototype.inFunction = q.prototype.inTrigger = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_FUNCTION))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.inFunctionButton = q.prototype.inTriggerButton = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_FUNCTION, { display: 'button' }))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.inValueFloat = q.prototype.inValue = q.prototype.inFloat = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE))
					return void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.inValueBool = q.prototype.inBool = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'bool' }))
					return void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.inValueString = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { type: 'string' }))
					return (i.value = ''), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.inString = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_STRING, { type: 'string' }))
					return (e = e || ''), (i.value = e), i.set(e), (i.defaultValue = e), i
				}),
				(q.prototype.inValueText = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { type: 'string', display: 'text' }))
					return (i.value = ''), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.inStringEditor = function(t, e, i) {
					var s = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_STRING, { type: 'string', display: 'editor', editorSyntax: i }))
					return (s.value = ''), void 0 !== e && (s.set(e), (s.defaultValue = e)), s
				}),
				(q.prototype.inValueEditor = function(t, e, i) {
					var s = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { type: 'string', display: 'editor', editorSyntax: i }))
					return (s.value = ''), void 0 !== e && (s.set(e), (s.defaultValue = e)), s
				}),
				(q.prototype.inValueSelect = q.prototype.inDropDown = function(t, e, i, s) {
					var r = null
					if (s) {
						const i = new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'dropdown', hidePort: !0, type: 'string', values: e })
						r = this.addInPort(i)
					} else {
						const s = new B(this, t + ' index', L.OP.OP_PORT_TYPE_VALUE, { increment: 'integer', hideParam: !0 }),
							n = this.addInPort(s),
							o = new D(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'dropdown', hidePort: !0, type: 'string', values: e }, n)
						if (
							((s.onLinkChanged = function() {
								o.setUiAttribs({ greyout: s.isLinked() })
							}),
							(r = this.addInPort(o)),
							void 0 !== i)
						) {
							r.set(i)
							const t = e.findIndex(t => t == i)
							n.setValue(t), (r.defaultValue = i), (n.defaultValue = t)
						}
					}
					return r
				}),
				(q.prototype.inSwitch = function(t, e, i, s) {
					var r = null
					if (s) {
						const i = new B(this, t, L.OP.OP_PORT_TYPE_STRING, { display: 'switch', hidePort: !0, type: 'string', values: e })
						r = this.addInPort(i)
					} else {
						const s = new B(this, t + ' index', L.OP.OP_PORT_TYPE_VALUE, { increment: 'integer', hideParam: !0 }),
							n = this.addInPort(s),
							o = new U(this, t, L.OP.OP_PORT_TYPE_STRING, { display: 'switch', hidePort: !0, type: 'string', values: e }, n)
						if (
							((s.onLinkChanged = function() {
								o.setUiAttribs({ greyout: s.isLinked() })
							}),
							(r = this.addInPort(o)),
							void 0 !== i)
						) {
							r.set(i)
							const t = e.findIndex(t => t == i)
							n.setValue(t), (r.defaultValue = i), (n.defaultValue = t)
						}
					}
					return r
				}),
				(q.prototype.inValueInt = q.prototype.inInt = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { increment: 'integer' }))
					return void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.inFile = function(t, e, i) {
					var s = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'file', filter: e }))
					return void 0 !== i && (s.set(i), (s.defaultValue = i)), s
				}),
				(q.prototype.inUrl = function(t, e, i) {
					var s = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_STRING, { display: 'file', filter: e }))
					return void 0 !== i && (s.set(i), (s.defaultValue = i)), s
				}),
				(q.prototype.inTexture = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_OBJECT, { display: 'texture', preview: !0 }))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.inObject = function(t, e, i) {
					var s = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_OBJECT, i))
					return void 0 !== e && s.set(e), s
				}),
				(q.prototype.inGradient = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'gradient', hidePort: !0 }))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.inArray = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_ARRAY))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.inValueSlider = q.prototype.inFloatSlider = function(t, e) {
					var i = this.addInPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'range' }))
					return void 0 !== e && (i.set(e), (i.defaultValue = e)), i
				}),
				(q.prototype.outFunction = q.prototype.outTrigger = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_FUNCTION))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.outValue = q.prototype.outNumber = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.outValueBool = q.prototype.outBool = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { display: 'bool' }))
					return void 0 !== e ? i.set(e) : i.set(!1), i
				}),
				(q.prototype.outValueString = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_VALUE, { type: 'string' }))
					return void 0 !== e && i.set(e), i
				}),
				(q.prototype.outString = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_STRING, { type: 'string' }))
					return void 0 !== e ? i.set(e) : i.set(''), i
				}),
				(q.prototype.outObject = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_OBJECT))
					return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i
				}),
				(q.prototype.outArray = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_ARRAY))
					return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i
				}),
				(q.prototype.outTexture = function(t, e) {
					var i = this.addOutPort(new B(this, t, L.OP.OP_PORT_TYPE_OBJECT, { preview: !0 }))
					return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i
				}),
				(q.prototype.inDynamic = function(t, e, i, s) {
					var r = new B(this, t, L.OP.OP_PORT_TYPE_DYNAMIC, i)
					return (
						(r.shouldLink = function(t, i) {
							if (e && m.isArray(e)) {
								for (var s = 0; s < e.length; s++) {
									if (t == this && i.type === e[s]) return !0
									if (i == this && t.type === e[s]) return !0
								}
								return !1
							}
							return !0
						}),
						this.addInPort(r),
						void 0 !== s && (r.set(s), (r.defaultValue = s)),
						r
					)
				}),
				(q.prototype.printInfo = function() {
					for (var t = 0; t < this.portsIn.length; t++) g.log('in: ' + this.portsIn[t].getName())
					for (var e in this.portsOut) g.log('out: ' + this.portsOut[e].getName())
				}),
				(q.prototype.getOutChilds = function() {
					var t = []
					for (var e in this.portsOut)
						for (var i in this.portsOut[e].links) this.portsOut[e].type == L.OP.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent)
					return t
				}),
				(q.prototype.markChilds = function() {
					for (var t in ((this.marked = !0), this.portsOut))
						for (var e in this.portsOut[t].links)
							(this.portsOut[t].parent.marked = !0), this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds()
				}),
				(q.prototype.deleteChilds = function() {
					var t = []
					for (var e in this.portsOut)
						for (var i in this.portsOut[e].links)
							this.portsOut[e].links[i].portIn.parent != this &&
								(this.portsOut[e].parent != this && t.push(this.portsOut[e].parent),
								t.push(this.portsOut[e].links[i].portIn.parent),
								this.portsOut[e].links[i].portIn.parent.deleteChilds())
					for (var s in t) this.patch.deleteOp(t[s].id)
				}),
				(q.prototype.removeLinks = function() {
					for (var t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks()
					for (var e = 0; e < this.portsOut.length; e++) this.portsOut[e].removeLinks()
				}),
				(q.prototype.countFittingPorts = function(t) {
					var e = 0
					for (var i in this.portsOut) $.canLink(t, this.portsOut[i]) && e++
					for (var s in this.portsIn) $.canLink(t, this.portsIn[s]) && e++
					return e
				}),
				(q.prototype.findFittingPort = function(t) {
					for (var e in this.portsOut) if ($.canLink(t, this.portsOut[e])) return this.portsOut[e]
					for (var i in this.portsIn) if ($.canLink(t, this.portsIn[i])) return this.portsIn[i]
				}),
				(q.prototype.getSerialized = function() {
					var t = {}
					this.opId && (t.opId = this.opId),
						(t.objName = this.objName),
						(t.id = this.id),
						(t.uiAttribs = this.uiAttribs),
						this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title,
						this.uiAttribs.hasOwnProperty('working') && 1 == this.uiAttribs.working && delete this.uiAttribs.working,
						(t.portsIn = []),
						(t.portsOut = [])
					for (var e = 0; e < this.portsIn.length; e++) t.portsIn.push(this.portsIn[e].getSerialized())
					for (var i in this.portsOut) t.portsOut.push(this.portsOut[i].getSerialized())
					return t
				}),
				(q.prototype.getFirstOutPortByType = function(t) {
					for (var e in this.portsOut) if (this.portsOut[e].type == t) return this.portsOut[e]
				}),
				(q.prototype.getPort = q.prototype.getPortByName = function(t) {
					for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].getName() == t) return this.portsIn[e]
					for (var i = 0; i < this.portsOut.length; i++) if (this.portsOut[i].getName() == t) return this.portsOut[i]
				}),
				(q.prototype.getPortById = function(t) {
					for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].id == t) return this.portsIn[e]
					for (var i = 0; i < this.portsOut.length; i++) if (this.portsOut[i].id == t) return this.portsOut[i]
				}),
				(q.prototype.updateAnims = function() {
					for (var t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim()
				}),
				(q.prototype.log = function() {
					if (!this.patch.silent) {
						var t = ['[op ' + this._shortOpName + ']']
						t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
					}
				}),
				(q.prototype.error = function() {
					if (!this.patch.silent) {
						var t = ['[op ' + this._shortOpName + ']']
						t.push.apply(t, arguments), Function.prototype.apply.apply(console.error, [console, t])
					}
				}),
				(q.prototype.warn = function() {
					if (!this.patch.silent) {
						var t = ['[op ' + this._shortOpName + ']']
						t.push.apply(t, arguments), Function.prototype.apply.apply(console.warn, [console, t])
					}
				}),
				(q.prototype.unLink = function() {
					for (var t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks()
					for (var e = 0; e < this.portsIn.length; e++) this.portsIn[e].removeLinks()
				}),
				(q.unLinkTempReLinkP1 = null),
				(q.unLinkTempReLinkP2 = null),
				(q.prototype.undoUnLinkTemporary = function() {
					if ((this.shakeLink && this.shakeLink.remove(), (this.shakeLink = null), this.oldLinks)) {
						for (var t = 0; t < this.oldLinks.length; t++)
							this.patch.link(this.oldLinks[t].in.parent, this.oldLinks[t].in.getName(), this.oldLinks[t].out.parent, this.oldLinks[t].out.getName())
						this.oldLinks.length = 0
					}
					;(q.unLinkTempReLinkP1 = null), (q.unLinkTempReLinkP2 = null)
				}),
				(q.prototype.unLinkTemporary = function() {
					var t = 0
					;(this.shakeLink = null),
						(this.oldLinks = []),
						this.portsIn.length > 0 &&
							this.portsIn[0].isLinked() &&
							this.portsOut.length > 0 &&
							this.portsOut[0].isLinked() &&
							this.portsIn[0].getType() == this.portsOut[0].getType() &&
							((q.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(this.portsIn[0])),
							(q.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(this.portsOut[0])))
					for (var e = 0; e < this.portsIn.length; e++)
						for (t = 0; t < this.portsIn[e].links.length; t++)
							this.oldLinks.push({ in: this.portsIn[e].links[t].portIn, out: this.portsIn[e].links[t].portOut })
					for (var i = 0; i < this.portsOut.length; i++)
						for (t = 0; t < this.portsOut[i].links.length; t++)
							this.oldLinks.push({ in: this.portsOut[i].links[t].portIn, out: this.portsOut[i].links[t].portOut })
					this.unLink(),
						q.unLinkTempReLinkP1 &&
							q.unLinkTempReLinkP2 &&
							(this.shakeLink = this.patch.link(
								q.unLinkTempReLinkP1.parent,
								q.unLinkTempReLinkP1.getName(),
								q.unLinkTempReLinkP2.parent,
								q.unLinkTempReLinkP2.getName()
							))
				}),
				(q.prototype.profile = function(t) {
					for (var e = 0; e < this.portsIn.length; e++)
						(this.portsIn[e]._onTriggered = this.portsIn[e]._onTriggeredProfiling), (this.portsIn[e].set = this.portsIn[e]._onSetProfiling)
				}),
				(q.prototype.findParent = function(t) {
					for (var e = 0; e < this.portsIn.length; e++)
						if (this.portsIn[e].isLinked()) {
							if (this.portsIn[e].links[0].portOut.parent.objName == t) return this.portsIn[e].links[0].portOut.parent
							var i
							if ((i = this.portsIn[e].links[0].portOut.parent.findParent(t))) return i
						}
					return null
				}),
				(q.prototype.cleanUp = function() {
					if (this._instances) {
						for (var t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete()
						this._instances.length = 0
					}
				}),
				(q.prototype.instanced = function(t) {
					if (0 === this.patch.instancing.numCycles()) return !1
					var e = 0,
						i = 0
					if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
						for (
							this._instances || (this._instances = []),
								g.log('creating instances of ', this.objName, this.patch.instancing.numCycles(), this._instances.length),
								this._instances.length = this.patch.instancing.numCycles(),
								e = 0;
							e < this._instances.length;
							e++
						) {
							;(this._instances[e] = this.patch.createOp(this.objName, !0)),
								(this._instances[e].instanced = function() {
									return !1
								}),
								this._instances[e].uiAttr(this.uiAttribs)
							for (var s = 0; s < this.portsOut.length; s++)
								this.portsOut[s].type == L.OP.OP_PORT_TYPE_FUNCTION &&
									(this._instances[e].getPortByName(this.portsOut[s].name).trigger = this.portsOut[s].trigger.bind(this.portsOut[s]))
						}
						for (i = 0; i < this.portsIn.length; i++) (this.portsIn[i].onChange = null), (this.portsIn[i].onValueChanged = null)
					}
					for (i = 0; i < this.portsIn.length; i++)
						(this.portsIn[i].type != L.OP.OP_PORT_TYPE_VALUE && this.portsIn[i].type != L.OP.OP_PORT_TYPE_ARRAY) ||
							this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()),
							this.portsIn[i].type,
							L.OP.OP_PORT_TYPE_FUNCTION
					for (i = 0; i < this.portsOut.length; i++)
						this.portsOut[i].type == L.OP.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get())
					return !0
				}),
				(q.prototype.initInstancable = function() {}),
				(q.prototype.setValues = function(t) {
					for (var e in t) {
						var i = this.getPortByName(e)
						i ? i.set(t[e]) : g.log('op.setValues: port not found:', e)
					}
				}),
				(q.prototype.setError = q.prototype.error = function(t, e) {
					if (void 0 === e) this.uiAttr({ error: t })
					else if (this.errors[t] != e) {
						;(this.errors[t] = e), e || delete this.errors[t]
						var i = []
						for (var s in this.errors) i.push(this.errors[s])
						this.uiAttr({ errors: i }), console.log(i)
					}
				}),
				(q.prototype.setHint = function(t) {
					t != this.uiAttribs.hint && this.uiAttr({ hint: t })
				}),
				(q.prototype.setWarning = function(t) {
					t != this.uiAttribs.warning && this.uiAttr({ warning: t })
				}),
				(q.prototype.addListener = q.prototype.addEventListener = function(t, e) {
					this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : (this._eventCallbacks[t] = [e])
				}),
				(q.prototype.hasEventListener = function(t, e) {
					if (t && e) {
						if (this._eventCallbacks[t]) return -1 != this._eventCallbacks[t].indexOf(e)
					} else g.log('hasListener: missing parameters')
				}),
				(q.prototype.removeEventListener = function(t, e) {
					if (this._eventCallbacks[t]) {
						var i = this._eventCallbacks[t].indexOf(e)
						;-1 == i ? g.log('eventlistener ' + t + ' not found...') : this._eventCallbacks[t].slice(i)
					}
				}),
				(q.prototype.fireEvent = function(t, e) {
					if (this._eventCallbacks[t]) for (var i = 0; i < this._eventCallbacks[t].length; i++) this._eventCallbacks[t][i] && this._eventCallbacks[t][i](e)
					this.onUiAttrChange && 'onUiAttribsChange' == t && this.onUiAttrChange(e)
				}),
				(q.prototype.setEnabled = function(t) {
					;(this.enabled = t), this.fireEvent('onEnabledChange', t)
				}),
				(q.prototype.setPortGroup = function(t, e) {
					for (var i = 0; i < e.length; i++) e[i] && e[i].setUiAttribs ? e[i].setUiAttribs({ group: t }) : console.error('setPortGroup: invalid port!')
				}),
				(q.prototype.setUiAxisPorts = function(t, e, i) {
					t && t.setUiAttribs({ axis: 'X' }), e && e.setUiAttribs({ axis: 'Y' }), i && i.setUiAttribs({ axis: 'Z' })
				}),
				(q.prototype.removePort = function(t) {
					for (var e = 0; e < this.portsIn.length; e++)
						if (this.portsIn[e] == t) return this.portsIn.splice(e, 1), this.fireEvent('onUiAttribsChange', {}), void this.fireEvent('onPortRemoved', {})
				}),
				(q.prototype.checkLinkTimeWarnings = function() {
					function t(e, i, s) {
						for (var r = 0; r < e.portsIn.length; r++)
							if (e.portsIn[r].type == i && e.portsIn[r].isLinked())
								for (var n = e.portsIn[r], o = 0; o < n.links.length; o++)
									if (n.links[o]) {
										if (n.links[o].portOut.parent.objName.indexOf(s) > -1) return !0
										if (t(n.links[o].portOut.parent, i, s)) return !0
									}
						return !1
					}
					var e,
						i = null,
						s = !0
					if (
						(s &&
							0 == this.objName.indexOf('Ops.Gl.TextureEffects') &&
							(e = this).portsIn.length > 0 &&
							e.portsIn[0].type == L.OP.OP_PORT_TYPE_FUNCTION &&
							-1 == this.objName.indexOf('TextureEffects.ImageCompose') &&
							((s = t(this, L.OP.OP_PORT_TYPE_FUNCTION, 'TextureEffects.ImageCompose')) || (i = CABLES.UI.TEXTS.working_connected_to + 'ImageCompose')),
						this._needsParentOp &&
							s &&
							((s = t(this, L.OP.OP_PORT_TYPE_OBJECT, this._needsParentOp)) || (i = CABLES.UI.TEXTS.working_connected_to + this._needsParentOp)),
						this._needsLinkedToWork.length > 0)
					)
						for (var r = 0; r < this._needsLinkedToWork.length; r++) {
							var n = this._needsLinkedToWork[r]
							n
								? n.isLinked() || ((s = !1), i ? (i += ', ') : (i = CABLES.UI.TEXTS.working_connected_needs_connections_to), (i += n.name.toUpperCase()))
								: console.warn('[needsLinkedToWork] port not found')
						}
					s ? this.uiAttribs.working || this.setUiAttrib({ working: !0, notWorkingMsg: null }) : this.setUiAttrib({ working: s, notWorkingMsg: i })
				}),
				(q.prototype._checkLinksNeededToWork = function() {}),
				(q.prototype.toWorkNeedsParent = function(t) {
					this.patch.isEditorMode() && (this._needsParentOp = t)
				}),
				(q.prototype.toWorkPortsNeedToBeLinked = function() {
					if (this.patch.isEditorMode())
						for (var t = 0; t < arguments.length; t++) -1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t])
				}),
				(q.prototype.toWorkPortsNeedToBeLinkedReset = function() {
					this.patch.isEditorMode() && ((this._needsLinkedToWork.length = 0), this.checkLinkTimeWarnings())
				}),
				(q.prototype.initVarPorts = function() {
					for (var t = 0; t < this.portsIn.length; t++) this.portsIn[t].getVariableName() && this.portsIn[t].setVariable(this.portsIn[t].getVariableName())
				}),
				(q.prototype.refreshParams = function() {
					this.patch && this.patch.isEditorMode() && gui.patch().refreshOpParams(this)
				})
		}
		;(q.getNamespaceClassName = function(t) {
			return t
				? t.startsWith('Ops.Gl')
					? 'gl'
					: t.startsWith('Ops.WebAudio')
					? 'audio'
					: t.startsWith('Ops.Devices')
					? 'devices'
					: t.startsWith('Ops.Html')
					? 'html'
					: t.startsWith('Ops.Sidebar')
					? 'html'
					: t.startsWith('Ops.Math')
					? 'math'
					: t.startsWith('Ops.User')
					? 'user'
					: 'default'
				: 'default'
		}),
			(q.isSubpatchOp = function(t) {
				return 'Ops.Ui.Patch' == t || 'Ops.Ui.SubPatch' == t
			})
		const Q = new (function() {
			;(this.profileUniformCount = 0),
				(this.profileShaderBinds = 0),
				(this.profileUniformCount = 0),
				(this.profileShaderCompiles = 0),
				(this.profileVideosPlaying = 0),
				(this.profileMVPMatrixCount = 0),
				(this.profileEffectBuffercreate = 0),
				(this.profileShaderGetUniform = 0),
				(this.profileFrameBuffercreate = 0),
				(this.profileMeshSetGeom = 0)
		})()
		var J = null,
			Z = null,
			tt = null
		const et = function(t, e) {
			if (!t) throw 'no cgl'
			;(this._cgl = t),
				(this.tex = this._cgl.gl.createTexture()),
				(this.id = A()),
				(this.width = 0),
				(this.height = 0),
				(this.flip = !0),
				(this.shadowMap = !1),
				(this.anisotropic = 0),
				(this.filter = et.FILTER_NEAREST),
				(this.wrap = et.WRAP_CLAMP_TO_EDGE),
				(this.texTarget = this._cgl.gl.TEXTURE_2D),
				e && e.type && (this.texTarget = e.type),
				(this.textureType = et.TYPE_DEFAULT),
				(this.unpackAlpha = !0),
				(this._fromData = !0),
				(this.name = 'unknown'),
				e
					? ((this.name = e.name || this.name),
					  e.isDepthTexture && (this.textureType = et.TYPE_DEPTH),
					  e.isFloatingPointTexture && (this.textureType = et.TYPE_FLOAT),
					  'textureType' in e && (this.textureType = e.textureType),
					  'filter' in e && (this.filter = e.filter),
					  'wrap' in e && (this.wrap = e.wrap),
					  'unpackAlpha' in e && (this.unpackAlpha = e.unpackAlpha),
					  'flip' in e && (this.flip = e.flip),
					  'shadowMap' in e && (this.shadowMap = e.shadowMap),
					  'anisotropic' in e && (this.anisotropic = e.anisotropic))
					: (e = { width: 8, height: 8 }),
				this.setSize(e.width, e.height)
		}
		;(et.prototype.compareSettings = function(t) {
			return (
				!!t &&
				t.width == this.width &&
				t.height == this.height &&
				t.filter == this.filter &&
				t.wrap == this.wrap &&
				t.textureType == this.textureType &&
				t.unpackAlpha == this.unpackAlpha &&
				t.flip == this.flip
			)
		}),
			(et.prototype.clone = function() {
				var t = new et(this._cgl, {
					name: this.name,
					filter: this.filter,
					wrap: this.wrap,
					textureType: this.textureType,
					unpackAlpha: this.unpackAlpha,
					flip: this.flip,
					width: this.width,
					height: this.height
				})
				return this.compareSettings(t) || (console.error('Cloned texture settings do not compare!'), g.log(this), g.log(t)), t
			}),
			(et.prototype.setSize = function(t, e) {
				if (
					((t != t || t <= 0 || !t) && (t = 8),
					(e != e || e <= 0 || !e) && (e = 8),
					(t = Math.floor(t)),
					(e = Math.floor(e)),
					this.width != t || this.height != e)
				) {
					;(this.width = t), (this.height = e), this._cgl.gl.bindTexture(this.texTarget, this.tex), Q.profileTextureResize++
					if (
						(this.textureType != et.TYPE_FLOAT ||
							this.filter != et.FILTER_LINEAR ||
							this._cgl.gl.getExtension('OES_texture_float_linear') ||
							(console.warn('this graphics card does not support floating point texture linear interpolation!'), (this.filter = et.FILTER_NEAREST)),
						this._setFilter(),
						this.textureType == et.TYPE_FLOAT)
					)
						if (1 == this._cgl.glVersion)
							if (this._cgl.glUseHalfFloatTex) {
								var i = this._cgl.gl.getExtension('OES_texture_half_float')
								if (1 == this._cgl.glVersion && !i) throw 'no half float texture extension'
								this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, i.HALF_FLOAT_OES, null)
							} else {
								i = this._cgl.gl.getExtension('OES_texture_float')
								this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null)
							}
						else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null)
					else if (this.textureType == et.TYPE_DEPTH)
						if (1 == this._cgl.glVersion) {
							var s = this._cgl.gl.DEPTH_COMPONENT
							this._cgl.gl.texImage2D(this.texTarget, 0, s, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)
						} else {
							s = this._cgl.gl.DEPTH_COMPONENT32F
							this._cgl.gl.texImage2D(this.texTarget, 0, s, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null)
						}
					else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null)
					this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null)
				}
			}),
			(et.prototype.initFromData = function(t, e, i, s, r) {
				;(this.filter = s),
					(this.wrap = r),
					null == s && (this.filter = et.FILTER_LINEAR),
					null == r && (this.wrap = et.CLAMP_TO_EDGE),
					(this.width = e),
					(this.height = i),
					(this._fromData = !0),
					this._cgl.gl.bindTexture(this.texTarget, this.tex),
					this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
					this._setFilter(),
					this.updateMipMap(),
					this._cgl.gl.bindTexture(this.texTarget, null)
			}),
			(et.prototype.updateMipMap = function() {
				;(2 != this._cgl.glVersion && !this.isPowerOfTwo()) || this.filter != et.FILTER_MIPMAP || this._cgl.gl.generateMipmap(this.texTarget)
			}),
			(et.prototype.initTexture = function(t, e) {
				;(this._fromData = !1),
					this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha),
					t.width && (this.width = t.width),
					t.height && (this.height = t.height),
					e && (this.filter = e),
					this._cgl.gl.bindTexture(this.texTarget, this.tex),
					this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !this.flip),
					this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
					this._setFilter(),
					this.updateMipMap(),
					this._cgl.gl.bindTexture(this.texTarget, null),
					this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)
			}),
			(et.prototype.delete = function() {
				;(this.width = 0), (this.height = 0), Q.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex)
			}),
			(et.prototype.isPowerOfTwo = function() {
				return et.isPowerOfTwo(this.width) && et.isPowerOfTwo(this.height)
			}),
			(et.prototype.printInfo = function() {
				g.log(this.getInfo())
			}),
			(et.prototype.getInfoReadable = function() {
				var t = this.getInfo(),
					e = ''
				for (var i in ((t.name = t.name.substr(0, t.name.indexOf('?rnd='))), t)) e += '* ' + i + ':  **' + t[i] + '**\n'
				return e
			}),
			(et.prototype.getInfo = function() {
				var t = {}
				;(t.name = this.name), (t['power of two'] = this.isPowerOfTwo()), (t.size = this.width + ' x ' + this.height)
				var e = this.texTarget
				return (
					this.texTarget == this._cgl.gl.TEXTURE_2D && (e = 'TEXTURE_2D'),
					(t.target = e),
					(t.unpackAlpha = this.unpackAlpha),
					this.textureType == et.TYPE_FLOAT
						? (t.textureType = 'TYPE_FLOAT')
						: this.textureType == et.TYPE_DEPTH
						? (t.textureType = 'TYPE_DEPTH')
						: this.textureType == et.TYPE_DEFAULT
						? (t.textureType = 'TYPE_DEFAULT')
						: (t.textureType = 'UNKNOWN'),
					this.wrap == et.WRAP_CLAMP_TO_EDGE
						? (t.wrap = 'CLAMP_TO_EDGE')
						: this.wrap == et.WRAP_REPEAT
						? (t.wrap = 'WRAP_REPEAT')
						: this.wrap == et.WRAP_MIRRORED_REPEAT
						? (t.wrap = 'WRAP_MIRRORED_REPEAT')
						: (t.wrap = 'UNKNOWN'),
					this.filter == et.FILTER_NEAREST
						? (t.filter = 'FILTER_NEAREST')
						: this.filter == et.FILTER_LINEAR
						? (t.filter = 'FILTER_LINEAR')
						: this.filter == et.FILTER_MIPMAP
						? (t.filter = 'FILTER_MIPMAP')
						: (t.filter = 'UNKNOWN'),
					t
				)
			}),
			(et.prototype._setFilter = function() {
				if (
					(this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha),
					this.shadowMap &&
						(g.log('shadowmap tex'),
						this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE),
						this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)),
					this.textureType == et.TYPE_FLOAT &&
						this.filter == et.FILTER_MIPMAP &&
						(g.log('texture: HDR and mipmap filtering at the same time is not possible'), (this.filter = et.FILTER_LINEAR)),
					1 != this._cgl.glVersion || this.isPowerOfTwo())
				) {
					if (
						(this.wrap == et.WRAP_CLAMP_TO_EDGE
							? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE),
							  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE))
							: this.wrap == et.WRAP_REPEAT
							? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT),
							  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT))
							: this.wrap == et.WRAP_MIRRORED_REPEAT &&
							  (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT),
							  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)),
						this.filter == et.FILTER_NEAREST)
					)
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
							this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST)
					else if (this.filter == et.FILTER_LINEAR)
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR),
							this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR)
					else {
						if (this.filter != et.FILTER_MIPMAP) throw (g.log('unknown texture filter!', this.filter), new Error('unknown texture filter!' + this.filter))
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR),
							this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
					}
					if (this.anisotropic) {
						var t = this._cgl.gl.getExtension('EXT_texture_filter_anisotropic')
						if (t) {
							var e = this._cgl.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
							this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, t.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e, this.anisotropic))
						}
					}
				} else
					this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST),
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE),
						this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE),
						(this.filter = et.FILTER_NEAREST),
						(this.wrap = et.WRAP_CLAMP_TO_EDGE)
			}),
			(et.load = function(t, e, i, s) {
				var r = t.patch.loading.start('texture', e),
					n = new et(t)
				return (
					(n.name = e),
					t.patch.isEditorMode() && gui.jobs().start({ id: 'loadtexture' + r, title: 'loading texture (' + e + ')' }),
					(n.image = new Image()),
					(n.image.crossOrigin = 'anonymous'),
					s && s.hasOwnProperty('filter') && (n.filter = s.filter),
					s && s.hasOwnProperty('flip') && (n.flip = s.flip),
					s && s.hasOwnProperty('wrap') && (n.wrap = s.wrap),
					s && s.hasOwnProperty('anisotropic') && (n.anisotropic = s.anisotropic),
					s && s.hasOwnProperty('unpackAlpha') && (n.unpackAlpha = s.unpackAlpha),
					(n.image.onabort = n.image.onerror = function(e) {
						g.warn('[cgl.texture.load] error loading texture', e), t.patch.loading.finished(r)
						i && i({ error: !0 }), t.patch.isEditorMode() && gui.jobs().finish('loadtexture' + r)
					}),
					(n.image.onload = function(e) {
						n.initTexture(n.image), t.patch.loading.finished(r), t.patch.isEditorMode() && gui.jobs().finish('loadtexture' + r), i && i()
					}),
					(n.image.src = e),
					n
				)
			}),
			(et.getTempTexture = function(t) {
				return J || (J = et.getTemporaryTexture(t, 256, et.FILTER_LINEAR, et.REPEAT)), J
			}),
			(et.getEmptyTexture = function(t) {
				if ((t || console.error('[getEmptyTexture] no cgl!'), t.tempTextureEmpty)) return t.tempTextureEmpty
				t.tempTextureEmpty = new et(t)
				var e = new Uint8Array(256)
				return t.tempTextureEmpty.initFromData(e, 8, 8, et.FILTER_NEAREST, et.WRAP_REPEAT), t.tempTextureEmpty
			}),
			(et.getRandomTexture = function(t) {
				if (Z) return Z
				const e = new Uint8Array(262144)
				for (var i = 0; i < 65536; i++)
					(e[4 * i + 0] = 255 * Math.random()), (e[4 * i + 1] = 255 * Math.random()), (e[4 * i + 2] = 255 * Math.random()), (e[4 * i + 3] = 255)
				return (Z = new et(t)).initFromData(e, 256, 256, et.FILTER_NEAREST, et.WRAP_REPEAT), Z
			}),
			(et.getTempGradientTexture = function(t) {
				if (tt) return tt
				var e = new et(t)
				for (var i = new Uint8Array(262144), s = 0; s < 256; s++)
					for (var r = 0; r < 256; r++)
						(i[4 * (r + 256 * s) + 0] = i[4 * (r + 256 * s) + 1] = i[4 * (r + 256 * s) + 2] = 255 - s), (i[4 * (r + 256 * s) + 3] = 255)
				return e.initFromData(i, 256, 256, et.FILTER_NEAREST, et.WRAP_REPEAT), (tt = e), e
			}),
			(et.getTemporaryTexture = function(t, e, i, s) {
				for (var r = new et(t), n = [], o = 0; o < e; o++)
					for (var a = 0; a < e; a++)
						(a + o) % 64 < 32
							? (n.push(200 + (o / e) * 25 + (a / e) * 25), n.push(200 + (o / e) * 25 + (a / e) * 25), n.push(200 + (o / e) * 25 + (a / e) * 25))
							: (n.push(40 + (o / e) * 25 + (a / e) * 25), n.push(40 + (o / e) * 25 + (a / e) * 25), n.push(40 + (o / e) * 25 + (a / e) * 25)),
							n.push(255)
				var h = new Uint8Array(n)
				return r.initFromData(h, e, e, i, s), r
			}),
			(et.createFromImage = function(t, e, i) {
				var s = new et(t, (i = i || {}))
				return (s.flip = !1), (s.image = e), (s.width = e.width), (s.height = e.height), s.initTexture(e, i.filter), s
			}),
			(et.fromImage = function(t, e, i, s) {
				g.error('deprecated texture from image...')
				var r = new et(t)
				return (r.flip = !1), i && (r.filter = i), s && (r.wrap = s), (r.image = e), r.initTexture(e), r
			}),
			(et.isPowerOfTwo = function(t) {
				return (
					1 == t ||
					2 == t ||
					4 == t ||
					8 == t ||
					16 == t ||
					32 == t ||
					64 == t ||
					128 == t ||
					256 == t ||
					512 == t ||
					1024 == t ||
					2048 == t ||
					4096 == t ||
					8192 == t ||
					16384 == t
				)
			}),
			(et.FILTER_NEAREST = 0),
			(et.FILTER_LINEAR = 1),
			(et.FILTER_MIPMAP = 2),
			(et.WRAP_REPEAT = 0),
			(et.WRAP_MIRRORED_REPEAT = 1),
			(et.WRAP_CLAMP_TO_EDGE = 2),
			(et.TYPE_DEFAULT = 0),
			(et.TYPE_DEPTH = 1),
			(et.TYPE_FLOAT = 2)
		const it = function(t, e, i, s) {
			;(this.Framebuffer2DrawTargetsDefault = null),
				(this.Framebuffer2BlittingFramebuffer = null),
				(this.Framebuffer2FinalFramebuffer = null),
				(this._cgl = t),
				(this._width = 0),
				(this._height = 0),
				(this._depthRenderbuffer = null),
				(this._frameBuffer = null),
				(this._textureFrameBuffer = null),
				(this._colorRenderbuffers = []),
				(this._drawTargetArray = []),
				this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()),
				this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()),
				this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [t.gl.COLOR_ATTACHMENT0]),
				(this._options = s || { isFloatingPointTexture: !1 }),
				this._options.hasOwnProperty('numRenderBuffers') || (this._options.numRenderBuffers = 1),
				this._options.hasOwnProperty('depth') || (this._options.depth = !0),
				this._options.hasOwnProperty('clear') || (this._options.clear = !0),
				this._options.hasOwnProperty('multisampling') || ((this._options.multisampling = !1), (this._options.multisamplingSamples = 0)),
				this._options.multisamplingSamples &&
					(this._cgl.gl.MAX_SAMPLES
						? (this._options.multisamplingSamples = Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES), this._options.multisamplingSamples))
						: (this._options.multisamplingSamples = 0)),
				this._options.hasOwnProperty('filter') || (this._options.filter = et.FILTER_LINEAR),
				(this._numRenderBuffers = this._options.numRenderBuffers),
				(this._colorTextures = [])
			for (var r = 0; r < this._numRenderBuffers; r++)
				this._colorTextures[r] = new et(t, {
					name: 'framebuffer2 texture ' + r,
					isFloatingPointTexture: this._options.isFloatingPointTexture,
					filter: this._options.filter,
					wrap: this._options.wrap
				})
			var n = et.FILTER_NEAREST
			this._options.shadowMap && (n = et.FILTER_LINEAR),
				(this._textureDepth = new et(t, { name: 'framebuffer2 depth texture', isDepthTexture: !0, filter: n, shadowMap: this._options.shadowMap || !1 })),
				this.setSize(e || 512, i || 512)
		}
		;(it.prototype.getWidth = function() {
			return this._width
		}),
			(it.prototype.getHeight = function() {
				return this._height
			}),
			(it.prototype.getGlFrameBuffer = function() {
				return this._frameBuffer
			}),
			(it.prototype.getDepthRenderBuffer = function() {
				return this._depthRenderbuffer
			}),
			(it.prototype.getTextureColor = function() {
				return this._colorTextures[0]
			}),
			(it.prototype.getTextureColorNum = function(t) {
				return this._colorTextures[t]
			}),
			(it.prototype.getTextureDepth = function() {
				return this._textureDepth
			}),
			(it.prototype.setFilter = function(t) {
				for (var e = 0; e < this._numRenderBuffers; e++) (this._colorTextures[e].filter = t), this._colorTextures[e].setSize(this._width, this._height)
			}),
			(it.prototype.delete = it.prototype.dispose = function() {
				for (var t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete()
				this._textureDepth.delete()
				for (t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t])
				this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
					this._cgl.gl.deleteFramebuffer(this._frameBuffer),
					this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
			}),
			(it.prototype.setSize = function(t, e) {
				if (((this._width = Math.floor(t)), (this._height = Math.floor(e)), Q.profileFrameBuffercreate++, this._frameBuffer)) {
					for (var i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i])
					this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
						this._cgl.gl.deleteFramebuffer(this._frameBuffer),
						this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
				}
				;(this._frameBuffer = this._cgl.gl.createFramebuffer()), (this._textureFrameBuffer = this._cgl.gl.createFramebuffer())
				var s = this._options.depth
				for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height)
				for (i = 0; i < this._numRenderBuffers; i++) {
					var r = this._cgl.gl.createRenderbuffer()
					this._cgl.gl.getExtension('EXT_color_buffer_float')
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
						this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, r),
						this._options.isFloatingPointTexture
							? this._options.multisampling
								? this._cgl.gl.renderbufferStorageMultisample(
										this._cgl.gl.RENDERBUFFER,
										this._options.multisamplingSamples,
										this._cgl.gl.RGBA32F,
										this._width,
										this._height
								  )
								: this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height)
							: this._options.multisampling
							? this._cgl.gl.renderbufferStorageMultisample(
									this._cgl.gl.RENDERBUFFER,
									this._options.multisamplingSamples,
									this._cgl.gl.RGBA8,
									this._width,
									this._height
							  )
							: this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height),
						this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, r),
						(this._colorRenderbuffers[i] = r)
				}
				this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer)
				for (i = 0; i < this._numRenderBuffers; i++)
					this._cgl.gl.framebufferTexture2D(
						this._cgl.gl.FRAMEBUFFER,
						this._cgl.gl.COLOR_ATTACHMENT0 + i,
						this._cgl.gl.TEXTURE_2D,
						this._colorTextures[i].tex,
						0
					)
				this._options.depth &&
					this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0),
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
					s &&
						(this._textureDepth.setSize(this._width, this._height),
						(this._depthRenderbuffer = this._cgl.gl.createRenderbuffer()),
						this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer),
						this._options.isFloatingPointTexture,
						this._options.multisampling
							? this._cgl.gl.renderbufferStorageMultisample(
									this._cgl.gl.RENDERBUFFER,
									this._options.multisamplingSamples,
									this._cgl.gl.DEPTH_COMPONENT32F,
									this._width,
									this._height
							  )
							: this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT32F, this._width, this._height),
						this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)),
					(this._drawTargetArray.length = 0)
				for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i)
				if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) throw 'Invalid framebuffer'
				var n = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER)
				switch (n) {
					case this._cgl.gl.FRAMEBUFFER_COMPLETE:
						break
					case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
						throw (g.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...'), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT'))
					case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
						throw (g.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'))
					case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
						throw (g.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS'))
					case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
						throw (g.log('FRAMEBUFFER_UNSUPPORTED'), new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED'))
					default:
						throw (g.log('incomplete framebuffer', n), new Error('Incomplete framebuffer: ' + n))
				}
				this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)
			}),
			(it.prototype.renderStart = function() {
				this._cgl.pushModelMatrix(),
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
					this._cgl.pushGlFrameBuffer(this._frameBuffer),
					this._cgl.pushFrameBuffer(this),
					this._cgl.pushPMatrix(),
					this._cgl.gl.viewport(0, 0, this._width, this._height),
					this._cgl.gl.drawBuffers(this._drawTargetArray),
					this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT))
			}),
			(it.prototype.renderEnd = function() {
				if ((this._cgl.popPMatrix(), this._numRenderBuffers <= 1))
					this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer),
						this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer),
						this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]),
						this._cgl.gl.blitFramebuffer(
							0,
							0,
							this._width,
							this._height,
							0,
							0,
							this._width,
							this._height,
							this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT,
							this._cgl.gl.NEAREST
						)
				else {
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
						this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer),
						this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
						this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0)
					for (var t = 0; t < this._numRenderBuffers; t++) {
						this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
							this._cgl.gl.framebufferRenderbuffer(
								this._cgl.gl.FRAMEBUFFER,
								this._cgl.gl.COLOR_ATTACHMENT0,
								this._cgl.gl.RENDERBUFFER,
								this._colorRenderbuffers[t]
							),
							this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
							this._cgl.gl.framebufferTexture2D(
								this._cgl.gl.FRAMEBUFFER,
								this._cgl.gl.COLOR_ATTACHMENT0,
								this._cgl.gl.TEXTURE_2D,
								this._colorTextures[t].tex,
								0
							),
							this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
							this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
							this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
							this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1])
						var e = this._cgl.gl.COLOR_BUFFER_BIT
						0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT),
							this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, e, this._cgl.gl.NEAREST)
					}
				}
				if (
					(this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()),
					this._cgl.popFrameBuffer(),
					this._cgl.popModelMatrix(),
					this._cgl.resetViewPort(),
					this._colorTextures[0].filter == et.FILTER_MIPMAP)
				)
					for (t = 0; t < this._numRenderBuffers; t++)
						this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex),
							this._colorTextures[t].updateMipMap(),
							this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
			})
		s(1)
		class st {
			constructor(t) {
				;(this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]),
					(this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]),
					(this._center = []),
					(this._size = []),
					(this._first = !0),
					(this._wireMesh = null),
					t && this.apply(t)
			}
			get maxAxis() {
				return this._maxAxis
			}
			get size() {
				return this._size
			}
			get center() {
				return this._center
			}
			get x() {
				return this._center[0]
			}
			get y() {
				return this._center[1]
			}
			get z() {
				return this._center[2]
			}
			get minX() {
				return this._min[0]
			}
			get minY() {
				return this._min[1]
			}
			get minZ() {
				return this._min[2]
			}
			get maxX() {
				return this._max[0]
			}
			get maxY() {
				return this._max[1]
			}
			get maxZ() {
				return this._max[2]
			}
			apply(t, e) {
				if (t) {
					if (t instanceof st) {
						const e = t
						this.applyPos(e.maxX, e.maxY, e.maxZ), this.applyPos(e.minX, e.minY, e.minZ)
					} else {
						var i = 0
						for (i = 0; i < t.vertices.length; i += 3)
							t.vertices[i + 0] == t.vertices[i + 0] && this.applyPos(t.vertices[i + 0], t.vertices[i + 1], t.vertices[i + 2])
					}
					this.calcCenterSize()
				} else console.warn('[boundingbox] no geom/vertices', t)
			}
			copy() {
				return new st(this)
			}
			get changed() {
				return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE)
			}
			applyPos(t, e, i) {
				if (this._first)
					return (this._max[0] = t), (this._max[1] = e), (this._max[2] = i), (this._min[0] = t), (this._min[1] = e), (this._min[2] = i), void (this._first = !1)
				;(this._max[0] = Math.max(this._max[0], t)),
					(this._max[1] = Math.max(this._max[1], e)),
					(this._max[2] = Math.max(this._max[2], i)),
					(this._min[0] = Math.min(this._min[0], t)),
					(this._min[1] = Math.min(this._min[1], e)),
					(this._min[2] = Math.min(this._min[2], i))
			}
			calcCenterSize() {
				;(this._size[0] = this._max[0] - this._min[0]),
					(this._size[1] = this._max[1] - this._min[1]),
					(this._size[2] = this._max[2] - this._min[2]),
					(this._center[0] = (this._min[0] + this._max[0]) / 2),
					(this._center[1] = (this._min[1] + this._max[1]) / 2),
					(this._center[2] = (this._min[2] + this._max[2]) / 2),
					(this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1])))
			}
			mulMat4(t) {
				vec3.transformMat4(this._max, this._max, t), vec3.transformMat4(this._min, this._min, t), this.calcCenterSize()
			}
			render(t, e) {
				this._wireMesh || (this._wireMesh = new CGL.WireCube(t)),
					t.pushModelMatrix(),
					mat4.translate(t.mMatrix, t.mMatrix, this._center),
					this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2),
					t.popModelMatrix()
			}
		}
		const rt = function(t) {
			;(this.name = t),
				(this.faceVertCount = 3),
				(this._vertices = []),
				(this.verticesIndices = []),
				(this.texCoords = new Float32Array()),
				(this.texCoordsIndices = []),
				(this.vertexNormals = []),
				(this.tangents = []),
				(this.biTangents = []),
				(this.barycentrics = []),
				(this.morphTargets = []),
				(this.vertexColors = []),
				(this._attributes = {}),
				(this.glPrimitive = null),
				Object.defineProperty(this, 'vertices', {
					get() {
						return this._vertices
					},
					set(t) {
						this.setVertices(t)
					}
				})
		}
		;(rt.prototype.clear = function() {
			;(this.vertices = new Float32Array([])),
				(this.verticesIndices.length = 0),
				(this.texCoords = new Float32Array([])),
				(this.texCoordsIndices.length = 0),
				(this.vertexNormals = new Float32Array([]))
		}),
			(rt.prototype.getAttributes = function() {
				return this._attributes
			}),
			(rt.prototype.getAttribute = function(t) {
				for (var e in this._attributes) if (this._attributes[e].name == t) return this._attributes[e]
				return null
			}),
			(rt.prototype.setAttribute = function(t, e, i) {
				var s = ''
				1 == i ? (s = 'float') : 2 == i ? (s = 'vec2') : 3 == i ? (s = 'vec3') : 4 == i && (s = 'vec4')
				var r = { name: t, data: e, itemSize: i, type: s }
				this._attributes[t] = r
			}),
			(rt.prototype.setVertices = function(t) {
				t instanceof Float32Array ? (this._vertices = t) : (this._vertices = new Float32Array(t))
			}),
			(rt.prototype.setTexCoords = function(t) {
				t instanceof Float32Array ? (this.texCoords = t) : (this.texCoords = new Float32Array(t))
			}),
			(rt.prototype.calcNormals = function(t) {
				t || this.unIndex(), this.calculateNormals({})
			}),
			(rt.prototype.setPointVertices = function(t) {
				if (t.length % 3 == 0) {
					t instanceof Float32Array ? (this.vertices = t) : (this.vertices = new Float32Array(t)),
						this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array((t.length / 3) * 2)),
						(this.verticesIndices.length = t.length / 3)
					for (var e = 0; e < t.length / 3; e++) (this.verticesIndices[e] = e), (this.texCoords[2 * e] = 0), (this.texCoords[2 * e + 1] = 0)
				} else console.error('CGL MESH : SetPointVertices: Array must be multiple of three.')
			}),
			(rt.prototype.merge = function(t) {
				if (t) {
					var e = this.verticesIndices.length,
						i = this.vertices.length / 3
					this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length
					for (var s = 0; s < t.verticesIndices.length; s++) this.verticesIndices[e + s] = t.verticesIndices[s] + i
					;(this.vertices = m.float32Concat(this.vertices, t.vertices)),
						(this.texCoords = m.float32Concat(this.texCoords, t.texCoords)),
						(this.vertexNormals = m.float32Concat(this.vertexNormals, t.vertexNormals)),
						(this.tangents = m.float32Concat(this.vertexNormals, t.tangents)),
						(this.bitangents = m.float32Concat(this.vertexNormals, t.bitangents))
				}
			}),
			(rt.prototype.copy = function() {
				var t = 0,
					e = new rt()
				if (((e.faceVertCount = this.faceVertCount), e.setVertices(this._vertices.slice(0)), this.verticesIndices))
					for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++)
						e.verticesIndices[t] = this.verticesIndices[t]
				for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t]
				for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++)
					e.texCoordsIndices[t] = this.texCoordsIndices[t]
				for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++)
					e.vertexNormals[t] = this.vertexNormals[t]
				if (this.tangents)
					for (e.tangents = [], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t]
				if (this.biTangents)
					for (e.biTangents = [], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t]
				for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) e.barycentrics[t] = this.barycentrics[t]
				for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t]
				for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t]
				return e
			}),
			(rt.prototype.calculateNormals = function(t) {
				var e = vec3.create(),
					i = vec3.create(),
					s = vec3.create(),
					r = 0
				function n(r) {
					return (
						vec3.subtract(e, r[0], r[1]),
						vec3.subtract(i, r[0], r[2]),
						vec3.cross(s, e, i),
						vec3.normalize(s, s),
						t && t.forceZUp && s[2] < 0 && ((s[0] *= -1), (s[1] *= -1), (s[2] *= -1)),
						s
					)
				}
				for (
					this.getVertexVec = function(t) {
						var e = [0, 0, 0]
						return (e[0] = this.vertices[3 * t + 0]), (e[1] = this.vertices[3 * t + 1]), (e[2] = this.vertices[3 * t + 2]), e
					},
						(this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length) ||
							(this.vertexNormals = new Float32Array(this.vertices.length)),
						r = 0;
					r < this.vertices.length;
					r++
				)
					this.vertexNormals[r] = 0
				if (this.isIndexed()) {
					var o = []
					for (o.length = this.verticesIndices.length / 3, r = 0; r < this.verticesIndices.length; r += 3) {
						u = [this.getVertexVec(this.verticesIndices[r + 0]), this.getVertexVec(this.verticesIndices[r + 1]), this.getVertexVec(this.verticesIndices[r + 2])]
						;(o[r / 3] = n(u)),
							(this.vertexNormals[3 * this.verticesIndices[r + 0] + 0] += o[r / 3][0]),
							(this.vertexNormals[3 * this.verticesIndices[r + 0] + 1] += o[r / 3][1]),
							(this.vertexNormals[3 * this.verticesIndices[r + 0] + 2] += o[r / 3][2]),
							(this.vertexNormals[3 * this.verticesIndices[r + 1] + 0] += o[r / 3][0]),
							(this.vertexNormals[3 * this.verticesIndices[r + 1] + 1] += o[r / 3][1]),
							(this.vertexNormals[3 * this.verticesIndices[r + 1] + 2] += o[r / 3][2]),
							(this.vertexNormals[3 * this.verticesIndices[r + 2] + 0] += o[r / 3][0]),
							(this.vertexNormals[3 * this.verticesIndices[r + 2] + 1] += o[r / 3][1]),
							(this.vertexNormals[3 * this.verticesIndices[r + 2] + 2] += o[r / 3][2])
					}
					for (r = 0; r < this.verticesIndices.length; r += 3)
						for (var a = 0; a < 3; a++) {
							var h = [
								this.vertexNormals[3 * this.verticesIndices[r + a] + 0],
								this.vertexNormals[3 * this.verticesIndices[r + a] + 1],
								this.vertexNormals[3 * this.verticesIndices[r + a] + 2]
							]
							vec3.normalize(h, h),
								(this.vertexNormals[3 * this.verticesIndices[r + a] + 0] = h[0]),
								(this.vertexNormals[3 * this.verticesIndices[r + a] + 1] = h[1]),
								(this.vertexNormals[3 * this.verticesIndices[r + a] + 2] = h[2])
						}
				} else {
					var l = []
					for (r = 0; r < this.vertices.length; r += 9) {
						var u
						s = n(
							(u = [
								[this.vertices[r + 0], this.vertices[r + 1], this.vertices[r + 2]],
								[this.vertices[r + 3], this.vertices[r + 4], this.vertices[r + 5]],
								[this.vertices[r + 6], this.vertices[r + 7], this.vertices[r + 8]]
							])
						)
						l.push(s[0], s[1], s[2], s[0], s[1], s[2], s[0], s[1], s[2])
					}
					this.vertexNormals = l
				}
			}),
			(rt.prototype.calcTangentsBitangents = function() {
				if (!this.vertices.length) return void console.error('Cannot calculate tangents/bitangents without vertices.')
				if (!this.vertexNormals.length) return void console.error('Cannot calculate tangents/bitangents without normals.')
				if (!this.texCoords.length) return void console.error('Cannot calculate tangents/bitangents without texture coordinates.')
				if (!this.verticesIndices.length) return void console.error('Cannot calculate tangents/bitangents without vertex indices.')
				if (this.verticesIndices.length % 3 != 0) return void console.error('Vertex indices mismatch!')
				const t = this.verticesIndices.length / 3,
					e = this.vertices.length / 3
				;(this.tangents = new Float32Array(this.vertexNormals.length)), (this.biTangents = new Float32Array(this.vertexNormals.length))
				var i = []
				i.length = 2 * e
				const s = vec3.create(),
					r = vec3.create(),
					n = vec3.create(),
					o = vec2.create(),
					a = vec2.create(),
					h = vec2.create(),
					l = vec3.create(),
					u = vec3.create()
				for (var c = 0; c < t; c += 1) {
					const t = this.verticesIndices[3 * c],
						p = this.verticesIndices[3 * c + 1],
						d = this.verticesIndices[3 * c + 2]
					vec3.set(s, this.vertices[3 * t], this.vertices[3 * t + 1], this.vertices[3 * t + 2]),
						vec3.set(r, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]),
						vec3.set(n, this.vertices[3 * d], this.vertices[3 * d + 1], this.vertices[3 * d + 2]),
						vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]),
						vec2.set(a, this.texCoords[2 * p], this.texCoords[2 * p + 1]),
						vec2.set(h, this.texCoords[2 * d], this.texCoords[2 * d + 1])
					const f = r[0] - s[0],
						g = n[0] - s[0],
						_ = r[1] - s[1],
						m = n[1] - s[1],
						v = r[2] - s[2],
						E = n[2] - s[2],
						b = a[0] - o[0],
						y = h[0] - o[0],
						T = a[1] - o[1],
						A = h[1] - o[1],
						x = 1 / (b * A - y * T)
					vec3.set(l, (A * f - T * g) * x, (A * _ - T * m) * x, (A * v - T * E) * x),
						vec3.set(u, (b * g - y * f) * x, (b * m - y * _) * x, (b * E - y * v) * x),
						(i[t] = l),
						(i[p] = l),
						(i[d] = l),
						(i[t + e] = u),
						(i[p + e] = u),
						(i[d + e] = u)
				}
				const p = vec3.create(),
					d = vec3.create(),
					f = vec3.create(),
					g = vec3.create(),
					_ = vec3.create(),
					m = vec3.create(),
					v = vec3.create(),
					E = vec3.create()
				for (var b = 0; b < e; b += 1) {
					if (!i[b]) continue
					vec3.set(p, this.vertexNormals[3 * b], this.vertexNormals[3 * b + 1], this.vertexNormals[3 * b + 2]), vec3.set(d, i[b][0], i[b][1], i[b][2])
					const t = vec3.dot(p, d)
					vec3.scale(_, p, t), vec3.subtract(m, d, _), vec3.normalize(E, m), vec3.cross(v, p, d)
					const s = vec3.dot(v, i[b + e]) < 0 ? -1 : 1
					vec3.scale(f, E, 1 / s),
						vec3.cross(g, p, f),
						(this.tangents[3 * b + 0] = f[0]),
						(this.tangents[3 * b + 1] = f[1]),
						(this.tangents[3 * b + 2] = f[2]),
						(this.biTangents[3 * b + 0] = g[0]),
						(this.biTangents[3 * b + 1] = g[1]),
						(this.biTangents[3 * b + 2] = g[2])
				}
			}),
			(rt.prototype.isIndexed = function() {
				return 0 != this.verticesIndices.length
			}),
			(rt.prototype.unIndex = function(t) {
				var e = [],
					i = [],
					s = [],
					r = [],
					n = 0,
					o = 0
				for (this.vertexNormals = [], o = 0; o < this.verticesIndices.length; o += 3)
					e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]),
						e.push(this.vertices[3 * this.verticesIndices[o + 0] + 1]),
						e.push(this.vertices[3 * this.verticesIndices[o + 0] + 2]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 0]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 1]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 2]),
						this.texCoords
							? (s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 1]))
							: (s.push(0), s.push(0)),
						i.push(n),
						n++,
						e.push(this.vertices[3 * this.verticesIndices[o + 1] + 0]),
						e.push(this.vertices[3 * this.verticesIndices[o + 1] + 1]),
						e.push(this.vertices[3 * this.verticesIndices[o + 1] + 2]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 0]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 1]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 2]),
						this.texCoords
							? (s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 1]))
							: (s.push(0), s.push(0)),
						i.push(n),
						n++,
						e.push(this.vertices[3 * this.verticesIndices[o + 2] + 0]),
						e.push(this.vertices[3 * this.verticesIndices[o + 2] + 1]),
						e.push(this.vertices[3 * this.verticesIndices[o + 2] + 2]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 0]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 1]),
						r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 2]),
						this.texCoords
							? (s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 1]))
							: (s.push(0), s.push(0)),
						i.push(n),
						n++
				;(this.vertices = e),
					(this.texCoords = s),
					(this.vertexNormals = r),
					(this.verticesIndices.length = 0),
					t && (this.verticesIndices = i),
					this.calculateNormals()
			}),
			(rt.prototype.calcBarycentric = function() {
				this.barycentrics.length = this.vertices.length
				var t = 0
				for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0
				var e = 0
				for (t = 0; t < this.vertices.length; t += 3) (this.barycentrics[t + e] = 1), 3 == ++e && (e = 0)
			}),
			(rt.prototype.getBounds = function() {
				return new st(this)
			}),
			(rt.prototype.center = function(t, e, i) {
				void 0 === t && ((t = !0), (e = !0), (i = !0))
				var s = 0
				const r = this.getBounds(),
					n = [r.minX + (r.maxX - r.minX) / 2, r.minY + (r.maxY - r.minY) / 2, r.minZ + (r.maxZ - r.minZ) / 2]
				for (s = 0; s < this.vertices.length; s += 3)
					this.vertices[s + 0] == this.vertices[s + 0] &&
						(t && (this.vertices[s + 0] -= n[0]), e && (this.vertices[s + 1] -= n[1]), i && (this.vertices[s + 2] -= n[2]))
				return n
			}),
			(rt.prototype.mapTexCoords2d = function() {
				var t = this.getBounds(),
					e = this.vertices.length / 3
				this.texCoords = new Float32Array((length = 2 * e))
				for (var i = 0; i < e; i++) {
					var s = this.vertices[3 * i + 0],
						r = this.vertices[3 * i + 1]
					;(this.texCoords[2 * i + 0] = s / (t.maxX - t.minX) + 0.5), (this.texCoords[2 * i + 1] = 1 - r / (t.maxY - t.minY) + 0.5)
				}
			}),
			(rt.buildFromFaces = function(t) {
				for (var e = [], i = [], s = 0; s < t.length; s += 3) {
					for (var r = t[s + 0], n = t[s + 1], o = t[s + 2], a = [-1, -1, -1], h = 0; h < e; h += 3)
						e[h + 0] == r[0] && e[h + 1] == r[1] && e[h + 2] == r[2] && (a[0] = h / 3),
							e[h + 0] == n[0] && e[h + 1] == n[1] && e[h + 2] == n[2] && (a[1] = h / 3),
							e[h + 0] == o[0] && e[h + 1] == o[1] && e[h + 2] == o[2] && (a[2] = h / 3)
					;-1 == a[0] && (e.push(r[0], r[1], r[2]), (a[0] = (e.length - 1) / 3)),
						-1 == a[1] && (e.push(n[0], n[1], n[2]), (a[1] = (e.length - 1) / 3)),
						-1 == a[2] && (e.push(o[0], o[1], o[2]), (a[2] = (e.length - 1) / 3)),
						i.push(parseInt(a[0], 10)),
						i.push(parseInt(a[1], 10)),
						i.push(parseInt(a[2], 10))
				}
				var l = new rt()
				return (l.vertices = e), (l.verticesIndices = i), l
			}),
			(rt.json2geom = function(t) {
				var e = new rt()
				if (
					((e.verticesIndices = []),
					(e.vertices = t.vertices || []),
					(e.vertexNormals = t.normals || []),
					(e.vertexColors = t.colors || []),
					(e.tangents = t.tangents || []),
					(e.biTangents = t.bitangents || []),
					t.texturecoords && e.setTexCoords(t.texturecoords[0]),
					t.vertices_b64 && (e.vertices = new Float32Array(d(t.vertices_b64))),
					t.normals_b64 && (e.vertexNormals = new Float32Array(d(t.normals_b64))),
					t.tangents_b64 && (e.tangents = new Float32Array(d(t.tangents_b64))),
					t.bitangents_b64 && (e.biTangents = new Float32Array(d(t.bitangents_b64))),
					t.texturecoords_b64 && e.setTexCoords(new Float32Array(d(t.texturecoords_b64[0]))),
					t.faces_b64)
				)
					e.verticesIndices = new Uint32Array(d(t.faces_b64))
				else {
					e.verticesIndices.length = 3 * t.faces.length
					for (var i = 0; i < t.faces.length; i++)
						(e.verticesIndices[3 * i] = t.faces[i][0]), (e.verticesIndices[3 * i + 1] = t.faces[i][1]), (e.verticesIndices[3 * i + 2] = t.faces[i][2])
				}
				return e
			})
		const nt = function(t, e, i, s, r, n, o) {
			if (
				((this._loc = -1),
				(this._type = e),
				(this._name = i),
				(this._shader = t),
				(this._value = 1e-5),
				(this._oldValue = null),
				(this._port = null),
				this._shader.addUniform(this),
				(this.needsUpdate = !0),
				'f' == e)
			)
				(this.set = this.setValue = this.setValueF.bind(this)), (this.updateValue = this.updateValueF.bind(this))
			else if ('f[]' == e) (this.set = this.setValue = this.setValueArrayF.bind(this)), (this.updateValue = this.updateValueArrayF.bind(this))
			else if ('3f[]' == e) (this.set = this.setValue = this.setValueArray3F.bind(this)), (this.updateValue = this.updateValueArray3F.bind(this))
			else if ('i' == e) (this.set = this.setValue = this.setValueI.bind(this)), (this.updateValue = this.updateValueI.bind(this))
			else if ('2i' == e) (this.set = this.setValue = this.setValue2I.bind(this)), (this.updateValue = this.updateValue2I.bind(this))
			else if ('3i' == e) (this.set = this.setValue = this.setValue3I.bind(this)), (this.updateValue = this.updateValue3I.bind(this))
			else if ('4i' == e) (this.set = this.setValue = this.setValue4I.bind(this)), (this.updateValue = this.updateValue4I.bind(this))
			else if ('b' == e) (this.set = this.setValue = this.setValueBool.bind(this)), (this.updateValue = this.updateValueBool.bind(this))
			else if ('4f' == e) (this.set = this.setValue = this.setValue4F.bind(this)), (this.updateValue = this.updateValue4F.bind(this))
			else if ('3f' == e) (this.set = this.setValue = this.setValue3F.bind(this)), (this.updateValue = this.updateValue3F.bind(this))
			else if ('2f' == e) (this.set = this.setValue = this.setValue2F.bind(this)), (this.updateValue = this.updateValue2F.bind(this))
			else if ('t' == e) (this.set = this.setValue = this.setValueT.bind(this)), (this.updateValue = this.updateValueT.bind(this))
			else if ('t[]' == e) (this.set = this.setValue = this.setValueArrayT.bind(this)), (this.updateValue = this.updateValueArrayT.bind(this))
			else {
				if ('m4' != e) throw new Error('Unknown uniform type')
				;(this.set = this.setValue = this.setValueM4.bind(this)), (this.updateValue = this.updateValueM4.bind(this))
			}
			'object' == typeof s && s instanceof B
				? ((this._port = s),
				  (this._value = this._port.get()),
				  (this._port.onValueChanged = this.updateFromPort.bind(this)),
				  r && n && o
						? ((this._value = [0, 0, 0, 0]),
						  (this._port2 = r),
						  (this._port3 = n),
						  (this._port4 = o),
						  (this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this)),
						  this.updateFromPort4f())
						: r && n
						? ((this._value = [0, 0, 0]),
						  (this._port2 = r),
						  (this._port3 = n),
						  (this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this)),
						  this.updateFromPort3f())
						: r &&
						  ((this._value = [0, 0]),
						  (this._port2 = r),
						  (this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this)),
						  this.updateFromPort2f()))
				: (this._value = s),
				this.setValue(this._value),
				(this.needsUpdate = !0)
		}
		;(nt.prototype.getType = function() {
			return this._type
		}),
			(nt.prototype.getName = function() {
				return this._name
			}),
			(nt.prototype.getValue = function() {
				return this._value
			}),
			(nt.prototype.resetLoc = function() {
				;(this._loc = -1), (this.needsUpdate = !0)
			}),
			(nt.prototype.bindTextures = function() {
				return this._value
			}),
			(nt.prototype.resetLoc = function() {
				;(this._loc = -1), (this.needsUpdate = !0)
			}),
			(nt.prototype.bindTextures = function() {}),
			(nt.prototype.getLoc = function() {
				return this._loc
			}),
			(nt.prototype.updateFromPort4f = function() {
				;(this._value[0] = this._port.get()),
					(this._value[1] = this._port2.get()),
					(this._value[2] = this._port3.get()),
					(this._value[3] = this._port4.get()),
					this.setValue(this._value)
			}),
			(nt.prototype.updateFromPort3f = function() {
				;(this._value[0] = this._port.get()), (this._value[1] = this._port2.get()), (this._value[2] = this._port3.get()), this.setValue(this._value)
			}),
			(nt.prototype.updateFromPort2f = function() {
				;(this._value[0] = this._port.get()), (this._value[1] = this._port2.get()), this.setValue(this._value)
			}),
			(nt.prototype.updateFromPort = function() {
				this.setValue(this._port.get())
			}),
			(nt.prototype.updateValueF = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._shader.getCgl().gl.uniform1f(this._loc, this._value),
					Q.profileUniformCount++
			}),
			(nt.prototype.setValueF = function(t) {
				t != this._value && ((this.needsUpdate = !0), (this._value = t))
			}),
			(nt.prototype.updateValueI = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._shader.getCgl().gl.uniform1i(this._loc, this._value),
					Q.profileUniformCount++
			}),
			(nt.prototype.updateValue2I = function() {
				this._value &&
					(-1 == this._loc &&
						((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
						Q.profileShaderGetUniform++,
						(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]),
					(this.needsUpdate = !1),
					Q.profileUniformCount++)
			}),
			(nt.prototype.updateValue3I = function() {
				this._value &&
					(-1 == this._loc &&
						((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
						Q.profileShaderGetUniform++,
						(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]),
					(this.needsUpdate = !1),
					Q.profileUniformCount++)
			}),
			(nt.prototype.updateValue4I = function() {
				;-1 == this._loc &&
					((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
					Q.profileShaderGetUniform++,
					(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]),
					Q.profileUniformCount++
			}),
			(nt.prototype.setValueI = function(t) {
				t != this._value && ((this.needsUpdate = !0), (this._value = t))
			}),
			(nt.prototype.setValue2I = function(t) {
				t &&
					(this._oldValue
						? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this.needsUpdate = !0))
						: ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
					(this._value = t))
			}),
			(nt.prototype.setValue3I = function(t) {
				t &&
					(this._oldValue
						? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2]) ||
						  ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this._oldValue[2] = t[2]), (this.needsUpdate = !0))
						: ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)),
					(this._value = t))
			}),
			(nt.prototype.setValue4I = function(t) {
				;(this.needsUpdate = !0), (this._value = t || vec4.create())
			}),
			(nt.prototype.updateValueBool = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0),
					Q.profileUniformCount++
			}),
			(nt.prototype.setValueBool = function(t) {
				t != this._value && ((this.needsUpdate = !0), (this._value = t))
			}),
			(nt.prototype.setValueArray3F = function(t) {
				;(this.needsUpdate = !0), (this._value = t)
			}),
			(nt.prototype.updateValueArray3F = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), Q.profileUniformCount++)
			}),
			(nt.prototype.setValueArrayF = function(t) {
				;(this.needsUpdate = !0), (this._value = t)
			}),
			(nt.prototype.updateValueArrayF = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), Q.profileUniformCount++)
			}),
			(nt.prototype.setValueArrayT = function(t) {
				;(this.needsUpdate = !0), (this._value = t)
			}),
			(nt.prototype.updateValueArrayT = function() {
				;-1 == this._loc ? (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)) : (this.needsUpdate = !1),
					this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), Q.profileUniformCount++)
			}),
			(nt.prototype.updateValue3F = function() {
				this._value &&
					(-1 == this._loc &&
						((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
						Q.profileShaderGetUniform++,
						(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]),
					(this.needsUpdate = !1),
					Q.profileUniformCount++)
			}),
			(nt.prototype.setValue3F = function(t) {
				t &&
					(this._oldValue
						? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2]) ||
						  ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this._oldValue[2] = t[2]), (this.needsUpdate = !0))
						: ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)),
					(this._value = t))
			}),
			(nt.prototype.updateValue2F = function() {
				this._value &&
					(-1 == this._loc &&
						((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
						Q.profileShaderGetUniform++,
						(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]),
					(this.needsUpdate = !1),
					Q.profileUniformCount++)
			}),
			(nt.prototype.setValue2F = function(t) {
				t &&
					(this._oldValue
						? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) || ((this._oldValue[0] = t[0]), (this._oldValue[1] = t[1]), (this.needsUpdate = !0))
						: ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
					(this._value = t))
			}),
			(nt.prototype.updateValueT = function() {
				;-1 == this._loc &&
					((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
					Q.profileShaderGetUniform++,
					(Q.profileShaderGetUniformName = this._name),
					-1 == this._loc && g.log('texture this._loc unknown!!')),
					Q.profileUniformCount++,
					this._shader.getCgl().gl.uniform1i(this._loc, this._value),
					(this.needsUpdate = !1)
			}),
			(nt.prototype.setValueT = function(t) {
				;(this.needsUpdate = !0), (this._value = t)
			}),
			(nt.prototype.updateValue4F = function() {
				;-1 == this._loc &&
					((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
					Q.profileShaderGetUniform++,
					(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]),
					Q.profileUniformCount++
			}),
			(nt.prototype.setValue4F = function(t) {
				;(this.needsUpdate = !0), (this._value = t || vec4.create())
			}),
			(nt.prototype.updateValueM4 = function() {
				;-1 == this._loc &&
					((this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)),
					Q.profileShaderGetUniform++,
					(Q.profileShaderGetUniformName = this._name)),
					this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value),
					Q.profileUniformCount++
			}),
			(nt.prototype.setValueM4 = function(t) {
				;(this.needsUpdate = !0), (this._value = t || mat4.create())
			})
		const ot = 180 / Math.PI,
			at = {
				MATH: { DEG2RAD: Math.PI / 180, RAD2DEG: ot },
				SHADER: {
					SHADERVAR_VERTEX_POSITION: 'vPosition',
					SHADERVAR_VERTEX_NUMBER: 'attrVertIndex',
					SHADERVAR_VERTEX_NORMAL: 'attrVertNormal',
					SHADERVAR_VERTEX_TEXCOORD: 'attrTexCoord',
					SHADERVAR_INSTANCE_MMATRIX: 'instMat',
					SHADERVAR_UNI_PROJMAT: 'projMatrix',
					SHADERVAR_UNI_VIEWMAT: 'viewMatrix',
					SHADERVAR_UNI_MODELMAT: 'modelMatrix',
					SHADERVAR_UNI_NORMALMAT: 'normalMatrix',
					SHADERVAR_UNI_INVVIEWMAT: 'inverseViewMatrix',
					SHADERVAR_UNI_VIEWPOS: 'camPos'
				},
				BLEND_MODES: { BLEND_NONE: 0, BLEND_NORMAL: 1, BLEND_ADD: 2, BLEND_SUB: 3, BLEND_MUL: 4 }
			}
		const ht = { lastMesh: null },
			lt = function(t, e, i) {
				;(this._cgl = t),
					(this._bufVertexAttrib = null),
					(this._bufVerticesIndizes = this._cgl.gl.createBuffer()),
					(this._attributes = []),
					(this._attribLocs = {}),
					(this._geom = null),
					(this._lastShader = null),
					(this._numInstances = 0),
					(this._glPrimitive = i),
					(this._preWireframeGeom = null),
					(this.addVertexNumbers = !1),
					(this.feedBackAttributes = []),
					this.setGeom(e),
					(this._feedBacks = []),
					(this._feedBacksChanged = !1),
					(this._transformFeedBackLoc = -1),
					(this._lastAttrUpdate = 0),
					Object.defineProperty(this, 'numInstances', {
						get() {
							return this._numInstances
						},
						set(t) {
							this.setNumInstances(t)
						}
					})
			}
		var ut
		;(lt.prototype.updateVertices = function(t) {
			this.setAttribute(at.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3)
		}),
			(lt.prototype.setAttributePointer = function(t, e, i, s) {
				for (var r = 0; r < this._attributes.length; r++)
					this._attributes[r].name == t &&
						(this._attributes[r].pointer || (this._attributes[r].pointer = []),
						this._attributes[r].pointer.push({ loc: -1, name: e, stride: i, offset: s, instanced: t == at.SHADER.SHADERVAR_INSTANCE_MMATRIX }))
			}),
			(lt.prototype.getAttribute = function(t) {
				for (var e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t) return this._attributes[e]
			}),
			(lt.prototype.addAttribute = lt.prototype.updateAttribute = lt.prototype.setAttribute = function(t, e, i, s) {
				var r = null,
					n = null,
					o = !1,
					a = 0,
					h = e.length / i
				for (
					0 === h && console.warn('CGL_MESH: num items in attribute ' + t + ' is ZERO'),
						'function' == typeof s && (n = s),
						'object' == typeof s && (s.cb && (n = s.cb), s.instanced && (o = s.instanced)),
						t == at.SHADER.SHADERVAR_INSTANCE_MMATRIX && (o = !0),
						e instanceof Float32Array
							? (r = e)
							: ((r = new Float32Array(e)), Q.profileNonTypedAttrib++, (Q.profileNonTypedAttribNames = this._geom.name + ' ' + t)),
						a = 0;
					a < this._attributes.length;
					a++
				)
					if (this._attributes[a].name == t)
						return (
							(this._attributes[a].numItems = h),
							this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[a].buffer),
							this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, r, this._cgl.gl.DYNAMIC_DRAW),
							this._attributes[a]
						)
				var l = this._cgl.gl.createBuffer()
				this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, l), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, r, this._cgl.gl.DYNAMIC_DRAW)
				var u = this._cgl.gl.FLOAT
				s && s.type && (u = s.type)
				var c = { buffer: l, name: t, cb: n, itemSize: i, numItems: h, startItem: 0, instanced: o, type: u }
				return t == at.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = c), this._attributes.push(c), (this._attribLocs = {}), c
			}),
			(lt.prototype.getAttributes = function() {
				return this._attributes
			}),
			(lt.prototype.updateTexCoords = function(t) {
				if (t.texCoords && t.texCoords.length > 0) this.setAttribute(at.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2)
				else {
					var e = new Float32Array(Math.round((t.vertices.length / 3) * 2))
					this.setAttribute(at.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2)
				}
			}),
			(lt.prototype.updateNormals = function(t) {
				if (t.vertexNormals && t.vertexNormals.length > 0) this.setAttribute('attrVertNormal', t.vertexNormals, 3)
				else {
					var e = new Float32Array(Math.round(t.vertices.length))
					this.setAttribute('attrVertNormal', e, 3)
				}
			}),
			(lt.prototype._setVertexNumbers = function() {
				var t = this._geom.vertices.length / 3
				if (!this._verticesNumbers || this._verticesNumbers.length != t) {
					this._verticesNumbers = new Float32Array(t)
					for (var e = 0; e < t; e++) this._verticesNumbers[e] = e
					this.setAttribute(at.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (e, i, s) => {
						s.uniformNumVertices || (s.uniformNumVertices = new nt(s, 'f', 'numVertices', t)), s.uniformNumVertices.setValue(t)
					})
				}
			}),
			(lt.prototype.setVertexIndices = function(t) {
				if (t.length > 0) {
					for (var e = 0; e < t.length; e++) if (t[e] >= this._geom.vertices.length / 3) return void console.warn('invalid index in ' + this._geom.name)
					this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes),
						t instanceof Uint16Array ? (this.vertIndicesTyped = t) : (this.vertIndicesTyped = new Uint16Array(t)),
						this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW),
						(this._bufVerticesIndizes.itemSize = 1),
						(this._bufVerticesIndizes.numItems = t.length)
				} else this._bufVerticesIndizes.numItems = 0
			}),
			(lt.prototype.setGeom = function(t) {
				;(this._geom = t),
					null != t.glPrimitive && (this._glPrimitive = t.glPrimitive),
					(ht.lastMesh = null),
					Q.profileMeshSetGeom++,
					this._disposeAttributes(),
					this.updateVertices(this._geom),
					this.setVertexIndices(this._geom.verticesIndices),
					this.updateTexCoords(this._geom),
					this.updateNormals(this._geom),
					this._geom.hasOwnProperty('tangents') &&
						this._geom.tangents &&
						this._geom.tangents.length > 0 &&
						this.setAttribute('attrTangent', this._geom.tangents, 3),
					this._geom.hasOwnProperty('biTangents') &&
						this._geom.biTangents &&
						this._geom.biTangents.length > 0 &&
						this.setAttribute('attrBiTangent', this._geom.biTangents, 3),
					this._geom.vertexColors.length > 0 &&
						(this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute('attrVertColor', this._geom.vertexColors, 4)),
					this.addVertexNumbers && this._setVertexNumbers()
				var e = this._geom.getAttributes()
				for (var i in e) this.setAttribute(i, e[i].data, e[i].itemSize)
			}),
			(lt.prototype._preBind = function(t) {
				for (var e = 0; e < this._attributes.length; e++) this._attributes[e].cb && this._attributes[e].cb(this._attributes[e], this._geom, t)
			}),
			(lt.prototype._bind = function(t) {
				t != this._lastShader && this.unBind()
				var e = []
				this._attribLocs[t.id] ? (e = this._attribLocs[t.id]) : (this._attribLocs[t.id] = e), (this._lastShader = t)
				var i = 0
				if (t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length)
					for (this._lastAttrUpdate = t.lastCompile, i = 0; i < this._attributes.length; i++) e[i] = -1
				for (i = 0; i < this._attributes.length; i++) {
					var s = this._attributes[i]
					if (
						(-1 == e[i] &&
							s._attrLocationLastShaderTime != t.lastCompile &&
							((s._attrLocationLastShaderTime = t.lastCompile), (e[i] = this._cgl.glGetAttribLocation(t.getProgram(), s.name)), Q.profileAttrLoc++),
						-1 != e[i])
					)
						if ((this._cgl.gl.enableVertexAttribArray(e[i]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.buffer), s.instanced))
							if (s.itemSize <= 4)
								(s.itemSize && 0 != s.itemSize) || g.log('instanced attrib itemsize error', this._geom.name, s),
									this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0),
									this._cgl.gl.vertexAttribDivisor(e[i], 1)
							else if (16 == s.itemSize) {
								const t = 64
								this._cgl.gl.vertexAttribPointer(e[i], 4, s.type, !1, t, 0),
									this._cgl.gl.enableVertexAttribArray(e[i] + 1),
									this._cgl.gl.vertexAttribPointer(e[i] + 1, 4, s.type, !1, t, 16),
									this._cgl.gl.enableVertexAttribArray(e[i] + 2),
									this._cgl.gl.vertexAttribPointer(e[i] + 2, 4, s.type, !1, t, 32),
									this._cgl.gl.enableVertexAttribArray(e[i] + 3),
									this._cgl.gl.vertexAttribPointer(e[i] + 3, 4, s.type, !1, t, 48),
									this._cgl.gl.vertexAttribDivisor(e[i], 1),
									this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1),
									this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1),
									this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1)
							} else g.log('unknown instance attrib size', s.name)
						else {
							if (
								((s.itemSize && 0 != s.itemSize) || g.log('attrib itemsize error', this._geom.name, s),
								this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0),
								s.pointer)
							)
								for (var r = 0; r < s.pointer.length; r++) {
									var n = s.pointer[r]
									;-1 == n.loc && (n.loc = this._cgl.glGetAttribLocation(t.getProgram(), n.name)),
										Q.profileAttrLoc++,
										this._cgl.gl.enableVertexAttribArray(n.loc),
										this._cgl.gl.vertexAttribPointer(n.loc, s.itemSize, s.type, !1, n.stride, n.offset)
								}
							this.bindFeedback(s)
						}
				}
				0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
			}),
			(lt.prototype.unBind = function() {
				var t = this._lastShader
				if (((this._lastShader = null), t)) {
					var e = []
					this._attribLocs[t.id] ? (e = this._attribLocs[t.id]) : (this._attribLocs[t.id] = e), (ht.lastMesh = null)
					for (var i = 0; i < this._attributes.length; i++)
						this._attributes[i].instanced &&
							(this._attributes[i].itemSize <= 4
								? (-1 != e[i] && this._cgl.gl.vertexAttribDivisor(e[i], 0), e[i] >= 0 && this._cgl.gl.disableVertexAttribArray(e[i]))
								: (this._cgl.gl.vertexAttribDivisor(e[i], 0),
								  this._cgl.gl.vertexAttribDivisor(e[i] + 1, 0),
								  this._cgl.gl.vertexAttribDivisor(e[i] + 2, 0),
								  this._cgl.gl.vertexAttribDivisor(e[i] + 3, 0),
								  this._cgl.gl.disableVertexAttribArray(e[i] + 1),
								  this._cgl.gl.disableVertexAttribArray(e[i] + 2),
								  this._cgl.gl.disableVertexAttribArray(e[i] + 3))),
							-1 != e[i] && this._cgl.gl.disableVertexAttribArray(e[i])
				}
			}),
			(lt.prototype.meshChanged = function() {
				return this._cgl.lastMesh && this._cgl.lastMesh != this
			}),
			(lt.prototype.printDebug = function(t) {
				for (g.log('--attributes'), i = 0; i < this._attributes.length; i++) g.log('attribute ' + i + ' ' + this._attributes[i].name)
			}),
			(lt.prototype.setNumVertices = function(t) {
				this._bufVertexAttrib.numItems = t
			}),
			(lt.prototype.render = function(t) {
				if (t) {
					t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom),
						t.wireframe &&
							this._geom.isIndexed() &&
							((this._preWireframeGeom = this._geom),
							(this._geom = this._geom.copy()),
							this._geom.unIndex(),
							this._geom.calcBarycentric(),
							this.setGeom(this._geom),
							this.setAttribute('attrBarycentric', this._geom.barycentrics, 3))
					var e = !1
					ht.lastMesh != this && (ht.lastMesh && ht.lastMesh.unBind(), (e = !0)),
						e && this._preBind(t),
						t.bind(),
						t.bindTextures && t.bindTextures(),
						this._bind(t),
						this.addVertexNumbers && this._setVertexNumbers(),
						(ht.lastMesh = this)
					var i = this._cgl.gl.TRIANGLES
					void 0 !== this._glPrimitive && (i = this._glPrimitive),
						null !== t.glPrimitive && (i = t.glPrimitive),
						this.hasFeedbacks()
							? this.drawFeedbacks(t, i)
							: 0 === this._bufVerticesIndizes.numItems
							? 0 === this._numInstances
								? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem)
								: this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances)
							: 0 === this._numInstances
							? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0)
							: this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances)
				}
			}),
			(lt.prototype.setNumInstances = function(t) {
				if (((this._numInstances = t), t > 0)) {
					for (var e = new Float32Array(t), i = 0; i < t; i++) e[i] = i
					this.setAttribute('instanceIndex', e, 1, { instanced: !0 })
				}
			}),
			(lt.prototype._disposeAttributes = function() {
				if (this._attributes) {
					for (var t = 0; t < this._attributes.length; t++)
						this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), (this._attributes[t].buffer = null))
					this._attributes.length = 0
				}
			}),
			(lt.prototype.dispose = function() {
				this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
					this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
					this._disposeAttributes()
			}),
			((ut = lt).prototype.hasFeedbacks = function() {
				return this._feedBacks.length > 0
			}),
			(ut.prototype.removeFeedbacks = function(t) {
				this._feedbacks && ((this._feedbacks.length = 0), (this._feedBacksChanged = !0))
			}),
			(ut.prototype.setAttributeFeedback = function() {}),
			(ut.prototype.setFeedback = function(t, e, i) {
				var s = { nameOut: e },
					r = !1
				this.unBindFeedbacks()
				for (var n = 0; n < this._feedBacks.length; n++) this._feedBacks[n].nameOut == e && ((s = this._feedBacks[n]), (r = !0))
				return (
					r || (this._feedBacksChanged = !0),
					(s.initialArr = i),
					(s.attrib = t),
					s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer),
					(s.outBuffer = this._cgl.gl.createBuffer()),
					this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer),
					this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW),
					this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.attrib.buffer),
					this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW),
					r || this._feedBacks.push(s),
					s
				)
			}),
			(ut.prototype.bindFeedback = function(t) {
				if (this._feedBacks && 0 !== this._feedBacks.length) {
					;-1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()),
						this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc)
					for (var e = 0; e < this._feedBacks.length; e++) {
						var i = this._feedBacks[e]
						i.attrib == t && this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, e, i.outBuffer)
					}
				}
			}),
			(ut.prototype.drawFeedbacks = function(t, e) {
				var i = 0
				if (this._feedBacksChanged) {
					var s = []
					for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++)
						s.push(this._feedBacks[i].nameOut)
					return (
						t.setFeedbackNames(s),
						g.log('feedbacknames', s),
						t.compile(),
						(this._feedBacksChanged = !1),
						this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null),
						void g.log('changed finished')
					)
				}
				this._cgl.gl.beginTransformFeedback(this.glPrimitive),
					this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems),
					this._cgl.gl.endTransformFeedback(),
					this.unBindFeedbacks(),
					this.feedBacksSwapBuffers()
			}),
			(ut.prototype.unBindFeedbacks = function() {
				for (var t = 0; t < this._feedBacks.length; t++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, null)
				this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
			}),
			(ut.prototype.feedBacksSwapBuffers = function() {
				for (var t = 0; t < this._feedBacks.length; t++) {
					var e = this._feedBacks[t].attrib.buffer
					;(this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer), (this._feedBacks[t].outBuffer = e)
				}
			})
		const ct = {
				getSimpleRect: function(t, e) {
					var i = new rt(e)
					return (
						(i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
						(i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0]),
						(i.verticesIndices = [0, 1, 2, 2, 1, 3]),
						(i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
						new lt(t, i)
					)
				}
			},
			pt = function(t, e) {
				;(this._cgl = t),
					t.TextureEffectMesh || this.createMesh(),
					(this._textureSource = null),
					(this._textureTarget = null),
					(this._frameBuf = this._cgl.gl.createFramebuffer()),
					(this._frameBuf2 = this._cgl.gl.createFramebuffer()),
					(this._renderbuffer = this._cgl.gl.createRenderbuffer()),
					(this._renderbuffer2 = this._cgl.gl.createRenderbuffer()),
					(this.switched = !1),
					(this.depth = !1)
			}
		;(pt.prototype.setSourceTexture = function(t) {
			t.textureType == et.TYPE_FLOAT && this._cgl.gl.getExtension('EXT_color_buffer_float'),
				null === t ? ((this._textureSource = new et(this._cgl)), this._textureSource.setSize(16, 16)) : (this._textureSource = t),
				this._textureSource.compareSettings(this._textureTarget) ||
					(this._textureTarget && this._textureTarget.delete(),
					(this._textureTarget = this._textureSource.clone()),
					Q.profileEffectBuffercreate++,
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf),
					this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer),
					this.depth &&
						this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height),
					this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0),
					this.depth &&
						this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer),
					this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
					this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2),
					this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2),
					this.depth &&
						this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height),
					this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0),
					this.depth &&
						this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2),
					this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
					this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
					this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null))
		}),
			(pt.prototype.startEffect = function() {
				this._textureTarget
					? ((this.switched = !1),
					  this._cgl.pushDepthTest(!1),
					  this._cgl.pushModelMatrix(),
					  this._cgl.pushPMatrix(),
					  this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height),
					  mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100),
					  this._cgl.pushPMatrix(),
					  mat4.identity(this._cgl.pMatrix),
					  this._cgl.pushViewMatrix(),
					  mat4.identity(this._cgl.vMatrix),
					  this._cgl.pushModelMatrix(),
					  mat4.identity(this._cgl.mvMatrix))
					: g.log('effect has no target')
			}),
			(pt.prototype.endEffect = function() {
				this._cgl.popDepthTest(!1),
					this._cgl.popModelMatrix(),
					this._cgl.popPMatrix(),
					this._cgl.popModelMatrix(),
					this._cgl.popViewMatrix(),
					this._cgl.popPMatrix(),
					this._cgl.resetViewPort()
			}),
			(pt.prototype.bind = function() {
				null !== this._textureSource
					? this.switched
						? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2))
						: (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf))
					: g.log('no base texture set!')
			}),
			(pt.prototype.finish = function() {
				null !== this._textureSource
					? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()),
					  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()),
					  this._textureTarget.filter == et.FILTER_MIPMAP &&
							(this.switched
								? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap())
								: (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()),
							this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)),
					  (this.switched = !this.switched))
					: g.log('no base texture set!')
			}),
			(pt.prototype.getCurrentTargetTexture = function() {
				return this.switched ? this._textureSource : this._textureTarget
			}),
			(pt.prototype.getCurrentSourceTexture = function() {
				return this.switched ? this._textureTarget : this._textureSource
			}),
			(pt.prototype.delete = function() {
				this._textureTarget && this._textureTarget.delete(),
					this._textureSource && this._textureSource.delete(),
					this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
					this._cgl.gl.deleteFramebuffer(this._frameBuf)
			}),
			(pt.prototype.createMesh = function() {
				this._cgl.TextureEffectMesh = ct.getSimpleRect(this._cgl, 'textureEffect rect')
			}),
			(pt.checkOpNotInTextureEffect = function(t) {
				return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect
					? (t.uiAttr({ error: null }), !0)
					: !t.patch.cgl.currentTextureEffect ||
							(t.patch.cgl.currentTextureEffect && !t.uiAttribs.error
								? (t.uiAttr({ error: 'This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.' }), !1)
								: !t.patch.cgl.currentTextureEffect)
			}),
			(pt.checkOpInEffect = function(t) {
				return t.patch.cgl.currentTextureEffect && t.uiAttribs.error
					? (t.uiAttr({ error: null }), !0)
					: !!t.patch.cgl.currentTextureEffect ||
							(t.patch.cgl.currentTextureEffect || t.uiAttribs.error
								? !!t.patch.cgl.currentTextureEffect
								: (t.uiAttr({
										error:
											'This op must be a child of a texture effect! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.'
								  }),
								  !1))
			}),
			(pt.getBlendCode = function() {
				return (
					''.endl() +
					'vec3 _blend(vec3 base,vec3 blend)'.endl() +
					'{'.endl() +
					'   vec3 colNew=blend;'.endl() +
					'   #ifdef BM_MULTIPLY'.endl() +
					'       colNew=base*blend;'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_MULTIPLY_INV'.endl() +
					'       colNew=base* vec3(1.0)-blend;'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_AVERAGE'.endl() +
					'       colNew=((base + blend) / 2.0);'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_ADD'.endl() +
					'       colNew=min(base + blend, vec3(1.0));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_SUBSTRACT'.endl() +
					'       colNew=max(base + blend - vec3(1.0), vec3(0.0));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_DIFFERENCE'.endl() +
					'       colNew=abs(base - blend);'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_NEGATION'.endl() +
					'       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_EXCLUSION'.endl() +
					'       colNew=(base + blend - 2.0 * base * blend);'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_LIGHTEN'.endl() +
					'       colNew=max(blend, base);'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_DARKEN'.endl() +
					'       colNew=min(blend, base);'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_OVERLAY'.endl() +
					'      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() +
					'      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_SCREEN'.endl() +
					'      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))'.endl() +
					'      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_SOFTLIGHT'.endl() +
					'      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))'.endl() +
					'      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_HARDLIGHT'.endl() +
					'      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() +
					'      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_COLORDODGE'.endl() +
					'      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))'.endl() +
					'      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   #ifdef BM_COLORBURN'.endl() +
					'      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))'.endl() +
					'      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));'.endl() +
					'   #endif'.endl() +
					'   return colNew;'.endl() +
					'}'.endl() +
					'vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)'.endl() +
					'{'.endl() +
					'   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);'.endl() +
					'   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);'.endl() +
					'   return col;'.endl() +
					'}'
				)
			}),
			(pt.onChangeBlendSelect = function(t, e) {
				'normal' == e ? t.define('BM_NORMAL') : t.removeDefine('BM_NORMAL'),
					'multiply' == e ? t.define('BM_MULTIPLY') : t.removeDefine('BM_MULTIPLY'),
					'multiply invert' == e ? t.define('BM_MULTIPLY_INV') : t.removeDefine('BM_MULTIPLY_INV'),
					'average' == e ? t.define('BM_AVERAGE') : t.removeDefine('BM_AVERAGE'),
					'add' == e ? t.define('BM_ADD') : t.removeDefine('BM_ADD'),
					'substract' == e ? t.define('BM_SUBSTRACT') : t.removeDefine('BM_SUBSTRACT'),
					'difference' == e ? t.define('BM_DIFFERENCE') : t.removeDefine('BM_DIFFERENCE'),
					'negation' == e ? t.define('BM_NEGATION') : t.removeDefine('BM_NEGATION'),
					'exclusion' == e ? t.define('BM_EXCLUSION') : t.removeDefine('BM_EXCLUSION'),
					'lighten' == e ? t.define('BM_LIGHTEN') : t.removeDefine('BM_LIGHTEN'),
					'darken' == e ? t.define('BM_DARKEN') : t.removeDefine('BM_DARKEN'),
					'overlay' == e ? t.define('BM_OVERLAY') : t.removeDefine('BM_OVERLAY'),
					'screen' == e ? t.define('BM_SCREEN') : t.removeDefine('BM_SCREEN'),
					'softlight' == e ? t.define('BM_SOFTLIGHT') : t.removeDefine('BM_SOFTLIGHT'),
					'hardlight' == e ? t.define('BM_HARDLIGHT') : t.removeDefine('BM_HARDLIGHT'),
					'color dodge' == e ? t.define('BM_COLORDODGE') : t.removeDefine('BM_COLORDODGE'),
					'color burn' == e ? t.define('BM_COLORBURN') : t.removeDefine('BM_COLORBURN')
			}),
			(pt.AddBlendSelect = function(t, e) {
				return t.inValueSelect(
					e,
					[
						'normal',
						'lighten',
						'darken',
						'multiply',
						'multiply invert',
						'average',
						'add',
						'substract',
						'difference',
						'negation',
						'exclusion',
						'overlay',
						'screen',
						'color dodge',
						'color burn',
						'softlight',
						'hardlight'
					],
					'normal'
				)
			}),
			(pt.setupBlending = function(t, e, i, s) {
				t.setPortGroup('Blending', [i, s]),
					(i.onChange = function() {
						pt.onChangeBlendSelect(e, i.get())
						var s = i.get()
						'normal' == s
							? (s = null)
							: 'multiply' == s
							? (s = 'mul')
							: 'multiply invert' == s
							? (s = 'mulinv')
							: 'lighten' == s
							? (s = 'light')
							: 'darken' == s
							? (s = 'darken')
							: 'average' == s
							? (s = 'avg')
							: 'substract' == s
							? (s = 'sub')
							: 'difference' == s
							? (s = 'diff')
							: 'negation' == s
							? (s = 'neg')
							: 'negation' == s
							? (s = 'neg')
							: 'negation' == s
							? (s = 'neg')
							: 'exclusion' == s
							? (s = 'exc')
							: 'overlay' == s
							? (s = 'ovl')
							: 'color dodge' == s
							? (s = 'dodge')
							: 'color burn' == s
							? (s = 'burn')
							: 'softlight' == s
							? (s = 'soft')
							: 'hardlight' == s && (s = 'hard'),
							t.setUiAttrib({ extendTitle: s })
					})
			})
		const dt = {
				'CGL.BLENDMODES': function() {
					;(this.name = 'blendmodes'), (this.srcHeadFrag = pt.getBlendCode())
				},
				'CGL.RANDOM_OLD': function() {
					;(this.name = 'randomNumber'),
						(this.srcHeadFrag =
							''.endl() +
							'float cgl_random(vec2 co)'.endl() +
							'{'.endl() +
							'    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);'.endl() +
							'}'.endl() +
							'vec3 cgl_random3(vec2 co)'.endl() +
							'{'.endl() +
							'    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
							'}')
				},
				'CGL.RANDOM_LOW': function() {
					;(this.name = 'randomNumber'),
						(this.srcHeadFrag =
							''.endl() +
							'float cgl_random(vec2 co)'.endl() +
							'{'.endl() +
							'    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);'.endl() +
							'}'.endl() +
							'vec3 cgl_random3(vec2 co)'.endl() +
							'{'.endl() +
							'    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
							'}')
				},
				'CGL.RANDOM_TEX': function() {
					;(this.name = 'randomNumbertex'),
						(this.srcHeadFrag =
							''.endl() +
							'UNI sampler2D CGLRNDTEX;'.endl() +
							'float cgl_random(vec2 co)'.endl() +
							'{'.endl() +
							'    return texture(CGLRNDTEX,co*5711.0).r;'.endl() +
							'}'.endl() +
							'vec3 cgl_random3(vec2 co)'.endl() +
							'{'.endl() +
							'    return texture(CGLRNDTEX,co*5711.0).rgb;'.endl() +
							'}'),
						(this.initUniforms = function(t) {
							return [new nt(t, 't', 'CGLRNDTEX', 7)]
						}),
						(this.onBind = function(t, e) {
							et.getRandomTexture(t), t.setTexture(7, et.getRandomTexture(t).tex)
						})
				}
			},
			ft = function() {
				return window.performance.now()
			},
			gt = function() {
				return ft()
			},
			_t = function() {
				;(this._timeStart = ft()),
					(this._timeOffset = 0),
					(this._currentTime = 0),
					(this._lastTime = 0),
					(this._paused = !0),
					(this._delay = 0),
					(this._eventsPaused = !1),
					(this.overwriteTime = -1),
					(this.cbPlayPause = []),
					(this.cbTimeChange = [])
			}
		;(_t.prototype._getTime = function() {
			return (this._lastTime = (ft() - this._timeStart) / 1e3), this._lastTime + this._timeOffset
		}),
			(_t.prototype._eventPlayPause = function() {
				if (!this._eventsPaused) for (var t in this.cbPlayPause) this.cbPlayPause[t]()
			}),
			(_t.prototype._eventTimeChange = function() {
				if (!this._eventsPaused) for (var t in this.cbTimeChange) this.cbTimeChange[t]()
			}),
			(_t.prototype.setDelay = function(t) {
				;(this._delay = t), this._eventTimeChange()
			}),
			(_t.prototype.isPlaying = function() {
				return !this._paused
			}),
			(_t.prototype.update = function() {
				if (!this._paused) return (this._currentTime = this._getTime()), this._currentTime
			}),
			(_t.prototype.getMillis = function() {
				return 1e3 * this.get()
			}),
			(_t.prototype.get = _t.prototype.getTime = function() {
				return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay
			}),
			(_t.prototype.togglePlay = function() {
				this._paused ? this.play() : this.pause()
			}),
			(_t.prototype.setTime = function(t) {
				t < 0 && (t = 0), (this._timeStart = ft()), (this._timeOffset = t), (this._currentTime = t), this._eventTimeChange()
			}),
			(_t.prototype.setOffset = function(t) {
				this._currentTime + t < 0
					? ((this._timeStart = ft()), (this._timeOffset = 0), (this._currentTime = 0))
					: ((this._timeOffset += t), (this._currentTime = this._lastTime + this._timeOffset)),
					this._eventTimeChange()
			}),
			(_t.prototype.play = function() {
				;(this._timeStart = ft()), (this._paused = !1), this._eventPlayPause()
			}),
			(_t.prototype.pause = function() {
				;(this._timeOffset = this._currentTime), (this._paused = !0), this._eventPlayPause()
			}),
			(_t.prototype.pauseEvents = function(t) {
				this._eventsPaused = t
			}),
			(_t.prototype.onPlayPause = function(t) {
				t && 'function' == typeof t && this.cbPlayPause.push(t)
			}),
			(_t.prototype.onTimeChange = function(t) {
				t && 'function' == typeof t && this.cbTimeChange.push(t)
			})
		const mt = Math.PI / 180,
			vt = (Math.PI, -1 != window.navigator.userAgent.indexOf('Windows')),
			Et = function(t) {
				var e
				if (t.wheelDelta) (e = (t.wheelDelta % 120) - 0 == -0 ? t.wheelDelta / 120 : t.wheelDelta / 30), (e *= -1.5), vt && (e *= 2)
				else {
					var i = t.deltaY
					t.shiftKey && (i = t.deltaX)
					var s = i || t.detail
					;(e = -(s % 3 ? 10 * s : s / 3)), (e *= -3)
				}
				return e > 20 && (e = 20), e < -20 && (e = -20), e
			},
			bt = Et,
			yt = Et,
			Tt = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
			At = /[&<>"']/g,
			xt = RegExp(At.source),
			Pt = function(t, e) {
				if (!t) throw new Error('shader constructed without cgl ' + e)
				;(this._cgl = t),
					(this._name = e || 'unknown'),
					(this.glslVersion = 0),
					t.glVersion > 1 && (this.glslVersion = 300),
					(this.id = I()),
					(this._program = null),
					(this._uniforms = []),
					(this._drawBuffers = [!0]),
					(this._defines = []),
					(this._needsRecompile = !0),
					(this._projMatrixUniform = null),
					(this._mvMatrixUniform = null),
					(this._mMatrixUniform = null),
					(this._vMatrixUniform = null),
					(this._camPosUniform = null),
					(this._normalMatrixUniform = null),
					(this._inverseViewMatrixUniform = null),
					(this._attrVertexPos = -1),
					(this.precision = t.patch.config.glslPrecision || 'highp'),
					(this._pMatrixState = -1),
					(this._vMatrixState = -1),
					(this._modGroupCount = 0),
					(this._feedBackNames = []),
					(this._attributes = []),
					(this.glPrimitive = null),
					(this.offScreenPass = !1),
					(this._extensions = []),
					(this.srcVert = this.getDefaultVertexShader()),
					(this.srcFrag = this.getDefaultFragmentShader()),
					(this.lastCompile = 0),
					(this._moduleNames = []),
					(this._modules = []),
					(this._moduleNumId = 0),
					(this._libs = []),
					(this._textureStackUni = []),
					(this._textureStackTex = []),
					(this._textureStackType = []),
					(this._tempNormalMatrix = mat4.create()),
					(this._tempCamPosMatrix = mat4.create()),
					(this._tempInverseViewMatrix = mat4.create()),
					this.setModules(['MODULE_VERTEX_POSITION', 'MODULE_COLOR', 'MODULE_BEGIN_FRAG'])
			}
		;(Pt.prototype.getCgl = function() {
			return this._cgl
		}),
			(Pt.prototype.getName = function() {
				return this._name
			}),
			(Pt.prototype.enableExtension = function(t) {
				this.setWhyCompile('enable extension ' + t), (this._needsRecompile = !0), this._extensions.push(t)
			}),
			(Pt.prototype.getAttrVertexPos = function() {
				return this._attrVertexPos
			}),
			(Pt.prototype.hasTextureUniforms = function() {
				for (var t = 0; t < this._uniforms.length; t++) if ('t' == this._uniforms[t].getType()) return !0
				return !1
			}),
			(Pt.prototype.setWhyCompile = function(t) {}),
			(Pt.prototype.setSource = function(t, e) {
				;(this.srcVert = t), (this.srcFrag = e), this.setWhyCompile('Source changed'), (this._needsRecompile = !0)
			}),
			(Pt.prototype._addLibs = function(t) {
				for (var e in dt)
					if (t.indexOf(e) > -1) {
						var i = new dt[e]()
						;(t = t.replace('{{' + e + '}}', i.srcHeadFrag)), this._libs.push(i), i.initUniforms && i.initUniforms(this)
					}
				return t
			}),
			(Pt.prototype.compile = function() {
				Q.profileShaderCompiles++, (Q.profileShaderCompileName = this._name)
				var t = ''
				if (this._extensions) for (i = 0; i < this._extensions.length; i++) t += '#extension ' + this._extensions[i] + ' : enable'.endl()
				var e = '',
					i = 0
				for (i = 0; i < this._defines.length; i++) e += '#define ' + this._defines[i][0] + ' ' + this._defines[i][1] + ''.endl()
				if (this._uniforms) for (i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc()
				this.hasTextureUniforms() && (e += '#define HAS_TEXTURES'.endl())
				var s = '',
					r = ''
				if (300 == this.glslVersion) {
					var n = '',
						o = 0
					if (
						(this.srcFrag.indexOf('outColor0') > -1 && (this._drawBuffers[0] = !0),
						this.srcFrag.indexOf('outColor1') > -1 && (this._drawBuffers[1] = !0),
						this.srcFrag.indexOf('outColor2') > -1 && (this._drawBuffers[2] = !0),
						this.srcFrag.indexOf('outColor3') > -1 && (this._drawBuffers[3] = !0),
						1 == this._drawBuffers.length)
					)
						(n = 'out vec4 outColor;'.endl()), (n += '#define gl_FragColor outColor'.endl())
					else {
						o = 0
						n += 'vec4 outColor;'.endl()
						for (i = 0; i < this._drawBuffers.length; i++)
							0 == o && (n += '#define gl_FragColor outColor' + i + ''.endl()), (n += 'layout(location = ' + i + ') out vec4 outColor' + i + ';'.endl()), o++
					}
					;(s =
						'#version 300 es'.endl() +
						'// '.endl() +
						'// vertex shader ' +
						this._name.endl() +
						'// '.endl() +
						'precision ' +
						this.precision +
						' float;'.endl() +
						''.endl() +
						'#define WEBGL2'.endl() +
						'#define texture2D texture'.endl() +
						'#define UNI uniform'.endl() +
						'#define IN in'.endl() +
						'#define OUT out'.endl()),
						(r =
							'#version 300 es'.endl() +
							'// '.endl() +
							'// fragment shader ' +
							this._name.endl() +
							'// '.endl() +
							'precision ' +
							this.precision +
							' float;'.endl() +
							''.endl() +
							'#define WEBGL2'.endl() +
							'#define texture2D texture'.endl() +
							'#define IN in'.endl() +
							'#define UNI uniform'.endl() +
							n.endl())
				} else
					(r =
						''.endl() +
						'// '.endl() +
						'// fragment shader ' +
						this._name.endl() +
						'// '.endl() +
						'#define WEBGL1'.endl() +
						'#define texture texture2D'.endl() +
						'#define outColor gl_FragColor'.endl() +
						'#define IN varying'.endl() +
						'#define UNI uniform'.endl()),
						(s =
							''.endl() +
							'// '.endl() +
							'// vertex shader ' +
							this._name.endl() +
							'// '.endl() +
							'#define WEBGL1'.endl() +
							'#define texture texture2D'.endl() +
							'#define OUT varying'.endl() +
							'#define IN attribute'.endl() +
							'#define UNI uniform'.endl())
				;-1 == r.indexOf('precision') && (r = 'precision ' + this.precision + ' float;'.endl() + r),
					-1 == s.indexOf('precision') && (s = 'precision ' + this.precision + ' float;'.endl() + s),
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
						((r += '#define MOBILE'.endl()), (s += '#define MOBILE'.endl())),
					(s = t + s + e + this.srcVert),
					(r = t + r + e + this.srcFrag)
				var a = '',
					h = ''
				this._modules.sort(function(t, e) {
					return t.group - e.group
				}),
					this._modules.sort(function(t, e) {
						return t.priority || 0 - e.priority || 0
					})
				var l = !1
				for (i = 0; i < this._moduleNames.length; i++) {
					for (var u = '', c = '', p = 0; p < this._modules.length; p++)
						if (this._modules[p].name == this._moduleNames[i]) {
							if (
								((a += '\n//---- MOD: ' + this._modules[p].group + ': ' + p + ' - ' + this._modules[p].title + ' ------\n'),
								(h += '\n//---- MOD: ' + this._modules[p].group + ': ' + p + ' - ' + this._modules[p].title + ' ------\n'),
								(u += '\n\n//---- MOD: ' + this._modules[p].title + ' ------\n'),
								(c += '\n\n//---- MOD: ' + this._modules[p].title + ' ------\n'),
								!l)
							) {
								l = !0
								for (var d = 0; d < this._attributes.length; d++)
									this._attributes[d].name &&
										this._attributes[d].type &&
										((a +=
											''.endl() +
											'#ifndef ATTRIB_' +
											this._attributes[d].name.endl() +
											'  #define ATTRIB_' +
											this._attributes[d].name.endl() +
											'  IN ' +
											this._attributes[d].type +
											' ' +
											this._attributes[d].name +
											';'.endl() +
											'#endif'),
										this._attributes[d].nameFrag &&
											((a +=
												''.endl() +
												'#ifndef ATTRIB_' +
												this._attributes[d].nameFrag.endl() +
												'  #define ATTRIB_' +
												this._attributes[d].nameFrag.endl() +
												'  OUT ' +
												this._attributes[d].type +
												' ' +
												this._attributes[d].nameFrag +
												';'.endl() +
												'#endif'),
											(u += ''.endl() + this._attributes[d].nameFrag + '=' + this._attributes[d].name + ';')),
										(h +=
											''.endl() +
											'#ifndef ATTRIB_' +
											this._attributes[d].nameFrag.endl() +
											'  #define ATTRIB_' +
											this._attributes[d].nameFrag.endl() +
											'  IN ' +
											this._attributes[d].type +
											' ' +
											this._attributes[d].nameFrag +
											';'.endl() +
											'#endif'))
							}
							;(a += this._modules[p].srcHeadVert || ''),
								(h += this._modules[p].srcHeadFrag || ''),
								(u += this._modules[p].srcBodyVert || ''),
								(c += this._modules[p].srcBodyFrag || ''),
								(a += '\n//---- end mod ------\n'),
								(h += '\n//---- end mod ------\n'),
								(c += '\n//---- end mod ------\n'),
								(u = (u += '\n//---- end mod ------\n').replace(/{{mod}}/g, this._modules[p].prefix)),
								(c = c.replace(/{{mod}}/g, this._modules[p].prefix)),
								(a = a.replace(/{{mod}}/g, this._modules[p].prefix)),
								(h = h.replace(/{{mod}}/g, this._modules[p].prefix)),
								(u = u.replace(/MOD_/g, this._modules[p].prefix)),
								(c = c.replace(/MOD_/g, this._modules[p].prefix)),
								(a = a.replace(/MOD_/g, this._modules[p].prefix)),
								(h = h.replace(/MOD_/g, this._modules[p].prefix))
						}
					;(s = s.replace('{{' + this._moduleNames[i] + '}}', u)), (r = r.replace('{{' + this._moduleNames[i] + '}}', c))
				}
				if (((s = s.replace('{{MODULES_HEAD}}', a)), (r = r.replace('{{MODULES_HEAD}}', h)), (s = this._addLibs(s)), (r = this._addLibs(r)), this._program))
					for (this._program = this._createProgram(s, r), this._projMatrixUniform = null, i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc()
				else this._program = this._createProgram(s, r)
				;(this.finalShaderFrag = r),
					(this.finalShaderVert = s),
					(ht.lastMesh = null),
					(ht.lastShader = null),
					(this._needsRecompile = !1),
					(this.lastCompile = gt())
			}),
			(Pt.prototype.bind = function() {
				var t = 0
				if (((ht.lastShader = this), (this._program && !this._needsRecompile) || this.compile(), !this._projMatrixUniform))
					for (
						this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, at.SHADER.SHADERVAR_VERTEX_POSITION),
							this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_PROJMAT),
							this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, 'mvMatrix'),
							this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_VIEWMAT),
							this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_MODELMAT),
							this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_VIEWPOS),
							this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_NORMALMAT),
							this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, at.SHADER.SHADERVAR_UNI_INVVIEWMAT),
							t = 0;
						t < this._uniforms.length;
						t++
					)
						this._uniforms[t].needsUpdate = !0
				for (
					this._cgl.currentProgram != this._program &&
						(Q.profileShaderBinds++, this._cgl.gl.useProgram(this._program), (this._cgl.currentProgram = this._program)),
						t = 0;
					t < this._uniforms.length;
					t++
				)
					this._uniforms[t].needsUpdate && this._uniforms[t].updateValue()
				if (
					(this._pMatrixState != this._cgl.getProjectionMatrixStateCount() &&
						((this._pMatrixState = this._cgl.getProjectionMatrixStateCount()),
						this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix),
						Q.profileMVPMatrixCount++),
					this._vMatrixUniform)
				)
					this._vMatrixState != this._cgl.getViewMatrixStateCount() &&
						(this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix),
						Q.profileMVPMatrixCount++,
						(this._vMatrixState = this._cgl.getViewMatrixStateCount()),
						this._inverseViewMatrixUniform &&
							(mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix),
							this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix),
							Q.profileMVPMatrixCount++)),
						this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix),
						Q.profileMVPMatrixCount++,
						this._camPosUniform &&
							(mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix),
							this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]),
							Q.profileMVPMatrixCount++)
				else {
					var e = mat4.create()
					mat4.mul(e, this._cgl.vMatrix, this._cgl.mMatrix), this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, e), Q.profileMVPMatrixCount++
				}
				this._normalMatrixUniform &&
					(mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix),
					mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix),
					this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix),
					Q.profileMVPMatrixCount++)
				for (t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t])(this._cgl, this)
				this._bindTextures()
			}),
			(Pt.prototype.toggleDefine = function(t, e) {
				e ? this.define(t) : this.removeDefine(t)
			}),
			(Pt.prototype.define = function(t, e) {
				e || (e = '')
				for (var i = 0; i < this._defines.length; i++) {
					if (this._defines[i][0] == t && this._defines[i][1] == e) return
					if (this._defines[i][0] == t) return (this._defines[i][1] = e), void (this._needsRecompile = !0)
				}
				this._defines.push([t, e]), (this._needsRecompile = !0), this.setWhyCompile('define ' + t + ' ' + e)
			}),
			(Pt.prototype.getDefines = function() {
				return this._defines
			}),
			(Pt.prototype.getDefine = function(t) {
				for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines[e][1]
				return null
			}),
			(Pt.prototype.hasDefine = function(t) {
				for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return !0
			}),
			(Pt.prototype.removeDefine = function(t) {
				for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines.splice(e, 1), void (this._needsRecompile = !0)
			}),
			(Pt.prototype.removeModule = function(t) {
				for (var e = 0; e < this._modules.length; e++)
					if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
						for (var i = !0; i; ) {
							i = !1
							for (var s = 0; s < this._uniforms.length; s++) 0 != this._uniforms[s].getName().indexOf(t.prefix) || (this._uniforms.splice(s, 1), (i = !0))
						}
						;(this._needsRecompile = !0), this.setWhyCompile('remove module ' + t.title), this._modules.splice(e, 1)
						break
					}
			}),
			(Pt.prototype.getNumModules = function() {
				return this._modules.length
			}),
			(Pt.prototype.getCurrentModules = function() {
				return this._modules
			}),
			(Pt.prototype.addModule = function(t, e) {
				return (
					t.id || (t.id = x()),
					t.numId || (t.numId = this._moduleNumId),
					t.num || (t.num = this._modules.length),
					(t.group = e ? e.group : this._modGroupCount++),
					(t.prefix = 'mod' + t.group),
					this._modules.push(t),
					(this._needsRecompile = !0),
					this.setWhyCompile('add module ' + t.title),
					this._moduleNumId++,
					t
				)
			}),
			(Pt.prototype.setModules = function(t) {
				this._moduleNames = t
			}),
			(Pt.prototype.dispose = function() {
				this._cgl.gl.deleteProgram(this._program)
			}),
			(Pt.prototype.setDrawBuffers = function(t) {
				;(this._drawBuffers = t), (this._needsRecompile = !0)
			}),
			(Pt.prototype.getUniforms = function() {
				return this._uniforms
			}),
			(Pt.prototype.getUniform = function(t) {
				for (var e = 0; e < this._uniforms.length; e++) if (this._uniforms[e].getName() == t) return this._uniforms[e]
				return null
			}),
			(Pt.prototype.removeUniform = function(t) {
				for (var e = 0; e < this._uniforms.length; e++) this._uniforms[e].getName() == t && this._uniforms.splice(e, 1)
				;(this._needsRecompile = !0), this.setWhyCompile('remove uniform ' + t)
			}),
			(Pt.prototype.addUniform = function(t) {
				this._uniforms.push(t), this.setWhyCompile('add uniform ' + name), (this._needsRecompile = !0)
			}),
			(Pt.prototype._createProgram = function(t, e) {
				var i = this._cgl.gl.createProgram()
				return (
					(this.vshader = Pt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this)),
					(this.fshader = Pt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this)),
					this._cgl.gl.attachShader(i, this.vshader),
					this._cgl.gl.attachShader(i, this.fshader),
					this._linkProgram(i),
					i
				)
			}),
			(Pt.prototype.hasErrors = function() {
				return this._hasErrors
			}),
			(Pt.prototype._linkProgram = function(t) {
				this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS),
					this._cgl.gl.linkProgram(t),
					!1 !== this._cgl.patch.config.glValidateShader &&
						(this._cgl.gl.validateProgram(t),
						this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) ||
							(console.warn(this._cgl.gl.getShaderInfoLog(this.fshader)),
							console.warn(this._cgl.gl.getShaderInfoLog(this.vshader)),
							console.error(name + ' shader linking fail...'),
							g.log('srcFrag', this.srcFrag),
							g.log('srcVert', this.srcVert),
							g.log(name + ' programinfo: ', this._cgl.gl.getProgramInfoLog(t)),
							g.log('--------------------------------------'),
							g.log(this),
							g.log('--------------------------------------'),
							(name = 'errorshader'),
							this.setSource(Pt.getDefaultVertexShader(), Pt.getErrorFragmentShader())))
			}),
			(Pt.prototype.getProgram = function() {
				return this._program
			}),
			(Pt.prototype.setFeedbackNames = function(t) {
				;(this._needsRecompile = !0), (this._feedBackNames = t)
			}),
			(Pt.prototype.getDefaultVertexShader = Pt.getDefaultVertexShader = function() {
				return (
					''.endl() +
					'{{MODULES_HEAD}}'.endl() +
					'IN vec3 vPosition;'.endl() +
					'IN vec2 attrTexCoord;'.endl() +
					'IN vec3 attrVertNormal;'.endl() +
					'IN float attrVertIndex;'.endl() +
					'OUT vec2 texCoord;'.endl() +
					'OUT vec3 norm;'.endl() +
					'UNI mat4 projMatrix;'.endl() +
					'UNI mat4 viewMatrix;'.endl() +
					'UNI mat4 modelMatrix;'.endl() +
					'void main()'.endl() +
					'{'.endl() +
					'   texCoord=attrTexCoord;'.endl() +
					'   norm=attrVertNormal;'.endl() +
					'   vec4 pos=vec4(vPosition,  1.0);'.endl() +
					'   mat4 mMatrix=modelMatrix;'.endl() +
					'   {{MODULE_VERTEX_POSITION}}'.endl() +
					'   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;'.endl() +
					'}'
				)
			}),
			(Pt.prototype.getDefaultFragmentShader = Pt.getDefaultFragmentShader = function(t, e, i) {
				return (
					null == t && ((t = 0.5), (e = 0.5), (i = 0.5)),
					''.endl() +
						'IN vec2 texCoord;'.endl() +
						'{{MODULES_HEAD}}'.endl() +
						'void main()'.endl() +
						'{'.endl() +
						'    vec4 col=vec4(' +
						t +
						',' +
						e +
						',' +
						i +
						',1.0);'.endl() +
						'    {{MODULE_COLOR}}'.endl() +
						'    outColor = col;'.endl() +
						'}'
				)
			}),
			(Pt.prototype.addAttribute = function(t) {
				for (var e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t.name && this._attributes[e].nameFrag == t.nameFrag) return
				this._attributes.push(t), (this._needsRecompile = !0)
			}),
			(Pt.prototype.bindTextures = Pt.prototype._bindTextures = function() {
				this._textureStackTex.length > this._cgl.maxTextureUnits &&
					console.log('[shader._bindTextures] too many textures bound', this._textureStackTex.length + '/' + this._cgl.maxTextureUnits)
				for (var t = 0; t < this._textureStackTex.length; t++)
					this._textureStackTex[t]
						? this._textureStackUni[t]
							? (this._textureStackUni[t].setValue(t), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t]))
							: (console.log('no uniform for pushtexture', this._name), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t]))
						: console.log('no texture for pushtexture', this._name)
			}),
			(Pt.prototype.pushTexture = function(t, e, i) {
				if (!t) throw new Error('no uniform given to texturestack')
				if (!e) throw new Error('no texture given to texturestack')
				this._textureStackUni.push(t), this._textureStackTex.push(e), this._textureStackType.push(i)
			}),
			(Pt.prototype.popTexture = function() {
				this._textureStackUni.pop(), this._textureStackTex.pop(), this._textureStackType.pop()
			}),
			(Pt.prototype.popTextures = function() {
				this._textureStackTex.length = this._textureStackType.length = this._textureStackUni.length = 0
			}),
			(Pt.getErrorFragmentShader = function() {
				return (
					''.endl() +
					'void main()'.endl() +
					'{'.endl() +
					'   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;'.endl() +
					'   g= step(0.1,g);'.endl() +
					'   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);'.endl() +
					'}'
				)
			}),
			(Pt.createShader = function(t, e, i, s) {
				var r,
					n = t.gl.createShader(i)
				if ((t.gl.shaderSource(n, e), t.gl.compileShader(n), !t.gl.getShaderParameter(n, t.gl.COMPILE_STATUS))) {
					g.log('compile status: '),
						i == t.gl.VERTEX_SHADER && g.log('VERTEX_SHADER'),
						i == t.gl.FRAGMENT_SHADER && g.log('FRAGMENT_SHADER'),
						console.warn(t.gl.getShaderInfoLog(n))
					var o = t.gl.getShaderInfoLog(n),
						a = (function(t) {
							var e = [],
								i = t.split('\n')
							for (var s in i) {
								var r = i[s].split(':')
								parseInt(r[2], 10) && e.push(parseInt(r[2], 10))
							}
							return e
						})(o),
						h = '<div class="shaderErrorCode">',
						l = e.match(/^.*((\r\n|\n|\r)|$)/gm)
					for (var u in l) {
						var c = parseInt(u, 10) + 1,
							p = c + ': ' + l[u]
						g.log(p)
						var d = !1
						for (var f in a) a[f] == c && (d = !0)
						d && (h += '<span class="error">'),
							(h +=
								(r = p) && xt.test(r)
									? r.replace(At, function(t) {
											return Tt[t]
									  })
									: r || ''),
							d && (h += '</span>')
					}
					console.warn(o),
						(h = (o = o.replace(/\n/g, '<br/>')) + '<br/>' + h + '<br/><br/>'),
						t.patch.emitEvent('criticalError', 'Shader error ' + name, h),
						t.patch.isEditorMode() && g.log('Shader error ' + name, h),
						(h += '</div>'),
						(name = 'errorshader'),
						s.setSource(Pt.getDefaultVertexShader(), Pt.getErrorFragmentShader())
				}
				return n
			})
		const It = function() {
			;(this._arr = [mat4.create()]), (this._index = 0), (this.stateCounter = 0)
		}
		;(It.prototype.push = function(t) {
			if ((this._index++, this.stateCounter++, this._index == this._arr.length)) {
				var e = mat4.create()
				this._arr.push(e)
			}
			return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]), this._arr[this._index]
		}),
			(It.prototype.pop = function() {
				return this.stateCounter++, this._index--, this._index < 0 && (this._index = 0), this._arr[this._index]
			}),
			(It.prototype.length = function() {
				return this._index
			})
		const Ot = function(t) {
			var e = this,
				i = [0, 0, 0, 0]
			;(this.glVersion = 0),
				(this.glUseHalfFloatTex = !1),
				(this.clearCanvasTransparent = !0),
				(this.clearCanvasDepth = !0),
				(this.patch = t),
				(this.maxTextureUnits = 0),
				(this.currentProgram = null),
				(this.temporaryTexture = null),
				(this.frameStore = {}),
				(this.gl = null),
				(this.pMatrix = mat4.create()),
				(this.mMatrix = mat4.create()),
				(this.vMatrix = mat4.create()),
				(this._textureslots = []),
				(this._pMatrixStack = new It()),
				(this._mMatrixStack = new It()),
				(this._vMatrixStack = new It()),
				(this._glFrameBufferStack = []),
				(this._frameBufferStack = []),
				(this._shaderStack = []),
				Object.defineProperty(this, 'mvMatrix', {
					get() {
						return this.mMatrix
					},
					set(t) {
						this.mMatrix = t
					}
				}),
				(this.canvas = null),
				(this.pixelDensity = 1),
				mat4.identity(this.mMatrix),
				mat4.identity(this.vMatrix)
			var s = new Pt(this, 'simpleshader')
			s.setModules(['MODULE_VERTEX_POSITION', 'MODULE_COLOR', 'MODULE_BEGIN_FRAG']), s.setSource(Pt.getDefaultVertexShader(), Pt.getDefaultFragmentShader())
			var r = s,
				n = []
			;(this.addEventListener = function(t, e) {
				'resize' == t && n.push(e)
			}),
				(this.removeEventListener = function(t, e) {
					if ('resize' == t) for (var i in n) if (n[i] == e) return void n.splice(i, 1)
				}),
				(this.exitError = function(t, e) {
					this.patch.exitError(t, e), (this.aborted = !0)
				}),
				(this.setCanvas = function(t) {
					if (
						((this.canvas = 'string' == typeof t ? document.getElementById(t) : t),
						this.patch.config.canvas || (this.patch.config.canvas = {}),
						this.patch.config.canvas.hasOwnProperty('preserveDrawingBuffer') || (this.patch.config.canvas.preserveDrawingBuffer = !1),
						this.patch.config.canvas.hasOwnProperty('premultipliedAlpha') || (this.patch.config.canvas.premultipliedAlpha = !1),
						this.patch.config.canvas.hasOwnProperty('alpha') || (this.patch.config.canvas.alpha = !1),
						this.patch.config.hasOwnProperty('clearCanvasColor') && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor),
						this.patch.config.hasOwnProperty('clearCanvasDepth') && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth),
						this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext('webgl2', this.patch.config.canvas)),
						this.gl && 'WebGL 1.0' != this.gl.getParameter(this.gl.VERSION)
							? (this.glVersion = 2)
							: ((this.gl =
									this.canvas.getContext('webgl', this.patch.config.canvas) || this.canvas.getContext('experimental-webgl', this.patch.config.canvas)),
							  (this.glVersion = 1),
							  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0),
							  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
									!window.MSStream &&
									(this.patch.config.canvas.hasOwnProperty('powerPreference') || (this.patch.config.canvas.powerPreference = 'high-performance'))),
						this.gl)
					) {
						this.gl.getExtension('OES_standard_derivatives'), this.gl.getExtension('GL_OES_standard_derivatives')
						var i = this.gl.getExtension('ANGLE_instanced_arrays') || this.gl
						;(this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)),
							i.vertexAttribDivisorANGLE &&
								((this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(i)), (this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(i))),
							e.updateSize()
					} else this.exitError('NO_WEBGL', 'sorry, could not initialize WebGL. Please check if your Browser supports WebGL.')
				}),
				(this.updateSize = function() {
					;(this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity),
						(this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity)
				}),
				(this.canvasWidth = -1),
				(this.canvasHeight = -1),
				(this.canvasScale = 1)
			var o = -1,
				a = -1
			;(this.getViewPort = function() {
				return i
			}),
				(this.resetViewPort = function() {
					this.gl.viewport(i[0], i[1], i[2], i[3])
				}),
				(this.setViewPort = function(t, e, s, r) {
					;(i[0] = Math.round(t)), (i[1] = Math.round(e)), (i[2] = Math.round(s)), (i[3] = Math.round(r)), this.gl.viewport(i[0], i[1], i[2], i[3])
				}),
				(this.beginFrame = function() {
					this.patch.isEditorMode() && (gui.metaTexturePreviewer.render(), CABLES.UI.patchPreviewer && CABLES.UI.patchPreviewer.render()), e.setShader(s)
				}),
				(this.screenShot = function(t, e, i, s) {
					e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)),
						this.canvas &&
							this.canvas.toBlob &&
							this.canvas.toBlob(
								e => {
									t ? t(e) : g.log('no screenshot callback...')
								},
								i,
								s
							)
				}),
				(this.endFrame = function() {
					if (
						(this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this),
						e.setPreviousShader(),
						this._vMatrixStack.length() > 0 && g.warn('view matrix stack length !=0 at end of rendering...'),
						this._mMatrixStack.length() > 0 && g.warn('mvmatrix stack length !=0 at end of rendering...'),
						this._pMatrixStack.length() > 0 && g.warn('pmatrix stack length !=0 at end of rendering...'),
						this._glFrameBufferStack.length > 0 && g.warn('glFrameBuffer stack length !=0 at end of rendering...'),
						this._stackDepthTest.length > 0 && g.warn('depthtest stack length !=0 at end of rendering...'),
						this._stackDepthWrite.length > 0 && g.warn('depthwrite stack length !=0 at end of rendering...'),
						this._stackDepthFunc.length > 0 && g.warn('depthfunc stack length !=0 at end of rendering...'),
						this._stackBlend.length > 0 && g.warn('blend stack length !=0 at end of rendering...'),
						this._stackBlendMode.length > 0 && g.warn('blendMode stack length !=0 at end of rendering...'),
						this._shaderStack.length > 0 && g.warn('this._shaderStack length !=0 at end of rendering...'),
						this._stackCullFace.length > 0 && g.warn('this._stackCullFace length !=0 at end of rendering...'),
						this._stackCullFaceFacing.length > 0 && g.warn('this._stackCullFaceFacing length !=0 at end of rendering...'),
						o != e.canvasWidth || a != e.canvasHeight)
					) {
						;(o = e.canvasWidth), (a = e.canvasHeight), this.setSize(e.canvasWidth / this.pixelDensity, e.canvasHeight / this.pixelDensity), this.updateSize()
						for (var t = 0; t < n.length; t++) n[t]()
					}
				}),
				(this.getShader = function() {
					if (r && (!this.frameStore || ((!0 === this.frameStore.renderOffscreen) == r.offScreenPass) == !0)) return r
					for (var t = this._shaderStack.length - 1; t >= 0; t--)
						if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t]
				}),
				(this.getDefaultShader = function() {
					return s
				}),
				(this.setShader = function(t) {
					this._shaderStack.push(t), (r = t)
				}),
				(this.setPreviousShader = function() {
					if (0 === this._shaderStack.length) throw 'Invalid shader stack pop!'
					this._shaderStack.pop(), (r = this._shaderStack[this._shaderStack.length - 1])
				}),
				(this.pushGlFrameBuffer = function(t) {
					this._glFrameBufferStack.push(t)
				}),
				(this.popGlFrameBuffer = function() {
					return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1])
				}),
				(this.getCurrentGlFrameBuffer = function() {
					return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
				}),
				(this.pushFrameBuffer = function(t) {
					this._frameBufferStack.push(t)
				}),
				(this.popFrameBuffer = function() {
					return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1])
				}),
				(this.getCurrentFrameBuffer = function() {
					return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1]
				})
			var h = vec3.create()
			vec3.set(h, 0, 0, 2)
			var l = vec3.create()
			vec3.set(l, 0, 0, 0),
				(this.renderStart = function(t, e, i) {
					e || (e = l),
						i || (i = h),
						this.pushDepthTest(!0),
						this.pushDepthWrite(!0),
						this.pushDepthFunc(t.gl.LEQUAL),
						this.pushCullFaceFacing(t.gl.BACK),
						this.pushCullFace(!1),
						this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
						this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
						t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
						mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, 0.1, 1e3),
						mat4.identity(t.mMatrix),
						mat4.identity(t.vMatrix),
						mat4.translate(t.mMatrix, t.mMatrix, e),
						mat4.translate(t.vMatrix, t.vMatrix, i),
						t.pushPMatrix(),
						t.pushModelMatrix(),
						t.pushViewMatrix(),
						t.pushBlendMode(at.BLEND_MODES.BLEND_NORMAL, !1)
					for (var s = 0; s < this._textureslots.length; s++) this._textureslots[s] = null
					t.beginFrame()
				}),
				(this.renderEnd = function(t, e) {
					t.popViewMatrix(),
						t.popModelMatrix(),
						t.popPMatrix(),
						this.popDepthTest(),
						this.popDepthWrite(),
						this.popDepthFunc(),
						this.popCullFaceFacing(),
						this.popCullFace(),
						this.popBlend(),
						this.popBlendMode(),
						t.endFrame()
				}),
				(this.getTexture = function(t) {
					return this._textureslots[t]
				}),
				(this.setTexture = function(t, e, i) {
					this._textureslots[t] != e &&
						(this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), (this._textureslots[t] = e))
				}),
				(this.fullScreen = function() {
					this.canvas.requestFullscreen
						? this.canvas.requestFullscreen()
						: this.canvas.mozRequestFullScreen
						? this.canvas.mozRequestFullScreen()
						: this.canvas.webkitRequestFullscreen
						? this.canvas.webkitRequestFullscreen()
						: this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen()
				}),
				(this.setSize = function(t, e) {
					;(this.canvas.style.width = t + 'px'),
						(this.canvas.style.height = e + 'px'),
						(this.canvas.width = t * this.pixelDensity),
						(this.canvas.height = e * this.pixelDensity),
						this.updateSize()
				}),
				(this._resizeToWindowSize = function() {
					this.setSize(window.innerWidth, window.innerHeight), this.updateSize()
				}),
				(this._resizeToParentSize = function() {
					var t = this.canvas.parentElement
					t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : console.error('cables: can not resize to container element')
				}),
				(this.setAutoResize = function(t) {
					window.removeEventListener('resize', this._resizeToWindowSize.bind(this)),
						window.removeEventListener('resize', this._resizeToParentSize.bind(this)),
						'window' == t &&
							(window.addEventListener('resize', this._resizeToWindowSize.bind(this)),
							window.addEventListener('orientationchange', this._resizeToWindowSize.bind(this)),
							this._resizeToWindowSize()),
						'parent' == t && (window.addEventListener('resize', this._resizeToParentSize.bind(this)), this._resizeToParentSize())
				}),
				(this.printError = function(t) {
					var e = this.gl.getError()
					if (e != this.gl.NO_ERROR) {
						var i = ''
						e == this.gl.OUT_OF_MEMORY && (i = 'OUT_OF_MEMORY'),
							e == this.gl.INVALID_ENUM && (i = 'INVALID_ENUM'),
							e == this.gl.INVALID_OPERATION && (i = 'INVALID_OPERATION'),
							e == this.gl.INVALID_FRAMEBUFFER_OPERATION && (i = 'INVALID_FRAMEBUFFER_OPERATION'),
							e == this.gl.INVALID_VALUE && (i = 'INVALID_VALUE'),
							e == this.gl.CONTEXT_LOST_WEBGL && (i = 'CONTEXT_LOST_WEBGL'),
							e == this.gl.NO_ERROR && (i = 'NO_ERROR'),
							g.log('gl error: ', t, e, i)
					}
				}),
				(this.saveScreenshot = function(t, e, i, s, r) {
					this.patch.renderOneFrame()
					var n = this.canvas.clientWidth,
						o = this.canvas.clientHeight
					function a(t, e, i) {
						return Array(e - String(t).length + 1).join(i || '0') + t
					}
					i && ((this.canvas.width = i), (n = i)), s && ((this.canvas.height = s), (o = s))
					var h = new Date(),
						l = ''
							.concat(String(h.getFullYear()) + String(h.getMonth() + 1) + String(h.getDate()), '_')
							.concat(a(h.getHours(), 2))
							.concat(a(h.getMinutes(), 2))
							.concat(a(h.getSeconds(), 2))
					t ? (t += '.png') : (t = 'cables_' + l + '.png'),
						this.patch.cgl.screenShot(
							function(i) {
								if (((this.canvas.width = n), (this.canvas.height = o), i)) {
									var s = document.createElement('a')
									;(s.download = t),
										(s.href = URL.createObjectURL(i)),
										setTimeout(function() {
											s.click(), e && e(i)
										}, 100)
								} else g.log('screenshot: no blob')
							}.bind(this),
							r
						)
				})
		}
		;(Ot.prototype.pushViewMatrix = function() {
			this.vMatrix = this._vMatrixStack.push(this.vMatrix)
		}),
			(Ot.prototype.popViewMatrix = function() {
				this.vMatrix = this._vMatrixStack.pop()
			}),
			(Ot.prototype.getViewMatrixStateCount = function() {
				return this._vMatrixStack.stateCounter
			}),
			(Ot.prototype.pushPMatrix = function() {
				this.pMatrix = this._pMatrixStack.push(this.pMatrix)
			}),
			(Ot.prototype.popPMatrix = function() {
				return (this.pMatrix = this._pMatrixStack.pop()), this.pMatrix
			}),
			(Ot.prototype.getProjectionMatrixStateCount = function() {
				return this._pMatrixStack.stateCounter
			}),
			(Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function() {
				this.mMatrix = this._mMatrixStack.push(this.mMatrix)
			}),
			(Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function() {
				return (this.mMatrix = this._mMatrixStack.pop()), this.mMatrix
			}),
			(Ot.prototype.modelMatrix = function() {
				return this.mMatrix
			}),
			(Ot.prototype._stackDepthTest = []),
			(Ot.prototype.pushDepthTest = function(t) {
				this._stackDepthTest.push(t), t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
			}),
			(Ot.prototype.stateDepthTest = function() {
				return this._stackDepthTest[this._stackDepthTest.length - 1]
			}),
			(Ot.prototype.popDepthTest = function() {
				this._stackDepthTest.pop(),
					this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
			}),
			(Ot.prototype._stackDepthWrite = []),
			(Ot.prototype.pushDepthWrite = function(t) {
				this._stackDepthWrite.push(t), this.gl.depthMask(t)
			}),
			(Ot.prototype.stateDepthWrite = function() {
				return this._stackDepthWrite[this._stackDepthWrite.length - 1]
			}),
			(Ot.prototype.popDepthWrite = function() {
				this._stackDepthWrite.pop(), this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1])
			}),
			(Ot.prototype._stackCullFace = []),
			(Ot.prototype.pushCullFace = function(t) {
				this._stackCullFace.push(t), t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
			}),
			(Ot.prototype.stateCullFace = function() {
				return this._stackCullFace[this._stackCullFace.length - 1]
			}),
			(Ot.prototype.popCullFace = function() {
				this._stackCullFace.pop(), this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
			}),
			(Ot.prototype._stackCullFaceFacing = []),
			(Ot.prototype.pushCullFaceFacing = function(t) {
				this._stackCullFaceFacing.push(t), this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
			}),
			(Ot.prototype.stateCullFaceFacing = function() {
				return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
			}),
			(Ot.prototype.popCullFaceFacing = function() {
				this._stackCullFaceFacing.pop(),
					this._stackCullFaceFacing.length > 0 && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
			}),
			(Ot.prototype._stackDepthFunc = []),
			(Ot.prototype.pushDepthFunc = function(t) {
				this._stackDepthFunc.push(t), this.gl.depthFunc(t)
			}),
			(Ot.prototype.stateDepthFunc = function() {
				return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1]
			}),
			(Ot.prototype.popDepthFunc = function() {
				this._stackDepthFunc.pop(), this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
			}),
			(Ot.prototype._stackBlend = []),
			(Ot.prototype.pushBlend = function(t) {
				this._stackBlend.push(t), t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
			}),
			(Ot.prototype.popBlend = function() {
				this._stackBlend.pop(), this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
			}),
			(Ot.prototype.stateBlend = function() {
				return this._stackBlend[this._stackBlend.length - 1]
			})
		;(Ot.prototype._stackBlendMode = []),
			(Ot.prototype._stackBlendModePremul = []),
			(Ot.prototype.pushBlendMode = function(t, e) {
				this._stackBlendMode.push(t), this._stackBlendModePremul.push(e)
				const i = this._stackBlendMode.length - 1
				this.pushBlend(this._stackBlendMode[i] !== at.BLEND_MODES.BLEND_NONE), this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i])
			}),
			(Ot.prototype.popBlendMode = function() {
				this._stackBlendMode.pop(), this._stackBlendModePremul.pop()
				const t = this._stackBlendMode.length - 1
				this.popBlend(this._stackBlendMode[t] !== at.BLEND_MODES.BLEND_NONE),
					t > 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t])
			}),
			(Ot.prototype.glGetAttribLocation = function(t, e) {
				const i = this.gl.getAttribLocation(t, e)
				return i
			}),
			(Ot.prototype._setBlendMode = function(t, e) {
				const i = this.gl
				t == at.BLEND_MODES.BLEND_NONE ||
					(t == at.BLEND_MODES.BLEND_ADD
						? e
							? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))
							: (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE))
						: t == at.BLEND_MODES.BLEND_SUB
						? e
							? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA))
							: (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR))
						: t == at.BLEND_MODES.BLEND_MUL
						? e
							? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA))
							: (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR))
						: t == at.BLEND_MODES.BLEND_NORMAL
						? e
							? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))
							: (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))
						: g.log('setblendmode: unknown blendmode'))
			})
		const St = Object.assign(
			{
				Framebuffer: function(t, e, i, s) {
					var r = t,
						n =
							r.gl.getExtension('WEBGL_depth_texture') ||
							r.gl.getExtension('WEBKIT_WEBGL_depth_texture') ||
							r.gl.getExtension('MOZ_WEBGL_depth_texture') ||
							r.gl.DEPTH_TEXTURE
					n || r.exitError('NO_DEPTH_TEXTURE', 'no depth texture support')
					var o = e || 512,
						a = i || 512
					;(s = s || { isFloatingPointTexture: !1 }).hasOwnProperty('filter') || (s.filter = et.FILTER_LINEAR)
					var h = new et(r, { isFloatingPointTexture: s.isFloatingPointTexture, filter: s.filter, wrap: et.CLAMP_TO_EDGE }),
						l = null
					n && (l = new et(r, { isDepthTexture: !0 }))
					var u = r.gl.createFramebuffer(),
						c = r.gl.createRenderbuffer()
					;(this.getWidth = function() {
						return o
					}),
						(this.getHeight = function() {
							return a
						}),
						(this.getGlFrameBuffer = function() {
							return u
						}),
						(this.getDepthRenderBuffer = function() {
							return c
						}),
						(this.getTextureColor = function() {
							return h
						}),
						(this.getTextureDepth = function() {
							return l
						}),
						(this.setFilter = function(t) {
							;(h.filter = t), h.setSize(o, a)
						}),
						(this.setSize = function(t, e) {
							if (
								(t < 2 && (t = 2),
								e < 2 && (e = 2),
								(o = Math.ceil(t)),
								(a = Math.ceil(e)),
								Q.profileFrameBuffercreate++,
								r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
								r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c),
								h.setSize(o, a),
								l && l.setSize(o, a),
								n && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, a),
								r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, h.tex, 0),
								n &&
									(r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, c),
									r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, l.tex, 0)),
								!r.gl.isFramebuffer(u))
							)
								throw 'Invalid framebuffer'
							var i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER)
							switch (i) {
								case r.gl.FRAMEBUFFER_COMPLETE:
									break
								case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
									throw (g.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', o, a, h.tex, c), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT'))
								case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
									throw (g.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'))
								case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
									throw (g.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'), new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS'))
								case r.gl.FRAMEBUFFER_UNSUPPORTED:
									throw (g.log('FRAMEBUFFER_UNSUPPORTED'), new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED'))
								default:
									throw (g.log('incomplete framebuffer', i), new Error('Incomplete framebuffer: ' + i))
							}
							r.gl.bindTexture(r.gl.TEXTURE_2D, null), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null)
						}),
						(this.renderStart = function() {
							r.pushModelMatrix(),
								r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
								r.pushGlFrameBuffer(u),
								r.pushFrameBuffer(this),
								r.pushPMatrix(),
								r.gl.viewport(0, 0, o, a),
								r.gl.clearColor(0, 0, 0, 0),
								r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT)
						}),
						(this.renderEnd = function() {
							r.popPMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()), r.popFrameBuffer(), r.popModelMatrix(), r.resetViewPort()
						}),
						(this.delete = function() {
							h.delete(), l && l.delete(), r.gl.deleteRenderbuffer(c), r.gl.deleteFramebuffer(u)
						}),
						this.setSize(o, a)
				},
				Framebuffer2: it,
				Geometry: rt,
				BoundingBox: st,
				Marker: function(t) {
					var e = new rt('marker')
					e.setPointVertices([1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1])
					var i = new lt(t, e, t.gl.LINES)
					i.setGeom(e)
					var s = new Pt(t, 'markermaterial'),
						r =
							''.endl() +
							'precision highp float;'.endl() +
							'IN vec3 axisColor;'.endl() +
							'void main()'.endl() +
							'{'.endl() +
							'    vec4 col=vec4(axisColor,1.0);'.endl() +
							'    outColor = col;'.endl() +
							'}',
						n =
							''.endl() +
							'IN vec3 vPosition;'.endl() +
							'UNI mat4 projMatrix;'.endl() +
							'UNI mat4 mvMatrix;'.endl() +
							'OUT vec3 axisColor;'.endl() +
							'void main()'.endl() +
							'{'.endl() +
							'   vec4 pos=vec4(vPosition, 1.0);'.endl() +
							'   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);'.endl() +
							'   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);'.endl() +
							'   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);'.endl() +
							'   gl_Position = projMatrix * mvMatrix * pos;'.endl() +
							'}'
					s.setSource(n, r),
						(this._vScale = vec3.create()),
						(this.draw = function(t) {
							t.pushModelMatrix(),
								t.setShader(s),
								vec3.set(this._vScale, 2, 2, 2),
								mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale),
								t.pushDepthTest(!1),
								i.render(t.getShader()),
								t.popDepthTest(),
								t.setPreviousShader(),
								t.popModelMatrix()
						})
				},
				WirePoint: function(t, e) {
					var i = t.gl.createBuffer(),
						s = vec3.create()
					;(this.render = function(t, e) {
						t.pushModelMatrix(), vec3.set(s, e, e, e), mat4.scale(t.mvMatrix, t.mvMatrix, s)
						var r = t.getShader()
						r.bind(),
							t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
							t.gl.vertexAttribPointer(r.getAttrVertexPos(), i.itemSize, t.gl.FLOAT, !1, 0, 0),
							t.gl.enableVertexAttribArray(r.getAttrVertexPos()),
							t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
							t.gl.drawArrays(t.gl.LINE_STRIP, 0, i.numItems),
							t.popModelMatrix()
					}),
						(function() {
							var e = [],
								s = 0,
								r = 0
							for (s = 0; s <= Math.round(24); s++) (r = (360 / Math.round(24)) * s * mt), e.push(0.5 * Math.cos(r)), e.push(0), e.push(0.5 * Math.sin(r))
							for (s = 0; s <= Math.round(24); s++) (r = (360 / Math.round(24)) * s * mt), e.push(0.5 * Math.cos(r)), e.push(0.5 * Math.sin(r)), e.push(0)
							for (s = 0; s <= Math.round(24); s++) (r = (360 / Math.round(24)) * s * mt), e.push(0), e.push(0.5 * Math.cos(r)), e.push(0.5 * Math.sin(r))
							t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
								t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(e), t.gl.STATIC_DRAW),
								(i.itemSize = 3),
								(i.numItems = e.length / i.itemSize)
						})()
				},
				WireCube: function(t) {
					var e,
						i = t.gl.createBuffer(),
						s = vec3.create()
					;(this.render = function(t, e, r, n) {
						t.pushModelMatrix(), vec3.set(s, e || 1, r || 1, n || 1), mat4.scale(t.mvMatrix, t.mvMatrix, s)
						var o = t.getShader()
						o.bind(),
							t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
							t.gl.vertexAttribPointer(o.getAttrVertexPos(), i.itemSize, t.gl.FLOAT, !1, 0, 0),
							t.gl.enableVertexAttribArray(o.getAttrVertexPos()),
							t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
							t.gl.drawArrays(t.gl.LINE_STRIP, 0, i.numItems),
							t.popModelMatrix()
					}),
						(e = []).push(-1, -1, 1),
						e.push(1, -1, 1),
						e.push(1, 1, 1),
						e.push(-1, 1, 1),
						e.push(-1, -1, 1),
						e.push(-1, -1, -1),
						e.push(1, -1, -1),
						e.push(1, 1, -1),
						e.push(-1, 1, -1),
						e.push(-1, -1, -1),
						e.push(-1, -1, -1),
						e.push(-1, 1, -1),
						e.push(-1, 1, 1),
						e.push(-1, -1, 1),
						e.push(-1, -1, -1),
						e.push(1, -1, -1),
						e.push(1, 1, -1),
						e.push(1, 1, 1),
						e.push(1, -1, 1),
						e.push(1, -1, -1),
						t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
						t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(e), t.gl.STATIC_DRAW),
						(i.itemSize = 3),
						(i.numItems = e.length / i.itemSize)
				},
				MatrixStack: It,
				Mesh: lt,
				MESH: ht,
				ShaderLibMods: dt,
				Shader: Pt,
				Uniform: nt,
				MESHES: ct,
				Context: Ot,
				Texture: et,
				TextureEffect: pt,
				isWindows: vt,
				getWheelSpeed: bt,
				getWheelDelta: yt,
				onLoadingAssetsFinished: null,
				profileData: Q
			},
			at.BLEND_MODES,
			at.SHADER,
			at.MATH,
			at.BLEND_MODES
		)
		window.CGL = St
		const Rt = function(t) {
			;(this._loadingAssets = {}),
				(this._cbFinished = []),
				(this._percent = 0),
				(this._count = 0),
				(this._countFinished = 0),
				(this._order = 0),
				(this._startTime = 0),
				(this._patch = t)
		}
		;(Rt.prototype.setOnFinishedLoading = function(t) {
			this._cbFinished.push(t)
		}),
			(Rt.prototype.getNumAssets = function() {
				return this._countFinished
			}),
			(Rt.prototype.getProgress = function() {
				return this._percent
			}),
			(Rt.prototype.checkStatus = function() {
				for (var t in ((this._countFinished = 0), (this._count = 0), this._loadingAssets))
					this._count++, this._loadingAssets[t].finished || this._countFinished++
				if (((this._percent = (this._count - this._countFinished) / this._count), 0 === this._countFinished)) {
					for (var e = 0; e < this._cbFinished.length; e++) setTimeout(this._cbFinished[e], 200)
					this.print()
				}
			}),
			(Rt.prototype.print = function() {
				if (!this._patch.config.silent) {
					var t = []
					for (var e in this._loadingAssets)
						t.push([
							this._loadingAssets[e].order,
							this._loadingAssets[e].type,
							this._loadingAssets[e].name,
							(this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1e3 + 's'
						])
					console.groupCollapsed('finished loading ' + this._order + ' assets in ' + (Date.now() - this._startTime) / 1e3 + 's'),
						console.table(t),
						console.groupEnd()
				}
			}),
			(Rt.prototype.finished = function(t) {
				this._loadingAssets[t] && ((this._loadingAssets[t].finished = !0), (this._loadingAssets[t].timeEnd = Date.now())), this.checkStatus()
			}),
			(Rt.prototype.start = function(t, e) {
				0 == this._startTime && (this._startTime = Date.now())
				var i = x()
				return (this._loadingAssets[i] = { id: i, type: t, name: e, finished: !1, timeStart: Date.now(), order: this._order }), this._order++, i
			})
		const Nt = function() {
			;(this._loops = []), (this._indizes = []), (this._index = 0)
		}
		;(Nt.prototype.pushLoop = function(t) {
			this._loops.push(Math.abs(Math.floor(t))), this._indizes.push(this._index)
		}),
			(Nt.prototype.popLoop = function() {
				this._loops.pop(), (this._index = this._indizes.pop()), 0 === this._loops.length && (this._index = 0)
			}),
			(Nt.prototype.numLoops = function() {
				return this._loops.length
			}),
			(Nt.prototype.numCycles = function() {
				if (0 === this._loops.length) return 0
				for (var t = this._loops[0], e = 1; e < this._loops.length; e++) t *= this._loops[e]
				return t
			}),
			(Nt.prototype.inLoop = function() {
				return this._loops.length > 0
			}),
			(Nt.prototype.increment = function() {
				this._index++
			}),
			(Nt.prototype.index = function() {
				return this._index
			})
		const kt = function() {
				var t = {},
					e = null,
					i = 0
				;(this.getItems = function() {
					return t
				}),
					(this.clear = function() {
						t = {}
					}),
					(this.add = function(s, r) {
						null !== e &&
							((r && r.id == e) ||
								(t[e] &&
									((t[e].timeUsed += performance.now() - i),
									(!t[e].peakTime || gt() - t[e].peakTime > 5e3) && ((t[e].peak = 0), (t[e].peakTime = gt())),
									(t[e].peak = Math.max(t[e].peak, performance.now() - i))))),
							null !== r
								? (t[r.id] || (t[r.id] = { numTriggers: 0, timeUsed: 0 }),
								  t[r.id].numTriggers++,
								  (t[r.id].title = r.parent.name + '.' + r.name),
								  (e = r.id),
								  (i = performance.now()))
								: (e = null)
					}),
					(this.print = function() {
						for (var e in (g.log('--------'), t)) g.log(t[e].title + ': ' + t[e].numTriggers + ' / ' + t[e].timeUsed)
					})
			},
			Mt = function(t) {
				;(this._patch = t), (this.result = [])
			}
		;(Mt.MIDI = 0),
			(Mt.POINTERLOCK = 1),
			(Mt.WEBAUDIO = 2),
			(Mt.WEBGL2 = 3),
			((Mt.infos = [])[Mt.POINTERLOCK] = { title: 'pointerLock', caniuse: 'https://caniuse.com/#search=pointerlock' }),
			(Mt.infos[Mt.MIDI] = { title: 'midi API', caniuse: 'https://caniuse.com/#search=midi' }),
			(Mt.infos[Mt.WEBAUDIO] = { title: 'web audio', caniuse: 'https://caniuse.com/#search=webaudio' }),
			(Mt.infos[Mt.WEBGL2] = { title: 'WebGL 2' }),
			(Mt.prototype.checkRequirement = function(t, e) {
				switch (((this.result = []), t)) {
					case Mt.WEBGL2:
						return e.patch.cgl.glVersion >= 2
					case Mt.POINTERLOCK:
						return 'exitPointerLock' in document
					case Mt.MIDI:
						return 'MIDIAccess' in window
					case Mt.WEBAUDIO:
						var i = !1
						return window.audioContext && (i = !0), !i && ('webkitAudioContext' in window || 'AudioContext' in window) && (i = !0), i
				}
			}),
			(Mt.prototype.checkOp = function(t) {
				if (t && t.requirements)
					for (var e = 0; e < t.requirements.length; e++) {
						var i = t.requirements[e]
						if (!this.result[i]) {
							var s = this.checkRequirement(i, t)
							if (!s) {
								t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove()
								Mt.infos[i].title
								throw (Mt.infos[i].caniuse && '<a href="' + Mt.infos[i].caniuse + '" target="_blank">' + Mt.infos[i].title + ' (' + t.objName + ')</a>',
								'this browser does not meet requirement: ' + Mt.infos[i].title + ' (' + t.objName + ')')
							}
							this.result[i] = { success: s, info: Mt.infos[i] }
						}
					}
			})
		const Ft = function(t) {
			_.apply(this),
				(this.ops = []),
				(this.settings = {}),
				(this.timer = new _t()),
				(this.freeTimer = new _t()),
				(this.animFrameOps = []),
				(this.animFrameCallbacks = []),
				(this.gui = !1),
				(this.silent = !1),
				(this.profiler = null),
				(this.onLoadStart = null),
				(this.onLoadEnd = null),
				(this.aborted = !1),
				(this.loading = new Rt(this)),
				(this._crashedOps = []),
				(this._renderOneFrame = !1),
				(this._perf = { fps: 0, ms: 0, _fpsFrameCount: 0, _fpsMsCount: 0, _fpsStart: 0 }),
				(this._volumeListeners = []),
				(this._paused = !1),
				(this._frameNum = 0),
				(this.instancing = new Nt()),
				(this.onOneFrameRendered = null),
				(this.namedTriggers = {}),
				(this._origData = null),
				(this._frameNext = 0),
				(this._frameInterval = 0),
				(this._lastFrameTime = 0),
				(this._frameWasdelayed = !0),
				(this.config = t || {
					glCanvasResizeToWindow: !1,
					prefixAssetPath: '',
					silent: !1,
					onError: null,
					onFinishedLoading: null,
					onFirstFrameRendered: null,
					onPatchLoaded: null,
					fpsLimit: 0
				}),
				(function() {
					return !this
				})() || console.log('not in strict mode: core patch'),
				g.setSilent(this.config.silent),
				this.config.hasOwnProperty('doRequestAnimation') || (this.config.doRequestAnimation = !0),
				this.config.prefixAssetPath || (this.config.prefixAssetPath = ''),
				this.config.masterVolume || (this.config.masterVolume = 1),
				(this._variables = {}),
				(this._variableListeners = []),
				(this.vars = {}),
				t && t.vars && (this.vars = t.vars),
				(this.cgl = new Ot(this)),
				this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || 'glcanvas'),
				!0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize('window'),
				!0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize('parent'),
				this.loading.setOnFinishedLoading(this.config.onFinishedLoading),
				this.cgl.aborted && (this.aborted = !0),
				this.cgl.silent && (this.silent = !0),
				this.freeTimer.play(),
				this.exec(),
				this.aborted ||
					(this.config.patch
						? this.deSerialize(this.config.patch)
						: this.config.patchFile &&
						  C(this.config.patchFile, (t, e) => {
								var i = JSON.parse(e)
								if (t) {
									return g.error('err', t), g.error('data', i), void g.error('data', i.msg)
								}
								this.deSerialize(i)
						  }),
					this.timer.play()),
				console.log('made with https://cables.gl')
		}
		;(Ft.prototype.isPlaying = function() {
			return !this._paused
		}),
			(Ft.prototype.isRenderingOneFrame = function() {
				return this._renderOneFrame
			}),
			(Ft.prototype.renderOneFrame = function() {
				;(this._paused = !0), (this._renderOneFrame = !0), this.exec(), (this._renderOneFrame = !1)
			}),
			(Ft.prototype.getFPS = function() {
				return this._fps
			}),
			(Ft.prototype.isEditorMode = function() {
				return !0 === this.config.editorMode
			}),
			(Ft.prototype.pause = function() {
				;(this._paused = !0), this.freeTimer.pause()
			}),
			(Ft.prototype.resume = function() {
				this._paused && ((this._paused = !1), this.freeTimer.play(), this.exec())
			}),
			(Ft.prototype.setVolume = function(t) {
				this.config.masterVolume = t
				for (var e = 0; e < this._volumeListeners.length; e++) this._volumeListeners[e].onMasterVolumeChanged(t)
			}),
			(Ft.prototype.getFilePath = function(t) {
				return t
					? 0 === t.indexOf('https:') || 0 === t.indexOf('http:')
						? t
						: ((t = t.replace('//', '/')), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || ''))
					: t
			}),
			(Ft.prototype.clear = function() {
				for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new _t(); this.ops.length > 0; ) this.deleteOp(this.ops[0].id)
			}),
			(Ft.getOpClass = function(t) {
				var e = t.split('.'),
					i = null
				try {
					return (
						2 == e.length
							? (i = window[e[0]][e[1]])
							: 3 == e.length
							? (i = window[e[0]][e[1]][e[2]])
							: 4 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]])
							: 5 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]])
							: 6 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]])
							: 7 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]])
							: 8 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]])
							: 9 == e.length
							? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]])
							: 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]),
						i
					)
				} catch (t) {
					return null
				}
			}),
			(Ft.prototype.createOp = function(t, e) {
				var i = t.split('.'),
					s = null,
					r = ''
				try {
					if (-1 == t.indexOf('Ops.')) {
						var n = t
						if (!CABLES.OPS[n]) throw new Error('could not find op by id: ' + n)
						;(r = CABLES.OPS[n].objName), ((s = new CABLES.OPS[n].f(this, r, e, n)).opId = n)
					}
					if (!s) {
						if (!Ft.getOpClass((r = t)))
							throw (this.emitEvent('criticalError', 'unknown op', 'unknown op: ' + r), g.error('unknown op: ' + r), new Error('unknown op: ' + r))
						if (
							(2 == i.length
								? (s = new window[i[0]][i[1]](this, r, e))
								: 3 == i.length
								? (s = new window[i[0]][i[1]][i[2]](this, r, e))
								: 4 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]](this, r, e))
								: 5 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e))
								: 6 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e))
								: 7 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e))
								: 8 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e))
								: 9 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e))
								: 10 == i.length
								? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e))
								: g.log('parts.length', i.length),
							s)
						)
							for (var o in ((s.opId = null), CABLES.OPS)) CABLES.OPS[o].objName == r && (s.opId = o)
					}
				} catch (t) {
					if ((this._crashedOps.push(r), this.emitEvent('exceptionOp', t, r), !this.isEditorMode()))
						throw (g.log(t),
						g.error('[instancing error] ' + r, t),
						CABLES.api && CABLES.api.sendErrorReport(t),
						this.exitError('INSTANCE_ERR', 'Instancing Error ' + r),
						'instancing error ' + r)
				}
				return s && ((s.objName = r), (s.patch = this)), s
			}),
			(Ft.prototype.addOp = function(t, e, i) {
				var s = this.createOp(t, i)
				return (
					s &&
						(s.uiAttr(e),
						s.onCreate && s.onCreate(),
						s.hasOwnProperty('onAnimFrame') && this.animFrameOps.push(s),
						s.hasOwnProperty('onMasterVolumeChanged') && this._volumeListeners.push(s),
						this.ops.push(s),
						this.emitEvent('onOpAdd', s),
						s.init && s.init()),
					s
				)
			}),
			(Ft.prototype.addOnAnimFrame = function(t) {
				this.animFrameOps.push(t)
			}),
			(Ft.prototype.removeOnAnimFrame = function(t) {
				for (var e = 0; e < this.animFrameOps.length; e++) if (this.animFrameOps[e] == t) return void this.animFrameOps.splice(e, 1)
			}),
			(Ft.prototype.addOnAnimFrameCallback = function(t) {
				this.animFrameCallbacks.push(t)
			}),
			(Ft.prototype.removeOnAnimCallback = function(t) {
				for (var e = 0; e < this.animFrameCallbacks.length; e++) if (this.animFrameCallbacks[e] == t) return void this.animFrameCallbacks.splice(e, 1)
			}),
			(Ft.prototype.deleteOp = function(t, e, i) {
				for (var s in this.ops)
					if (this.ops[s].id == t) {
						var r = null,
							n = null
						if (this.ops[s]) {
							e &&
								this.ops[s].portsIn.length > 0 &&
								this.ops[s].portsIn[0].isLinked() &&
								this.ops[s].portsOut.length > 0 &&
								this.ops[s].portsOut[0].isLinked() &&
								this.ops[s].portsIn[0].getType() == this.ops[s].portsOut[0].getType() &&
								((r = this.ops[s].portsIn[0].links[0].getOtherPort(this.ops[s].portsIn[0])),
								(n = this.ops[s].portsOut[0].links[0].getOtherPort(this.ops[s].portsOut[0])))
							var o = this.ops[s]
							o.removeLinks(),
								this.onDelete && (g.log('deprecated this.onDelete', this.onDelete), this.onDelete(o)),
								this.emitEvent('onOpDelete', o, i),
								this.ops.splice(s, 1),
								o.onDelete && o.onDelete(i),
								o.cleanUp(),
								null !== r && null !== n && this.link(r.parent, r.getName(), n.parent, n.getName())
						}
					}
			}),
			(Ft.prototype.getFrameNum = function() {
				return this._frameNum
			}),
			(Ft.prototype.renderFrame = function(t) {
				this.timer.update(), this.freeTimer.update()
				for (var e = this.timer.getTime(), i = 0; i < this.animFrameCallbacks.length; ++i)
					this.animFrameCallbacks[i] && this.animFrameCallbacks[i](e, this._frameNum)
				for (i = 0; i < this.animFrameOps.length; ++i) this.animFrameOps[i].onAnimFrame && this.animFrameOps[i].onAnimFrame(e)
				this.emitEvent('onRenderFrame', e), this._frameNum++, 1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered()
			}),
			(Ft.prototype.exec = function(t) {
				if (this._renderOneFrame || (!this._paused && !this.aborted)) {
					;(this.config.fpsLimit = this.config.fpsLimit || 0), this.config.fpsLimit && (this._frameInterval = 1e3 / this.config.fpsLimit)
					var e = CABLES.now(),
						i = e - this._frameNext
					if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed)
						return (this._lastFrameTime = 0), setTimeout(this.exec.bind(this), 500), this.emitEvent('renderDelayStart'), void (this._frameWasdelayed = !0)
					if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
						var s = CABLES.now()
						this.renderFrame(), (this._perf._fpsMsCount += CABLES.now() - s), this._frameInterval && (this._frameNext = e - (i % this._frameInterval))
					}
					this._frameWasdelayed && (this.emitEvent('renderDelayEnd'), (this._frameWasdelayed = !1)),
						this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent('renderedOneFrame'), (this._renderOneFrame = !1)),
						CABLES.now() - this._perf._fpsStart >= 1e3 &&
							this._perf.fps != this._perf._fpsFrameCount &&
							((this._perf.fps = this._perf._fpsFrameCount),
							(this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount)),
							this.emitEvent('performance', this._perf),
							(this._perf._fpsFrameCount = 0),
							(this._perf._fpsMsCount = 0),
							(this._perf._fpsStart = CABLES.now())),
						(this._perf._lastFrameTime = CABLES.now()),
						this._perf._fpsFrameCount++,
						this.config.doRequestAnimation && requestAnimationFrame(this.exec.bind(this))
				}
			}),
			(Ft.prototype.link = function(t, e, i, s) {
				if (!t) return void g.log('link: op1 is null ')
				if (!i) return void g.log('link: op2 is null')
				const r = t.getPort(e),
					n = i.getPort(s)
				if (r)
					if (n) {
						if (!r.shouldLink(r, n) || !n.shouldLink(r, n)) return !1
						if ($.canLink(r, n)) {
							var o = new $(this)
							return o.link(r, n), this.emitEvent('onLink', r, n, o), o
						}
					} else console.warn('port not found! ' + s + ' of ' + i.name + '(' + i.objName + ')')
				else console.warn('port not found! ' + e + '(' + t.objName + ')')
			}),
			(Ft.prototype.serialize = function(t) {
				var e = { ops: [] }
				for (var i in ((e.settings = this.settings), this.ops)) e.ops.push(this.ops[i].getSerialized())
				return t ? e : JSON.stringify(e)
			}),
			(Ft.prototype.getOpById = function(t) {
				for (var e in this.ops) if (this.ops[e].id == t) return this.ops[e]
			}),
			(Ft.prototype.getOpsById = function(t) {
				var e = []
				for (var i in this.ops)
					for (var s = 0; s < t.length; s++)
						if (this.ops[i].id === t[s]) {
							e.push(this.ops[i])
							break
						}
				return e
			}),
			(Ft.prototype.getOpsByName = function(t) {
				var e = []
				for (var i in this.ops) this.ops[i].name == t && e.push(this.ops[i])
				return e
			}),
			(Ft.prototype.getOpsByObjName = function(t) {
				var e = []
				for (var i in this.ops) this.ops[i].objName == t && e.push(this.ops[i])
				return e
			}),
			(Ft.prototype.loadLib = function(t) {
				F(
					'/ui/libs/' + t + '.js',
					(t, e) => {
						var i = document.createElement('script')
						;(i.type = 'text/javascript'), (i.text = e), document.getElementsByTagName('head')[0].appendChild(i)
					},
					'GET'
				)
			}),
			(Ft.prototype.reloadOp = function(t, e) {
				var i = 0,
					s = [],
					r = []
				for (var n in this.ops) this.ops[n].objName == t && r.push(this.ops[n])
				for (n = 0; n < r.length; n++) {
					i++
					var o = r[n]
					o.deleted = !0
					var a,
						h,
						l = this.addOp(t, o.uiAttribs)
					for (a in (s.push(l), o.portsIn))
						if (0 === o.portsIn[a].links.length) {
							var u = l.getPort(o.portsIn[a].name)
							u ? u.set(o.portsIn[a].get()) : g.error('[reloadOp] could not set port ' + o.portsIn[a].name + ', propably renamed port ?')
						} else
							for (; o.portsIn[a].links.length; ) {
								var c = o.portsIn[a].links[0].portIn.name,
									p = o.portsIn[a].links[0].portOut.name,
									d = o.portsIn[a].links[0].portOut.parent
								o.portsIn[a].links[0].remove(),
									(h = this.link(l, c, d, p)) ? h.setValue() : g.log('[reloadOp] relink after op reload not successfull for port ' + p)
							}
					for (a in o.portsOut)
						for (; o.portsOut[a].links.length; ) {
							var f = o.portsOut[a].links[0].portOut.name,
								_ = o.portsOut[a].links[0].portIn.name,
								m = o.portsOut[a].links[0].portIn.parent
							o.portsOut[a].links[0].remove(), (h = this.link(l, f, m, _)) ? h.setValue() : g.log('relink after op reload not successfull for port ' + _)
						}
					this.deleteOp(o.id, !1, !0)
				}
				e(i, s)
			}),
			(Ft.prototype.getSubPatchOps = function(t) {
				var e = []
				for (var i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i])
				return e
			}),
			(Ft.prototype.getSubPatchOp = function(t, e) {
				for (var i in this.ops) if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i]
				return !1
			}),
			(Ft.prototype.deSerialize = function(t, e) {
				if (!this.aborted) {
					var i = this.loading.start('core', 'deserialize')
					this.onLoadStart && this.onLoadStart(), (this.namespace = t.namespace || ''), (this.name = t.name || ''), 'string' == typeof t && (t = JSON.parse(t))
					var s = this
					this.settings = t.settings
					var r,
						n,
						o,
						a,
						h = new Mt(this)
					for (var l in t.ops) {
						var u = CABLES.now(),
							c = t.ops[l],
							p = null
						try {
							p = c.opId ? this.addOp(c.opId, c.uiAttribs, c.id) : this.addOp(c.objName, c.uiAttribs, c.id)
						} catch (t) {
							throw (console.warn('[instancing error] op data:', c, t), 'instancing error: ' + c.objName)
						}
						if ((h.checkOp(p), p)) {
							for (var d in (e && (p.id = A()), (p.portsInData = c.portsIn), (p._origData = c), c.portsIn)) {
								var f = c.portsIn[d],
									g = p.getPort(f.name)
								if (
									(!g || ('bool' != g.uiAttribs.display && 'bool' != g.uiAttribs.type) || isNaN(f.value) || (f.value = !0 === f.value),
									g && void 0 !== f.value && g.type != L.OP.OP_PORT_TYPE_TEXTURE && g.set(f.value),
									g && f && f.animated && g.setAnimated(f.animated),
									g && f && f.useVariable && g.setVariableName(f.useVariable),
									g && f && f.anim)
								)
									for (var _ in (g.anim || (g.anim = new X()), f.anim.loop && (g.anim.loop = f.anim.loop), f.anim.keys))
										g.anim.keys.push(new V.Key(f.anim.keys[_]))
							}
							for (var m in c.portsOut) {
								var v = p.getPort(c.portsOut[m].name)
								v && v.type != L.OP.OP_PORT_TYPE_TEXTURE && c.portsOut[m].hasOwnProperty('value') && v.set(t.ops[l].portsOut[m].value)
							}
						}
						Math.round(100 * (CABLES.now() - u))
					}
					for (var E in this.ops)
						this.ops[E].onLoadedValueSet &&
							(this.ops[E].onLoadedValueSet(this.ops[E]._origData), (this.ops[E].onLoadedValueSet = null), (this.ops[E]._origData = null))
					if (t.ops)
						for (l = 0; l < t.ops.length; l++)
							if (t.ops[l].portsIn)
								for (var b = 0; b < t.ops[l].portsIn.length; b++)
									if (t.ops[l].portsIn[b].links)
										for (var y = 0; y < t.ops[l].portsIn[b].links.length; y++)
											t.ops[l].portsIn[b].links[y] &&
												((r = t.ops[l].portsIn[b].links[y].objIn),
												(n = t.ops[l].portsIn[b].links[y].objOut),
												(o = t.ops[l].portsIn[b].links[y].portIn),
												(a = t.ops[l].portsIn[b].links[y].portOut),
												s.link(s.getOpById(r), o, s.getOpById(n), a))
					for (var E in this.ops) this.ops[E].onLoaded && (this.ops[E].onLoaded(), (this.ops[E].onLoaded = null))
					for (var E in this.ops) this.ops[E].init && (this.ops[E].init(), (this.ops[E].init = null))
					if (this.config.variables) for (var T in this.config.variables) this.setVarValue(T, this.config.variables[T])
					for (var E in this.ops) this.ops[E].initVarPorts()
					setTimeout(() => {
						this.loading.finished(i)
					}, 100),
						this.config.onPatchLoaded && this.config.onPatchLoaded(),
						this.onLoadEnd && this.onLoadEnd()
				}
			}),
			(Ft.prototype.profile = function(t) {
				for (var e in ((this.profiler = new kt()), this.ops)) this.ops[e].profile(t)
			}),
			((Ft.Variable = function(t, e) {
				;(this._name = t), (this._changeListeners = []), this.setValue(e)
			}).prototype.getValue = function() {
				return this._v
			}),
			(Ft.Variable.prototype.getName = function() {
				return this._name
			}),
			(Ft.Variable.prototype.setValue = function(t) {
				this._v = t
				for (var e = 0; e < this._changeListeners.length; e++) this._changeListeners[e](t)
			}),
			(Ft.Variable.prototype.addListener = function(t) {
				this._changeListeners.push(t)
			}),
			(Ft.Variable.prototype.removeListener = function(t) {
				var e = this._changeListeners.indexOf(t)
				this._changeListeners.splice(e, 1)
			}),
			(Ft.prototype.setVariable = function(t, e) {
				this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : console.warn('variable ' + t + ' not found!')
			}),
			(Ft.prototype.setVarValue = function(t, e) {
				return (
					this._variables.hasOwnProperty(t)
						? this._variables[t].setValue(e)
						: ((this._variables[t] = new Ft.Variable(t, e)), this.emitEvent('variablesChanged')),
					this._variables[t]
				)
			}),
			(Ft.prototype.getVarValue = function(t, e) {
				if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue()
			}),
			(Ft.prototype.getVar = function(t) {
				if (this._variables.hasOwnProperty(t)) return this._variables[t]
			}),
			(Ft.prototype.getVars = function() {
				return this._variables
			}),
			(Ft.prototype.deleteVar = function(t) {
				for (var e = 0; e < this.ops.length; e++)
					for (var i = 0; i < this.ops[e].portsIn.length; i++)
						this.ops[e].portsIn[i].getVariableName() == t && (console.log('found!'), this.ops[e].portsIn[i].setVariable(null))
				delete this._variables[t]
			}),
			(Ft.prototype.getVars = function() {
				return this._variables
			}),
			(Ft.prototype.exitError = function(t, e) {
				this && this.config && this.config.onError && (this.config.onError(t, e), (this.aborted = !0))
			}),
			(Ft.prototype.preRenderOps = function() {
				g.log('prerendering...')
				var t = null
				CABLES.StopWatch && (t = new CABLES.StopWatch('prerendering'))
				for (var e = 0; e < this.ops.length; e++) this.ops[e].preRender && (this.ops[e].preRender(), g.log('prerender ' + this.ops[e].objName))
				t && t.stop('prerendering')
			}),
			(Ft.prototype.dispose = function() {
				this.pause(), this.clear()
			})
		var Ct = Ft
		const wt = {
				addPatch: function(t, e) {
					var i = t,
						s = x()
					if ('string' != typeof t || ((s = t), (i = document.getElementById(s)))) {
						var r = document.createElement('canvas')
						return (
							(r.id = 'glcanvas_' + s),
							(r.width = i.clientWidth),
							(r.height = i.clientHeight),
							window.addEventListener(
								'resize',
								function() {
									this.setAttribute('width', i.clientWidth), (this.height = i.clientHeight)
								}.bind(r)
							),
							i.appendChild(r),
							((e = e || {}).glCanvasId = r.id),
							e.onError ||
								(e.onError = function(t) {
									g.log(t)
								}),
							(CABLES.patch = new Ct(e)),
							r
						)
					}
					console.error(s + ' Polyshape Container Element not found!')
				}
			},
			Lt = {
				toneJsInitialized: !1,
				createAudioContext: function(t) {
					if (((window.AudioContext = window.AudioContext || window.webkitAudioContext), window.AudioContext))
						return (
							window.audioContext || (window.audioContext = new AudioContext()),
							window.Tone && !Lt.toneJsInitialized && (Tone.setContext(window.audioContext), (Lt.toneJsInitialized = !0)),
							window.audioContext
						)
					t.patch.config.onError('NO_WEBAUDIO', 'Web Audio is not supported in this browser.')
				},
				getAudioContext: function() {
					return window.audioContext
				},
				createAudioInPort: function(t, e, i, s) {
					if (!t || !e || !i) {
						var r = 'ERROR: createAudioInPort needs three parameters, op, portName and audioNode'
						throw (t.log(r), new Error(r))
					}
					s || (s = 0), (t.webAudio = t.webAudio || {}), (t.webAudio.audioInPorts = t.webAudio.audioInPorts || [])
					var n = t.inObject(e)
					return (
						(n.webAudio = {}),
						(n.webAudio.previousAudioInNode = null),
						(n.webAudio.audioNode = i),
						(t.webAudio.audioInPorts[e] = n),
						(n.onChange = function() {
							var e = n.get()
							if (e)
								try {
									e.connect(n.webAudio.audioNode, 0, s)
								} catch (i) {
									throw (t.log('Error: Failed to connect web audio node!', i),
									t.log('port.webAudio.audioNode', n.webAudio.audioNode),
									t.log('audioInNode: ', e),
									t.log('inputChannelIndex:', s),
									t.log('audioInNode.connect: ', e.connect),
									i)
								}
							else if (n.webAudio.previousAudioInNode)
								try {
									n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode, 0, s)
								} catch (e) {
									try {
										n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode)
									} catch (e) {
										throw (t.log('Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ', e),
										e.printStackTrace && e.printStackTrace(),
										e)
									}
								}
							n.webAudio.previousAudioInNode = e
						}),
						n
					)
				},
				replaceNodeInPort: function(t, e, i) {
					var s = t.webAudio.previousAudioInNode
					if (s && s.disconnect) {
						try {
							s.disconnect(e)
						} catch (t) {
							throw (t.printStackTrace && t.printStackTrace(), new Error('replaceNodeInPort: Could not disconnect old audio node. ' + t.name + ' ' + t.message))
						}
						t.webAudio.audioNode = i
						try {
							s.connect(i)
						} catch (t) {
							throw (t.printStackTrace && t.printStackTrace(), new Error('replaceNodeInPort: Could not connect to new node. ' + t.name + ' ' + t.message))
						}
					}
				},
				createAudioOutPort: function(t, e, i) {
					if (!t || !e || !i) {
						var s = 'ERROR: createAudioOutPort needs three parameters, op, portName and audioNode'
						throw (t.log(s), new Error(s))
					}
					var r = t.outObject(e)
					return r.set(i), r
				},
				createAudioParamInPort: function(t, e, i, s, r) {
					if (!t || !e || !i)
						return (
							t.log('ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode'),
							t && t.name && t.log('opname: ', t.name),
							t.log('portName', e),
							void t.log('audioNode: ', i)
						)
					;(t.webAudio = t.webAudio || {}), (t.webAudio.audioInPorts = t.webAudio.audioInPorts || [])
					var n = t.inDynamic(e, [L.OP.OP_PORT_TYPE_VALUE, L.OP.OP_PORT_TYPE_OBJECT], s, r)
					return (
						(n.webAudio = {}),
						(n.webAudio.previousAudioInNode = null),
						(n.webAudio.audioNode = i),
						(t.webAudio.audioInPorts[e] = n),
						(n.onChange = function() {
							var e = n.get(),
								i = n.webAudio.audioNode,
								s = Lt.getAudioContext()
							if (null != e)
								if ('object' == typeof e && e.connect) {
									try {
										e.connect(i)
									} catch (e) {
										throw (t.log('Could not connect audio node: ', e), e.printStackTrace && e.printStackTrace(), e)
									}
									n.webAudio.previousAudioInNode = e
								} else {
									if (i._param && i._param.minValue && i._param.maxValue)
										if (e >= i._param.minValue && e <= i._param.maxValue)
											try {
												i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : (i.value = e)
											} catch (e) {
												throw (t.log('Possible AudioParam problem with tone.js op: ', e), e.printStackTrace && e.printStackTrace(), e)
											}
										else t.log('Warning: The value for an audio parameter is out of range!')
									else if (i.minValue && i.maxValue)
										if (e >= i.minValue && e <= i.maxValue)
											try {
												i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : (i.value = e)
											} catch (e) {
												throw (t.log('AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ', e),
												e.printStackTrace && e.printStackTrace(),
												e)
											}
										else t.log('Warning: The value for an audio parameter is out of range!')
									else
										try {
											i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : (i.value = e)
										} catch (e) {
											throw (t.log('Possible AudioParam problem (without minValue / maxValue): ', e), e.printStackTrace && e.printStackTrace(), e)
										}
									if (n.webAudio.previousAudioInNode && n.webAudio.previousAudioInNode.disconnect) {
										try {
											n.webAudio.previousAudioInNode.disconnect(i)
										} catch (e) {
											throw (t.log('Could not disconnect previous audio node: ', e), e)
										}
										n.webAudio.previousAudioInNode = void 0
									}
								}
							else n.webAudio.previousAudioInNode
						}),
						n
					)
				},
				loadAudioFile: function(t, e, i, s) {
					var r = Lt.createAudioContext(),
						n = t.loading.start('audio', e)
					t.isEditorMode() && gui.jobs().start({ id: 'loadaudio' + n, title: ' loading audio (' + e + ')' })
					var o = new XMLHttpRequest()
					e &&
						(o.open('GET', e, !0),
						(o.responseType = 'arraybuffer'),
						(o.onload = function() {
							t.loading.finished(n), t.isEditorMode() && gui.jobs().finish('loadaudio' + n), r.decodeAudioData(o.response, i, s)
						}),
						o.send())
				},
				isValidToneTime: function(t) {
					try {
						new Tone.Time(t)
					} catch (t) {
						return !1
					}
					return !0
				},
				isValidToneNote: function(t) {
					try {
						Tone.Frequency(t)
					} catch (t) {
						return !1
					}
					return !0
				}
			},
			Bt = function() {
				var t = CABLES.UI.userSettings.get('pacoRenderer') || !1
				CABLES.UI.userSettings.set('pacoRenderer', !t), document.location.reload()
			},
			Ut = function() {},
			Dt = function(t, e, i) {
				;(this._patch = t), (this.connector = i || new Gt()), this.connector.receive(this)
			}
		Dt.prototype._receive = function(t) {
			var e = {}
			if ((e = t.event ? t : JSON.parse(t.data)).event == L.PACO.PACO_OP_CREATE)
				g.log('op create: data.vars.objName'), ((o = this._patch.addOp(e.vars.objName)).id = e.vars.opId)
			else if (e.event == L.PACO.PACO_LOAD) g.log('load patch.....'), this._patch.clear(), this._patch.deSerialize(e.vars.patch)
			else if (e.event == L.PACO.PACO_CLEAR) this._patch.clear(), g.log('clear')
			else if (e.event == L.PACO.PACO_OP_DELETE) g.log('op delete'), this._patch.deleteOp(e.vars.op, !0)
			else if (e.event == L.PACO.PACO_OP_ENABLE) {
				;(o = this._patch.getOpById(e.vars.op)) && (o.enabled = !0)
			} else if (e.event == L.PACO.PACO_OP_DISABLE) {
				;(o = this._patch.getOpById(e.vars.op)) && (o.enabled = !1)
			} else if (e.event == L.PACO.PACO_UNLINK) {
				var i = this._patch.getOpById(e.vars.op1),
					s = this._patch.getOpById(e.vars.op2),
					r = i.getPort(e.vars.port1),
					n = s.getPort(e.vars.port2)
				r.removeLinkTo(n)
			} else if (e.event == L.PACO.PACO_LINK) {
				;(i = this._patch.getOpById(e.vars.op1)), (s = this._patch.getOpById(e.vars.op2))
				this._patch.link(i, e.vars.port1, s, e.vars.port2)
			} else if (e.event == L.PACO.PACO_VALUECHANGE) {
				var o
				;(o = this._patch.getOpById(e.vars.op)).getPort(e.vars.port).set(e.vars.v)
			} else g.log('unknown patchConnectionEvent!', t)
		}
		const Vt = function(t, e) {
			;(this.connectors = []), this.connectors.push(new Gt())
		}
		Vt.prototype.send = function(t, e) {
			for (var i = 0; i < this.connectors.length; i++) this.connectors[i].send(t, e)
		}
		const Gt = function() {
			window.BroadcastChannel && (this.bc = new BroadcastChannel('test_channel'))
		}
		;(Gt.prototype.receive = function(t) {
			this.bc && (g.log('init'), (this.bc.onmessage = t._receive.bind(t)))
		}),
			(Gt.prototype.send = function(t, e) {
				if (this.bc) {
					var i = {}
					;(i.event = t), (i.vars = e), this.bc.postMessage(JSON.stringify(i))
				}
			})
		const Ht = Object.assign(
			{
				EventTarget: _,
				EMBED: wt,
				Link: $,
				Port: B,
				Op: q,
				Profiler: kt,
				Requirements: Mt,
				Patch: Ct,
				Instancing: Nt,
				Timer: _t,
				WEBAUDIO: Lt,
				Variable: function() {
					var t = null,
						e = []
					;(this.onChanged = function(t) {
						e.push(t)
					}),
						(this.getValue = function() {
							return t
						}),
						(this.setValue = function(e) {
							;(t = e), i()
						})
					var i = function() {
						for (var t = 0; t < e.length; t++) e[t]()
					}
				},
				LoadingStatus: Rt,
				now: gt,
				internalNow: ft
			},
			r,
			n,
			o,
			L.ANIM,
			a,
			L.PORT,
			L.PACO,
			L.ANIM,
			L.OP
		)
		e.default = Ht
		;(function() {
			return !this
		})() || console.log('not in strict mode: index core')
	}
]).default
//# sourceMappingURL=cables.min.js.map
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!(function(t, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], n)
		: n(((t = t || self).glMatrix = {}))
})(this, function(t) {
	'use strict'
	var n = 1e-6,
		a = 'undefined' != typeof Float32Array ? Float32Array : Array,
		r = Math.random
	var u = Math.PI / 180
	Math.hypot ||
		(Math.hypot = function() {
			for (var t = 0, n = arguments.length; n--; ) t += arguments[n] * arguments[n]
			return Math.sqrt(t)
		})
	var e = Object.freeze({
		EPSILON: n,
		get ARRAY_TYPE() {
			return a
		},
		RANDOM: r,
		setMatrixArrayType: function(t) {
			a = t
		},
		toRadian: function(t) {
			return t * u
		},
		equals: function(t, a) {
			return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
		}
	})
	function o(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = a[0],
			c = a[1],
			h = a[2],
			s = a[3]
		return (t[0] = r * i + e * c), (t[1] = u * i + o * c), (t[2] = r * h + e * s), (t[3] = u * h + o * s), t
	}
	function i(t, n, a) {
		return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), (t[3] = n[3] - a[3]), t
	}
	var c = o,
		h = i,
		s = Object.freeze({
			create: function() {
				var t = new a(4)
				return a != Float32Array && ((t[1] = 0), (t[2] = 0)), (t[0] = 1), (t[3] = 1), t
			},
			clone: function(t) {
				var n = new a(4)
				return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n
			},
			copy: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t
			},
			identity: function(t) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t
			},
			fromValues: function(t, n, r, u) {
				var e = new a(4)
				return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e
			},
			set: function(t, n, a, r, u) {
				return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t
			},
			transpose: function(t, n) {
				if (t === n) {
					var a = n[1]
					;(t[1] = n[2]), (t[2] = a)
				} else (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3])
				return t
			},
			invert: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = a * e - u * r
				return o ? ((o = 1 / o), (t[0] = e * o), (t[1] = -r * o), (t[2] = -u * o), (t[3] = a * o), t) : null
			},
			adjoint: function(t, n) {
				var a = n[0]
				return (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = a), t
			},
			determinant: function(t) {
				return t[0] * t[3] - t[2] * t[1]
			},
			multiply: o,
			rotate: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = Math.sin(a),
					c = Math.cos(a)
				return (t[0] = r * c + e * i), (t[1] = u * c + o * i), (t[2] = r * -i + e * c), (t[3] = u * -i + o * c), t
			},
			scale: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = a[0],
					c = a[1]
				return (t[0] = r * i), (t[1] = u * i), (t[2] = e * c), (t[3] = o * c), t
			},
			fromRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t
			},
			fromScaling: function(t, n) {
				return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t
			},
			str: function(t) {
				return 'mat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
			},
			frob: function(t) {
				return Math.hypot(t[0], t[1], t[2], t[3])
			},
			LDU: function(t, n, a, r) {
				return (t[2] = r[2] / r[0]), (a[0] = r[0]), (a[1] = r[1]), (a[3] = r[3] - t[2] * a[1]), [t, n, a]
			},
			add: function(t, n, a) {
				return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), (t[3] = n[3] + a[3]), t
			},
			subtract: i,
			exactEquals: function(t, n) {
				return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = t[2],
					o = t[3],
					i = a[0],
					c = a[1],
					h = a[2],
					s = a[3]
				return (
					Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
					Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
					Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
					Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
				)
			},
			multiplyScalar: function(t, n, a) {
				return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), (t[3] = n[3] * a), t
			},
			multiplyScalarAndAdd: function(t, n, a, r) {
				return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), (t[3] = n[3] + a[3] * r), t
			},
			mul: c,
			sub: h
		})
	function M(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = n[4],
			c = n[5],
			h = a[0],
			s = a[1],
			M = a[2],
			f = a[3],
			l = a[4],
			v = a[5]
		return (
			(t[0] = r * h + e * s), (t[1] = u * h + o * s), (t[2] = r * M + e * f), (t[3] = u * M + o * f), (t[4] = r * l + e * v + i), (t[5] = u * l + o * v + c), t
		)
	}
	function f(t, n, a) {
		return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), (t[3] = n[3] - a[3]), (t[4] = n[4] - a[4]), (t[5] = n[5] - a[5]), t
	}
	var l = M,
		v = f,
		b = Object.freeze({
			create: function() {
				var t = new a(6)
				return a != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)), (t[0] = 1), (t[3] = 1), t
			},
			clone: function(t) {
				var n = new a(6)
				return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), (n[4] = t[4]), (n[5] = t[5]), n
			},
			copy: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), t
			},
			identity: function(t) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
			},
			fromValues: function(t, n, r, u, e, o) {
				var i = new a(6)
				return (i[0] = t), (i[1] = n), (i[2] = r), (i[3] = u), (i[4] = e), (i[5] = o), i
			},
			set: function(t, n, a, r, u, e, o) {
				return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), t
			},
			invert: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = a * e - r * u
				return c
					? ((c = 1 / c), (t[0] = e * c), (t[1] = -r * c), (t[2] = -u * c), (t[3] = a * c), (t[4] = (u * i - e * o) * c), (t[5] = (r * o - a * i) * c), t)
					: null
			},
			determinant: function(t) {
				return t[0] * t[3] - t[1] * t[2]
			},
			multiply: M,
			rotate: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = n[4],
					c = n[5],
					h = Math.sin(a),
					s = Math.cos(a)
				return (t[0] = r * s + e * h), (t[1] = u * s + o * h), (t[2] = r * -h + e * s), (t[3] = u * -h + o * s), (t[4] = i), (t[5] = c), t
			},
			scale: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = n[4],
					c = n[5],
					h = a[0],
					s = a[1]
				return (t[0] = r * h), (t[1] = u * h), (t[2] = e * s), (t[3] = o * s), (t[4] = i), (t[5] = c), t
			},
			translate: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = n[4],
					c = n[5],
					h = a[0],
					s = a[1]
				return (t[0] = r), (t[1] = u), (t[2] = e), (t[3] = o), (t[4] = r * h + e * s + i), (t[5] = u * h + o * s + c), t
			},
			fromRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), (t[4] = 0), (t[5] = 0), t
			},
			fromScaling: function(t, n) {
				return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), (t[4] = 0), (t[5] = 0), t
			},
			fromTranslation: function(t, n) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = n[0]), (t[5] = n[1]), t
			},
			str: function(t) {
				return 'mat2d(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ')'
			},
			frob: function(t) {
				return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
			},
			add: function(t, n, a) {
				return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), (t[3] = n[3] + a[3]), (t[4] = n[4] + a[4]), (t[5] = n[5] + a[5]), t
			},
			subtract: f,
			multiplyScalar: function(t, n, a) {
				return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), (t[3] = n[3] * a), (t[4] = n[4] * a), (t[5] = n[5] * a), t
			},
			multiplyScalarAndAdd: function(t, n, a, r) {
				return (
					(t[0] = n[0] + a[0] * r),
					(t[1] = n[1] + a[1] * r),
					(t[2] = n[2] + a[2] * r),
					(t[3] = n[3] + a[3] * r),
					(t[4] = n[4] + a[4] * r),
					(t[5] = n[5] + a[5] * r),
					t
				)
			},
			exactEquals: function(t, n) {
				return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = t[2],
					o = t[3],
					i = t[4],
					c = t[5],
					h = a[0],
					s = a[1],
					M = a[2],
					f = a[3],
					l = a[4],
					v = a[5]
				return (
					Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) &&
					Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) &&
					Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) &&
					Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) &&
					Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) &&
					Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
				)
			},
			mul: l,
			sub: v
		})
	function m() {
		var t = new a(9)
		return a != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)), (t[0] = 1), (t[4] = 1), (t[8] = 1), t
	}
	function d(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = n[4],
			c = n[5],
			h = n[6],
			s = n[7],
			M = n[8],
			f = a[0],
			l = a[1],
			v = a[2],
			b = a[3],
			m = a[4],
			d = a[5],
			x = a[6],
			p = a[7],
			y = a[8]
		return (
			(t[0] = f * r + l * o + v * h),
			(t[1] = f * u + l * i + v * s),
			(t[2] = f * e + l * c + v * M),
			(t[3] = b * r + m * o + d * h),
			(t[4] = b * u + m * i + d * s),
			(t[5] = b * e + m * c + d * M),
			(t[6] = x * r + p * o + y * h),
			(t[7] = x * u + p * i + y * s),
			(t[8] = x * e + p * c + y * M),
			t
		)
	}
	function x(t, n, a) {
		return (
			(t[0] = n[0] - a[0]),
			(t[1] = n[1] - a[1]),
			(t[2] = n[2] - a[2]),
			(t[3] = n[3] - a[3]),
			(t[4] = n[4] - a[4]),
			(t[5] = n[5] - a[5]),
			(t[6] = n[6] - a[6]),
			(t[7] = n[7] - a[7]),
			(t[8] = n[8] - a[8]),
			t
		)
	}
	var p = d,
		y = x,
		q = Object.freeze({
			create: m,
			fromMat4: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[4]), (t[4] = n[5]), (t[5] = n[6]), (t[6] = n[8]), (t[7] = n[9]), (t[8] = n[10]), t
			},
			clone: function(t) {
				var n = new a(9)
				return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), (n[4] = t[4]), (n[5] = t[5]), (n[6] = t[6]), (n[7] = t[7]), (n[8] = t[8]), n
			},
			copy: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), (t[8] = n[8]), t
			},
			fromValues: function(t, n, r, u, e, o, i, c, h) {
				var s = new a(9)
				return (s[0] = t), (s[1] = n), (s[2] = r), (s[3] = u), (s[4] = e), (s[5] = o), (s[6] = i), (s[7] = c), (s[8] = h), s
			},
			set: function(t, n, a, r, u, e, o, i, c, h) {
				return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), (t[6] = i), (t[7] = c), (t[8] = h), t
			},
			identity: function(t) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t
			},
			transpose: function(t, n) {
				if (t === n) {
					var a = n[1],
						r = n[2],
						u = n[5]
					;(t[1] = n[3]), (t[2] = n[6]), (t[3] = a), (t[5] = n[7]), (t[6] = r), (t[7] = u)
				} else (t[0] = n[0]), (t[1] = n[3]), (t[2] = n[6]), (t[3] = n[1]), (t[4] = n[4]), (t[5] = n[7]), (t[6] = n[2]), (t[7] = n[5]), (t[8] = n[8])
				return t
			},
			invert: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = n[6],
					h = n[7],
					s = n[8],
					M = s * o - i * h,
					f = -s * e + i * c,
					l = h * e - o * c,
					v = a * M + r * f + u * l
				return v
					? ((v = 1 / v),
					  (t[0] = M * v),
					  (t[1] = (-s * r + u * h) * v),
					  (t[2] = (i * r - u * o) * v),
					  (t[3] = f * v),
					  (t[4] = (s * a - u * c) * v),
					  (t[5] = (-i * a + u * e) * v),
					  (t[6] = l * v),
					  (t[7] = (-h * a + r * c) * v),
					  (t[8] = (o * a - r * e) * v),
					  t)
					: null
			},
			adjoint: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = n[6],
					h = n[7],
					s = n[8]
				return (
					(t[0] = o * s - i * h),
					(t[1] = u * h - r * s),
					(t[2] = r * i - u * o),
					(t[3] = i * c - e * s),
					(t[4] = a * s - u * c),
					(t[5] = u * e - a * i),
					(t[6] = e * h - o * c),
					(t[7] = r * c - a * h),
					(t[8] = a * o - r * e),
					t
				)
			},
			determinant: function(t) {
				var n = t[0],
					a = t[1],
					r = t[2],
					u = t[3],
					e = t[4],
					o = t[5],
					i = t[6],
					c = t[7],
					h = t[8]
				return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i)
			},
			multiply: d,
			translate: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = n[4],
					c = n[5],
					h = n[6],
					s = n[7],
					M = n[8],
					f = a[0],
					l = a[1]
				return (
					(t[0] = r),
					(t[1] = u),
					(t[2] = e),
					(t[3] = o),
					(t[4] = i),
					(t[5] = c),
					(t[6] = f * r + l * o + h),
					(t[7] = f * u + l * i + s),
					(t[8] = f * e + l * c + M),
					t
				)
			},
			rotate: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3],
					i = n[4],
					c = n[5],
					h = n[6],
					s = n[7],
					M = n[8],
					f = Math.sin(a),
					l = Math.cos(a)
				return (
					(t[0] = l * r + f * o),
					(t[1] = l * u + f * i),
					(t[2] = l * e + f * c),
					(t[3] = l * o - f * r),
					(t[4] = l * i - f * u),
					(t[5] = l * c - f * e),
					(t[6] = h),
					(t[7] = s),
					(t[8] = M),
					t
				)
			},
			scale: function(t, n, a) {
				var r = a[0],
					u = a[1]
				return (
					(t[0] = r * n[0]),
					(t[1] = r * n[1]),
					(t[2] = r * n[2]),
					(t[3] = u * n[3]),
					(t[4] = u * n[4]),
					(t[5] = u * n[5]),
					(t[6] = n[6]),
					(t[7] = n[7]),
					(t[8] = n[8]),
					t
				)
			},
			fromTranslation: function(t, n) {
				return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = n[0]), (t[7] = n[1]), (t[8] = 1), t
			},
			fromRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (t[0] = r), (t[1] = a), (t[2] = 0), (t[3] = -a), (t[4] = r), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t
			},
			fromScaling: function(t, n) {
				return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = n[1]), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t
			},
			fromMat2d: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = 0), (t[3] = n[2]), (t[4] = n[3]), (t[5] = 0), (t[6] = n[4]), (t[7] = n[5]), (t[8] = 1), t
			},
			fromQuat: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = a + a,
					i = r + r,
					c = u + u,
					h = a * o,
					s = r * o,
					M = r * i,
					f = u * o,
					l = u * i,
					v = u * c,
					b = e * o,
					m = e * i,
					d = e * c
				return (
					(t[0] = 1 - M - v),
					(t[3] = s - d),
					(t[6] = f + m),
					(t[1] = s + d),
					(t[4] = 1 - h - v),
					(t[7] = l - b),
					(t[2] = f - m),
					(t[5] = l + b),
					(t[8] = 1 - h - M),
					t
				)
			},
			normalFromMat4: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = n[6],
					h = n[7],
					s = n[8],
					M = n[9],
					f = n[10],
					l = n[11],
					v = n[12],
					b = n[13],
					m = n[14],
					d = n[15],
					x = a * i - r * o,
					p = a * c - u * o,
					y = a * h - e * o,
					q = r * c - u * i,
					g = r * h - e * i,
					A = u * h - e * c,
					w = s * b - M * v,
					R = s * m - f * v,
					z = s * d - l * v,
					P = M * m - f * b,
					j = M * d - l * b,
					I = f * d - l * m,
					S = x * I - p * j + y * P + q * z - g * R + A * w
				return S
					? ((S = 1 / S),
					  (t[0] = (i * I - c * j + h * P) * S),
					  (t[1] = (c * z - o * I - h * R) * S),
					  (t[2] = (o * j - i * z + h * w) * S),
					  (t[3] = (u * j - r * I - e * P) * S),
					  (t[4] = (a * I - u * z + e * R) * S),
					  (t[5] = (r * z - a * j - e * w) * S),
					  (t[6] = (b * A - m * g + d * q) * S),
					  (t[7] = (m * y - v * A - d * p) * S),
					  (t[8] = (v * g - b * y + d * x) * S),
					  t)
					: null
			},
			projection: function(t, n, a) {
				return (t[0] = 2 / n), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = -2 / a), (t[5] = 0), (t[6] = -1), (t[7] = 1), (t[8] = 1), t
			},
			str: function(t) {
				return 'mat3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ', ' + t[8] + ')'
			},
			frob: function(t) {
				return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
			},
			add: function(t, n, a) {
				return (
					(t[0] = n[0] + a[0]),
					(t[1] = n[1] + a[1]),
					(t[2] = n[2] + a[2]),
					(t[3] = n[3] + a[3]),
					(t[4] = n[4] + a[4]),
					(t[5] = n[5] + a[5]),
					(t[6] = n[6] + a[6]),
					(t[7] = n[7] + a[7]),
					(t[8] = n[8] + a[8]),
					t
				)
			},
			subtract: x,
			multiplyScalar: function(t, n, a) {
				return (
					(t[0] = n[0] * a),
					(t[1] = n[1] * a),
					(t[2] = n[2] * a),
					(t[3] = n[3] * a),
					(t[4] = n[4] * a),
					(t[5] = n[5] * a),
					(t[6] = n[6] * a),
					(t[7] = n[7] * a),
					(t[8] = n[8] * a),
					t
				)
			},
			multiplyScalarAndAdd: function(t, n, a, r) {
				return (
					(t[0] = n[0] + a[0] * r),
					(t[1] = n[1] + a[1] * r),
					(t[2] = n[2] + a[2] * r),
					(t[3] = n[3] + a[3] * r),
					(t[4] = n[4] + a[4] * r),
					(t[5] = n[5] + a[5] * r),
					(t[6] = n[6] + a[6] * r),
					(t[7] = n[7] + a[7] * r),
					(t[8] = n[8] + a[8] * r),
					t
				)
			},
			exactEquals: function(t, n) {
				return (
					t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
				)
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = t[2],
					o = t[3],
					i = t[4],
					c = t[5],
					h = t[6],
					s = t[7],
					M = t[8],
					f = a[0],
					l = a[1],
					v = a[2],
					b = a[3],
					m = a[4],
					d = a[5],
					x = a[6],
					p = a[7],
					y = a[8]
				return (
					Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) &&
					Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) &&
					Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) &&
					Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) &&
					Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) &&
					Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) &&
					Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) &&
					Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) &&
					Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
				)
			},
			mul: p,
			sub: y
		})
	function g(t) {
		return (
			(t[0] = 1),
			(t[1] = 0),
			(t[2] = 0),
			(t[3] = 0),
			(t[4] = 0),
			(t[5] = 1),
			(t[6] = 0),
			(t[7] = 0),
			(t[8] = 0),
			(t[9] = 0),
			(t[10] = 1),
			(t[11] = 0),
			(t[12] = 0),
			(t[13] = 0),
			(t[14] = 0),
			(t[15] = 1),
			t
		)
	}
	function A(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = n[4],
			c = n[5],
			h = n[6],
			s = n[7],
			M = n[8],
			f = n[9],
			l = n[10],
			v = n[11],
			b = n[12],
			m = n[13],
			d = n[14],
			x = n[15],
			p = a[0],
			y = a[1],
			q = a[2],
			g = a[3]
		return (
			(t[0] = p * r + y * i + q * M + g * b),
			(t[1] = p * u + y * c + q * f + g * m),
			(t[2] = p * e + y * h + q * l + g * d),
			(t[3] = p * o + y * s + q * v + g * x),
			(p = a[4]),
			(y = a[5]),
			(q = a[6]),
			(g = a[7]),
			(t[4] = p * r + y * i + q * M + g * b),
			(t[5] = p * u + y * c + q * f + g * m),
			(t[6] = p * e + y * h + q * l + g * d),
			(t[7] = p * o + y * s + q * v + g * x),
			(p = a[8]),
			(y = a[9]),
			(q = a[10]),
			(g = a[11]),
			(t[8] = p * r + y * i + q * M + g * b),
			(t[9] = p * u + y * c + q * f + g * m),
			(t[10] = p * e + y * h + q * l + g * d),
			(t[11] = p * o + y * s + q * v + g * x),
			(p = a[12]),
			(y = a[13]),
			(q = a[14]),
			(g = a[15]),
			(t[12] = p * r + y * i + q * M + g * b),
			(t[13] = p * u + y * c + q * f + g * m),
			(t[14] = p * e + y * h + q * l + g * d),
			(t[15] = p * o + y * s + q * v + g * x),
			t
		)
	}
	function w(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = r + r,
			c = u + u,
			h = e + e,
			s = r * i,
			M = r * c,
			f = r * h,
			l = u * c,
			v = u * h,
			b = e * h,
			m = o * i,
			d = o * c,
			x = o * h
		return (
			(t[0] = 1 - (l + b)),
			(t[1] = M + x),
			(t[2] = f - d),
			(t[3] = 0),
			(t[4] = M - x),
			(t[5] = 1 - (s + b)),
			(t[6] = v + m),
			(t[7] = 0),
			(t[8] = f + d),
			(t[9] = v - m),
			(t[10] = 1 - (s + l)),
			(t[11] = 0),
			(t[12] = a[0]),
			(t[13] = a[1]),
			(t[14] = a[2]),
			(t[15] = 1),
			t
		)
	}
	function R(t, n) {
		return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t
	}
	function z(t, n) {
		var a = n[0],
			r = n[1],
			u = n[2],
			e = n[4],
			o = n[5],
			i = n[6],
			c = n[8],
			h = n[9],
			s = n[10]
		return (t[0] = Math.hypot(a, r, u)), (t[1] = Math.hypot(e, o, i)), (t[2] = Math.hypot(c, h, s)), t
	}
	function P(t, n) {
		var r = new a(3)
		z(r, n)
		var u = 1 / r[0],
			e = 1 / r[1],
			o = 1 / r[2],
			i = n[0] * u,
			c = n[1] * e,
			h = n[2] * o,
			s = n[4] * u,
			M = n[5] * e,
			f = n[6] * o,
			l = n[8] * u,
			v = n[9] * e,
			b = n[10] * o,
			m = i + M + b,
			d = 0
		return (
			m > 0
				? ((d = 2 * Math.sqrt(m + 1)), (t[3] = 0.25 * d), (t[0] = (f - v) / d), (t[1] = (l - h) / d), (t[2] = (c - s) / d))
				: i > M && i > b
				? ((d = 2 * Math.sqrt(1 + i - M - b)), (t[3] = (f - v) / d), (t[0] = 0.25 * d), (t[1] = (c + s) / d), (t[2] = (l + h) / d))
				: M > b
				? ((d = 2 * Math.sqrt(1 + M - i - b)), (t[3] = (l - h) / d), (t[0] = (c + s) / d), (t[1] = 0.25 * d), (t[2] = (f + v) / d))
				: ((d = 2 * Math.sqrt(1 + b - i - M)), (t[3] = (c - s) / d), (t[0] = (l + h) / d), (t[1] = (f + v) / d), (t[2] = 0.25 * d)),
			t
		)
	}
	function j(t, n, a) {
		return (
			(t[0] = n[0] - a[0]),
			(t[1] = n[1] - a[1]),
			(t[2] = n[2] - a[2]),
			(t[3] = n[3] - a[3]),
			(t[4] = n[4] - a[4]),
			(t[5] = n[5] - a[5]),
			(t[6] = n[6] - a[6]),
			(t[7] = n[7] - a[7]),
			(t[8] = n[8] - a[8]),
			(t[9] = n[9] - a[9]),
			(t[10] = n[10] - a[10]),
			(t[11] = n[11] - a[11]),
			(t[12] = n[12] - a[12]),
			(t[13] = n[13] - a[13]),
			(t[14] = n[14] - a[14]),
			(t[15] = n[15] - a[15]),
			t
		)
	}
	var I = A,
		S = j,
		E = Object.freeze({
			create: function() {
				var t = new a(16)
				return (
					a != Float32Array &&
						((t[1] = 0),
						(t[2] = 0),
						(t[3] = 0),
						(t[4] = 0),
						(t[6] = 0),
						(t[7] = 0),
						(t[8] = 0),
						(t[9] = 0),
						(t[11] = 0),
						(t[12] = 0),
						(t[13] = 0),
						(t[14] = 0)),
					(t[0] = 1),
					(t[5] = 1),
					(t[10] = 1),
					(t[15] = 1),
					t
				)
			},
			clone: function(t) {
				var n = new a(16)
				return (
					(n[0] = t[0]),
					(n[1] = t[1]),
					(n[2] = t[2]),
					(n[3] = t[3]),
					(n[4] = t[4]),
					(n[5] = t[5]),
					(n[6] = t[6]),
					(n[7] = t[7]),
					(n[8] = t[8]),
					(n[9] = t[9]),
					(n[10] = t[10]),
					(n[11] = t[11]),
					(n[12] = t[12]),
					(n[13] = t[13]),
					(n[14] = t[14]),
					(n[15] = t[15]),
					n
				)
			},
			copy: function(t, n) {
				return (
					(t[0] = n[0]),
					(t[1] = n[1]),
					(t[2] = n[2]),
					(t[3] = n[3]),
					(t[4] = n[4]),
					(t[5] = n[5]),
					(t[6] = n[6]),
					(t[7] = n[7]),
					(t[8] = n[8]),
					(t[9] = n[9]),
					(t[10] = n[10]),
					(t[11] = n[11]),
					(t[12] = n[12]),
					(t[13] = n[13]),
					(t[14] = n[14]),
					(t[15] = n[15]),
					t
				)
			},
			fromValues: function(t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
				var d = new a(16)
				return (
					(d[0] = t),
					(d[1] = n),
					(d[2] = r),
					(d[3] = u),
					(d[4] = e),
					(d[5] = o),
					(d[6] = i),
					(d[7] = c),
					(d[8] = h),
					(d[9] = s),
					(d[10] = M),
					(d[11] = f),
					(d[12] = l),
					(d[13] = v),
					(d[14] = b),
					(d[15] = m),
					d
				)
			},
			set: function(t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
				return (
					(t[0] = n),
					(t[1] = a),
					(t[2] = r),
					(t[3] = u),
					(t[4] = e),
					(t[5] = o),
					(t[6] = i),
					(t[7] = c),
					(t[8] = h),
					(t[9] = s),
					(t[10] = M),
					(t[11] = f),
					(t[12] = l),
					(t[13] = v),
					(t[14] = b),
					(t[15] = m),
					t
				)
			},
			identity: g,
			transpose: function(t, n) {
				if (t === n) {
					var a = n[1],
						r = n[2],
						u = n[3],
						e = n[6],
						o = n[7],
						i = n[11]
					;(t[1] = n[4]),
						(t[2] = n[8]),
						(t[3] = n[12]),
						(t[4] = a),
						(t[6] = n[9]),
						(t[7] = n[13]),
						(t[8] = r),
						(t[9] = e),
						(t[11] = n[14]),
						(t[12] = u),
						(t[13] = o),
						(t[14] = i)
				} else
					(t[0] = n[0]),
						(t[1] = n[4]),
						(t[2] = n[8]),
						(t[3] = n[12]),
						(t[4] = n[1]),
						(t[5] = n[5]),
						(t[6] = n[9]),
						(t[7] = n[13]),
						(t[8] = n[2]),
						(t[9] = n[6]),
						(t[10] = n[10]),
						(t[11] = n[14]),
						(t[12] = n[3]),
						(t[13] = n[7]),
						(t[14] = n[11]),
						(t[15] = n[15])
				return t
			},
			invert: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = n[6],
					h = n[7],
					s = n[8],
					M = n[9],
					f = n[10],
					l = n[11],
					v = n[12],
					b = n[13],
					m = n[14],
					d = n[15],
					x = a * i - r * o,
					p = a * c - u * o,
					y = a * h - e * o,
					q = r * c - u * i,
					g = r * h - e * i,
					A = u * h - e * c,
					w = s * b - M * v,
					R = s * m - f * v,
					z = s * d - l * v,
					P = M * m - f * b,
					j = M * d - l * b,
					I = f * d - l * m,
					S = x * I - p * j + y * P + q * z - g * R + A * w
				return S
					? ((S = 1 / S),
					  (t[0] = (i * I - c * j + h * P) * S),
					  (t[1] = (u * j - r * I - e * P) * S),
					  (t[2] = (b * A - m * g + d * q) * S),
					  (t[3] = (f * g - M * A - l * q) * S),
					  (t[4] = (c * z - o * I - h * R) * S),
					  (t[5] = (a * I - u * z + e * R) * S),
					  (t[6] = (m * y - v * A - d * p) * S),
					  (t[7] = (s * A - f * y + l * p) * S),
					  (t[8] = (o * j - i * z + h * w) * S),
					  (t[9] = (r * z - a * j - e * w) * S),
					  (t[10] = (v * g - b * y + d * x) * S),
					  (t[11] = (M * y - s * g - l * x) * S),
					  (t[12] = (i * R - o * P - c * w) * S),
					  (t[13] = (a * P - r * R + u * w) * S),
					  (t[14] = (b * p - v * q - m * x) * S),
					  (t[15] = (s * q - M * p + f * x) * S),
					  t)
					: null
			},
			adjoint: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = n[4],
					i = n[5],
					c = n[6],
					h = n[7],
					s = n[8],
					M = n[9],
					f = n[10],
					l = n[11],
					v = n[12],
					b = n[13],
					m = n[14],
					d = n[15]
				return (
					(t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f)),
					(t[1] = -(r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f))),
					(t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c)),
					(t[3] = -(r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c))),
					(t[4] = -(o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f))),
					(t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f)),
					(t[6] = -(a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c))),
					(t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c)),
					(t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M)),
					(t[9] = -(a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M))),
					(t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i)),
					(t[11] = -(a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i))),
					(t[12] = -(o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M))),
					(t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M)),
					(t[14] = -(a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i))),
					(t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i)),
					t
				)
			},
			determinant: function(t) {
				var n = t[0],
					a = t[1],
					r = t[2],
					u = t[3],
					e = t[4],
					o = t[5],
					i = t[6],
					c = t[7],
					h = t[8],
					s = t[9],
					M = t[10],
					f = t[11],
					l = t[12],
					v = t[13],
					b = t[14],
					m = t[15]
				return (
					(n * o - a * e) * (M * m - f * b) -
					(n * i - r * e) * (s * m - f * v) +
					(n * c - u * e) * (s * b - M * v) +
					(a * i - r * o) * (h * m - f * l) -
					(a * c - u * o) * (h * b - M * l) +
					(r * c - u * i) * (h * v - s * l)
				)
			},
			multiply: A,
			translate: function(t, n, a) {
				var r,
					u,
					e,
					o,
					i,
					c,
					h,
					s,
					M,
					f,
					l,
					v,
					b = a[0],
					m = a[1],
					d = a[2]
				return (
					n === t
						? ((t[12] = n[0] * b + n[4] * m + n[8] * d + n[12]),
						  (t[13] = n[1] * b + n[5] * m + n[9] * d + n[13]),
						  (t[14] = n[2] * b + n[6] * m + n[10] * d + n[14]),
						  (t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]))
						: ((r = n[0]),
						  (u = n[1]),
						  (e = n[2]),
						  (o = n[3]),
						  (i = n[4]),
						  (c = n[5]),
						  (h = n[6]),
						  (s = n[7]),
						  (M = n[8]),
						  (f = n[9]),
						  (l = n[10]),
						  (v = n[11]),
						  (t[0] = r),
						  (t[1] = u),
						  (t[2] = e),
						  (t[3] = o),
						  (t[4] = i),
						  (t[5] = c),
						  (t[6] = h),
						  (t[7] = s),
						  (t[8] = M),
						  (t[9] = f),
						  (t[10] = l),
						  (t[11] = v),
						  (t[12] = r * b + i * m + M * d + n[12]),
						  (t[13] = u * b + c * m + f * d + n[13]),
						  (t[14] = e * b + h * m + l * d + n[14]),
						  (t[15] = o * b + s * m + v * d + n[15])),
					t
				)
			},
			scale: function(t, n, a) {
				var r = a[0],
					u = a[1],
					e = a[2]
				return (
					(t[0] = n[0] * r),
					(t[1] = n[1] * r),
					(t[2] = n[2] * r),
					(t[3] = n[3] * r),
					(t[4] = n[4] * u),
					(t[5] = n[5] * u),
					(t[6] = n[6] * u),
					(t[7] = n[7] * u),
					(t[8] = n[8] * e),
					(t[9] = n[9] * e),
					(t[10] = n[10] * e),
					(t[11] = n[11] * e),
					(t[12] = n[12]),
					(t[13] = n[13]),
					(t[14] = n[14]),
					(t[15] = n[15]),
					t
				)
			},
			rotate: function(t, a, r, u) {
				var e,
					o,
					i,
					c,
					h,
					s,
					M,
					f,
					l,
					v,
					b,
					m,
					d,
					x,
					p,
					y,
					q,
					g,
					A,
					w,
					R,
					z,
					P,
					j,
					I = u[0],
					S = u[1],
					E = u[2],
					O = Math.hypot(I, S, E)
				return O < n
					? null
					: ((I *= O = 1 / O),
					  (S *= O),
					  (E *= O),
					  (e = Math.sin(r)),
					  (i = 1 - (o = Math.cos(r))),
					  (c = a[0]),
					  (h = a[1]),
					  (s = a[2]),
					  (M = a[3]),
					  (f = a[4]),
					  (l = a[5]),
					  (v = a[6]),
					  (b = a[7]),
					  (m = a[8]),
					  (d = a[9]),
					  (x = a[10]),
					  (p = a[11]),
					  (y = I * I * i + o),
					  (q = S * I * i + E * e),
					  (g = E * I * i - S * e),
					  (A = I * S * i - E * e),
					  (w = S * S * i + o),
					  (R = E * S * i + I * e),
					  (z = I * E * i + S * e),
					  (P = S * E * i - I * e),
					  (j = E * E * i + o),
					  (t[0] = c * y + f * q + m * g),
					  (t[1] = h * y + l * q + d * g),
					  (t[2] = s * y + v * q + x * g),
					  (t[3] = M * y + b * q + p * g),
					  (t[4] = c * A + f * w + m * R),
					  (t[5] = h * A + l * w + d * R),
					  (t[6] = s * A + v * w + x * R),
					  (t[7] = M * A + b * w + p * R),
					  (t[8] = c * z + f * P + m * j),
					  (t[9] = h * z + l * P + d * j),
					  (t[10] = s * z + v * P + x * j),
					  (t[11] = M * z + b * P + p * j),
					  a !== t && ((t[12] = a[12]), (t[13] = a[13]), (t[14] = a[14]), (t[15] = a[15])),
					  t)
			},
			rotateX: function(t, n, a) {
				var r = Math.sin(a),
					u = Math.cos(a),
					e = n[4],
					o = n[5],
					i = n[6],
					c = n[7],
					h = n[8],
					s = n[9],
					M = n[10],
					f = n[11]
				return (
					n !== t && ((t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), (t[15] = n[15])),
					(t[4] = e * u + h * r),
					(t[5] = o * u + s * r),
					(t[6] = i * u + M * r),
					(t[7] = c * u + f * r),
					(t[8] = h * u - e * r),
					(t[9] = s * u - o * r),
					(t[10] = M * u - i * r),
					(t[11] = f * u - c * r),
					t
				)
			},
			rotateY: function(t, n, a) {
				var r = Math.sin(a),
					u = Math.cos(a),
					e = n[0],
					o = n[1],
					i = n[2],
					c = n[3],
					h = n[8],
					s = n[9],
					M = n[10],
					f = n[11]
				return (
					n !== t && ((t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), (t[15] = n[15])),
					(t[0] = e * u - h * r),
					(t[1] = o * u - s * r),
					(t[2] = i * u - M * r),
					(t[3] = c * u - f * r),
					(t[8] = e * r + h * u),
					(t[9] = o * r + s * u),
					(t[10] = i * r + M * u),
					(t[11] = c * r + f * u),
					t
				)
			},
			rotateZ: function(t, n, a) {
				var r = Math.sin(a),
					u = Math.cos(a),
					e = n[0],
					o = n[1],
					i = n[2],
					c = n[3],
					h = n[4],
					s = n[5],
					M = n[6],
					f = n[7]
				return (
					n !== t && ((t[8] = n[8]), (t[9] = n[9]), (t[10] = n[10]), (t[11] = n[11]), (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), (t[15] = n[15])),
					(t[0] = e * u + h * r),
					(t[1] = o * u + s * r),
					(t[2] = i * u + M * r),
					(t[3] = c * u + f * r),
					(t[4] = h * u - e * r),
					(t[5] = s * u - o * r),
					(t[6] = M * u - i * r),
					(t[7] = f * u - c * r),
					t
				)
			},
			fromTranslation: function(t, n) {
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 1),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 1),
					(t[11] = 0),
					(t[12] = n[0]),
					(t[13] = n[1]),
					(t[14] = n[2]),
					(t[15] = 1),
					t
				)
			},
			fromScaling: function(t, n) {
				return (
					(t[0] = n[0]),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = n[1]),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = n[2]),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				)
			},
			fromRotation: function(t, a, r) {
				var u,
					e,
					o,
					i = r[0],
					c = r[1],
					h = r[2],
					s = Math.hypot(i, c, h)
				return s < n
					? null
					: ((i *= s = 1 / s),
					  (c *= s),
					  (h *= s),
					  (u = Math.sin(a)),
					  (o = 1 - (e = Math.cos(a))),
					  (t[0] = i * i * o + e),
					  (t[1] = c * i * o + h * u),
					  (t[2] = h * i * o - c * u),
					  (t[3] = 0),
					  (t[4] = i * c * o - h * u),
					  (t[5] = c * c * o + e),
					  (t[6] = h * c * o + i * u),
					  (t[7] = 0),
					  (t[8] = i * h * o + c * u),
					  (t[9] = c * h * o - i * u),
					  (t[10] = h * h * o + e),
					  (t[11] = 0),
					  (t[12] = 0),
					  (t[13] = 0),
					  (t[14] = 0),
					  (t[15] = 1),
					  t)
			},
			fromXRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (
					(t[0] = 1),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = r),
					(t[6] = a),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = -a),
					(t[10] = r),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				)
			},
			fromYRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (
					(t[0] = r),
					(t[1] = 0),
					(t[2] = -a),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 1),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = a),
					(t[9] = 0),
					(t[10] = r),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				)
			},
			fromZRotation: function(t, n) {
				var a = Math.sin(n),
					r = Math.cos(n)
				return (
					(t[0] = r),
					(t[1] = a),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = -a),
					(t[5] = r),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 1),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				)
			},
			fromRotationTranslation: w,
			fromQuat2: function(t, n) {
				var r = new a(3),
					u = -n[0],
					e = -n[1],
					o = -n[2],
					i = n[3],
					c = n[4],
					h = n[5],
					s = n[6],
					M = n[7],
					f = u * u + e * e + o * o + i * i
				return (
					f > 0
						? ((r[0] = (2 * (c * i + M * u + h * o - s * e)) / f),
						  (r[1] = (2 * (h * i + M * e + s * u - c * o)) / f),
						  (r[2] = (2 * (s * i + M * o + c * e - h * u)) / f))
						: ((r[0] = 2 * (c * i + M * u + h * o - s * e)), (r[1] = 2 * (h * i + M * e + s * u - c * o)), (r[2] = 2 * (s * i + M * o + c * e - h * u))),
					w(t, n, r),
					t
				)
			},
			getTranslation: R,
			getScaling: z,
			getRotation: P,
			fromRotationTranslationScale: function(t, n, a, r) {
				var u = n[0],
					e = n[1],
					o = n[2],
					i = n[3],
					c = u + u,
					h = e + e,
					s = o + o,
					M = u * c,
					f = u * h,
					l = u * s,
					v = e * h,
					b = e * s,
					m = o * s,
					d = i * c,
					x = i * h,
					p = i * s,
					y = r[0],
					q = r[1],
					g = r[2]
				return (
					(t[0] = (1 - (v + m)) * y),
					(t[1] = (f + p) * y),
					(t[2] = (l - x) * y),
					(t[3] = 0),
					(t[4] = (f - p) * q),
					(t[5] = (1 - (M + m)) * q),
					(t[6] = (b + d) * q),
					(t[7] = 0),
					(t[8] = (l + x) * g),
					(t[9] = (b - d) * g),
					(t[10] = (1 - (M + v)) * g),
					(t[11] = 0),
					(t[12] = a[0]),
					(t[13] = a[1]),
					(t[14] = a[2]),
					(t[15] = 1),
					t
				)
			},
			fromRotationTranslationScaleOrigin: function(t, n, a, r, u) {
				var e = n[0],
					o = n[1],
					i = n[2],
					c = n[3],
					h = e + e,
					s = o + o,
					M = i + i,
					f = e * h,
					l = e * s,
					v = e * M,
					b = o * s,
					m = o * M,
					d = i * M,
					x = c * h,
					p = c * s,
					y = c * M,
					q = r[0],
					g = r[1],
					A = r[2],
					w = u[0],
					R = u[1],
					z = u[2],
					P = (1 - (b + d)) * q,
					j = (l + y) * q,
					I = (v - p) * q,
					S = (l - y) * g,
					E = (1 - (f + d)) * g,
					O = (m + x) * g,
					T = (v + p) * A,
					D = (m - x) * A,
					F = (1 - (f + b)) * A
				return (
					(t[0] = P),
					(t[1] = j),
					(t[2] = I),
					(t[3] = 0),
					(t[4] = S),
					(t[5] = E),
					(t[6] = O),
					(t[7] = 0),
					(t[8] = T),
					(t[9] = D),
					(t[10] = F),
					(t[11] = 0),
					(t[12] = a[0] + w - (P * w + S * R + T * z)),
					(t[13] = a[1] + R - (j * w + E * R + D * z)),
					(t[14] = a[2] + z - (I * w + O * R + F * z)),
					(t[15] = 1),
					t
				)
			},
			fromQuat: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = a + a,
					i = r + r,
					c = u + u,
					h = a * o,
					s = r * o,
					M = r * i,
					f = u * o,
					l = u * i,
					v = u * c,
					b = e * o,
					m = e * i,
					d = e * c
				return (
					(t[0] = 1 - M - v),
					(t[1] = s + d),
					(t[2] = f - m),
					(t[3] = 0),
					(t[4] = s - d),
					(t[5] = 1 - h - v),
					(t[6] = l + b),
					(t[7] = 0),
					(t[8] = f + m),
					(t[9] = l - b),
					(t[10] = 1 - h - M),
					(t[11] = 0),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = 0),
					(t[15] = 1),
					t
				)
			},
			frustum: function(t, n, a, r, u, e, o) {
				var i = 1 / (a - n),
					c = 1 / (u - r),
					h = 1 / (e - o)
				return (
					(t[0] = 2 * e * i),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = 2 * e * c),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = (a + n) * i),
					(t[9] = (u + r) * c),
					(t[10] = (o + e) * h),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = o * e * 2 * h),
					(t[15] = 0),
					t
				)
			},
			perspective: function(t, n, a, r, u) {
				var e,
					o = 1 / Math.tan(n / 2)
				return (
					(t[0] = o / a),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = o),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[15] = 0),
					null != u && u !== 1 / 0 ? ((e = 1 / (r - u)), (t[10] = (u + r) * e), (t[14] = 2 * u * r * e)) : ((t[10] = -1), (t[14] = -2 * r)),
					t
				)
			},
			perspectiveFromFieldOfView: function(t, n, a, r) {
				var u = Math.tan((n.upDegrees * Math.PI) / 180),
					e = Math.tan((n.downDegrees * Math.PI) / 180),
					o = Math.tan((n.leftDegrees * Math.PI) / 180),
					i = Math.tan((n.rightDegrees * Math.PI) / 180),
					c = 2 / (o + i),
					h = 2 / (u + e)
				return (
					(t[0] = c),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = h),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = -(o - i) * c * 0.5),
					(t[9] = (u - e) * h * 0.5),
					(t[10] = r / (a - r)),
					(t[11] = -1),
					(t[12] = 0),
					(t[13] = 0),
					(t[14] = (r * a) / (a - r)),
					(t[15] = 0),
					t
				)
			},
			ortho: function(t, n, a, r, u, e, o) {
				var i = 1 / (n - a),
					c = 1 / (r - u),
					h = 1 / (e - o)
				return (
					(t[0] = -2 * i),
					(t[1] = 0),
					(t[2] = 0),
					(t[3] = 0),
					(t[4] = 0),
					(t[5] = -2 * c),
					(t[6] = 0),
					(t[7] = 0),
					(t[8] = 0),
					(t[9] = 0),
					(t[10] = 2 * h),
					(t[11] = 0),
					(t[12] = (n + a) * i),
					(t[13] = (u + r) * c),
					(t[14] = (o + e) * h),
					(t[15] = 1),
					t
				)
			},
			lookAt: function(t, a, r, u) {
				var e,
					o,
					i,
					c,
					h,
					s,
					M,
					f,
					l,
					v,
					b = a[0],
					m = a[1],
					d = a[2],
					x = u[0],
					p = u[1],
					y = u[2],
					q = r[0],
					A = r[1],
					w = r[2]
				return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n
					? g(t)
					: ((M = b - q),
					  (f = m - A),
					  (l = d - w),
					  (e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v)),
					  (o = y * (M *= v) - x * l),
					  (i = x * f - p * M),
					  (v = Math.hypot(e, o, i)) ? ((e *= v = 1 / v), (o *= v), (i *= v)) : ((e = 0), (o = 0), (i = 0)),
					  (c = f * i - l * o),
					  (h = l * e - M * i),
					  (s = M * o - f * e),
					  (v = Math.hypot(c, h, s)) ? ((c *= v = 1 / v), (h *= v), (s *= v)) : ((c = 0), (h = 0), (s = 0)),
					  (t[0] = e),
					  (t[1] = c),
					  (t[2] = M),
					  (t[3] = 0),
					  (t[4] = o),
					  (t[5] = h),
					  (t[6] = f),
					  (t[7] = 0),
					  (t[8] = i),
					  (t[9] = s),
					  (t[10] = l),
					  (t[11] = 0),
					  (t[12] = -(e * b + o * m + i * d)),
					  (t[13] = -(c * b + h * m + s * d)),
					  (t[14] = -(M * b + f * m + l * d)),
					  (t[15] = 1),
					  t)
			},
			targetTo: function(t, n, a, r) {
				var u = n[0],
					e = n[1],
					o = n[2],
					i = r[0],
					c = r[1],
					h = r[2],
					s = u - a[0],
					M = e - a[1],
					f = o - a[2],
					l = s * s + M * M + f * f
				l > 0 && ((s *= l = 1 / Math.sqrt(l)), (M *= l), (f *= l))
				var v = c * f - h * M,
					b = h * s - i * f,
					m = i * M - c * s
				return (
					(l = v * v + b * b + m * m) > 0 && ((v *= l = 1 / Math.sqrt(l)), (b *= l), (m *= l)),
					(t[0] = v),
					(t[1] = b),
					(t[2] = m),
					(t[3] = 0),
					(t[4] = M * m - f * b),
					(t[5] = f * v - s * m),
					(t[6] = s * b - M * v),
					(t[7] = 0),
					(t[8] = s),
					(t[9] = M),
					(t[10] = f),
					(t[11] = 0),
					(t[12] = u),
					(t[13] = e),
					(t[14] = o),
					(t[15] = 1),
					t
				)
			},
			str: function(t) {
				return (
					'mat4(' +
					t[0] +
					', ' +
					t[1] +
					', ' +
					t[2] +
					', ' +
					t[3] +
					', ' +
					t[4] +
					', ' +
					t[5] +
					', ' +
					t[6] +
					', ' +
					t[7] +
					', ' +
					t[8] +
					', ' +
					t[9] +
					', ' +
					t[10] +
					', ' +
					t[11] +
					', ' +
					t[12] +
					', ' +
					t[13] +
					', ' +
					t[14] +
					', ' +
					t[15] +
					')'
				)
			},
			frob: function(t) {
				return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
			},
			add: function(t, n, a) {
				return (
					(t[0] = n[0] + a[0]),
					(t[1] = n[1] + a[1]),
					(t[2] = n[2] + a[2]),
					(t[3] = n[3] + a[3]),
					(t[4] = n[4] + a[4]),
					(t[5] = n[5] + a[5]),
					(t[6] = n[6] + a[6]),
					(t[7] = n[7] + a[7]),
					(t[8] = n[8] + a[8]),
					(t[9] = n[9] + a[9]),
					(t[10] = n[10] + a[10]),
					(t[11] = n[11] + a[11]),
					(t[12] = n[12] + a[12]),
					(t[13] = n[13] + a[13]),
					(t[14] = n[14] + a[14]),
					(t[15] = n[15] + a[15]),
					t
				)
			},
			subtract: j,
			multiplyScalar: function(t, n, a) {
				return (
					(t[0] = n[0] * a),
					(t[1] = n[1] * a),
					(t[2] = n[2] * a),
					(t[3] = n[3] * a),
					(t[4] = n[4] * a),
					(t[5] = n[5] * a),
					(t[6] = n[6] * a),
					(t[7] = n[7] * a),
					(t[8] = n[8] * a),
					(t[9] = n[9] * a),
					(t[10] = n[10] * a),
					(t[11] = n[11] * a),
					(t[12] = n[12] * a),
					(t[13] = n[13] * a),
					(t[14] = n[14] * a),
					(t[15] = n[15] * a),
					t
				)
			},
			multiplyScalarAndAdd: function(t, n, a, r) {
				return (
					(t[0] = n[0] + a[0] * r),
					(t[1] = n[1] + a[1] * r),
					(t[2] = n[2] + a[2] * r),
					(t[3] = n[3] + a[3] * r),
					(t[4] = n[4] + a[4] * r),
					(t[5] = n[5] + a[5] * r),
					(t[6] = n[6] + a[6] * r),
					(t[7] = n[7] + a[7] * r),
					(t[8] = n[8] + a[8] * r),
					(t[9] = n[9] + a[9] * r),
					(t[10] = n[10] + a[10] * r),
					(t[11] = n[11] + a[11] * r),
					(t[12] = n[12] + a[12] * r),
					(t[13] = n[13] + a[13] * r),
					(t[14] = n[14] + a[14] * r),
					(t[15] = n[15] + a[15] * r),
					t
				)
			},
			exactEquals: function(t, n) {
				return (
					t[0] === n[0] &&
					t[1] === n[1] &&
					t[2] === n[2] &&
					t[3] === n[3] &&
					t[4] === n[4] &&
					t[5] === n[5] &&
					t[6] === n[6] &&
					t[7] === n[7] &&
					t[8] === n[8] &&
					t[9] === n[9] &&
					t[10] === n[10] &&
					t[11] === n[11] &&
					t[12] === n[12] &&
					t[13] === n[13] &&
					t[14] === n[14] &&
					t[15] === n[15]
				)
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = t[2],
					o = t[3],
					i = t[4],
					c = t[5],
					h = t[6],
					s = t[7],
					M = t[8],
					f = t[9],
					l = t[10],
					v = t[11],
					b = t[12],
					m = t[13],
					d = t[14],
					x = t[15],
					p = a[0],
					y = a[1],
					q = a[2],
					g = a[3],
					A = a[4],
					w = a[5],
					R = a[6],
					z = a[7],
					P = a[8],
					j = a[9],
					I = a[10],
					S = a[11],
					E = a[12],
					O = a[13],
					T = a[14],
					D = a[15]
				return (
					Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) &&
					Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) &&
					Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) &&
					Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) &&
					Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) &&
					Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) &&
					Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) &&
					Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) &&
					Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) &&
					Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) &&
					Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) &&
					Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) &&
					Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) &&
					Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) &&
					Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) &&
					Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
				)
			},
			mul: I,
			sub: S
		})
	function O() {
		var t = new a(3)
		return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t
	}
	function T(t) {
		var n = t[0],
			a = t[1],
			r = t[2]
		return Math.hypot(n, a, r)
	}
	function D(t, n, r) {
		var u = new a(3)
		return (u[0] = t), (u[1] = n), (u[2] = r), u
	}
	function F(t, n, a) {
		return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), t
	}
	function L(t, n, a) {
		return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), t
	}
	function V(t, n, a) {
		return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), t
	}
	function Q(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1],
			u = n[2] - t[2]
		return Math.hypot(a, r, u)
	}
	function Y(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1],
			u = n[2] - t[2]
		return a * a + r * r + u * u
	}
	function X(t) {
		var n = t[0],
			a = t[1],
			r = t[2]
		return n * n + a * a + r * r
	}
	function Z(t, n) {
		var a = n[0],
			r = n[1],
			u = n[2],
			e = a * a + r * r + u * u
		return e > 0 && (e = 1 / Math.sqrt(e)), (t[0] = n[0] * e), (t[1] = n[1] * e), (t[2] = n[2] * e), t
	}
	function _(t, n) {
		return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
	}
	function B(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = a[0],
			i = a[1],
			c = a[2]
		return (t[0] = u * c - e * i), (t[1] = e * o - r * c), (t[2] = r * i - u * o), t
	}
	var N,
		k = F,
		U = L,
		W = V,
		C = Q,
		G = Y,
		H = T,
		J = X,
		K =
			((N = O()),
			function(t, n, a, r, u, e) {
				var o, i
				for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n)
					(N[0] = t[o]), (N[1] = t[o + 1]), (N[2] = t[o + 2]), u(N, N, e), (t[o] = N[0]), (t[o + 1] = N[1]), (t[o + 2] = N[2])
				return t
			}),
		$ = Object.freeze({
			create: O,
			clone: function(t) {
				var n = new a(3)
				return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n
			},
			length: T,
			fromValues: D,
			copy: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t
			},
			set: function(t, n, a, r) {
				return (t[0] = n), (t[1] = a), (t[2] = r), t
			},
			add: function(t, n, a) {
				return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), t
			},
			subtract: F,
			multiply: L,
			divide: V,
			ceil: function(t, n) {
				return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), (t[2] = Math.ceil(n[2])), t
			},
			floor: function(t, n) {
				return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), (t[2] = Math.floor(n[2])), t
			},
			min: function(t, n, a) {
				return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), (t[2] = Math.min(n[2], a[2])), t
			},
			max: function(t, n, a) {
				return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), (t[2] = Math.max(n[2], a[2])), t
			},
			round: function(t, n) {
				return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), (t[2] = Math.round(n[2])), t
			},
			scale: function(t, n, a) {
				return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), t
			},
			scaleAndAdd: function(t, n, a, r) {
				return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), t
			},
			distance: Q,
			squaredDistance: Y,
			squaredLength: X,
			negate: function(t, n) {
				return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t
			},
			inverse: function(t, n) {
				return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t
			},
			normalize: Z,
			dot: _,
			cross: B,
			lerp: function(t, n, a, r) {
				var u = n[0],
					e = n[1],
					o = n[2]
				return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), (t[2] = o + r * (a[2] - o)), t
			},
			hermite: function(t, n, a, r, u, e) {
				var o = e * e,
					i = o * (2 * e - 3) + 1,
					c = o * (e - 2) + e,
					h = o * (e - 1),
					s = o * (3 - 2 * e)
				return (
					(t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s),
					(t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s),
					(t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s),
					t
				)
			},
			bezier: function(t, n, a, r, u, e) {
				var o = 1 - e,
					i = o * o,
					c = e * e,
					h = i * o,
					s = 3 * e * i,
					M = 3 * c * o,
					f = c * e
				return (
					(t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f),
					(t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f),
					(t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f),
					t
				)
			},
			random: function(t, n) {
				n = n || 1
				var a = 2 * r() * Math.PI,
					u = 2 * r() - 1,
					e = Math.sqrt(1 - u * u) * n
				return (t[0] = Math.cos(a) * e), (t[1] = Math.sin(a) * e), (t[2] = u * n), t
			},
			transformMat4: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = a[3] * r + a[7] * u + a[11] * e + a[15]
				return (
					(o = o || 1),
					(t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o),
					(t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o),
					(t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o),
					t
				)
			},
			transformMat3: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2]
				return (t[0] = r * a[0] + u * a[3] + e * a[6]), (t[1] = r * a[1] + u * a[4] + e * a[7]), (t[2] = r * a[2] + u * a[5] + e * a[8]), t
			},
			transformQuat: function(t, n, a) {
				var r = a[0],
					u = a[1],
					e = a[2],
					o = a[3],
					i = n[0],
					c = n[1],
					h = n[2],
					s = u * h - e * c,
					M = e * i - r * h,
					f = r * c - u * i,
					l = u * f - e * M,
					v = e * s - r * f,
					b = r * M - u * s,
					m = 2 * o
				return (s *= m), (M *= m), (f *= m), (l *= 2), (v *= 2), (b *= 2), (t[0] = i + s + l), (t[1] = c + M + v), (t[2] = h + f + b), t
			},
			rotateX: function(t, n, a, r) {
				var u = [],
					e = []
				return (
					(u[0] = n[0] - a[0]),
					(u[1] = n[1] - a[1]),
					(u[2] = n[2] - a[2]),
					(e[0] = u[0]),
					(e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r)),
					(e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r)),
					(t[0] = e[0] + a[0]),
					(t[1] = e[1] + a[1]),
					(t[2] = e[2] + a[2]),
					t
				)
			},
			rotateY: function(t, n, a, r) {
				var u = [],
					e = []
				return (
					(u[0] = n[0] - a[0]),
					(u[1] = n[1] - a[1]),
					(u[2] = n[2] - a[2]),
					(e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r)),
					(e[1] = u[1]),
					(e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r)),
					(t[0] = e[0] + a[0]),
					(t[1] = e[1] + a[1]),
					(t[2] = e[2] + a[2]),
					t
				)
			},
			rotateZ: function(t, n, a, r) {
				var u = [],
					e = []
				return (
					(u[0] = n[0] - a[0]),
					(u[1] = n[1] - a[1]),
					(u[2] = n[2] - a[2]),
					(e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r)),
					(e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r)),
					(e[2] = u[2]),
					(t[0] = e[0] + a[0]),
					(t[1] = e[1] + a[1]),
					(t[2] = e[2] + a[2]),
					t
				)
			},
			angle: function(t, n) {
				var a = D(t[0], t[1], t[2]),
					r = D(n[0], n[1], n[2])
				Z(a, a), Z(r, r)
				var u = _(a, r)
				return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
			},
			zero: function(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), t
			},
			str: function(t) {
				return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')'
			},
			exactEquals: function(t, n) {
				return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = t[2],
					o = a[0],
					i = a[1],
					c = a[2]
				return (
					Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) &&
					Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) &&
					Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
				)
			},
			sub: k,
			mul: U,
			div: W,
			dist: C,
			sqrDist: G,
			len: H,
			sqrLen: J,
			forEach: K
		})
	function tt() {
		var t = new a(4)
		return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t
	}
	function nt(t) {
		var n = new a(4)
		return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n
	}
	function at(t, n, r, u) {
		var e = new a(4)
		return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e
	}
	function rt(t, n) {
		return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t
	}
	function ut(t, n, a, r, u) {
		return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t
	}
	function et(t, n, a) {
		return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), (t[3] = n[3] + a[3]), t
	}
	function ot(t, n, a) {
		return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), (t[3] = n[3] - a[3]), t
	}
	function it(t, n, a) {
		return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), (t[3] = n[3] * a[3]), t
	}
	function ct(t, n, a) {
		return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), (t[3] = n[3] / a[3]), t
	}
	function ht(t, n, a) {
		return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), (t[3] = n[3] * a), t
	}
	function st(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1],
			u = n[2] - t[2],
			e = n[3] - t[3]
		return Math.hypot(a, r, u, e)
	}
	function Mt(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1],
			u = n[2] - t[2],
			e = n[3] - t[3]
		return a * a + r * r + u * u + e * e
	}
	function ft(t) {
		var n = t[0],
			a = t[1],
			r = t[2],
			u = t[3]
		return Math.hypot(n, a, r, u)
	}
	function lt(t) {
		var n = t[0],
			a = t[1],
			r = t[2],
			u = t[3]
		return n * n + a * a + r * r + u * u
	}
	function vt(t, n) {
		var a = n[0],
			r = n[1],
			u = n[2],
			e = n[3],
			o = a * a + r * r + u * u + e * e
		return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = a * o), (t[1] = r * o), (t[2] = u * o), (t[3] = e * o), t
	}
	function bt(t, n) {
		return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
	}
	function mt(t, n, a, r) {
		var u = n[0],
			e = n[1],
			o = n[2],
			i = n[3]
		return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), (t[2] = o + r * (a[2] - o)), (t[3] = i + r * (a[3] - i)), t
	}
	function dt(t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
	}
	function xt(t, a) {
		var r = t[0],
			u = t[1],
			e = t[2],
			o = t[3],
			i = a[0],
			c = a[1],
			h = a[2],
			s = a[3]
		return (
			Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
			Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
			Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
			Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
		)
	}
	var pt = ot,
		yt = it,
		qt = ct,
		gt = st,
		At = Mt,
		wt = ft,
		Rt = lt,
		zt = (function() {
			var t = tt()
			return function(n, a, r, u, e, o) {
				var i, c
				for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a)
					(t[0] = n[i]),
						(t[1] = n[i + 1]),
						(t[2] = n[i + 2]),
						(t[3] = n[i + 3]),
						e(t, t, o),
						(n[i] = t[0]),
						(n[i + 1] = t[1]),
						(n[i + 2] = t[2]),
						(n[i + 3] = t[3])
				return n
			}
		})(),
		Pt = Object.freeze({
			create: tt,
			clone: nt,
			fromValues: at,
			copy: rt,
			set: ut,
			add: et,
			subtract: ot,
			multiply: it,
			divide: ct,
			ceil: function(t, n) {
				return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), (t[2] = Math.ceil(n[2])), (t[3] = Math.ceil(n[3])), t
			},
			floor: function(t, n) {
				return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), (t[2] = Math.floor(n[2])), (t[3] = Math.floor(n[3])), t
			},
			min: function(t, n, a) {
				return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), (t[2] = Math.min(n[2], a[2])), (t[3] = Math.min(n[3], a[3])), t
			},
			max: function(t, n, a) {
				return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), (t[2] = Math.max(n[2], a[2])), (t[3] = Math.max(n[3], a[3])), t
			},
			round: function(t, n) {
				return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), (t[2] = Math.round(n[2])), (t[3] = Math.round(n[3])), t
			},
			scale: ht,
			scaleAndAdd: function(t, n, a, r) {
				return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), (t[3] = n[3] + a[3] * r), t
			},
			distance: st,
			squaredDistance: Mt,
			length: ft,
			squaredLength: lt,
			negate: function(t, n) {
				return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t
			},
			inverse: function(t, n) {
				return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), (t[3] = 1 / n[3]), t
			},
			normalize: vt,
			dot: bt,
			cross: function(t, n, a, r) {
				var u = a[0] * r[1] - a[1] * r[0],
					e = a[0] * r[2] - a[2] * r[0],
					o = a[0] * r[3] - a[3] * r[0],
					i = a[1] * r[2] - a[2] * r[1],
					c = a[1] * r[3] - a[3] * r[1],
					h = a[2] * r[3] - a[3] * r[2],
					s = n[0],
					M = n[1],
					f = n[2],
					l = n[3]
				return (t[0] = M * h - f * c + l * i), (t[1] = -s * h + f * o - l * e), (t[2] = s * c - M * o + l * u), (t[3] = -s * i + M * e - f * u), t
			},
			lerp: mt,
			random: function(t, n) {
				var a, u, e, o, i, c
				n = n || 1
				do {
					i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
				} while (i >= 1)
				do {
					c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
				} while (c >= 1)
				var h = Math.sqrt((1 - i) / c)
				return (t[0] = n * a), (t[1] = n * u), (t[2] = n * e * h), (t[3] = n * o * h), t
			},
			transformMat4: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = n[3]
				return (
					(t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o),
					(t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o),
					(t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o),
					(t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o),
					t
				)
			},
			transformQuat: function(t, n, a) {
				var r = n[0],
					u = n[1],
					e = n[2],
					o = a[0],
					i = a[1],
					c = a[2],
					h = a[3],
					s = h * r + i * e - c * u,
					M = h * u + c * r - o * e,
					f = h * e + o * u - i * r,
					l = -o * r - i * u - c * e
				return (t[0] = s * h + l * -o + M * -c - f * -i), (t[1] = M * h + l * -i + f * -o - s * -c), (t[2] = f * h + l * -c + s * -i - M * -o), (t[3] = n[3]), t
			},
			zero: function(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t
			},
			str: function(t) {
				return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
			},
			exactEquals: dt,
			equals: xt,
			sub: pt,
			mul: yt,
			div: qt,
			dist: gt,
			sqrDist: At,
			len: wt,
			sqrLen: Rt,
			forEach: zt
		})
	function jt() {
		var t = new a(4)
		return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t
	}
	function It(t, n, a) {
		a *= 0.5
		var r = Math.sin(a)
		return (t[0] = r * n[0]), (t[1] = r * n[1]), (t[2] = r * n[2]), (t[3] = Math.cos(a)), t
	}
	function St(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = a[0],
			c = a[1],
			h = a[2],
			s = a[3]
		return (
			(t[0] = r * s + o * i + u * h - e * c),
			(t[1] = u * s + o * c + e * i - r * h),
			(t[2] = e * s + o * h + r * c - u * i),
			(t[3] = o * s - r * i - u * c - e * h),
			t
		)
	}
	function Et(t, n, a) {
		a *= 0.5
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = Math.sin(a),
			c = Math.cos(a)
		return (t[0] = r * c + o * i), (t[1] = u * c + e * i), (t[2] = e * c - u * i), (t[3] = o * c - r * i), t
	}
	function Ot(t, n, a) {
		a *= 0.5
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = Math.sin(a),
			c = Math.cos(a)
		return (t[0] = r * c - e * i), (t[1] = u * c + o * i), (t[2] = e * c + r * i), (t[3] = o * c - u * i), t
	}
	function Tt(t, n, a) {
		a *= 0.5
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = Math.sin(a),
			c = Math.cos(a)
		return (t[0] = r * c + u * i), (t[1] = u * c - r * i), (t[2] = e * c + o * i), (t[3] = o * c - e * i), t
	}
	function Dt(t, n) {
		var a = n[0],
			r = n[1],
			u = n[2],
			e = n[3],
			o = Math.sqrt(a * a + r * r + u * u),
			i = Math.exp(e),
			c = o > 0 ? (i * Math.sin(o)) / o : 0
		return (t[0] = a * c), (t[1] = r * c), (t[2] = u * c), (t[3] = i * Math.cos(o)), t
	}
	function Ft(t, n) {
		var a = n[0],
			r = n[1],
			u = n[2],
			e = n[3],
			o = Math.sqrt(a * a + r * r + u * u),
			i = o > 0 ? Math.atan2(o, e) / o : 0
		return (t[0] = a * i), (t[1] = r * i), (t[2] = u * i), (t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e)), t
	}
	function Lt(t, a, r, u) {
		var e,
			o,
			i,
			c,
			h,
			s = a[0],
			M = a[1],
			f = a[2],
			l = a[3],
			v = r[0],
			b = r[1],
			m = r[2],
			d = r[3]
		return (
			(o = s * v + M * b + f * m + l * d) < 0 && ((o = -o), (v = -v), (b = -b), (m = -m), (d = -d)),
			1 - o > n ? ((e = Math.acos(o)), (i = Math.sin(e)), (c = Math.sin((1 - u) * e) / i), (h = Math.sin(u * e) / i)) : ((c = 1 - u), (h = u)),
			(t[0] = c * s + h * v),
			(t[1] = c * M + h * b),
			(t[2] = c * f + h * m),
			(t[3] = c * l + h * d),
			t
		)
	}
	function Vt(t, n) {
		var a,
			r = n[0] + n[4] + n[8]
		if (r > 0) (a = Math.sqrt(r + 1)), (t[3] = 0.5 * a), (a = 0.5 / a), (t[0] = (n[5] - n[7]) * a), (t[1] = (n[6] - n[2]) * a), (t[2] = (n[1] - n[3]) * a)
		else {
			var u = 0
			n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2)
			var e = (u + 1) % 3,
				o = (u + 2) % 3
			;(a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1)),
				(t[u] = 0.5 * a),
				(a = 0.5 / a),
				(t[3] = (n[3 * e + o] - n[3 * o + e]) * a),
				(t[e] = (n[3 * e + u] + n[3 * u + e]) * a),
				(t[o] = (n[3 * o + u] + n[3 * u + o]) * a)
		}
		return t
	}
	var Qt,
		Yt,
		Xt,
		Zt,
		_t,
		Bt,
		Nt = nt,
		kt = at,
		Ut = rt,
		Wt = ut,
		Ct = et,
		Gt = St,
		Ht = ht,
		Jt = bt,
		Kt = mt,
		$t = ft,
		tn = $t,
		nn = lt,
		an = nn,
		rn = vt,
		un = dt,
		en = xt,
		on =
			((Qt = O()),
			(Yt = D(1, 0, 0)),
			(Xt = D(0, 1, 0)),
			function(t, n, a) {
				var r = _(n, a)
				return r < -0.999999
					? (B(Qt, Yt, n), H(Qt) < 1e-6 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t)
					: r > 0.999999
					? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
					: (B(Qt, n, a), (t[0] = Qt[0]), (t[1] = Qt[1]), (t[2] = Qt[2]), (t[3] = 1 + r), rn(t, t))
			}),
		cn =
			((Zt = jt()),
			(_t = jt()),
			function(t, n, a, r, u, e) {
				return Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t
			}),
		hn =
			((Bt = m()),
			function(t, n, a, r) {
				return (
					(Bt[0] = a[0]),
					(Bt[3] = a[1]),
					(Bt[6] = a[2]),
					(Bt[1] = r[0]),
					(Bt[4] = r[1]),
					(Bt[7] = r[2]),
					(Bt[2] = -n[0]),
					(Bt[5] = -n[1]),
					(Bt[8] = -n[2]),
					rn(t, Vt(t, Bt))
				)
			}),
		sn = Object.freeze({
			create: jt,
			identity: function(t) {
				return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t
			},
			setAxisAngle: It,
			getAxisAngle: function(t, a) {
				var r = 2 * Math.acos(a[3]),
					u = Math.sin(r / 2)
				return u > n ? ((t[0] = a[0] / u), (t[1] = a[1] / u), (t[2] = a[2] / u)) : ((t[0] = 1), (t[1] = 0), (t[2] = 0)), r
			},
			getAngle: function(t, n) {
				var a = Jt(t, n)
				return Math.acos(2 * a * a - 1)
			},
			multiply: St,
			rotateX: Et,
			rotateY: Ot,
			rotateZ: Tt,
			calculateW: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2]
				return (t[0] = a), (t[1] = r), (t[2] = u), (t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u))), t
			},
			exp: Dt,
			ln: Ft,
			pow: function(t, n, a) {
				return Ft(t, n), Ht(t, t, a), Dt(t, t), t
			},
			slerp: Lt,
			random: function(t) {
				var n = r(),
					a = r(),
					u = r(),
					e = Math.sqrt(1 - n),
					o = Math.sqrt(n)
				return (
					(t[0] = e * Math.sin(2 * Math.PI * a)),
					(t[1] = e * Math.cos(2 * Math.PI * a)),
					(t[2] = o * Math.sin(2 * Math.PI * u)),
					(t[3] = o * Math.cos(2 * Math.PI * u)),
					t
				)
			},
			invert: function(t, n) {
				var a = n[0],
					r = n[1],
					u = n[2],
					e = n[3],
					o = a * a + r * r + u * u + e * e,
					i = o ? 1 / o : 0
				return (t[0] = -a * i), (t[1] = -r * i), (t[2] = -u * i), (t[3] = e * i), t
			},
			conjugate: function(t, n) {
				return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t
			},
			fromMat3: Vt,
			fromEuler: function(t, n, a, r) {
				var u = (0.5 * Math.PI) / 180
				;(n *= u), (a *= u), (r *= u)
				var e = Math.sin(n),
					o = Math.cos(n),
					i = Math.sin(a),
					c = Math.cos(a),
					h = Math.sin(r),
					s = Math.cos(r)
				return (t[0] = e * c * s - o * i * h), (t[1] = o * i * s + e * c * h), (t[2] = o * c * h - e * i * s), (t[3] = o * c * s + e * i * h), t
			},
			str: function(t) {
				return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
			},
			clone: Nt,
			fromValues: kt,
			copy: Ut,
			set: Wt,
			add: Ct,
			mul: Gt,
			scale: Ht,
			dot: Jt,
			lerp: Kt,
			length: $t,
			len: tn,
			squaredLength: nn,
			sqrLen: an,
			normalize: rn,
			exactEquals: un,
			equals: en,
			rotationTo: on,
			sqlerp: cn,
			setAxes: hn
		})
	function Mn(t, n, a) {
		var r = 0.5 * a[0],
			u = 0.5 * a[1],
			e = 0.5 * a[2],
			o = n[0],
			i = n[1],
			c = n[2],
			h = n[3]
		return (
			(t[0] = o),
			(t[1] = i),
			(t[2] = c),
			(t[3] = h),
			(t[4] = r * h + u * c - e * i),
			(t[5] = u * h + e * o - r * c),
			(t[6] = e * h + r * i - u * o),
			(t[7] = -r * o - u * i - e * c),
			t
		)
	}
	function fn(t, n) {
		return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), (t[6] = n[6]), (t[7] = n[7]), t
	}
	var ln = Ut
	var vn = Ut
	function bn(t, n, a) {
		var r = n[0],
			u = n[1],
			e = n[2],
			o = n[3],
			i = a[4],
			c = a[5],
			h = a[6],
			s = a[7],
			M = n[4],
			f = n[5],
			l = n[6],
			v = n[7],
			b = a[0],
			m = a[1],
			d = a[2],
			x = a[3]
		return (
			(t[0] = r * x + o * b + u * d - e * m),
			(t[1] = u * x + o * m + e * b - r * d),
			(t[2] = e * x + o * d + r * m - u * b),
			(t[3] = o * x - r * b - u * m - e * d),
			(t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m),
			(t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d),
			(t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b),
			(t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d),
			t
		)
	}
	var mn = bn
	var dn = Jt
	var xn = $t,
		pn = xn,
		yn = nn,
		qn = yn
	var gn = Object.freeze({
		create: function() {
			var t = new a(8)
			return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)), (t[3] = 1), t
		},
		clone: function(t) {
			var n = new a(8)
			return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), (n[4] = t[4]), (n[5] = t[5]), (n[6] = t[6]), (n[7] = t[7]), n
		},
		fromValues: function(t, n, r, u, e, o, i, c) {
			var h = new a(8)
			return (h[0] = t), (h[1] = n), (h[2] = r), (h[3] = u), (h[4] = e), (h[5] = o), (h[6] = i), (h[7] = c), h
		},
		fromRotationTranslationValues: function(t, n, r, u, e, o, i) {
			var c = new a(8)
			;(c[0] = t), (c[1] = n), (c[2] = r), (c[3] = u)
			var h = 0.5 * e,
				s = 0.5 * o,
				M = 0.5 * i
			return (c[4] = h * u + s * r - M * n), (c[5] = s * u + M * t - h * r), (c[6] = M * u + h * n - s * t), (c[7] = -h * t - s * n - M * r), c
		},
		fromRotationTranslation: Mn,
		fromTranslation: function(t, n) {
			return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0.5 * n[0]), (t[5] = 0.5 * n[1]), (t[6] = 0.5 * n[2]), (t[7] = 0), t
		},
		fromRotation: function(t, n) {
			return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t
		},
		fromMat4: function(t, n) {
			var r = jt()
			P(r, n)
			var u = new a(3)
			return R(u, n), Mn(t, r, u), t
		},
		copy: fn,
		identity: function(t) {
			return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t
		},
		set: function(t, n, a, r, u, e, o, i, c) {
			return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), (t[6] = i), (t[7] = c), t
		},
		getReal: ln,
		getDual: function(t, n) {
			return (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t
		},
		setReal: vn,
		setDual: function(t, n) {
			return (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t
		},
		getTranslation: function(t, n) {
			var a = n[4],
				r = n[5],
				u = n[6],
				e = n[7],
				o = -n[0],
				i = -n[1],
				c = -n[2],
				h = n[3]
			return (t[0] = 2 * (a * h + e * o + r * c - u * i)), (t[1] = 2 * (r * h + e * i + u * o - a * c)), (t[2] = 2 * (u * h + e * c + a * i - r * o)), t
		},
		translate: function(t, n, a) {
			var r = n[0],
				u = n[1],
				e = n[2],
				o = n[3],
				i = 0.5 * a[0],
				c = 0.5 * a[1],
				h = 0.5 * a[2],
				s = n[4],
				M = n[5],
				f = n[6],
				l = n[7]
			return (
				(t[0] = r),
				(t[1] = u),
				(t[2] = e),
				(t[3] = o),
				(t[4] = o * i + u * h - e * c + s),
				(t[5] = o * c + e * i - r * h + M),
				(t[6] = o * h + r * c - u * i + f),
				(t[7] = -r * i - u * c - e * h + l),
				t
			)
		},
		rotateX: function(t, n, a) {
			var r = -n[0],
				u = -n[1],
				e = -n[2],
				o = n[3],
				i = n[4],
				c = n[5],
				h = n[6],
				s = n[7],
				M = i * o + s * r + c * e - h * u,
				f = c * o + s * u + h * r - i * e,
				l = h * o + s * e + i * u - c * r,
				v = s * o - i * r - c * u - h * e
			return (
				Et(t, n, a),
				(r = t[0]),
				(u = t[1]),
				(e = t[2]),
				(o = t[3]),
				(t[4] = M * o + v * r + f * e - l * u),
				(t[5] = f * o + v * u + l * r - M * e),
				(t[6] = l * o + v * e + M * u - f * r),
				(t[7] = v * o - M * r - f * u - l * e),
				t
			)
		},
		rotateY: function(t, n, a) {
			var r = -n[0],
				u = -n[1],
				e = -n[2],
				o = n[3],
				i = n[4],
				c = n[5],
				h = n[6],
				s = n[7],
				M = i * o + s * r + c * e - h * u,
				f = c * o + s * u + h * r - i * e,
				l = h * o + s * e + i * u - c * r,
				v = s * o - i * r - c * u - h * e
			return (
				Ot(t, n, a),
				(r = t[0]),
				(u = t[1]),
				(e = t[2]),
				(o = t[3]),
				(t[4] = M * o + v * r + f * e - l * u),
				(t[5] = f * o + v * u + l * r - M * e),
				(t[6] = l * o + v * e + M * u - f * r),
				(t[7] = v * o - M * r - f * u - l * e),
				t
			)
		},
		rotateZ: function(t, n, a) {
			var r = -n[0],
				u = -n[1],
				e = -n[2],
				o = n[3],
				i = n[4],
				c = n[5],
				h = n[6],
				s = n[7],
				M = i * o + s * r + c * e - h * u,
				f = c * o + s * u + h * r - i * e,
				l = h * o + s * e + i * u - c * r,
				v = s * o - i * r - c * u - h * e
			return (
				Tt(t, n, a),
				(r = t[0]),
				(u = t[1]),
				(e = t[2]),
				(o = t[3]),
				(t[4] = M * o + v * r + f * e - l * u),
				(t[5] = f * o + v * u + l * r - M * e),
				(t[6] = l * o + v * e + M * u - f * r),
				(t[7] = v * o - M * r - f * u - l * e),
				t
			)
		},
		rotateByQuatAppend: function(t, n, a) {
			var r = a[0],
				u = a[1],
				e = a[2],
				o = a[3],
				i = n[0],
				c = n[1],
				h = n[2],
				s = n[3]
			return (
				(t[0] = i * o + s * r + c * e - h * u),
				(t[1] = c * o + s * u + h * r - i * e),
				(t[2] = h * o + s * e + i * u - c * r),
				(t[3] = s * o - i * r - c * u - h * e),
				(i = n[4]),
				(c = n[5]),
				(h = n[6]),
				(s = n[7]),
				(t[4] = i * o + s * r + c * e - h * u),
				(t[5] = c * o + s * u + h * r - i * e),
				(t[6] = h * o + s * e + i * u - c * r),
				(t[7] = s * o - i * r - c * u - h * e),
				t
			)
		},
		rotateByQuatPrepend: function(t, n, a) {
			var r = n[0],
				u = n[1],
				e = n[2],
				o = n[3],
				i = a[0],
				c = a[1],
				h = a[2],
				s = a[3]
			return (
				(t[0] = r * s + o * i + u * h - e * c),
				(t[1] = u * s + o * c + e * i - r * h),
				(t[2] = e * s + o * h + r * c - u * i),
				(t[3] = o * s - r * i - u * c - e * h),
				(i = a[4]),
				(c = a[5]),
				(h = a[6]),
				(s = a[7]),
				(t[4] = r * s + o * i + u * h - e * c),
				(t[5] = u * s + o * c + e * i - r * h),
				(t[6] = e * s + o * h + r * c - u * i),
				(t[7] = o * s - r * i - u * c - e * h),
				t
			)
		},
		rotateAroundAxis: function(t, a, r, u) {
			if (Math.abs(u) < n) return fn(t, a)
			var e = Math.hypot(r[0], r[1], r[2])
			u *= 0.5
			var o = Math.sin(u),
				i = (o * r[0]) / e,
				c = (o * r[1]) / e,
				h = (o * r[2]) / e,
				s = Math.cos(u),
				M = a[0],
				f = a[1],
				l = a[2],
				v = a[3]
			;(t[0] = M * s + v * i + f * h - l * c),
				(t[1] = f * s + v * c + l * i - M * h),
				(t[2] = l * s + v * h + M * c - f * i),
				(t[3] = v * s - M * i - f * c - l * h)
			var b = a[4],
				m = a[5],
				d = a[6],
				x = a[7]
			return (
				(t[4] = b * s + x * i + m * h - d * c),
				(t[5] = m * s + x * c + d * i - b * h),
				(t[6] = d * s + x * h + b * c - m * i),
				(t[7] = x * s - b * i - m * c - d * h),
				t
			)
		},
		add: function(t, n, a) {
			return (
				(t[0] = n[0] + a[0]),
				(t[1] = n[1] + a[1]),
				(t[2] = n[2] + a[2]),
				(t[3] = n[3] + a[3]),
				(t[4] = n[4] + a[4]),
				(t[5] = n[5] + a[5]),
				(t[6] = n[6] + a[6]),
				(t[7] = n[7] + a[7]),
				t
			)
		},
		multiply: bn,
		mul: mn,
		scale: function(t, n, a) {
			return (
				(t[0] = n[0] * a),
				(t[1] = n[1] * a),
				(t[2] = n[2] * a),
				(t[3] = n[3] * a),
				(t[4] = n[4] * a),
				(t[5] = n[5] * a),
				(t[6] = n[6] * a),
				(t[7] = n[7] * a),
				t
			)
		},
		dot: dn,
		lerp: function(t, n, a, r) {
			var u = 1 - r
			return (
				dn(n, a) < 0 && (r = -r),
				(t[0] = n[0] * u + a[0] * r),
				(t[1] = n[1] * u + a[1] * r),
				(t[2] = n[2] * u + a[2] * r),
				(t[3] = n[3] * u + a[3] * r),
				(t[4] = n[4] * u + a[4] * r),
				(t[5] = n[5] * u + a[5] * r),
				(t[6] = n[6] * u + a[6] * r),
				(t[7] = n[7] * u + a[7] * r),
				t
			)
		},
		invert: function(t, n) {
			var a = yn(n)
			return (
				(t[0] = -n[0] / a),
				(t[1] = -n[1] / a),
				(t[2] = -n[2] / a),
				(t[3] = n[3] / a),
				(t[4] = -n[4] / a),
				(t[5] = -n[5] / a),
				(t[6] = -n[6] / a),
				(t[7] = n[7] / a),
				t
			)
		},
		conjugate: function(t, n) {
			return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), (t[4] = -n[4]), (t[5] = -n[5]), (t[6] = -n[6]), (t[7] = n[7]), t
		},
		length: xn,
		len: pn,
		squaredLength: yn,
		sqrLen: qn,
		normalize: function(t, n) {
			var a = yn(n)
			if (a > 0) {
				a = Math.sqrt(a)
				var r = n[0] / a,
					u = n[1] / a,
					e = n[2] / a,
					o = n[3] / a,
					i = n[4],
					c = n[5],
					h = n[6],
					s = n[7],
					M = r * i + u * c + e * h + o * s
				;(t[0] = r), (t[1] = u), (t[2] = e), (t[3] = o), (t[4] = (i - r * M) / a), (t[5] = (c - u * M) / a), (t[6] = (h - e * M) / a), (t[7] = (s - o * M) / a)
			}
			return t
		},
		str: function(t) {
			return 'quat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ')'
		},
		exactEquals: function(t, n) {
			return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
		},
		equals: function(t, a) {
			var r = t[0],
				u = t[1],
				e = t[2],
				o = t[3],
				i = t[4],
				c = t[5],
				h = t[6],
				s = t[7],
				M = a[0],
				f = a[1],
				l = a[2],
				v = a[3],
				b = a[4],
				m = a[5],
				d = a[6],
				x = a[7]
			return (
				Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) &&
				Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) &&
				Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) &&
				Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) &&
				Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) &&
				Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) &&
				Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) &&
				Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
			)
		}
	})
	function An() {
		var t = new a(2)
		return a != Float32Array && ((t[0] = 0), (t[1] = 0)), t
	}
	function wn(t, n, a) {
		return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), t
	}
	function Rn(t, n, a) {
		return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), t
	}
	function zn(t, n, a) {
		return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), t
	}
	function Pn(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1]
		return Math.hypot(a, r)
	}
	function jn(t, n) {
		var a = n[0] - t[0],
			r = n[1] - t[1]
		return a * a + r * r
	}
	function In(t) {
		var n = t[0],
			a = t[1]
		return Math.hypot(n, a)
	}
	function Sn(t) {
		var n = t[0],
			a = t[1]
		return n * n + a * a
	}
	var En = In,
		On = wn,
		Tn = Rn,
		Dn = zn,
		Fn = Pn,
		Ln = jn,
		Vn = Sn,
		Qn = (function() {
			var t = An()
			return function(n, a, r, u, e, o) {
				var i, c
				for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a)
					(t[0] = n[i]), (t[1] = n[i + 1]), e(t, t, o), (n[i] = t[0]), (n[i + 1] = t[1])
				return n
			}
		})(),
		Yn = Object.freeze({
			create: An,
			clone: function(t) {
				var n = new a(2)
				return (n[0] = t[0]), (n[1] = t[1]), n
			},
			fromValues: function(t, n) {
				var r = new a(2)
				return (r[0] = t), (r[1] = n), r
			},
			copy: function(t, n) {
				return (t[0] = n[0]), (t[1] = n[1]), t
			},
			set: function(t, n, a) {
				return (t[0] = n), (t[1] = a), t
			},
			add: function(t, n, a) {
				return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), t
			},
			subtract: wn,
			multiply: Rn,
			divide: zn,
			ceil: function(t, n) {
				return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t
			},
			floor: function(t, n) {
				return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t
			},
			min: function(t, n, a) {
				return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), t
			},
			max: function(t, n, a) {
				return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), t
			},
			round: function(t, n) {
				return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t
			},
			scale: function(t, n, a) {
				return (t[0] = n[0] * a), (t[1] = n[1] * a), t
			},
			scaleAndAdd: function(t, n, a, r) {
				return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), t
			},
			distance: Pn,
			squaredDistance: jn,
			length: In,
			squaredLength: Sn,
			negate: function(t, n) {
				return (t[0] = -n[0]), (t[1] = -n[1]), t
			},
			inverse: function(t, n) {
				return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t
			},
			normalize: function(t, n) {
				var a = n[0],
					r = n[1],
					u = a * a + r * r
				return u > 0 && (u = 1 / Math.sqrt(u)), (t[0] = n[0] * u), (t[1] = n[1] * u), t
			},
			dot: function(t, n) {
				return t[0] * n[0] + t[1] * n[1]
			},
			cross: function(t, n, a) {
				var r = n[0] * a[1] - n[1] * a[0]
				return (t[0] = t[1] = 0), (t[2] = r), t
			},
			lerp: function(t, n, a, r) {
				var u = n[0],
					e = n[1]
				return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), t
			},
			random: function(t, n) {
				n = n || 1
				var a = 2 * r() * Math.PI
				return (t[0] = Math.cos(a) * n), (t[1] = Math.sin(a) * n), t
			},
			transformMat2: function(t, n, a) {
				var r = n[0],
					u = n[1]
				return (t[0] = a[0] * r + a[2] * u), (t[1] = a[1] * r + a[3] * u), t
			},
			transformMat2d: function(t, n, a) {
				var r = n[0],
					u = n[1]
				return (t[0] = a[0] * r + a[2] * u + a[4]), (t[1] = a[1] * r + a[3] * u + a[5]), t
			},
			transformMat3: function(t, n, a) {
				var r = n[0],
					u = n[1]
				return (t[0] = a[0] * r + a[3] * u + a[6]), (t[1] = a[1] * r + a[4] * u + a[7]), t
			},
			transformMat4: function(t, n, a) {
				var r = n[0],
					u = n[1]
				return (t[0] = a[0] * r + a[4] * u + a[12]), (t[1] = a[1] * r + a[5] * u + a[13]), t
			},
			rotate: function(t, n, a, r) {
				var u = n[0] - a[0],
					e = n[1] - a[1],
					o = Math.sin(r),
					i = Math.cos(r)
				return (t[0] = u * i - e * o + a[0]), (t[1] = u * o + e * i + a[1]), t
			},
			angle: function(t, n) {
				var a = t[0],
					r = t[1],
					u = n[0],
					e = n[1],
					o = a * a + r * r
				o > 0 && (o = 1 / Math.sqrt(o))
				var i = u * u + e * e
				i > 0 && (i = 1 / Math.sqrt(i))
				var c = (a * u + r * e) * o * i
				return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c)
			},
			zero: function(t) {
				return (t[0] = 0), (t[1] = 0), t
			},
			str: function(t) {
				return 'vec2(' + t[0] + ', ' + t[1] + ')'
			},
			exactEquals: function(t, n) {
				return t[0] === n[0] && t[1] === n[1]
			},
			equals: function(t, a) {
				var r = t[0],
					u = t[1],
					e = a[0],
					o = a[1]
				return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
			},
			len: En,
			sub: On,
			mul: Tn,
			div: Dn,
			dist: Fn,
			sqrDist: Ln,
			sqrLen: Vn,
			forEach: Qn
		})
	;(t.glMatrix = e),
		(t.mat2 = s),
		(t.mat2d = b),
		(t.mat3 = q),
		(t.mat4 = E),
		(t.quat = sn),
		(t.quat2 = gn),
		(t.vec2 = Yn),
		(t.vec3 = $),
		(t.vec4 = Pt),
		Object.defineProperty(t, '__esModule', { value: !0 })
})

// ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
window.glMatrix = glMatrix
window.mat2 = glMatrix.mat2
window.mat2d = glMatrix.mat2d
window.mat3 = glMatrix.mat3
window.mat4 = glMatrix.mat4
window.quat = glMatrix.quat
window.quat2 = glMatrix.quat2
window.vec2 = glMatrix.vec2
window.vec3 = glMatrix.vec3
window.vec4 = glMatrix.vec4

CABLES.exportedPatch = {
	settings: { opExample: [], licence: 'cc0', isPublic: !0 },
	ops: [
		{
			opId: 'a466bc1f-06e9-4595-8849-bffb9fe22f99',
			objName: 'Ops.Sequence',
			id: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f',
			uiAttribs: { translate: { x: -828, y: 120 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'exe',
					links: [{ portIn: 'exe', portOut: 'trigger', objIn: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f', objOut: 'f467d54f-667b-4ae5-ac19-ab20da80b01b' }]
				},
				{ name: 'exe 0', value: 0 },
				{ name: 'exe 1', value: 0 },
				{ name: 'exe 2', value: 0 },
				{ name: 'exe 3', value: 0 },
				{ name: 'exe 4', value: 0 },
				{ name: 'exe 5', value: 0 },
				{ name: 'exe 6', value: 0 },
				{ name: 'exe 7', value: 0 },
				{ name: 'exe 8', value: null },
				{ name: 'exe 9', value: 0 },
				{ name: 'exe 10', value: 0 },
				{ name: 'exe 11', value: 0 },
				{ name: 'exe 12', value: 0 },
				{ name: 'exe 13', value: 0 },
				{ name: 'exe 14', value: 0 }
			],
			portsOut: [
				{ name: 'trigger 0', value: 0 },
				{ name: 'trigger 1', value: 0 },
				{ name: 'trigger 2' },
				{ name: 'trigger 3', value: 0 },
				{ name: 'trigger 4', value: 0 },
				{ name: 'trigger 5' },
				{ name: 'trigger 6', value: 0 },
				{ name: 'trigger 7', value: 0 },
				{ name: 'trigger 8', value: 0 },
				{ name: 'trigger 9', value: 0 },
				{ name: 'trigger 10', value: 0 },
				{ name: 'trigger 11' },
				{ name: 'trigger 12', value: 0 },
				{ name: 'trigger 13', value: 0 },
				{ name: 'trigger 14', value: 0 },
				{ name: 'trigger 15' }
			]
		},
		{
			opId: '19b441eb-9f63-4f35-ba08-b87841517c4d',
			objName: 'Ops.Gl.ClearColor',
			id: 'f467d54f-667b-4ae5-ac19-ab20da80b01b',
			uiAttribs: { translate: { x: -828, y: 40 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: 'f467d54f-667b-4ae5-ac19-ab20da80b01b', objOut: '6a1512aa-c3af-46a8-b629-a0815a2491da' }]
				},
				{ name: 'r', value: 0.6875 },
				{ name: 'g', value: 0.6875 },
				{ name: 'b', value: 0.6875 },
				{ name: 'a', value: 1 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: 'b0472a1d-db16-4ba6-8787-f300fbdc77bb',
			objName: 'Ops.Gl.MainLoop',
			id: '3f72ded4-ceb2-45bb-99ac-54342ac08f42',
			uiAttribs: { translate: { x: -828, y: -120 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'FPS Limit', value: 0 },
				{ name: 'Reduce FPS loading', value: !1 },
				{ name: 'Clear', value: !0 },
				{ name: 'ClearAlpha', value: !0 },
				{ name: 'Fullscreen Button', value: !1 },
				{ name: 'Active', value: !0 },
				{ name: 'Hires Displays', value: !1 }
			],
			portsOut: [{ name: 'trigger' }, { name: 'width', value: 667 }, { name: 'height', value: 700 }]
		},
		{
			opId: 'eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1',
			objName: 'Ops.Gl.Matrix.OrbitControls',
			id: '6a1512aa-c3af-46a8-b629-a0815a2491da',
			uiAttribs: { translate: { x: -828, y: -40 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '6a1512aa-c3af-46a8-b629-a0815a2491da', objOut: '3f72ded4-ceb2-45bb-99ac-54342ac08f42' }]
				},
				{ name: 'min distance', value: -999999 },
				{ name: 'max distance', value: 99999 },
				{ name: 'min rot y', value: 0 },
				{ name: 'max rot y', value: 0 },
				{ name: 'initial radius', value: 20 },
				{ name: 'initial axis y', value: 0.25 },
				{ name: 'initial axis x', value: 0.76 },
				{ name: 'mul', value: 1 },
				{ name: 'Smoothness', value: 0.05 },
				{ name: 'Speed X', value: 2 },
				{ name: 'Speed Y', value: 2 },
				{ name: 'Active', value: !0 },
				{ name: 'Allow Panning', value: !0 },
				{ name: 'Allow Zooming', value: !0 },
				{ name: 'Allow Rotation', value: !0 },
				{ name: 'restricted', value: !1 },
				{ name: 'Pointerlock', value: !1 },
				{ name: 'Reset', value: 0 }
			],
			portsOut: [
				{ name: 'trigger' },
				{ name: 'radius', value: 0.009200000000004663 },
				{ name: 'Rot X', value: 299.72687545796526 },
				{ name: 'Rot Y', value: 147.24000000000004 }
			]
		},
		{
			opId: '6a5a6674-9247-47ea-b9e1-0438ca07529a',
			objName: 'Ops.Array.SortArrayObjectsByKey',
			id: 'ca621923-da3d-4c56-bcf6-70eb51a2f7db',
			uiAttribs: { translate: { x: -1200, y: 420 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array to sort',
					links: [{ portIn: 'Array to sort', portOut: 'result', objIn: 'ca621923-da3d-4c56-bcf6-70eb51a2f7db', objOut: '0075cb84-6910-4024-9108-329fd43df4e6' }]
				},
				{ name: 'Sort property', value: 'MSHAN07' },
				{ name: 'Sorting mode index', value: 0 },
				{ name: 'Sorting mode', value: 'Sort ascending' }
			],
			portsOut: [{ name: 'Sorted array' }]
		},
		{
			opId: 'e068629a-7963-48b0-853f-a89348d03654',
			objName: 'Ops.Array.GetValuesFromArrayOfObjects',
			id: 'f65a9db4-d21d-4dfb-ac59-88420e2081b3',
			uiAttribs: { translate: { x: -1200, y: 500 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'Sorted array', objIn: 'f65a9db4-d21d-4dfb-ac59-88420e2081b3', objOut: 'ca621923-da3d-4c56-bcf6-70eb51a2f7db' }]
				},
				{ name: 'Key', value: 'Longitude' },
				{ name: 'Numbers Only', value: !1 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: 'e068629a-7963-48b0-853f-a89348d03654',
			objName: 'Ops.Array.GetValuesFromArrayOfObjects',
			id: '34e4ba06-b4a2-4ea9-9964-bd99bf293340',
			uiAttribs: { translate: { x: -984, y: 500 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'Sorted array', objIn: '34e4ba06-b4a2-4ea9-9964-bd99bf293340', objOut: 'ca621923-da3d-4c56-bcf6-70eb51a2f7db' }]
				},
				{ name: 'Key', value: 'MSHAN07_SE' },
				{ name: 'Numbers Only', value: !1 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: 'e068629a-7963-48b0-853f-a89348d03654',
			objName: 'Ops.Array.GetValuesFromArrayOfObjects',
			id: '5bb0582d-db9d-42c5-b510-36609c4f7a84',
			uiAttribs: { translate: { x: -1416, y: 500 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'Sorted array', objIn: '5bb0582d-db9d-42c5-b510-36609c4f7a84', objOut: 'ca621923-da3d-4c56-bcf6-70eb51a2f7db' }]
				},
				{ name: 'Key', value: 'Latitude' },
				{ name: 'Numbers Only', value: !1 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: '0db296db-e4a7-4356-9593-858f7e1bc7f3',
			objName: 'Ops.Array.ArrayPack2',
			id: 'cd1b0a34-a5af-49a1-92fe-5180694fc956',
			uiAttribs: { translate: { x: -1428, y: 580 }, subPatch: 0, notWorkingMsg: null, error: null },
			portsIn: [
				{
					name: 'Trigger in',
					links: [{ portIn: 'Trigger in', portOut: 'trigger 2', objIn: 'cd1b0a34-a5af-49a1-92fe-5180694fc956', objOut: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f' }]
				},
				{
					name: 'Array 1',
					links: [{ portIn: 'Array 1', portOut: 'Result', objIn: 'cd1b0a34-a5af-49a1-92fe-5180694fc956', objOut: '5bb0582d-db9d-42c5-b510-36609c4f7a84' }]
				},
				{
					name: 'Array 2',
					links: [{ portIn: 'Array 2', portOut: 'Result', objIn: 'cd1b0a34-a5af-49a1-92fe-5180694fc956', objOut: 'f65a9db4-d21d-4dfb-ac59-88420e2081b3' }]
				}
			],
			portsOut: [{ name: 'Trigger out', value: 0 }, { name: 'Array out' }, { name: 'Array length', value: 2788 }]
		},
		{
			opId: '96e77c88-58b8-4948-bd61-c95d604a2607',
			objName: 'Ops.Math.MercatorCoordsArray',
			id: 'c34de71c-4309-490c-849b-ab218404cfab',
			uiAttribs: { translate: { x: -1416, y: 660 }, subPatch: 0, notWorkingMsg: null, comment: 'convert array to Mercator' },
			portsIn: [
				{
					name: 'LatLon Array',
					links: [
						{ portIn: 'LatLon Array', portOut: 'Array out', objIn: 'c34de71c-4309-490c-849b-ab218404cfab', objOut: 'cd1b0a34-a5af-49a1-92fe-5180694fc956' }
					]
				},
				{ name: 'MapWidth', value: 1e4 },
				{
					name: 'Center Lat',
					links: [{ portIn: 'Center Lat', portOut: 'Average X', objIn: 'c34de71c-4309-490c-849b-ab218404cfab', objOut: '9ba1b241-7827-4aad-a080-143ce87d68d7' }]
				},
				{
					name: 'Center Lon',
					links: [{ portIn: 'Center Lon', portOut: 'Average Y', objIn: 'c34de71c-4309-490c-849b-ab218404cfab', objOut: '9ba1b241-7827-4aad-a080-143ce87d68d7' }]
				}
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: 'a01c344b-4129-4b01-9c8f-36cefe86d7cc',
			objName: 'Ops.Array.ArrayMultiply',
			id: '59ea4e75-8bbd-41d7-8c7c-c613ae114911',
			uiAttribs: { translate: { x: -984, y: 560 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'In',
					links: [{ portIn: 'In', portOut: 'Result', objIn: '59ea4e75-8bbd-41d7-8c7c-c613ae114911', objOut: '34e4ba06-b4a2-4ea9-9964-bd99bf293340' }]
				},
				{ name: 'Value', value: 1e3 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: '9854162e-d415-4300-a47b-173772b454e9',
			objName: 'Ops.Array.Array2To3',
			id: '16909d63-b37c-42a6-82e7-e6ec4f78155b',
			uiAttribs: {
				translate: { x: -1416, y: 740 },
				subPatch: 0,
				notWorkingMsg: null,
				comment: 'insert zeroes every third item \nso that PointCloudFromArray op can work\nnow we have x,y,z,x,y,z'
			},
			portsIn: [
				{
					name: 'Array2x',
					links: [{ portIn: 'Array2x', portOut: 'Result', objIn: '16909d63-b37c-42a6-82e7-e6ec4f78155b', objOut: 'c34de71c-4309-490c-849b-ab218404cfab' }]
				}
			],
			portsOut: [{ name: 'Array3x' }, { name: 'Total points', value: 1394 }, { name: 'Array length', value: 4182 }]
		},
		{
			opId: 'fa671f66-6957-41e6-ac35-d615b7c29285',
			objName: 'Ops.Array.ArrayUnpack3',
			id: '455c1825-a9de-4e52-a4af-49fd93903835',
			uiAttribs: { translate: { x: -1416, y: 820 }, subPatch: 0, notWorkingMsg: null, error: null },
			portsIn: [
				{
					name: 'Array in xyz',
					links: [{ portIn: 'Array in xyz', portOut: 'Array3x', objIn: '455c1825-a9de-4e52-a4af-49fd93903835', objOut: '16909d63-b37c-42a6-82e7-e6ec4f78155b' }]
				}
			],
			portsOut: [{ name: 'Array 1 out' }, { name: 'Array 2 out' }, { name: 'Array 3 out' }, { name: 'Array lengths', value: 1394 }]
		},
		{
			opId: '2bcf32fe-3cbd-48fd-825a-61255bebda9b',
			objName: 'Ops.Array.ArrayPack3',
			id: '335279f8-2337-4cb6-9561-739a570d8fd6',
			uiAttribs: {
				translate: { x: -1428, y: 900 },
				subPatch: 0,
				notWorkingMsg: null,
				comment: 'Placing your data into the 3rd inlet changes the height of each point',
				error: null
			},
			portsIn: [
				{
					name: 'Trigger in',
					links: [
						{ portIn: 'Trigger in', portOut: 'Trigger out', objIn: '335279f8-2337-4cb6-9561-739a570d8fd6', objOut: '07fe65fa-2609-49fc-b9da-992aa1a7e1ad' }
					]
				},
				{
					name: 'Array 1',
					links: [{ portIn: 'Array 1', portOut: 'Array 1 out', objIn: '335279f8-2337-4cb6-9561-739a570d8fd6', objOut: '455c1825-a9de-4e52-a4af-49fd93903835' }]
				},
				{
					name: 'Array 2',
					links: [{ portIn: 'Array 2', portOut: 'Array 2 out', objIn: '335279f8-2337-4cb6-9561-739a570d8fd6', objOut: '455c1825-a9de-4e52-a4af-49fd93903835' }]
				},
				{
					name: 'Array 3',
					links: [{ portIn: 'Array 3', portOut: 'Result', objIn: '335279f8-2337-4cb6-9561-739a570d8fd6', objOut: '59ea4e75-8bbd-41d7-8c7c-c613ae114911' }]
				}
			],
			portsOut: [{ name: 'Trigger out', value: 0 }, { name: 'Array out' }, { name: 'Num Points', value: 1394 }, { name: 'Array length', value: 4182 }]
		},
		{
			opId: '0a6d9c6f-6459-45ca-88ad-268a1f7304db',
			objName: 'Ops.Gl.Meshes.PointCloudFromArray',
			id: '07fe65fa-2609-49fc-b9da-992aa1a7e1ad',
			uiAttribs: {
				translate: { x: -768, y: 760 },
				subPatch: 0,
				notWorkingMsg: 'this op can not do anything without at least connecting those ports: ARRAY',
				error: null,
				working: !1
			},
			portsIn: [
				{
					name: 'exe',
					links: [{ portIn: 'exe', portOut: 'trigger', objIn: '07fe65fa-2609-49fc-b9da-992aa1a7e1ad', objOut: '88a34b9e-5e55-458b-bd81-ae93ba3be5de' }]
				},
				{ name: 'Array', value: null },
				{ name: 'Num Points', value: 0 },
				{ name: 'Scramble Texcoords', value: !0 },
				{ name: 'Seed', value: 0 },
				{ name: 'Coordinates', value: 0 },
				{ name: 'Vertex Colors', value: 0 }
			],
			portsOut: [{ name: 'Trigger out' }, { name: 'Geometry' }]
		},
		{
			opId: 'e4432ebd-d67c-46e2-b302-619d4f97daab',
			objName: 'Ops.Gl.ShaderEffects.PerlinAreaDeform_v3',
			id: '0c105712-679f-44e5-8aba-6cbcfc1330f8',
			uiAttribs: { translate: { x: -768, y: 400 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '0c105712-679f-44e5-8aba-6cbcfc1330f8', objOut: '362bf7e1-d1ba-4526-9e74-c0f2ab00418a' }]
				},
				{ name: 'Scale', value: 0.81 },
				{ name: 'Size', value: 1.24 },
				{ name: 'Strength', value: 3.01 },
				{ name: 'Calc Normals', value: !0 },
				{ name: 'Falloff', value: 0.3 },
				{ name: 'Output index', value: 1 },
				{ name: 'Output', value: 'Mul Normal' },
				{
					name: 'x',
					links: [{ portIn: 'x', portOut: 'result', objIn: '0c105712-679f-44e5-8aba-6cbcfc1330f8', objOut: '697704fb-875b-4304-81e5-948850521005' }]
				},
				{ name: 'y', value: 0 },
				{ name: 'z', value: 0 },
				{
					name: 'Scroll X',
					links: [{ portIn: 'Scroll X', portOut: 'Time', objIn: '0c105712-679f-44e5-8aba-6cbcfc1330f8', objOut: '51f08cb3-f875-41b2-9eab-e860116d132d' }]
				},
				{ name: 'Scroll Y', value: 0 },
				{ name: 'Scroll Z', value: 0 },
				{ name: 'WorldSpace', value: !1 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '0badf312-6ac5-49e8-af06-645ffeda14ac',
			uiAttribs: { translate: { x: -768, y: 600 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '0badf312-6ac5-49e8-af06-645ffeda14ac', objOut: '3a16df28-7069-4b91-9839-620f1a58529c' }]
				},
				{ name: 'posX', value: 0 },
				{ name: 'posY', value: -0.27595950950379866 },
				{ name: 'posZ', value: 0 },
				{ name: 'scale', value: 7.1 },
				{ name: 'rotX', value: 0 },
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '0ea5fb62-94e7-4a1b-928f-bdcab373c022',
			objName: 'Ops.Array.InfoArray2',
			id: '9ba1b241-7827-4aad-a080-143ce87d68d7',
			uiAttribs: { translate: { x: -1572, y: 520 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'Array out', objIn: '9ba1b241-7827-4aad-a080-143ce87d68d7', objOut: '602c73ab-cc84-4738-a461-c26ebdc6fc0a' }]
				}
			],
			portsOut: [
				{ name: 'Num Items', value: 1394 },
				{ name: 'Min X', value: -7.400236853 },
				{ name: 'Max X', value: 1.669247159 },
				{ name: 'Average X' },
				{ name: 'Min Y', value: 49.97565281 },
				{ name: 'Max Y', value: 60.81634001 },
				{ name: 'Average Y' }
			]
		},
		{
			opId: 'e068629a-7963-48b0-853f-a89348d03654',
			objName: 'Ops.Array.GetValuesFromArrayOfObjects',
			id: '13bbcf65-9f0e-4753-b56f-fdd2a37b6f80',
			uiAttribs: { translate: { x: -1560, y: 340 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'result', objIn: '13bbcf65-9f0e-4753-b56f-fdd2a37b6f80', objOut: '6275de5d-8103-46d1-8b0c-f71d9da41b23' }]
				},
				{ name: 'Key', value: 'Longitude' },
				{ name: 'Numbers Only', value: !1 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: '2e76c1f8-19ac-4e9d-8db8-58b2f9fbc1d3',
			objName: 'Ops.Json.CsvArray',
			id: '6275de5d-8103-46d1-8b0c-f71d9da41b23',
			uiAttribs: { translate: { x: -1536, y: 220 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'file',
					value: 'assets/cables/5e10a973ae264b07c4c70698_CS_topsoil_microbes_coord_world_-_CS_topsoil_microbes_coord_world_2.csv.json',
					display: 'file'
				}
			],
			portsOut: [{ name: 'result' }, { name: 'num items', value: 1394 }]
		},
		{
			opId: '0db296db-e4a7-4356-9593-858f7e1bc7f3',
			objName: 'Ops.Array.ArrayPack2',
			id: '602c73ab-cc84-4738-a461-c26ebdc6fc0a',
			uiAttribs: {
				translate: { x: -1584, y: 440 },
				subPatch: 0,
				notWorkingMsg: null,
				error: null,
				comment: 'we feed in the latitude and longitude arrays\npack to x,y'
			},
			portsIn: [
				{
					name: 'Trigger in',
					links: [{ portIn: 'Trigger in', portOut: 'trigger', objIn: '602c73ab-cc84-4738-a461-c26ebdc6fc0a', objOut: 'f467d54f-667b-4ae5-ac19-ab20da80b01b' }]
				},
				{
					name: 'Array 1',
					links: [{ portIn: 'Array 1', portOut: 'Result', objIn: '602c73ab-cc84-4738-a461-c26ebdc6fc0a', objOut: '8907fee7-d965-4fe7-8ced-454fd362bc47' }]
				},
				{
					name: 'Array 2',
					links: [{ portIn: 'Array 2', portOut: 'Result', objIn: '602c73ab-cc84-4738-a461-c26ebdc6fc0a', objOut: '13bbcf65-9f0e-4753-b56f-fdd2a37b6f80' }]
				}
			],
			portsOut: [{ name: 'Trigger out', value: 0 }, { name: 'Array out' }, { name: 'Array length', value: 2788 }]
		},
		{
			opId: 'e068629a-7963-48b0-853f-a89348d03654',
			objName: 'Ops.Array.GetValuesFromArrayOfObjects',
			id: '8907fee7-d965-4fe7-8ced-454fd362bc47',
			uiAttribs: { translate: { x: -1572, y: 280 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'result', objIn: '8907fee7-d965-4fe7-8ced-454fd362bc47', objOut: '6275de5d-8103-46d1-8b0c-f71d9da41b23' }]
				},
				{ name: 'Key', value: 'Latitude' },
				{ name: 'Numbers Only', value: !1 }
			],
			portsOut: [{ name: 'Result' }]
		},
		{
			opId: '2e76c1f8-19ac-4e9d-8db8-58b2f9fbc1d3',
			objName: 'Ops.Json.CsvArray',
			id: '0075cb84-6910-4024-9108-329fd43df4e6',
			uiAttribs: { translate: { x: -1200, y: 340 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'file',
					value: 'assets/cables/5e10a973ae264b07c4c70698_CS_topsoil_microbes_coord_world_-_CS_topsoil_microbes_coord_world_2.csv.json',
					display: 'file'
				}
			],
			portsOut: [{ name: 'result' }, { name: 'num items', value: 1394 }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '6502ce39-21c7-4463-8ccc-46c669244616',
			uiAttribs: { translate: { x: -552, y: 460 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'render', value: null },
				{
					name: 'posX',
					links: [{ portIn: 'posX', portOut: 'result', objIn: '6502ce39-21c7-4463-8ccc-46c669244616', objOut: '697704fb-875b-4304-81e5-948850521005' }]
				},
				{ name: 'posY', value: 0.15 },
				{ name: 'posZ', value: -3.08 },
				{ name: 'scale', value: 2.48 },
				{ name: 'rotX', value: 17 },
				{ name: 'rotY', value: 2.29 },
				{ name: 'rotZ', value: 1171.81 }
			],
			portsOut: [{ name: 'trigger', value: 0 }]
		},
		{
			opId: '5b244b6e-c505-4743-b2cc-8119ef720028',
			objName: 'Ops.Anim.SimpleAnim',
			id: '697704fb-875b-4304-81e5-948850521005',
			uiAttribs: { translate: { x: -552, y: 340 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'exe', value: 0 },
				{ name: 'reset', value: 0 },
				{ name: 'rewind', value: 0 },
				{ name: 'start', value: 4 },
				{ name: 'end', value: -4 },
				{ name: 'duration', value: 9.15 },
				{ name: 'loop', value: !0 },
				{ name: 'Wait for Reset', value: !1 },
				{ name: 'easing', value: 'Sin In Out' }
			],
			portsOut: [{ name: 'Next', value: 0 }, { name: 'result' }, { name: 'finished', value: !1 }, { name: 'Finished Trigger', value: 0 }]
		},
		{
			opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
			objName: 'Ops.Anim.Timer_v2',
			id: '51f08cb3-f875-41b2-9eab-e860116d132d',
			uiAttribs: { translate: { x: -648, y: 320 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'Speed', value: 0.03 },
				{ name: 'Play', value: !0 },
				{ name: 'Reset', value: 0 },
				{ name: 'Sync to timeline', value: !1 }
			],
			portsOut: [{ name: 'Time' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '3a16df28-7069-4b91-9839-620f1a58529c',
			uiAttribs: { translate: { x: -768, y: 520 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '3a16df28-7069-4b91-9839-620f1a58529c', objOut: '0c105712-679f-44e5-8aba-6cbcfc1330f8' }]
				},
				{ name: 'posX', value: 0 },
				{ name: 'posY', value: 0 },
				{ name: 'posZ', value: 0 },
				{ name: 'scale', value: 1 },
				{
					name: 'rotX',
					links: [{ portIn: 'rotX', portOut: 'Time', objIn: '3a16df28-7069-4b91-9839-620f1a58529c', objOut: '8d569c17-7abe-493c-8b3d-2824a71531ff' }]
				},
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
			objName: 'Ops.Anim.Timer_v2',
			id: '8d569c17-7abe-493c-8b3d-2824a71531ff',
			uiAttribs: { translate: { x: -708, y: 440 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'Speed', value: 0.5 },
				{ name: 'Play', value: !0 },
				{ name: 'Reset', value: 0 },
				{ name: 'Sync to timeline', value: !1 }
			],
			portsOut: [{ name: 'Time' }]
		},
		{
			opId: '7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad',
			objName: 'Ops.Gl.Shader.MatCapMaterialNew',
			id: '362bf7e1-d1ba-4526-9e74-c0f2ab00418a',
			uiAttribs: { translate: { x: -768, y: 280 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger 5', objIn: '362bf7e1-d1ba-4526-9e74-c0f2ab00418a', objOut: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f' }]
				},
				{
					name: 'MatCap',
					links: [{ portIn: 'MatCap', portOut: 'texture', objIn: '362bf7e1-d1ba-4526-9e74-c0f2ab00418a', objOut: 'c2d1860b-805e-40e2-8c77-c1935c86855f' }]
				},
				{ name: 'Diffuse', value: 0 },
				{ name: 'Normal', value: 0 },
				{ name: 'Specular', value: 0 },
				{ name: 'Specular MatCap', value: 0 },
				{ name: 'AO Texture', value: 0 },
				{ name: 'Opacity Texture', value: 0 },
				{ name: 'r', value: 0.859375 },
				{ name: 'g', value: 0.859375 },
				{ name: 'b', value: 0.859375 },
				{ name: 'Opacity', value: '1' },
				{ name: 'AO Intensity', value: 1 },
				{ name: 'Repeat X', value: '4.81' },
				{ name: 'Repeat Y', value: 1 },
				{ name: 'Offset X', value: 0 },
				{ name: 'Offset Y', value: 0 },
				{ name: 'calc normal tangents', value: !0 },
				{ name: 'projectCoords index', value: 0 },
				{ name: 'projectCoords', value: 'no' },
				{ name: 'Screen Space Normals', value: !1 },
				{ name: 'Alpha Mask Source index', value: 0 },
				{ name: 'Alpha Mask Source', value: 'Luminance' },
				{ name: 'Opacity TexCoords Transform', value: !0 },
				{ name: 'Discard Transparent Pixels', value: !1 }
			],
			portsOut: [{ name: 'trigger' }, { name: 'Shader' }]
		},
		{
			opId: '466394d4-6c1a-4e5d-a057-0063ab0f096a',
			objName: 'Ops.Gl.Texture',
			id: 'c2d1860b-805e-40e2-8c77-c1935c86855f',
			uiAttribs: { translate: { x: -720, y: 220 }, subPatch: 0, notWorkingMsg: null, error: null, hint: null, warning: null },
			portsIn: [
				{ name: 'file', value: 'assets/cables/5e10a973ae264b07c4c70698_Frankia_Texture_1.jpg', display: 'file' },
				{ name: 'filter index', value: 0 },
				{ name: 'filter', value: 'linear' },
				{ name: 'wrap index', value: 2 },
				{ name: 'wrap', value: 'repeat' },
				{ name: 'flip', value: !1 },
				{ name: 'unpackPreMultipliedAlpha', value: !1 },
				{ name: 'Anisotropic index', value: 0 },
				{ name: 'Anisotropic', value: '0' }
			],
			portsOut: [
				{ name: 'texture' },
				{ name: 'width', value: 512 },
				{ name: 'height', value: 512 },
				{ name: 'loading', value: !0 },
				{ name: 'Aspect Ratio', value: 1 }
			]
		},
		{
			opId: '450b4d68-2278-4d9f-9849-0abdfa37ef69',
			objName: 'Ops.Gl.Meshes.Sphere_v2',
			id: '88a34b9e-5e55-458b-bd81-ae93ba3be5de',
			uiAttribs: { translate: { x: -768, y: 680 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '88a34b9e-5e55-458b-bd81-ae93ba3be5de', objOut: '0badf312-6ac5-49e8-af06-645ffeda14ac' }]
				},
				{ name: 'radius', value: 1 },
				{ name: 'stacks', value: 32 },
				{ name: 'slices', value: 32 },
				{ name: 'Filloffset', value: 1 },
				{ name: 'Render', value: !0 }
			],
			portsOut: [{ name: 'trigger' }, { name: 'geometry' }]
		},
		{
			opId: '450b4d68-2278-4d9f-9849-0abdfa37ef69',
			objName: 'Ops.Gl.Meshes.Sphere_v2',
			id: '63b6350e-5172-4df2-b132-e5190c110912',
			uiAttribs: { translate: { x: -408, y: 820 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '63b6350e-5172-4df2-b132-e5190c110912', objOut: 'ca9a8184-441e-4980-8bbb-e389e2e6cc42' }]
				},
				{ name: 'radius', value: 12.95 },
				{ name: 'stacks', value: 32 },
				{ name: 'slices', value: 32 },
				{ name: 'Filloffset', value: 1 },
				{ name: 'Render', value: !0 }
			],
			portsOut: [{ name: 'trigger', value: 0 }, { name: 'geometry' }]
		},
		{
			opId: '3f7db864-7409-418f-8c03-b2c966c050b3',
			objName: 'Ops.Array.IteratorArray3',
			id: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91',
			uiAttribs: { translate: { x: -408, y: 360 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Execute',
					links: [{ portIn: 'Execute', portOut: 'trigger', objIn: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91', objOut: 'b115e560-15ae-4d9c-b006-bf088d3638bc' }]
				},
				{
					name: 'Array',
					links: [{ portIn: 'Array', portOut: 'Array out', objIn: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91', objOut: '335279f8-2337-4cb6-9561-739a570d8fd6' }]
				},
				{ name: 'Step', value: 0 }
			],
			portsOut: [{ name: 'Trigger' }, { name: 'Index', value: 1393 }, { name: 'Value 1' }, { name: 'Value 2' }, { name: 'Value 3' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: 'b115e560-15ae-4d9c-b006-bf088d3638bc',
			uiAttribs: { translate: { x: -408, y: 280 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger 15', objIn: 'b115e560-15ae-4d9c-b006-bf088d3638bc', objOut: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f' }]
				},
				{ name: 'posX', value: 0 },
				{ name: 'posY', value: 0 },
				{ name: 'posZ', value: -1.1519185319132972 },
				{ name: 'scale', value: '0.031' },
				{
					name: 'rotX',
					links: [{ portIn: 'rotX', portOut: 'Time', objIn: 'b115e560-15ae-4d9c-b006-bf088d3638bc', objOut: '979de42a-70b8-4fe0-b2cc-02fcd2065505' }]
				},
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '9c0a03ff-4131-49c2-8bd7-5efec446bc93',
			uiAttribs: { translate: { x: -408, y: 500 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'Trigger', objIn: '9c0a03ff-4131-49c2-8bd7-5efec446bc93', objOut: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91' }]
				},
				{
					name: 'posX',
					links: [{ portIn: 'posX', portOut: 'Value 1', objIn: '9c0a03ff-4131-49c2-8bd7-5efec446bc93', objOut: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91' }]
				},
				{
					name: 'posY',
					links: [{ portIn: 'posY', portOut: 'Value 2', objIn: '9c0a03ff-4131-49c2-8bd7-5efec446bc93', objOut: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91' }]
				},
				{
					name: 'posZ',
					links: [{ portIn: 'posZ', portOut: 'Value 3', objIn: '9c0a03ff-4131-49c2-8bd7-5efec446bc93', objOut: 'ad6d9ca1-c140-4c28-9445-ceb3531e5e91' }]
				},
				{ name: 'scale', value: '0.1' },
				{ name: 'rotX', value: 0 },
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad',
			objName: 'Ops.Gl.Shader.MatCapMaterialNew',
			id: '9954a339-90c0-4ef6-b495-17612a40332c',
			uiAttribs: { translate: { x: -408, y: 620 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '9954a339-90c0-4ef6-b495-17612a40332c', objOut: '9c0a03ff-4131-49c2-8bd7-5efec446bc93' }]
				},
				{
					name: 'MatCap',
					links: [{ portIn: 'MatCap', portOut: 'texture', objIn: '9954a339-90c0-4ef6-b495-17612a40332c', objOut: 'ea9c54ec-091d-43bf-a96c-0fa461516125' }]
				},
				{ name: 'Diffuse', value: 0 },
				{ name: 'Normal', value: 0 },
				{ name: 'Specular', value: 0 },
				{ name: 'Specular MatCap', value: 0 },
				{ name: 'AO Texture', value: 0 },
				{ name: 'Opacity Texture', value: 0 },
				{ name: 'r', value: 1 },
				{ name: 'g', value: 1 },
				{ name: 'b', value: 1 },
				{ name: 'Opacity', value: 1 },
				{ name: 'AO Intensity', value: 1 },
				{ name: 'Repeat X', value: 1 },
				{ name: 'Repeat Y', value: 1 },
				{ name: 'Offset X', value: 0 },
				{ name: 'Offset Y', value: 0 },
				{ name: 'calc normal tangents', value: !0 },
				{ name: 'projectCoords index', value: 0 },
				{ name: 'projectCoords', value: 'no' },
				{ name: 'Screen Space Normals', value: !1 },
				{ name: 'Alpha Mask Source index', value: 0 },
				{ name: 'Alpha Mask Source', value: 'Luminance' },
				{ name: 'Opacity TexCoords Transform', value: !1 },
				{ name: 'Discard Transparent Pixels', value: !1 }
			],
			portsOut: [{ name: 'trigger' }, { name: 'Shader' }]
		},
		{
			opId: '466394d4-6c1a-4e5d-a057-0063ab0f096a',
			objName: 'Ops.Gl.Texture',
			id: 'ea9c54ec-091d-43bf-a96c-0fa461516125',
			uiAttribs: { translate: { x: -360, y: 560 }, subPatch: 0, notWorkingMsg: null, error: null, hint: null, warning: null },
			portsIn: [
				{ name: 'file', value: 'assets/cables/5e10a973ae264b07c4c70698_Frankia_Texture_2.jpg', display: 'file' },
				{ name: 'filter index', value: 0 },
				{ name: 'filter', value: 'mipmap' },
				{ name: 'wrap index', value: 2 },
				{ name: 'wrap', value: 'repeat' },
				{ name: 'flip', value: !1 },
				{ name: 'unpackPreMultipliedAlpha', value: !1 },
				{ name: 'Anisotropic index', value: 0 },
				{ name: 'Anisotropic', value: 0 }
			],
			portsOut: [
				{ name: 'texture' },
				{ name: 'width', value: 512 },
				{ name: 'height', value: 512 },
				{ name: 'loading', value: !0 },
				{ name: 'Aspect Ratio', value: 1 }
			]
		},
		{
			opId: '2390f6b3-2122-412e-8c8d-5c2f574e8bd1',
			objName: 'Ops.Gl.Meshes.TextMesh_v2',
			id: 'aea925b8-e291-4cf7-a736-2d6086f6bf11',
			uiAttribs: { translate: { x: -48, y: 440 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Render',
					links: [{ portIn: 'Render', portOut: 'trigger', objIn: 'aea925b8-e291-4cf7-a736-2d6086f6bf11', objOut: '923fb17c-4e2c-4696-8c51-3aa2a3854344' }]
				},
				{ name: 'Text', value: 'Longitude' },
				{ name: 'Scale', value: 1 },
				{ name: 'Font', value: 'Lab' },
				{ name: 'align index', value: 1 },
				{ name: 'align', value: 'center' },
				{ name: 'vertical align index', value: 1 },
				{ name: 'vertical align', value: 'Middle' },
				{ name: 'Line Height', value: 1 },
				{ name: 'Letter Spacing', value: 0 },
				{ name: 'Texture Color', value: 0 },
				{ name: 'Texture Mask', value: 0 },
				{ name: 'r', value: 0 },
				{ name: 'g', value: 0 },
				{ name: 'b', value: 0 },
				{ name: 'a', value: 1 }
			],
			portsOut: [{ name: 'Next', value: 0 }, { name: 'texture' }, { name: 'Total Lines', value: 1 }, { name: 'Font Available', value: !0 }]
		},
		{
			opId: '2390f6b3-2122-412e-8c8d-5c2f574e8bd1',
			objName: 'Ops.Gl.Meshes.TextMesh_v2',
			id: 'de6f9cda-48e3-4591-ac29-84cc9b18dd52',
			uiAttribs: { translate: { x: -48, y: 600 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Render',
					links: [{ portIn: 'Render', portOut: 'trigger', objIn: 'de6f9cda-48e3-4591-ac29-84cc9b18dd52', objOut: '79b06767-4ffe-4edd-942e-fe3933ed2a12' }]
				},
				{ name: 'Text', value: 'Latitude' },
				{ name: 'Scale', value: 1 },
				{ name: 'Font', value: 'Lab' },
				{ name: 'align index', value: 1 },
				{ name: 'align', value: 'center' },
				{ name: 'vertical align index', value: 1 },
				{ name: 'vertical align', value: 'Middle' },
				{ name: 'Line Height', value: 1 },
				{ name: 'Letter Spacing', value: 0 },
				{ name: 'Texture Color', value: 0 },
				{ name: 'Texture Mask', value: 0 },
				{ name: 'r', value: 0 },
				{ name: 'g', value: 0 },
				{ name: 'b', value: 0 },
				{ name: 'a', value: 1 }
			],
			portsOut: [{ name: 'Next', value: 0 }, { name: 'texture' }, { name: 'Total Lines', value: 1 }, { name: 'Font Available', value: !0 }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '923fb17c-4e2c-4696-8c51-3aa2a3854344',
			uiAttribs: { translate: { x: -48, y: 360 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '923fb17c-4e2c-4696-8c51-3aa2a3854344', objOut: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30' }]
				},
				{ name: 'posX', value: -0.4070778727689017 },
				{ name: 'posY', value: -3.61999738041638 },
				{ name: 'posZ', value: 0 },
				{ name: 'scale', value: 1.5 },
				{ name: 'rotX', value: 180 },
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 90 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '79b06767-4ffe-4edd-942e-fe3933ed2a12',
			uiAttribs: { translate: { x: -48, y: 520 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '79b06767-4ffe-4edd-942e-fe3933ed2a12', objOut: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30' }]
				},
				{ name: 'posX', value: -2.653047310041982 },
				{ name: 'posY', value: '0' },
				{ name: 'posZ', value: 0 },
				{ name: 'scale', value: 1.5 },
				{ name: 'rotX', value: 0 },
				{ name: 'rotY', value: 180 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '2390f6b3-2122-412e-8c8d-5c2f574e8bd1',
			objName: 'Ops.Gl.Meshes.TextMesh_v2',
			id: 'a06aca12-2df8-4d84-ba33-b8b9f918dd34',
			uiAttribs: { translate: { x: -48, y: 760 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'Render',
					links: [{ portIn: 'Render', portOut: 'trigger', objIn: 'a06aca12-2df8-4d84-ba33-b8b9f918dd34', objOut: '0a665d14-09b1-4032-83e0-4456b9eabd6b' }]
				},
				{ name: 'Text', value: 'Shannon Diversity Index' },
				{ name: 'Scale', value: 1 },
				{ name: 'Font', value: 'Lab' },
				{ name: 'align index', value: 1 },
				{ name: 'align', value: 'center' },
				{ name: 'vertical align index', value: 1 },
				{ name: 'vertical align', value: 'Middle' },
				{ name: 'Line Height', value: 1 },
				{ name: 'Letter Spacing', value: 0 },
				{ name: 'Texture Color', value: 0 },
				{ name: 'Texture Mask', value: 0 },
				{ name: 'r', value: 0 },
				{ name: 'g', value: 0 },
				{ name: 'b', value: 0 },
				{ name: 'a', value: 1 }
			],
			portsOut: [{ name: 'Next', value: 0 }, { name: 'texture' }, { name: 'Total Lines', value: 1 }, { name: 'Font Available', value: !0 }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: '0a665d14-09b1-4032-83e0-4456b9eabd6b',
			uiAttribs: { translate: { x: -48, y: 680 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: '0a665d14-09b1-4032-83e0-4456b9eabd6b', objOut: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30' }]
				},
				{ name: 'posX', value: 0 },
				{ name: 'posY', value: '0' },
				{ name: 'posZ', value: 8.464 },
				{ name: 'scale', value: 1.5 },
				{ name: 'rotX', value: 270 },
				{ name: 'rotY', value: 90 },
				{ name: 'rotZ', value: 90 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30',
			uiAttribs: { translate: { x: -156, y: 280 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger 11', objIn: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30', objOut: 'fff2942d-fcdf-4874-abcf-75cc83b27c2f' }]
				},
				{ name: 'posX', value: 0 },
				{ name: 'posY', value: '0' },
				{ name: 'posZ', value: 0 },
				{ name: 'scale', value: '0.21' },
				{
					name: 'rotX',
					links: [{ portIn: 'rotX', portOut: 'Time', objIn: 'ecf35290-95aa-4ae9-a368-a9b2e784fb30', objOut: '979de42a-70b8-4fe0-b2cc-02fcd2065505' }]
				},
				{ name: 'rotY', value: 0 },
				{ name: 'rotZ', value: 0 }
			],
			portsOut: [{ name: 'trigger' }]
		},
		{
			opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
			objName: 'Ops.Anim.Timer_v2',
			id: '979de42a-70b8-4fe0-b2cc-02fcd2065505',
			uiAttribs: { translate: { x: -216, y: 200 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'Speed', value: 0.5 },
				{ name: 'Play', value: !0 },
				{ name: 'Reset', value: 0 },
				{ name: 'Sync to timeline', value: !1 }
			],
			portsOut: [{ name: 'Time' }]
		},
		{
			opId: '0cf90109-cccd-4633-9c77-8aaf53eae15c',
			objName: 'Ops.Html.FontFile',
			id: '77a8ffd0-b9cc-41cb-b691-20df81d1b56d',
			uiAttribs: { translate: { x: 156, y: 440 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'file', value: 'assets/cables/5e10a973ae264b07c4c70698_LabMono-Regular.otf', display: 'file' },
				{ name: 'family', value: 'Lab' }
			],
			portsOut: [
				{ name: 'Loaded', value: !0 },
				{ name: 'Loaded Trigger', value: 0 }
			]
		},
		{
			opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
			objName: 'Ops.Gl.Matrix.Transform',
			id: 'dbac27b9-5f85-44ba-a98a-20fd4b46f120',
			uiAttribs: { translate: { x: -192, y: 800 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'render', value: null },
				{
					name: 'posX',
					links: [{ portIn: 'posX', portOut: 'result', objIn: 'dbac27b9-5f85-44ba-a98a-20fd4b46f120', objOut: 'aeaefae0-fe9e-4060-b50c-4d0c3c8f3baa' }]
				},
				{ name: 'posY', value: 0.15 },
				{ name: 'posZ', value: -3.08 },
				{ name: 'scale', value: 2.48 },
				{ name: 'rotX', value: 17 },
				{ name: 'rotY', value: 2.29 },
				{ name: 'rotZ', value: 1171.81 }
			],
			portsOut: [{ name: 'trigger', value: 0 }]
		},
		{
			opId: '5b244b6e-c505-4743-b2cc-8119ef720028',
			objName: 'Ops.Anim.SimpleAnim',
			id: 'aeaefae0-fe9e-4060-b50c-4d0c3c8f3baa',
			uiAttribs: { translate: { x: -192, y: 680 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'exe', value: 0 },
				{ name: 'reset', value: 0 },
				{ name: 'rewind', value: 0 },
				{ name: 'start', value: 4 },
				{ name: 'end', value: -4 },
				{ name: 'duration', value: 9.15 },
				{ name: 'loop', value: !0 },
				{ name: 'Wait for Reset', value: !1 },
				{ name: 'easing', value: 'Sin In Out' }
			],
			portsOut: [{ name: 'Next', value: 0 }, { name: 'result' }, { name: 'finished', value: !1 }, { name: 'Finished Trigger', value: 0 }]
		},
		{
			opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
			objName: 'Ops.Anim.Timer_v2',
			id: '3b2b8a41-81f0-45cf-a729-d53f9b5d3284',
			uiAttribs: { translate: { x: -288, y: 660 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{ name: 'Speed', value: 0.03 },
				{ name: 'Play', value: !0 },
				{ name: 'Reset', value: 0 },
				{ name: 'Sync to timeline', value: !1 }
			],
			portsOut: [{ name: 'Time' }]
		},
		{
			opId: 'e4432ebd-d67c-46e2-b302-619d4f97daab',
			objName: 'Ops.Gl.ShaderEffects.PerlinAreaDeform_v3',
			id: 'ca9a8184-441e-4980-8bbb-e389e2e6cc42',
			uiAttribs: { translate: { x: -408, y: 740 }, subPatch: 0, notWorkingMsg: null },
			portsIn: [
				{
					name: 'render',
					links: [{ portIn: 'render', portOut: 'trigger', objIn: 'ca9a8184-441e-4980-8bbb-e389e2e6cc42', objOut: '9954a339-90c0-4ef6-b495-17612a40332c' }]
				},
				{ name: 'Scale', value: 10 },
				{ name: 'Size', value: 20 },
				{ name: 'Strength', value: 20 },
				{ name: 'Calc Normals', value: !0 },
				{ name: 'Falloff', value: 0.3 },
				{ name: 'Output index', value: 1 },
				{ name: 'Output', value: 'Mul Normal' },
				{
					name: 'x',
					links: [{ portIn: 'x', portOut: 'result', objIn: 'ca9a8184-441e-4980-8bbb-e389e2e6cc42', objOut: 'aeaefae0-fe9e-4060-b50c-4d0c3c8f3baa' }]
				},
				{ name: 'y', value: 0 },
				{ name: 'z', value: 0 },
				{
					name: 'Scroll X',
					links: [{ portIn: 'Scroll X', portOut: 'Time', objIn: 'ca9a8184-441e-4980-8bbb-e389e2e6cc42', objOut: '3b2b8a41-81f0-45cf-a729-d53f9b5d3284' }]
				},
				{ name: 'Scroll Y', value: 0 },
				{ name: 'Scroll Z', value: 0 },
				{ name: 'WorldSpace', value: !1 }
			],
			portsOut: [{ name: 'trigger' }]
		}
	],
	users: [],
	userOps: [],
	tags: ['blob', 'graph', 'microbe'],
	_id: '5e5a91fce73fe068db6a73bc',
	name: 'probiotic rituals',
	userId: '5d87a7c1cd737f5197fed6ad',
	created: '2020-02-29T16:31:56.633Z',
	updated: '2020-03-01T00:21:49.099Z',
	__v: 4,
	shortId: 's8AOh2',
	opsHash: '63180ca8a9db822f3952d36d331a4125ef9f4092',
	ui: {
		viewBox: { x: -514.1387951438942, y: 24.375890399315608, w: 564.737969953706, h: 1018.197522182544 },
		timeLineLength: 20,
		bookmarks: [],
		subPatchViewBoxes: [],
		renderer: { w: 667, h: 700, s: 1 }
	},
	updatedByUser: 'ana',
	cachedUsername: 'ana',
	views: 13,
	cachedNumComments: 0,
	cachedNumFavs: 1,
	statsAdmin: {
		filenameScreenshots: ['_screenshots/screenshot.png', '_screenshots/screenshot_1583022034027.png'],
		filenameExports: [],
		filenameAssets: [],
		hasOldScreenshots: !1,
		hasOldExports: !1,
		sizeScreenshots: 75.365234375,
		sizeExports: 0,
		sizeAssets: 0
	},
	description: '',
	namespace: '',
	published: '2020-02-29T16:34:42.047Z',
	exports: 1
}
var CABLES = CABLES || {}
CABLES.OPS = CABLES.OPS || {}
var Ops = Ops || {}
;(Ops.Gl = Ops.Gl || {}),
	(Ops.Math = Ops.Math || {}),
	(Ops.Json = Ops.Json || {}),
	(Ops.Html = Ops.Html || {}),
	(Ops.Anim = Ops.Anim || {}),
	(Ops.Array = Ops.Array || {}),
	(Ops.Gl.Shader = Ops.Gl.Shader || {}),
	(Ops.Gl.Meshes = Ops.Gl.Meshes || {}),
	(Ops.Gl.Matrix = Ops.Gl.Matrix || {}),
	(Ops.Gl.ShaderEffects = Ops.Gl.ShaderEffects || {}),
	(Ops.Sequence = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = [],
			t = []
		function a() {
			for (var e = 0; e < t.length; e++) t[e].trigger()
		}
		e.inTrigger('exe').onTriggered = a
		for (var r = 0; r < 16; r++)
			if ((t.push(e.outTrigger('trigger ' + r)), r < 15)) {
				var o = e.inTrigger('exe ' + r)
				;(o.onTriggered = a), n.push(o)
			}
	}),
	(Ops.Sequence.prototype = new CABLES.Op()),
	(CABLES.OPS['a466bc1f-06e9-4595-8849-bffb9fe22f99'] = { f: Ops.Sequence, objName: 'Ops.Sequence' }),
	(Ops.Gl.ClearColor = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('render'),
			t = e.outTrigger('trigger'),
			a = e.inFloatSlider('r', 0.1),
			r = e.inFloatSlider('g', 0.1),
			o = e.inFloatSlider('b', 0.1),
			i = e.inFloatSlider('a', 1)
		a.setUiAttribs({ colorPick: !0 })
		const l = e.patch.cgl
		n.onTriggered = function() {
			l.gl.clearColor(a.get(), r.get(), o.get(), i.get()), l.gl.clear(l.gl.COLOR_BUFFER_BIT | l.gl.DEPTH_BUFFER_BIT), t.trigger()
		}
	}),
	(Ops.Gl.ClearColor.prototype = new CABLES.Op()),
	(CABLES.OPS['19b441eb-9f63-4f35-ba08-b87841517c4d'] = { f: Ops.Gl.ClearColor, objName: 'Ops.Gl.ClearColor' }),
	(Ops.Gl.MainLoop = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inValue('FPS Limit', 0),
			t = e.outTrigger('trigger'),
			a = e.outValue('width'),
			r = e.outValue('height'),
			o = e.inValueBool('Reduce FPS loading'),
			i = e.inValueBool('Clear', !0),
			l = e.inValueBool('ClearAlpha', !0),
			s = e.inValueBool('Fullscreen Button', !1),
			u = e.inValueBool('Active', !0),
			c = e.inValueBool('Hires Displays', !1)
		;(e.onAnimFrame = h),
			(c.onChange = function() {
				c.get() ? (e.patch.cgl.pixelDensity = window.devicePixelRatio) : (e.patch.cgl.pixelDensity = 1), e.patch.cgl.updateSize(), CABLES.UI && gui.setLayout()
			}),
			(u.onChange = function() {
				e.patch.removeOnAnimFrame(e),
					u.get()
						? (e.setUiAttrib({ extendTitle: '' }), (e.onAnimFrame = h), e.patch.addOnAnimFrame(e), e.log('adding again!'))
						: e.setUiAttrib({ extendTitle: 'Inactive' })
			})
		var d = e.patch.cgl,
			f = 0,
			m = 0
		e.patch.cgl || e.uiAttr({ error: 'No webgl cgl context' })
		var g = vec3.create()
		vec3.set(g, 0, 0, 0)
		var p = vec3.create()
		vec3.set(p, 0, 0, -2), (s.onChange = b), setTimeout(b, 100)
		var v = null
		function b() {
			function n() {
				v && (v.style.display = 'block')
			}
			if (
				(e.patch.cgl.canvas.addEventListener('mouseleave', function() {
					v && (v.style.display = 'none')
				}),
				e.patch.cgl.canvas.addEventListener('mouseenter', n),
				s.get())
			) {
				if (!v) {
					v = document.createElement('div')
					var t = e.patch.cgl.canvas.parentElement
					t && t.appendChild(v),
						v.addEventListener('mouseenter', n),
						v.addEventListener('click', function(e) {
							CABLES.UI && !e.shiftKey ? gui.cycleRendererSize() : d.fullScreen()
						})
				}
				;(v.style.padding = '10px'),
					(v.style.position = 'absolute'),
					(v.style.right = '5px'),
					(v.style.top = '5px'),
					(v.style.width = '20px'),
					(v.style.height = '20px'),
					(v.style.cursor = 'pointer'),
					(v.style['border-radius'] = '40px'),
					(v.style.background = '#444'),
					(v.style['z-index'] = '9999'),
					(v.style.display = 'none'),
					(v.innerHTML =
						'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>')
			} else v && ((v.style.display = 'none'), v.remove(), (v = null))
		}
		function h(n) {
			u.get() &&
				(d.aborted ||
					0 === d.canvas.clientWidth ||
					0 === d.canvas.clientHeight ||
					(e.patch.loading.getProgress() < 1 && o.get() && (e.patch.config.fpsLimit = 5),
					-1 != d.canvasWidth
						? ((d.canvasWidth == a.get() && d.canvasHeight == r.get()) || (a.set(d.canvasWidth), r.set(d.canvasHeight)),
						  CABLES.now() - m > 1e3 &&
								((CGL.fpsReport = CGL.fpsReport || []), e.patch.loading.getProgress() >= 1 && 0 !== m && CGL.fpsReport.push(f), (f = 0), (m = CABLES.now())),
						  (CGL.MESH.lastShader = null),
						  (CGL.MESH.lastMesh = null),
						  d.renderStart(d, g, p),
						  i.get() && (d.gl.clearColor(0, 0, 0, 1), d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT)),
						  t.trigger(),
						  CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(),
						  CGL.Texture.previewTexture &&
								(CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(d)),
								CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)),
						  d.renderEnd(d),
						  l.get() && (d.gl.clearColor(1, 1, 1, 1), d.gl.colorMask(!1, !1, !1, !0), d.gl.clear(d.gl.COLOR_BUFFER_BIT), d.gl.colorMask(!0, !0, !0, !0)),
						  d.frameStore.phong || (d.frameStore.phong = {}),
						  f++)
						: d.setCanvas(e.patch.config.glCanvasId)))
		}
		;(n.onChange = function() {
			e.patch.config.fpsLimit = n.get() || 0
		}),
			(e.onDelete = function() {
				d.gl.clearColor(0, 0, 0, 0), d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT)
			}),
			e.patch.loading.setOnFinishedLoading(function(t) {
				e.patch.config.fpsLimit = n.get()
			})
	}),
	(Ops.Gl.MainLoop.prototype = new CABLES.Op()),
	(CABLES.OPS['b0472a1d-db16-4ba6-8787-f300fbdc77bb'] = { f: Ops.Gl.MainLoop, objName: 'Ops.Gl.MainLoop' }),
	(Ops.Gl.Matrix.OrbitControls = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('render'),
			t = e.inValueFloat('min distance'),
			a = e.inValueFloat('max distance'),
			r = e.inValue('min rot y', 0),
			o = e.inValue('max rot y', 0),
			i = e.inValue('initial radius', 0),
			l = e.inValueSlider('initial axis y'),
			s = e.inValueSlider('initial axis x'),
			u = e.inValueFloat('mul'),
			c = e.inValueSlider('Smoothness', 1),
			d = e.inValue('Speed X', 1),
			f = e.inValue('Speed Y', 1),
			m = e.inValueBool('Active', !0),
			g = e.inValueBool('Allow Panning', !0),
			p = e.inValueBool('Allow Zooming', !0),
			v = e.inValueBool('Allow Rotation', !0),
			b = e.inValueBool('restricted', !0),
			h = e.inValueBool('Pointerlock', !1),
			x = e.outTrigger('trigger'),
			A = e.outValue('radius'),
			O = e.outValue('Rot X'),
			y = e.outValue('Rot Y'),
			C = e.inTriggerButton('Reset')
		e.setPortGroup('Initial Values', [l, s, i]),
			e.setPortGroup('Interaction', [u, c, d, f]),
			e.setPortGroup('Boundaries', [r, o, t, a]),
			u.set(1),
			t.set(0.05),
			a.set(99999),
			(C.onTriggered = H)
		const S = e.patch.cgl
		var _ = vec3.create(),
			M = vec3.create(),
			T = vec3.create(),
			L = mat4.create(),
			I = (mat4.create(), vec3.create())
		vec3.create()
		l.set(0.5)
		var E = !1,
			P = 5
		A.set(P)
		var N = 0,
			w = 0,
			j = 0,
			k = 0
		vec3.set(T, 0, 0, 0), vec3.set(M, 0, 1, 0)
		var G = vec3.create(),
			z = vec3.create(),
			D = vec3.create(),
			B = vec3.create(),
			R = 0,
			U = 0,
			F = 1,
			V = null
		W(), (e.onDelete = se)
		var X = !1
		function H() {
			;(R %= 2 * Math.PI),
				(U %= 2 * Math.PI),
				vec3.set(I, 0, 0, 0),
				vec3.set(T, 0, 0, 0),
				vec3.set(M, 0, 1, 0),
				(j = s.get() * Math.PI * 2),
				(k = l.get() - 0.5),
				(P = i.get()),
				(_ = q(k))
		}
		function W() {
			F = 10 * c.get() + 1
		}
		;(h.onChange = function() {
			;(X = h.get()), console.log('doLockPointer', X)
		}),
			(c.onChange = W)
		var Y = !0
		function Z(e, n) {
			return Y ? n : e + (n - e) / F
		}
		var K = 0
		function q(e) {
			const n = u.get()
			P < t.get() * n && (P = t.get() * n), P > a.get() * n && (P = a.get() * n), A.set(P * n)
			var r,
				o = vec3.create()
			return (r = ((360 * e) / 2) * CGL.DEG2RAD), vec3.set(o, Math.cos(r) * P * n, Math.sin(r) * P * n, 0), o
		}
		function J(e) {
			if (E) {
				var n = e.clientX,
					t = e.clientY,
					a = n - N,
					r = t - w
				X && ((a = e.movementX * u.get()), (r = e.movementY * u.get())),
					(a *= d.get()),
					(r *= f.get()),
					3 == e.which && g.get()
						? ((I[2] += 0.01 * a * u.get()), (I[1] += 0.01 * r * u.get()))
						: 2 == e.which && p.get()
						? ((P += 0.05 * r), (_ = q(k)))
						: v.get() && ((j += 0.003 * a), (k += 0.002 * r), b.get() && (k > 0.5 && (k = 0.5), k < -0.5 && (k = -0.5))),
					(N = n),
					(w = t)
			}
		}
		function Q(n) {
			if (((N = n.clientX), (w = n.clientY), (E = !0), X)) {
				var t = e.patch.cgl.canvas
				;(t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock),
					t.requestPointerLock ? t.requestPointerLock() : console.log('no t found'),
					document.addEventListener('pointerlockchange', ee, !1),
					document.addEventListener('mozpointerlockchange', ee, !1),
					document.addEventListener('webkitpointerlockchange', ee, !1)
			}
		}
		function $() {
			;(E = !1),
				X &&
					(document.removeEventListener('pointerlockchange', ee, !1),
					document.removeEventListener('mozpointerlockchange', ee, !1),
					document.removeEventListener('webkitpointerlockchange', ee, !1),
					document.exitPointerLock && document.exitPointerLock(),
					document.removeEventListener('mousemove', h, !1))
		}
		function ee() {
			var n = e.patch.cgl.canvas
			;(document.pointerLockElement !== n && document.mozPointerLockElement !== n && document.webkitPointerLockElement !== n) ||
				(document.addEventListener('mousemove', J, !1), console.log('listening...'))
		}
		function ne(e) {}
		;(n.onTriggered = function() {
			S.pushViewMatrix(), (R = Z(R, j))
			var e = 180 * ((U = Z(U, k)) + 0.5)
			0 !== r.get() && e < r.get() ? ((e = r.get()), (U = K)) : 0 !== o.get() && e > o.get() ? ((e = o.get()), (U = K)) : (K = U)
			var n = R * CGL.RAD2DEG
			y.set(e),
				O.set(n),
				(function(e, n) {
					const r = u.get()
					P < t.get() * r && (P = t.get() * r)
					P > a.get() * r && (P = a.get() * r)
					A.set(P * r)
					var o = 0
					;(o = ((360 * n) / 2) * CGL.DEG2RAD), vec3.set(e, Math.cos(o) * P * r, Math.sin(o) * P * r, 0)
				})(_, U),
				vec3.add(G, _, I),
				vec3.add(D, T, I),
				(z[0] = Z(z[0], G[0])),
				(z[1] = Z(z[1], G[1])),
				(z[2] = Z(z[2], G[2])),
				(B[0] = Z(B[0], D[0])),
				(B[1] = Z(B[1], D[1])),
				(B[2] = Z(B[2], D[2]))
			vec3.create()
			mat4.lookAt(L, z, B, M), mat4.rotate(L, L, R, M), mat4.multiply(S.vMatrix, S.vMatrix, L), x.trigger(), S.popViewMatrix(), (Y = !1)
		}),
			(i.onChange = function() {
				;(P = i.get()), H()
			}),
			(s.onChange = function() {
				R = j = s.get() * Math.PI * 2
			}),
			(l.onChange = function() {
				;(U = k = l.get() - 0.5), (_ = q(k))
			})
		var te,
			ae = function(e) {
				if (p.get()) {
					var n = 0.06 * CGL.getWheelSpeed(e)
					;(P += 1.2 * parseFloat(n)), (_ = q(k)), e.preventDefault()
				}
			},
			re = function(e) {
				;(X = !1), e.touches && e.touches.length > 0 && Q(e.touches[0])
			},
			oe = function(e) {
				;(X = !1), $()
			},
			ie = function(e) {
				;(X = !1), e.touches && e.touches.length > 0 && J(e.touches[0])
			}
		function le() {
			V.addEventListener('mousemove', J),
				V.addEventListener('mousedown', Q),
				V.addEventListener('mouseup', $),
				V.addEventListener('mouseleave', $),
				V.addEventListener('mouseenter', ne),
				V.addEventListener('contextmenu', function(e) {
					e.preventDefault()
				}),
				V.addEventListener('wheel', ae),
				V.addEventListener('touchmove', ie),
				V.addEventListener('touchstart', re),
				V.addEventListener('touchend', oe)
		}
		function se() {
			V &&
				(V.removeEventListener('mousemove', J),
				V.removeEventListener('mousedown', Q),
				V.removeEventListener('mouseup', $),
				V.removeEventListener('mouseleave', $),
				V.removeEventListener('mouseenter', $),
				V.removeEventListener('wheel', ae),
				V.removeEventListener('touchmove', ie),
				V.removeEventListener('touchstart', re),
				V.removeEventListener('touchend', oe))
		}
		;(m.onChange = function() {
			m.get() ? le() : se()
		}),
			(_ = q(0)),
			(te = S.canvas),
			se(),
			(V = te),
			le(),
			le(),
			s.set(0.25),
			i.set(0.05)
	}),
	(Ops.Gl.Matrix.OrbitControls.prototype = new CABLES.Op()),
	(CABLES.OPS['eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1'] = { f: Ops.Gl.Matrix.OrbitControls, objName: 'Ops.Gl.Matrix.OrbitControls' }),
	(Ops.Array.SortArrayObjectsByKey = function() {
		CABLES.Op.apply(this, arguments)
		const e = this.inArray('Array to sort'),
			n = this.inString('Sort property'),
			t = this.inSwitch('Sorting mode', ['Sort ascending', 'Sort descending'], 'Sort ascending'),
			a = this.outArray('Sorted array')
		let r = []
		function o() {
			const o = n.get()
			e.get() && o
				? ((r = e.get()),
				  'Sort ascending' === t.get()
						? r.sort(function(e, n) {
								const t = Array.isArray(o) ? o : o.split('.'),
									a = t.reduce((e, n) => e && e[n], e),
									r = t.reduce((e, n) => e && e[n], n)
								return a < r ? -1 : a > r ? 1 : 0
						  })
						: r.sort(function(e, n) {
								const t = Array.isArray(o) ? o : o.split('.'),
									a = t.reduce((e, n) => e && e[n], e),
									r = t.reduce((e, n) => e && e[n], n)
								return a < r ? 1 : a > r ? -1 : 0
						  }),
				  a.set(null),
				  a.set(r))
				: a.set(null)
		}
		;(e.onChange = n.onChange = t.onChange = o), o()
	}),
	(Ops.Array.SortArrayObjectsByKey.prototype = new CABLES.Op()),
	(CABLES.OPS['6a5a6674-9247-47ea-b9e1-0438ca07529a'] = { f: Ops.Array.SortArrayObjectsByKey, objName: 'Ops.Array.SortArrayObjectsByKey' }),
	(Ops.Array.GetValuesFromArrayOfObjects = function() {
		CABLES.Op.apply(this, arguments)
		const e = this.inArray('Array'),
			n = this.inString('Key'),
			t = this.inBool('Numbers Only', !1),
			a = this.outArray('Result')
		n.onChange = e.onChange = t.onChange = function() {
			var r = e.get()
			if (!r) return a.set(null), void console.log('no arr')
			var o = []
			const i = n.get(),
				l = t.get()
			for (var s = 0; s < r.length; s++) {
				const e = r[s]
				e.hasOwnProperty(i) && (l ? CABLES.UTILS.isNumeric(e[i]) && o.push(e[i]) : o.push(e[i]))
			}
			a.set(null), a.set(o)
		}
	}),
	(Ops.Array.GetValuesFromArrayOfObjects.prototype = new CABLES.Op()),
	(CABLES.OPS['e068629a-7963-48b0-853f-a89348d03654'] = { f: Ops.Array.GetValuesFromArrayOfObjects, objName: 'Ops.Array.GetValuesFromArrayOfObjects' }),
	(Ops.Array.ArrayPack2 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTriggerButton('Trigger in'),
			t = e.inArray('Array 1'),
			a = e.inArray('Array 2'),
			r = e.outTrigger('Trigger out'),
			o = e.outArray('Array out'),
			i = e.outNumber('Array length')
		var l = !1,
			s = [],
			u = [],
			c = !0
		;(n.onTriggered = function() {
			var n = t.get(),
				d = a.get()
			if (!n && !d) return void o.set(null)
			if (c) {
				var f = 0
				if (!n || !d) {
					if ((n ? (f = n.length) : d && (f = d.length), u.length != f)) for (var m = 0; m < f; m++) u[m] = 0
					n || (n = u), d || (d = u)
				}
				if (n.length !== d.length) return void (l || (e.uiAttr({ error: 'Arrays do not have the same length !' }), (l = !0)))
				l && ((l = !1), e.uiAttr({ error: null })), (s.length = n.length)
				for (var m = 0; m < n.length; m++) (s[2 * m + 0] = n[m]), (s[2 * m + 1] = d[m])
				;(c = !1), o.set(null), o.set(s), i.set(s.length)
			}
			r.trigger()
		}),
			(t.onChange = a.onChange = function() {
				c = !0
			})
	}),
	(Ops.Array.ArrayPack2.prototype = new CABLES.Op()),
	(CABLES.OPS['0db296db-e4a7-4356-9593-858f7e1bc7f3'] = { f: Ops.Array.ArrayPack2, objName: 'Ops.Array.ArrayPack2' }),
	(Ops.Math.MercatorCoordsArray = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inArray('LatLon Array'),
			t = e.inValue('MapWidth', 100),
			a = e.inValue('Center Lat', 0),
			r = e.inValue('Center Lon', 0),
			o = e.outArray('Result')
		function i(e, n) {
			return (e + 180) * (n / 360)
		}
		function l(e, n, t) {
			var a = (e * Math.PI) / 180
			return t / 2 - (n * Math.log(Math.tan(Math.PI / 4 + a / 2))) / (2 * Math.PI)
		}
		n.onChange = t.onChange = a.onChange = r.onChange = function() {
			var e = t.get()
			const s = i(r.get(), e),
				u = l(a.get(), e, 1)
			console.log('centerLon', s, u, 1)
			var c = n.get()
			if (!c) return void o.set(null)
			for (var d = [], f = 0; f < c.length; f += 2) {
				var m = c[f],
					g = c[f + 1],
					p = i(g, e),
					v = l(m, e, 1)
				;(p -= s), (v -= u), d.push(p, 0 - v)
			}
			o.set(null), o.set(d)
		}
	}),
	(Ops.Math.MercatorCoordsArray.prototype = new CABLES.Op()),
	(CABLES.OPS['96e77c88-58b8-4948-bd61-c95d604a2607'] = { f: Ops.Math.MercatorCoordsArray, objName: 'Ops.Math.MercatorCoordsArray' }),
	(Ops.Array.ArrayMultiply = function() {
		CABLES.Op.apply(this, arguments)
		var e = this.inArray('In'),
			n = this.inValue('Value', 1),
			t = this.outArray('Result'),
			a = []
		t.set(a),
			(e.onChange = n.onChange = e.onChange = function() {
				var r = e.get()
				if (r) {
					var o = n.get()
					a.length != r.length && (a.length = r.length)
					for (var i = 0; i < r.length; i++) a[i] = r[i] * o
					t.set(null), t.set(a)
				}
			})
	}),
	(Ops.Array.ArrayMultiply.prototype = new CABLES.Op()),
	(CABLES.OPS['a01c344b-4129-4b01-9c8f-36cefe86d7cc'] = { f: Ops.Array.ArrayMultiply, objName: 'Ops.Array.ArrayMultiply' }),
	(Ops.Array.Array2To3 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inArray('Array2x'),
			t = e.outArray('Array3x'),
			a = e.outNumber('Total points'),
			r = e.outNumber('Array length')
		var o = [],
			i = !1
		n.onChange = function() {
			var l = n.get()
			if (l) {
				if (l.length % 2 != 0) return i || (e.uiAttr({ error: 'Arrays length not divisible by 2e !' }), (i = !0)), t.set(null), a.set(0), void r.set(0)
				i && ((i = !1), e.uiAttr({ error: null })), (l.length / 2) * 3 != o.length && (o.length = (l.length / 2) * 3)
				for (var s = 0; s < l.length / 2; s++) (o[3 * s + 0] = l[2 * s + 0]), (o[3 * s + 1] = l[2 * s + 1]), (o[3 * s + 2] = 0)
				t.set(null), t.set(o), a.set(o.length / 3), r.set(o.length)
			} else t.set(null)
		}
	}),
	(Ops.Array.Array2To3.prototype = new CABLES.Op()),
	(CABLES.OPS['9854162e-d415-4300-a47b-173772b454e9'] = { f: Ops.Array.Array2To3, objName: 'Ops.Array.Array2To3' }),
	(Ops.Array.ArrayUnpack3 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inArray('Array in xyz'),
			t = e.outArray('Array 1 out'),
			a = e.outArray('Array 2 out'),
			r = e.outArray('Array 3 out'),
			o = e.outNumber('Array lengths')
		var i = !1
		const l = [],
			s = [],
			u = []
		n.onChange = function() {
			var c = n.get()
			if (!c) return void t.set(null)
			if (c.length % 3 != 0) return void (i || (e.uiAttr({ error: 'Arrays length not divisible by 3 !' }), o.set(0), (i = !0)))
			i && ((i = !1), e.uiAttr({ error: null }))
			;(l.length = Math.floor(c.length / 3)), (s.length = Math.floor(c.length / 3)), (u.length = Math.floor(c.length / 3))
			for (var d = 0; d < c.length / 3; d++) (l[d] = c[3 * d]), (s[d] = c[3 * d + 1]), (u[d] = c[3 * d + 2])
			t.set(null), a.set(null), r.set(null), t.set(l), a.set(s), r.set(u), o.set(l.length)
		}
	}),
	(Ops.Array.ArrayUnpack3.prototype = new CABLES.Op()),
	(CABLES.OPS['fa671f66-6957-41e6-ac35-d615b7c29285'] = { f: Ops.Array.ArrayUnpack3, objName: 'Ops.Array.ArrayUnpack3' }),
	(Ops.Array.ArrayPack3 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('Trigger in'),
			t = e.inArray('Array 1'),
			a = e.inArray('Array 2'),
			r = e.inArray('Array 3'),
			o = e.outTrigger('Trigger out'),
			i = e.outArray('Array out'),
			l = e.outValue('Num Points'),
			s = e.outNumber('Array length')
		var u = !1,
			c = [],
			d = [],
			f = !0
		;(n.onTriggered = function() {
			var n = t.get(),
				m = a.get(),
				g = r.get()
			if (!n && !m && !g) return i.set(null), void l.set(0)
			if (f) {
				var p = 0
				if (!n || !m || !g) {
					if ((n ? (p = n.length) : m ? (p = m.length) : g && (p = g.length), d.length != p)) for (var v = 0; v < p; v++) d[v] = 0
					n || (n = d), m || (m = d), g || (g = d)
				}
				if (n.length !== m.length || m.length !== g.length) return void (u || (e.uiAttr({ error: 'Arrays do not have the same length !' }), l.set(0), (u = !0)))
				u && ((u = !1), e.uiAttr({ error: null })), (c.length = n.length)
				for (var v = 0; v < n.length; v++) (c[3 * v + 0] = n[v]), (c[3 * v + 1] = m[v]), (c[3 * v + 2] = g[v])
				;(f = !1), i.set(null), i.set(c), l.set(c.length / 3), s.set(c.length)
			}
			o.trigger()
		}),
			(t.onChange = a.onChange = r.onChange = function() {
				f = !0
			})
	}),
	(Ops.Array.ArrayPack3.prototype = new CABLES.Op()),
	(CABLES.OPS['2bcf32fe-3cbd-48fd-825a-61255bebda9b'] = { f: Ops.Array.ArrayPack3, objName: 'Ops.Array.ArrayPack3' }),
	(Ops.Gl.Meshes.PointCloudFromArray = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('exe'),
			t = e.inArray('Array'),
			a = e.inValueInt('Num Points'),
			r = e.outTrigger('Trigger out'),
			o = e.outObject('Geometry'),
			i = e.inValueBool('Scramble Texcoords', !0),
			l = e.inValue('Seed'),
			s = e.inArray('Coordinates'),
			u = e.inArray('Vertex Colors'),
			c = e.patch.cgl
		;(s.onChange = b),
			(i.onChange = b),
			(u.onChange = l.onChange = t.onChange = function() {
				v = !0
			}),
			(a.onChange = h),
			e.toWorkPortsNeedToBeLinked(t, n),
			e.setPortGroup('Texture Coordinates', [i, l, s])
		var d = !1,
			f = !1
		n.onTriggered = function() {
			if ((r.trigger(), CABLES.UI)) {
				var n = c.getShader()
				if (n && n.glPrimitive != c.gl.POINTS)
					return void (d || (e.uiAttr({ warning: 'using a Material not made for point rendering. maybe use pointMaterial.' }), (d = !0)))
				d && (e.uiAttr({ warning: null }), (d = !1))
			}
			;(!v && m) ||
				(function() {
					var n = t.get()
					if (!n || 0 == n.length) return void (m = null)
					if (g.vertices.length == n.length && m && !f && !s.isLinked() && !u.isLinked())
						return m.setAttribute(CGL.SHADERVAR_VERTEX_POSITION, n, 3), void (v = !1)
					f && ((f = !1), e.uiAttr({ error: null }))
					if ((n.length % 3 == 0) == !1) return void (f || (e.uiAttr({ error: 'Array length not divisible by 3!' }), (f = !0)))
					g.clear()
					var a = n.length / 3
					if (0 == (a = Math.abs(Math.floor(a)))) return
					;(p && p.length == 2 * a) || (p = new Float32Array(2 * a))
					var r = !1,
						d = i.get()
					Math.randomSeed = l.get()
					var b = !s.isLinked()
					r = !s.isLinked()
					for (var x = 0; x < a; x++)
						(g.vertices[3 * x] == n[3 * x] && g.vertices[3 * x + 1] == n[3 * x + 1] && g.vertices[3 * x + 2] == n[3 * x + 2]) ||
							(b && (d ? ((p[2 * x] = Math.seededRandom()), (p[2 * x + 1] = Math.seededRandom())) : ((p[2 * x] = x / a), (p[2 * x + 1] = x / a))), (r = !0))
					if (u.get()) {
						if (!f && u.get().length != 4 * a)
							return e.uiAttr({ error: 'Color array does not have the correct length! (should be ' + 4 * a + ')' }), (f = !0), void (m = null)
						g.vertexColors = u.get()
					} else g.vertexColors = []
					r &&
						(b || (p = s.get()),
						g.setPointVertices(n),
						g.setTexCoords(p),
						(g.verticesIndices = []),
						m && m.dispose(),
						((m = new CGL.Mesh(c, g, c.gl.POINTS)).addVertexNumbers = !0),
						m.setGeom(g),
						o.set(g))
					h(), (v = !1)
				})()
			m && m.render(c.getShader())
		}
		var m = null
		const g = new CGL.Geometry('pointcloudfromarray')
		var p = [],
			v = !0
		function b() {
			s.isLinked()
				? (l.setUiAttribs({ greyout: !0 }), i.setUiAttribs({ greyout: !0 }))
				: (i.setUiAttribs({ greyout: !1 }), i.get() ? l.setUiAttribs({ greyout: !1 }) : l.setUiAttribs({ greyout: !0 })),
				(v = !0)
		}
		function h() {
			m && (m.setNumVertices(Math.min(g.vertices.length / 3, a.get())), 0 == a.get() && m.setNumVertices(g.vertices.length / 3))
		}
	}),
	(Ops.Gl.Meshes.PointCloudFromArray.prototype = new CABLES.Op()),
	(CABLES.OPS['0a6d9c6f-6459-45ca-88ad-268a1f7304db'] = { f: Ops.Gl.Meshes.PointCloudFromArray, objName: 'Ops.Gl.Meshes.PointCloudFromArray' }),
	(Ops.Gl.ShaderEffects.PerlinAreaDeform_v3 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n =
				"\nUNI bool MOD_smooth;\nUNI float MOD_x,MOD_y,MOD_z;\nUNI float MOD_strength;\nUNI float MOD_size;\nUNI float MOD_scale;\nUNI float MOD_mScale;\nUNI float MOD_scrollx;\nUNI float MOD_scrolly;\nUNI float MOD_scrollz;\nUNI float MOD_fallOff;\n\nvec3 MOD_newTangent,MOD_newBiTangent;\n\n\n\n#ifndef PERLINDEFORM\n#define PERLINDEFORM\nfloat Interpolation_C2( float x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }   //  6x^5-15x^4+10x^3\t( Quintic Curve.  As used by Perlin in Improved Noise.  http://mrl.nyu.edu/~perlin/paper445.pdf )\nvec2 Interpolation_C2( vec2 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec3 Interpolation_C2( vec3 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec4 Interpolation_C2( vec4 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec4 Interpolation_C2_InterpAndDeriv( vec2 x ) { return x.xyxy * x.xyxy * ( x.xyxy * ( x.xyxy * ( x.xyxy * vec2( 6.0, 0.0 ).xxyy + vec2( -15.0, 30.0 ).xxyy ) + vec2( 10.0, -60.0 ).xxyy ) + vec2( 0.0, 30.0 ).xxyy ); }\nvec3 Interpolation_C2_Deriv( vec3 x ) { return x * x * (x * (x * 30.0 - 60.0) + 30.0); }\n\n\nvoid FAST32_hash_3D( \tvec3 gridcell,\n                        out vec4 lowz_hash_0,\n                        out vec4 lowz_hash_1,\n                        out vec4 lowz_hash_2,\n                        out vec4 highz_hash_0,\n                        out vec4 highz_hash_1,\n                        out vec4 highz_hash_2\t)\t\t//\tgenerates 3 random numbers for each of the 8 cell corners\n{\n    //    gridcell is assumed to be an integer coordinate\n\n    //\tTODO: \tthese constants need tweaked to find the best possible noise.\n    //\t\t\tprobably requires some kind of brute force computational searching or something....\n    const vec2 OFFSET = vec2( 50.0, 161.0 );\n    const float DOMAIN = 69.0;\n    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\n    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\n\n    //\ttruncate the domain\n    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;\n    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );\n\n    //\tcalculate the noise\n    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;\n    P *= P;\n    P = P.xzxz * P.yyww;\n    vec3 lowz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );\n    vec3 highz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );\n    lowz_hash_0 = fract( P * lowz_mod.xxxx );\n    highz_hash_0 = fract( P * highz_mod.xxxx );\n    lowz_hash_1 = fract( P * lowz_mod.yyyy );\n    highz_hash_1 = fract( P * highz_mod.yyyy );\n    lowz_hash_2 = fract( P * lowz_mod.zzzz );\n    highz_hash_2 = fract( P * highz_mod.zzzz );\n}\n\n//\n//\tPerlin Noise 3D  ( gradient noise )\n//\tReturn value range of -1.0->1.0\n//\thttp://briansharpe.files.wordpress.com/2011/11/perlinsample.jpg\n//\nfloat Perlin3D( vec3 P )\n{\n    //\testablish our grid cell and unit position\n    vec3 Pi = floor(P);\n    vec3 Pf = P - Pi;\n    vec3 Pf_min1 = Pf - 1.0;\n\n#if 1\n    //\n    //\tclassic noise.\n    //\trequires 3 random values per point.  with an efficent hash function will run faster than improved noise\n    //\n\n    //\tcalculate the hash.\n    //\t( various hashing methods listed in order of speed )\n    vec4 hashx0, hashy0, hashz0, hashx1, hashy1, hashz1;\n    FAST32_hash_3D( Pi, hashx0, hashy0, hashz0, hashx1, hashy1, hashz1 );\n    //SGPP_hash_3D( Pi, hashx0, hashy0, hashz0, hashx1, hashy1, hashz1 );\n\n    //\tcalculate the gradients\n    vec4 grad_x0 = hashx0 - 0.49999;\n    vec4 grad_y0 = hashy0 - 0.49999;\n    vec4 grad_z0 = hashz0 - 0.49999;\n    vec4 grad_x1 = hashx1 - 0.49999;\n    vec4 grad_y1 = hashy1 - 0.49999;\n    vec4 grad_z1 = hashz1 - 0.49999;\n    vec4 grad_results_0 = inversesqrt( grad_x0 * grad_x0 + grad_y0 * grad_y0 + grad_z0 * grad_z0 ) * ( vec2( Pf.x, Pf_min1.x ).xyxy * grad_x0 + vec2( Pf.y, Pf_min1.y ).xxyy * grad_y0 + Pf.zzzz * grad_z0 );\n    vec4 grad_results_1 = inversesqrt( grad_x1 * grad_x1 + grad_y1 * grad_y1 + grad_z1 * grad_z1 ) * ( vec2( Pf.x, Pf_min1.x ).xyxy * grad_x1 + vec2( Pf.y, Pf_min1.y ).xxyy * grad_y1 + Pf_min1.zzzz * grad_z1 );\n\n#if 1\n    //\tClassic Perlin Interpolation\n    vec3 blend = Interpolation_C2( Pf );\n    vec4 res0 = mix( grad_results_0, grad_results_1, blend.z );\n    vec4 blend2 = vec4( blend.xy, vec2( 1.0 - blend.xy ) );\n    float final = dot( res0, blend2.zxzx * blend2.wwyy );\n    final *= 1.1547005383792515290182975610039;\t\t//\t(optionally) scale things to a strict -1.0->1.0 range    *= 1.0/sqrt(0.75)\n    return final;\n#else\n    //\tClassic Perlin Surflet\n    //\thttp://briansharpe.wordpress.com/2012/03/09/modifications-to-classic-perlin-noise/\n    Pf *= Pf;\n    Pf_min1 *= Pf_min1;\n    vec4 vecs_len_sq = vec4( Pf.x, Pf_min1.x, Pf.x, Pf_min1.x ) + vec4( Pf.yy, Pf_min1.yy );\n    float final = dot( Falloff_Xsq_C2( min( vec4( 1.0 ), vecs_len_sq + Pf.zzzz ) ), grad_results_0 ) + dot( Falloff_Xsq_C2( min( vec4( 1.0 ), vecs_len_sq + Pf_min1.zzzz ) ), grad_results_1 );\n    final *= 2.3703703703703703703703703703704;\t\t//\t(optionally) scale things to a strict -1.0->1.0 range    *= 1.0/cube(0.75)\n    return final;\n#endif\n\n#else\n    //\n    //\timproved noise.\n    //\trequires 1 random value per point.  Will run faster than classic noise if a slow hashing function is used\n    //\n\n    //\tcalculate the hash.\n    //\t( various hashing methods listed in order of speed )\n    vec4 hash_lowz, hash_highz;\n    FAST32_hash_3D( Pi, hash_lowz, hash_highz );\n    //BBS_hash_3D( Pi, hash_lowz, hash_highz );\n    //SGPP_hash_3D( Pi, hash_lowz, hash_highz );\n\n    //\n    //\t\"improved\" noise using 8 corner gradients.  Faster than the 12 mid-edge point method.\n    //\tKen mentions using diagonals like this can cause \"clumping\", but we'll live with that.\n    //\t[1,1,1]  [-1,1,1]  [1,-1,1]  [-1,-1,1]\n    //\t[1,1,-1] [-1,1,-1] [1,-1,-1] [-1,-1,-1]\n    //\n    hash_lowz -= 0.5;\n    vec4 grad_results_0_0 = vec2( Pf.x, Pf_min1.x ).xyxy * sign( hash_lowz );\n    hash_lowz = abs( hash_lowz ) - 0.25;\n    vec4 grad_results_0_1 = vec2( Pf.y, Pf_min1.y ).xxyy * sign( hash_lowz );\n    vec4 grad_results_0_2 = Pf.zzzz * sign( abs( hash_lowz ) - 0.125 );\n    vec4 grad_results_0 = grad_results_0_0 + grad_results_0_1 + grad_results_0_2;\n\n    hash_highz -= 0.5;\n    vec4 grad_results_1_0 = vec2( Pf.x, Pf_min1.x ).xyxy * sign( hash_highz );\n    hash_highz = abs( hash_highz ) - 0.25;\n    vec4 grad_results_1_1 = vec2( Pf.y, Pf_min1.y ).xxyy * sign( hash_highz );\n    vec4 grad_results_1_2 = Pf_min1.zzzz * sign( abs( hash_highz ) - 0.125 );\n    vec4 grad_results_1 = grad_results_1_0 + grad_results_1_1 + grad_results_1_2;\n\n    //\tblend the gradients and return\n    vec3 blend = Interpolation_C2( Pf );\n    vec4 res0 = mix( grad_results_0, grad_results_1, blend.z );\n    vec4 blend2 = vec4( blend.xy, vec2( 1.0 - blend.xy ) );\n    return dot( res0, blend2.zxzx * blend2.wwyy ) * (2.0 / 3.0);\t//\t(optionally) mult by (2.0/3.0) to scale to a strict -1.0->1.0 range\n#endif\n}\n\n#endif\n\nvec3 MOD_deform(vec3 pos,vec3 norm)\n{\n    vec3 modelPos=pos;\n    vec3 forcePos=vec3(MOD_x,MOD_y,MOD_z);\n\n    vec3 vecToOrigin=modelPos-forcePos;\n    float dist=abs(length(vecToOrigin));\n    // float distAlpha = (MOD_size - dist) / MOD_size;\n\n    if(dist*MOD_mScale<MOD_size*MOD_mScale)\n    {\n        vec3 ppos=vec3(pos*MOD_scale*MOD_mScale);\n        ppos.x+=MOD_scrollx;\n        ppos.y+=MOD_scrolly;\n        ppos.z+=MOD_scrollz;\n\n        float p=(Perlin3D(ppos))*MOD_strength;\n\n        float dist=distance(vec3(MOD_x,MOD_y,MOD_z),modelPos);\n        float fallOff=1.0-smoothstep(MOD_fallOff*MOD_size,MOD_size,dist);\n\n        vec3 pnorm=norm;//normalize(pos.xyz);\n\n        #ifdef MOD_METH_MULNORM\n            pos.x+=p*pnorm.x*fallOff;\n            pos.y+=p*pnorm.y*fallOff;\n            pos.z+=p*pnorm.z*fallOff;\n        #endif\n\n        #ifdef MOD_METH_ADD_XYZ\n            pos.x+=p*fallOff;\n            pos.y+=p*fallOff;\n            pos.z+=p*fallOff;\n        #endif\n\n        #ifdef MOD_METH_ADD_Z\n            pos.z+=p*fallOff;\n        #endif\n    }\n\n    return pos;\n}\n\n// LOOK AT THIS./....\n//https://github.com/spite/perlin-experiments/blob/master/chrome.html\n\n\nvec3 MOD_calcNormal(vec3 pos,vec3 norm,vec3 tangent,vec3 bitangent)\n{\n    //http://diary.conewars.com/vertex-displacement-shader/\n    vec4 position=vec4(MOD_deform(pos,norm),1.0);\n\n    vec3 positionAndTangent = MOD_deform( pos + tangent * 0.1,norm );\n    vec3 positionAndBitangent = MOD_deform( pos + bitangent * 0.1,norm );\n\n    MOD_newTangent = ( positionAndTangent - position.xyz ); // leaves just 'tangent'\n    MOD_newBiTangent = ( positionAndBitangent - position.xyz ); // leaves just 'bitangent'\n\n    vec3 newNormal = cross( MOD_newTangent.xyz, MOD_newBiTangent.xyz );\n    return normalize(newNormal.xyz);\n\n}\n\n",
			t =
				'\n#ifndef MOD_WORLDSPACE\n    pos.xyz=MOD_deform(pos.xyz,norm.xyz);\n\n    #ifdef MOD_CALC_NORMALS\n        norm=MOD_calcNormal(pos.xyz,norm.xyz,tangent,bitangent);\n    #endif\n#endif\n\n#ifdef MOD_WORLDSPACE\n    pos.xyz=MOD_deform( (mMatrix*pos).xyz ,norm.xyz);\n\n    #ifdef MOD_CALC_NORMALS\n        norm=MOD_calcNormal( (mMatrix*pos).xyz,norm.xyz,tangent,bitangent);\n    #endif\n#endif\n\n#ifdef MOD_CALC_NORMALS\n    tangent=MOD_newTangent;\n    bitangent=MOD_newBiTangent;\n#endif',
			a = e.inTrigger('render'),
			r = e.outTrigger('trigger'),
			o = e.inValueFloat('Scale', 1),
			i = e.inValueFloat('Size', 1),
			l = e.inValueFloat('Strength', 1),
			s = e.inValueBool('Calc Normals', !0),
			u = e.inValueSlider('Falloff', 0.5),
			c = e.inValueSelect('Output', ['Mul Normal', 'Add XYZ', 'Add Z'], 'Add XYZ'),
			d = e.inValueFloat('x'),
			f = e.inValueFloat('y'),
			m = e.inValueFloat('z'),
			g = e.inValueFloat('Scroll X'),
			p = e.inValueFloat('Scroll Y'),
			v = e.inValueFloat('Scroll Z'),
			b = e.patch.cgl
		s.onChange = y
		var h = e.inValueBool('WorldSpace'),
			x = null,
			A = null
		;(c.onChange = S), (a.onLinkChanged = C)
		var O = null
		function y() {
			x && x.toggleDefine(A.prefix + 'CALC_NORMALS', s.get())
		}
		function C() {
			x && A && x.removeModule(A), (x = null)
		}
		function S() {
			x &&
				(x.toggleDefine(A.prefix + 'METH_ADD_XYZ', 'Add XYZ' == c.get()),
				x.toggleDefine(A.prefix + 'METH_ADD_Z', 'Add Z' == c.get()),
				x.toggleDefine(A.prefix + 'METH_MULNORM', 'Mul Normal' == c.get()))
		}
		function _() {
			x && (h.get() ? x.define(A.prefix + 'WORLDSPACE') : x.removeDefine(A.prefix + 'WORLDSPACE'))
		}
		;(h.onChange = _),
			(a.onTriggered = function() {
				if (b.getShader()) {
					var a,
						s,
						c,
						h,
						M = ((a = b.mMatrix), (s = a[8]), (c = a[9]), (h = a[10]), Math.hypot(s, c, h))
					O && O.setValue(M),
						CABLES.UI &&
							(b.pushModelMatrix(),
							CABLES.UI &&
								(gui.patch().isCurrentOp(e) || CABLES.UI.renderHelper) &&
								(b.pushModelMatrix(),
								mat4.translate(b.mMatrix, b.mMatrix, [d.get(), f.get(), m.get()]),
								CABLES.GL_MARKER.drawSphere(e, i.get()),
								b.popModelMatrix()),
							gui.patch().isCurrentOp(e) && gui.setTransformGizmo({ posX: d, posY: f, posZ: m }),
							b.popModelMatrix()),
						b.getShader() != x &&
							(x && C(),
							(x = b.getShader()),
							(A = x.addModule({ title: e.objName, name: 'MODULE_VERTEX_POSITION', srcHeadVert: n, srcBodyVert: t })),
							(i.uniform = new CGL.Uniform(x, 'f', A.prefix + 'size', i)),
							(l.uniform = new CGL.Uniform(x, 'f', A.prefix + 'strength', l)),
							(o.uniform = new CGL.Uniform(x, 'f', A.prefix + 'scale', o)),
							(g.uniform = new CGL.Uniform(x, 'f', A.prefix + 'scrollx', g)),
							(p.uniform = new CGL.Uniform(x, 'f', A.prefix + 'scrolly', p)),
							(v.uniform = new CGL.Uniform(x, 'f', A.prefix + 'scrollz', v)),
							(d.uniform = new CGL.Uniform(x, 'f', A.prefix + 'x', d)),
							(f.uniform = new CGL.Uniform(x, 'f', A.prefix + 'y', f)),
							(m.uniform = new CGL.Uniform(x, 'f', A.prefix + 'z', m)),
							(u.uniform = new CGL.Uniform(x, 'f', A.prefix + 'fallOff', u)),
							(O = new CGL.Uniform(x, 'f', A.prefix + 'mScale', 1)),
							S(),
							_(),
							y()),
						x && r.trigger()
				} else r.trigger()
			})
	}),
	(Ops.Gl.ShaderEffects.PerlinAreaDeform_v3.prototype = new CABLES.Op()),
	(CABLES.OPS['e4432ebd-d67c-46e2-b302-619d4f97daab'] = { f: Ops.Gl.ShaderEffects.PerlinAreaDeform_v3, objName: 'Ops.Gl.ShaderEffects.PerlinAreaDeform_v3' }),
	(Ops.Gl.Matrix.Transform = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('render'),
			t = e.inValue('posX', 0),
			a = e.inValue('posY', 0),
			r = e.inValue('posZ', 0),
			o = e.inValue('scale', 1),
			i = e.inValue('rotX', 0),
			l = e.inValue('rotY', 0),
			s = e.inValue('rotZ', 0),
			u = e.outTrigger('trigger')
		e.setPortGroup('Rotation', [i, l, s]), e.setPortGroup('Position', [t, a, r]), e.setPortGroup('Scale', [o]), e.setUiAxisPorts(t, a, r)
		const c = e.patch.cgl
		var d = vec3.create(),
			f = vec3.create(),
			m = mat4.create()
		mat4.identity(m)
		var g = !1,
			p = !1,
			v = !0,
			b = !0,
			h = !0
		function x() {
			mat4.identity(m),
				p && mat4.translate(m, m, d),
				0 !== i.get() && mat4.rotateX(m, m, i.get() * CGL.DEG2RAD),
				0 !== l.get() && mat4.rotateY(m, m, l.get() * CGL.DEG2RAD),
				0 !== s.get() && mat4.rotateZ(m, m, s.get() * CGL.DEG2RAD),
				g && mat4.scale(m, m, f),
				(h = !1)
		}
		;(i.onChange = l.onChange = s.onChange = function() {
			h = !0
		}),
			(t.onChange = a.onChange = r.onChange = function() {
				v = !0
			}),
			(o.onChange = function() {
				b = !0
			}),
			(n.onTriggered = function() {
				var n = !1
				v &&
					(!(function() {
						;(p = !1), (0 !== t.get() || 0 !== a.get() || 0 !== r.get()) && (p = !0)
						vec3.set(d, t.get(), a.get(), r.get()), (v = !1)
					})(),
					(n = !0)),
					b && ((g = !0), vec3.set(f, o.get(), o.get(), o.get()), (b = !1), (n = !0)),
					h && (n = !0),
					n && x(),
					c.pushModelMatrix(),
					mat4.multiply(c.mMatrix, c.mMatrix, m),
					u.trigger(),
					c.popModelMatrix(),
					CABLES.UI && gui.patch().isCurrentOp(e) && gui.setTransformGizmo({ posX: t, posY: a, posZ: r })
			}),
			(e.transform3d = function() {
				return { pos: [t, a, r] }
			}),
			x()
	}),
	(Ops.Gl.Matrix.Transform.prototype = new CABLES.Op()),
	(CABLES.OPS['650baeb1-db2d-4781-9af6-ab4e9d4277be'] = { f: Ops.Gl.Matrix.Transform, objName: 'Ops.Gl.Matrix.Transform' }),
	(Ops.Array.InfoArray2 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this
		var n = e.inArray('Array'),
			t = e.outValue('Num Items'),
			a = e.outValue('Min X'),
			r = e.outValue('Max X'),
			o = e.outValue('Average X'),
			i = e.outValue('Min Y'),
			l = e.outValue('Max Y'),
			s = e.outValue('Average Y')
		n.onChange = function() {
			var e = n.get(),
				u = 999999999,
				c = -999999999,
				d = 0,
				f = 999999999,
				m = -999999999,
				g = 0
			if ((t.set(0), e)) {
				t.set(e.length / 2)
				for (var p = 0; p < e.length; p += 2)
					(d += e[p]), (u = Math.min(u, e[p])), (c = Math.max(c, e[p])), (g += e[p + 1]), (f = Math.min(f, e[p + 1])), (m = Math.max(m, e[p + 1]))
				;(d /= e.length / 2), (g /= e.length / 2)
			}
			a.set(u), r.set(c), o.set(d), i.set(f), l.set(m), s.set(g)
		}
	}),
	(Ops.Array.InfoArray2.prototype = new CABLES.Op()),
	(CABLES.OPS['0ea5fb62-94e7-4a1b-928f-bdcab373c022'] = { f: Ops.Array.InfoArray2, objName: 'Ops.Array.InfoArray2' }),
	(Ops.Json.CsvArray = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inUrl('file'),
			t = e.outArray('result'),
			a = e.outNumber('num items')
		n.onChange = function() {
			CABLES.ajax(e.patch.getFilePath(n.val), function(e, n, r) {
				try {
					var o = JSON.parse(n)
					t.set(o), a.set(o.length)
				} catch (e) {
					console.log(e), t.set(null), a.set(0)
				}
			})
		}
	}),
	(Ops.Json.CsvArray.prototype = new CABLES.Op()),
	(CABLES.OPS['2e76c1f8-19ac-4e9d-8db8-58b2f9fbc1d3'] = { f: Ops.Json.CsvArray, objName: 'Ops.Json.CsvArray' }),
	(Ops.Anim.SimpleAnim = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('exe'),
			t = e.inTriggerButton('reset'),
			a = e.inTriggerButton('rewind'),
			r = e.inValueFloat('start', 0),
			o = e.inValueFloat('end', 1),
			i = e.inValueFloat('duration', 0.5),
			l = e.inValueBool('loop'),
			s = e.inValueBool('Wait for Reset', !0),
			u = e.outTrigger('Next'),
			c = e.outValue('result'),
			d = e.outValue('finished'),
			f = e.outTrigger('Finished Trigger'),
			m = new CABLES.Anim()
		var g = !1
		m.createPort(e, 'easing', v)
		var p = -1
		function v() {
			3 != m.keys.length && (m.setValue(0, 0), m.setValue(1, 0), m.setValue(2, 0)),
				(m.keys[0].time = CABLES.now() / 1e3),
				(m.keys[0].value = r.get()),
				m.defaultEasing != p && m.keys[0].setEasing(m.defaultEasing),
				(m.keys[1].time = i.get() + CABLES.now() / 1e3),
				(m.keys[1].value = o.get()),
				m.defaultEasing != p && m.keys[1].setEasing(m.defaultEasing),
				(m.loop = l.get()),
				m.loop
					? ((m.keys[2].time = 2 * i.get() + CABLES.now() / 1e3), (m.keys[2].value = r.get()), m.defaultEasing != p && m.keys[2].setEasing(m.defaultEasing))
					: ((m.keys[2].time = m.keys[1].time), (m.keys[2].value = m.keys[1].value), m.defaultEasing != p && m.keys[2].setEasing(m.defaultEasing)),
				d.set(!1),
				(p = m.defaultEasing)
		}
		;(l.onChange = v),
			v(),
			(i.onChange = v),
			(t.onTriggered = function() {
				;(g = !0), v()
			}),
			(a.onTriggered = function() {
				;(m.keys[0].time = CABLES.now() / 1e3),
					(m.keys[0].value = r.get()),
					(m.keys[1].time = CABLES.now() / 1e3),
					(m.keys[1].value = r.get()),
					(m.keys[2].time = CABLES.now() / 1e3),
					(m.keys[2].value = r.get()),
					c.set(r.get())
			}),
			(n.onTriggered = function() {
				if (!s.get() || g) {
					var e = CABLES.now() / 1e3,
						n = m.getValue(e)
					c.set(n), m.hasEnded(e) && (d.get() || f.trigger(), d.set(!0)), u.trigger()
				} else c.set(r.get())
			})
	}),
	(Ops.Anim.SimpleAnim.prototype = new CABLES.Op()),
	(CABLES.OPS['5b244b6e-c505-4743-b2cc-8119ef720028'] = { f: Ops.Anim.SimpleAnim, objName: 'Ops.Anim.SimpleAnim' }),
	(Ops.Anim.Timer_v2 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inValue('Speed', 1),
			t = e.inValueBool('Play', !0),
			a = e.inTriggerButton('Reset'),
			r = e.inValueBool('Sync to timeline', !1),
			o = e.outValue('Time')
		e.setPortGroup('Controls', [t, a, n])
		const i = new CABLES.Timer()
		var l = null,
			s = 0,
			u = !1
		function c() {
			t.get() ? (i.play(), e.patch.addOnAnimFrame(e)) : (i.pause(), e.patch.removeOnAnimFrame(e))
		}
		;(t.onChange = c),
			c(),
			(a.onTriggered = function() {
				;(s = 0), (l = null), i.setTime(0), o.set(0)
			}),
			(r.onChange = function() {
				;(u = r.get()), t.setUiAttribs({ greyout: u }), a.setUiAttribs({ greyout: u })
			}),
			(e.onAnimFrame = function(e) {
				if (i.isPlaying())
					if (void 0 !== CABLES.overwriteTime) o.set(CABLES.overwriteTime * n.get())
					else if (u) o.set(e * n.get())
					else {
						i.update()
						var t = i.get()
						if (null === l) return void (l = t)
						var a = Math.abs(t - l)
						;(l = t), (s += a * n.get()) != s && (s = 0), o.set(s)
					}
			})
	}),
	(Ops.Anim.Timer_v2.prototype = new CABLES.Op()),
	(CABLES.OPS['aac7f721-208f-411a-adb3-79adae2e471a'] = { f: Ops.Anim.Timer_v2, objName: 'Ops.Anim.Timer_v2' }),
	(Ops.Gl.Shader.MatCapMaterialNew = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n =
				'\n{{MODULES_HEAD}}\n\nIN vec3 norm;\nIN vec2 texCoord;\nUNI sampler2D tex;\nIN vec3 vNorm;\nUNI mat4 viewMatrix;\n\nUNI float opacity;\n\nUNI float r;\nUNI float g;\nUNI float b;\n\nIN vec3 e;\n\n\n\n#ifdef HAS_DIFFUSE_TEXTURE\n   UNI sampler2D texDiffuse;\n#endif\n\n#ifdef USE_SPECULAR_TEXTURE\n   UNI sampler2D texSpec;\n   UNI sampler2D texSpecMatCap;\n#endif\n\n#ifdef HAS_AO_TEXTURE\n    UNI sampler2D texAo;\n    UNI float aoIntensity;\n#endif\n\n#ifdef HAS_NORMAL_TEXTURE\n   IN vec3 vBiTangent;\n   IN vec3 vTangent;\n\n   UNI sampler2D texNormal;\n   UNI mat4 normalMatrix;\n\n   vec2 vNormt;\n#endif\n\n#ifdef HAS_TEXTURE_OPACITY\n    UNI sampler2D texOpacity;\n#endif\n\n#ifdef CALC_SSNORMALS\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    IN vec3 eye_relative_pos;\n#endif\n\n\nconst float normalScale=0.4;\n\nconst vec2 invAtan = vec2(0.1591, 0.3183);\nvec2 sampleSphericalMap(vec3 direction)\n{\n    vec2 uv = vec2(atan(direction.z, direction.x), asin(direction.y));\n    uv *= invAtan;\n    uv += 0.5;\n    return uv;\n}\n\n\nvoid main()\n{\n    vec2 vnOrig=vNorm.xy;\n    vec2 vn=vNorm.xy;\n\n    #ifdef PER_PIXEL\n\n        vec3 ref = reflect( e, vNorm );\n        // ref=(ref);\n\n        // ref.z+=1.;\n        // ref=normalize(ref);\n\n        // float m = 2. * sqrt(\n        //     pow(ref.x, 2.0)+\n        //     pow(ref.y, 2.0)+\n        //     pow(ref.z+1., 2.0)\n        // );\n\n        float m = 2.58284271247461903 * sqrt( (length(ref)) );\n\n        vn.xy = ref.xy / m + 0.5;\n\n\n    #endif\n\n\n\n    #ifdef HAS_TEXTURES\n        vec2 texCoords=texCoord;\n        {{MODULE_BEGIN_FRAG}}\n    #endif\n\n    #ifdef CALC_SSNORMALS\n    \tvec3 dFdxPos = dFdx( eye_relative_pos );\n    \tvec3 dFdyPos = dFdy( eye_relative_pos );\n    \tvec3 ssn = normalize( cross(dFdxPos,dFdyPos ));\n\n        vec3 rr = reflect( e, ssn );\n        float ssm = 2. * sqrt(\n            pow(rr.x, 2.0)+\n            pow(rr.y, 2.0)+\n            pow(rr.z + 1.0, 2.0)\n        );\n\n\n        vn = (rr.xy / ssm + 0.5);\n\n        vn.t=clamp(vn.t, 0.0, 1.0);\n        vn.s=clamp(vn.s, 0.0, 1.0);\n\n        // float dst = dot(abs(coord-center), vec2(1.0));\n        // float aaf = fwidth(dst);\n        // float alpha = smoothstep(radius - aaf, radius, dst);\n\n    #endif\n\n   #ifdef HAS_NORMAL_TEXTURE\n        vec3 tnorm=texture( texNormal, texCoord ).xyz * 2.0 - 1.0;\n\n        tnorm = normalize(tnorm*normalScale);\n\n        vec3 tangent;\n        vec3 binormal;\n\n        #ifdef CALC_TANGENT\n            vec3 c1 = cross(norm, vec3(0.0, 0.0, 1.0));\n//            vec3 c2 = cross(norm, vec3(0.0, 1.0, 0.0));\n//            if(length(c1)>length(c2)) tangent = c2;\n//                else tangent = c1;\n            tangent = c1;\n            tangent = normalize(tangent);\n            binormal = cross(norm, tangent);\n            binormal = normalize(binormal);\n        #endif\n\n        #ifndef CALC_TANGENT\n            tangent=normalize(vTangent);\n//            tangent.y*=-13.0;\n//            binormal=vBiTangent*norm;\n//            binormal.z*=-1.0;\n//            binormal=normalize(binormal);\n            binormal=normalize( cross( normalize(norm), normalize(vBiTangent) ));\n        // vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n        #endif\n\n        tnorm=normalize(tangent*tnorm.x + binormal*tnorm.y + norm*tnorm.z);\n\n        // vec3 n = normalize( mat3(normalMatrix) * (norm+tnorm*normalScale) );\n        vec3 n = normalize( mat3(normalMatrix) * (norm+tnorm*normalScale) );\n\n        vec3 re = reflect( e, n );\n        float m = 2. * sqrt(\n            pow(re.x, 2.0)+\n            pow(re.y, 2.0)+\n            pow(re.z + 1.0, 2.0)\n        );\n\n        vn = (re.xy / m + 0.5);\n\n    #endif\n\n// vn=clamp(vn,0.0,1.0);\n\n\n\n\n\n    vec4 col = texture( tex, vn );\n\n    #ifdef HAS_DIFFUSE_TEXTURE\n        col = col*texture( texDiffuse, texCoords);\n    #endif\n\n    col.r*=r;\n    col.g*=g;\n    col.b*=b;\n\n\n    #ifdef HAS_AO_TEXTURE\n        col = col*\n            mix(\n                vec4(1.0,1.0,1.0,1.0),\n                texture( texAo, texCoords),\n                aoIntensity\n                );\n    #endif\n\n    #ifdef USE_SPECULAR_TEXTURE\n        vec4 spec = texture( texSpecMatCap, vn );\n        spec*= texture( texSpec, texCoords );\n        col+=spec;\n    #endif\n\n    col.a*=opacity;\n    #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                texCoords=vec2(texCoord.s,1.0-texCoord.t);\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,texCoords).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,texCoords).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,texCoords).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,texCoords).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,texCoords).b;\n            #endif\n            // #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n\n    // #ifdef PER_PIXEL\n\n\n    //     vec2 nn=(vn-0.5)*2.0;\n    //     float ll=length( nn );\n    //     // col.r=0.0;\n    //     // col.b=0.0;\n    //     // col.a=1.0;\n\n    //     // if(ll>0.49 && ll<0.51) col=vec4(0.0,1.0,0.0,1.0);\n    //     // if(ll>0. ) col=vec4(0.0,1.0,0.0,1.0);\n    //     // col=vec4(vn,0.0,1.0);\n\n\n    //     float dd=(vn.x-0.5)*(vn.x-0.5) + (vn.y-0.5)*(vn.y-0.5);\n    //     dd*=4.0;\n\n    //     if(dd>0.94)\n    //     {\n    //     col=vec4(0.0,1.0,0.0,1.0);\n    //         // nn*=0.5;\n    //         // nn+=0.5;\n    //         // nn*=2.0;\n    //         // vn=nn;\n\n    //         // // dd=1.0;\n    //     }\n    //     // else dd=0.0;\n\n    //     // col=vec4(vec3(dd),1.0);\n\n    //     // if(dd>0.95) col=vec4(1.0,0.0,0.0,1.0);\n\n    //     // vec2 test=(vec2(1.0,1.0)-0.5)*2.0;\n    //     // col=vec4(0.0,0.0,length(test),1.0);\n\n    // #endif\n\n\n\n    outColor = col;\n\n}',
			t =
				'\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\n\n#ifdef HAS_NORMAL_TEXTURE\n\n   OUT vec3 vBiTangent;\n   OUT vec3 vTangent;\n#endif\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec3 vNorm;\nOUT vec3 e;\n\nUNI vec2 texOffset;\nUNI vec2 texRepeat;\n\n\n#ifndef INSTANCING\n    UNI mat4 normalMatrix;\n#endif\n\n\n{{MODULES_HEAD}}\n\n#ifdef CALC_SSNORMALS\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    OUT vec3 eye_relative_pos;\n#endif\n\nUNI vec3 camPos;\n\n\nvoid main()\n{\n    texCoord=texRepeat*attrTexCoord+texOffset;\n    norm=attrVertNormal;\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n\n    #ifdef HAS_NORMAL_TEXTURE\n        vTangent=attrTangent;\n        vBiTangent=attrBiTangent;\n    #endif\n\n    vec4 pos = vec4( vPosition, 1. );\n\n    {{MODULE_VERTEX_POSITION}}\n\n\n    mvMatrix= viewMatrix * mMatrix;\n\n    #ifdef INSTANCING\n        mat4 normalMatrix=mvMatrix;//inverse(transpose(mvMatrix));\n    #endif\n\n\n    mat3 wmMatrix=mat3(mMatrix);\n\n    e = normalize( vec3( mvMatrix * pos )  );\n    vec3 n = normalize( mat3(normalMatrix*viewMatrix) * (norm) );\n\n    #ifdef PER_PIXEL\n        vNorm=n;\n    #endif\n    #ifndef PER_PIXEL\n        //matcap\n        vec3 r = reflect( e, n );\n\n        // float m = 2. * sqrt(\n        //     pow(r.x, 2.0)+\n        //     pow(r.y, 2.0)+\n        //     pow(r.z + 1.0, 2.0)\n        // );\n\n        float m = 2.58284271247461903 * sqrt(length(r));\n\n        vNorm.xy = r.xy / m + 0.5;\n\n    #endif\n\n\n\n    #ifdef DO_PROJECT_COORDS_XY\n       texCoord=(projMatrix * mvMatrix*pos).xy*0.1;\n    #endif\n\n    #ifdef DO_PROJECT_COORDS_YZ\n       texCoord=(projMatrix * mvMatrix*pos).yz*0.1;\n    #endif\n\n    #ifdef DO_PROJECT_COORDS_XZ\n        texCoord=(projMatrix * mvMatrix*pos).xz*0.1;\n    #endif\n\n    #ifdef CALC_SSNORMALS\n        eye_relative_pos = (mvMatrix * pos ).xyz - camPos;\n    #endif\n\n\n\n   gl_Position = projMatrix * mvMatrix * pos;\n\n}',
			a = e.inTrigger('render'),
			r = e.inTexture('MatCap'),
			o = e.inTexture('Diffuse'),
			i = e.inTexture('Normal'),
			l = e.inTexture('Specular'),
			s = e.inTexture('Specular MatCap'),
			u = e.inTexture('AO Texture'),
			c = e.inTexture('Opacity Texture'),
			d = e.inValueSlider('r', 1),
			f = e.inValueSlider('g', 1),
			m = e.inValueSlider('b', 1),
			g = e.inValueSlider('Opacity', 1),
			p = e.inValueSlider('AO Intensity', 1),
			v = e.inValue('Repeat X', 1),
			b = e.inValue('Repeat Y', 1),
			h = e.inValue('Offset X', 0),
			x = e.inValue('Offset Y', 0),
			A = e.inValueBool('calc normal tangents', !0),
			O = e.inValueSelect('projectCoords', ['no', 'xy', 'yz', 'xz'], 'no'),
			y = e.inValueBool('Screen Space Normals'),
			C = e.outTrigger('trigger'),
			S = e.outObject('Shader')
		d.setUiAttribs({ colorPick: !0 })
		const _ = e.inSwitch('Alpha Mask Source', ['Luminance', 'R', 'G', 'B', 'A'], 'Luminance')
		_.setUiAttribs({ greyout: !0 })
		const M = e.inValueBool('Opacity TexCoords Transform', !1),
			T = e.inValueBool('Discard Transparent Pixels')
		e.setPortGroup('Texture Opacity', [_, M, T]), e.setPortGroup('Texture maps', [o, i, l, s, u, c]), e.setPortGroup('Color', [d, f, m, g])
		const L = e.patch.cgl,
			I = new CGL.Shader(L, 'MatCapMaterialNew')
		new CGL.Uniform(I, 'f', 'opacity', g)
		I.setModules(['MODULE_VERTEX_POSITION', 'MODULE_COLOR', 'MODULE_BEGIN_FRAG']), I.setSource(t, n), S.set(I)
		var E = null,
			P = null,
			N = null,
			w = null,
			j = null,
			k = null
		new CGL.Uniform(I, '2f', 'texOffset', h, x), new CGL.Uniform(I, '2f', 'texRepeat', v, b)
		new CGL.Uniform(I, 'f', 'aoIntensity', p)
		function G() {
			A.get() ? I.define('CALC_TANGENT') : I.removeDefine('CALC_TANGENT')
		}
		function z() {
			if (r.get()) {
				if (null !== E) return
				I.removeUniform('tex'), (E = new CGL.Uniform(I, 't', 'tex', 0))
			} else {
				if (!CGL.defaultTextureMap) {
					for (var e = new Uint8Array(1024), n = 0; n < 16; n++)
						for (var t = 0; t < 16; t++) {
							var a = 16 * t
							;(a *= Math.min(1, (n + t / 3) / 8)),
								(e[4 * (n + 16 * t) + 0] = e[4 * (n + 16 * t) + 1] = e[4 * (n + 16 * t) + 2] = a),
								(e[4 * (n + 16 * t) + 3] = 255)
						}
					;(CGL.defaultTextureMap = new CGL.Texture(L)), CGL.defaultTextureMap.initFromData(e, 16, 16)
				}
				r.set(CGL.defaultTextureMap), I.removeUniform('tex'), (E = new CGL.Uniform(I, 't', 'tex', 0))
			}
		}
		function D() {
			'Alpha Channel' == _.get() ? I.define('ALPHA_MASK_ALPHA') : I.removeDefine('ALPHA_MASK_ALPHA'),
				'Luminance' == _.get() ? I.define('ALPHA_MASK_LUMI') : I.removeDefine('ALPHA_MASK_LUMI'),
				'R' == _.get() ? I.define('ALPHA_MASK_R') : I.removeDefine('ALPHA_MASK_R'),
				'G' == _.get() ? I.define('ALPHA_MASK_G') : I.removeDefine('ALPHA_MASK_G'),
				'B' == _.get() ? I.define('ALPHA_MASK_B') : I.removeDefine('ALPHA_MASK_B')
		}
		;(m.uniform = new CGL.Uniform(I, 'f', 'b', m)),
			(f.uniform = new CGL.Uniform(I, 'f', 'g', f)),
			(d.uniform = new CGL.Uniform(I, 'f', 'r', d)),
			(A.onChange = G),
			G(),
			z(),
			(y.onChange = function() {
				y.get()
					? (L.glVersion < 2 && (L.gl.getExtension('OES_standard_derivatives'), I.enableExtension('GL_OES_standard_derivatives')), I.define('CALC_SSNORMALS'))
					: I.removeDefine('CALC_SSNORMALS')
			}),
			(O.onChange = function() {
				I.toggleDefine('DO_PROJECT_COORDS_XY', 'xy' == O.get()),
					I.toggleDefine('DO_PROJECT_COORDS_YZ', 'yz' == O.get()),
					I.toggleDefine('DO_PROJECT_COORDS_XZ', 'xz' == O.get())
			}),
			(r.onChange = z),
			(o.onChange = function() {
				if (o.get()) {
					if (null !== P) return
					I.define('HAS_DIFFUSE_TEXTURE'), I.removeUniform('texDiffuse'), (P = new CGL.Uniform(I, 't', 'texDiffuse', 1))
				} else I.removeDefine('HAS_DIFFUSE_TEXTURE'), I.removeUniform('texDiffuse'), (P = null)
			}),
			(i.onChange = function() {
				if (i.get()) {
					if (null !== N) return
					I.define('HAS_NORMAL_TEXTURE'), I.removeUniform('texNormal'), (N = new CGL.Uniform(I, 't', 'texNormal', 2))
				} else I.removeDefine('HAS_NORMAL_TEXTURE'), I.removeUniform('texNormal'), (N = null)
			}),
			(u.onChange = function() {
				if (u.get()) {
					if (null !== k) return
					I.define('HAS_AO_TEXTURE'), I.removeUniform('texAo'), (k = new CGL.Uniform(I, 't', 'texAo', 5))
				} else I.removeDefine('HAS_AO_TEXTURE'), I.removeUniform('texAo'), (k = null)
			}),
			(l.onChange = s.onChange = function() {
				if (l.get() && s.get()) {
					if (null !== w) return
					I.define('USE_SPECULAR_TEXTURE'),
						I.removeUniform('texSpec'),
						I.removeUniform('texSpecMatCap'),
						(w = new CGL.Uniform(I, 't', 'texSpec', 3)),
						(j = new CGL.Uniform(I, 't', 'texSpecMatCap', 4))
				} else I.removeDefine('USE_SPECULAR_TEXTURE'), I.removeUniform('texSpec'), I.removeUniform('texSpecMatCap'), (w = null), (j = null)
			}),
			(_.onChange = D)
		var B = null
		;(c.onChange = function() {
			if (c.get()) {
				if (null !== B) return
				I.removeUniform('texOpacity'),
					I.define('HAS_TEXTURE_OPACITY'),
					B || (B = new CGL.Uniform(I, 't', 'texOpacity', 6)),
					_.setUiAttribs({ greyout: !1 }),
					T.setUiAttribs({ greyout: !1 }),
					M.setUiAttribs({ greyout: !1 })
			} else
				I.removeUniform('texOpacity'),
					I.removeDefine('HAS_TEXTURE_OPACITY'),
					(B = null),
					_.setUiAttribs({ greyout: !0 }),
					T.setUiAttribs({ greyout: !0 }),
					M.setUiAttribs({ greyout: !0 })
			D()
		}),
			(T.onChange = function() {
				T.get() ? I.define('DISCARDTRANS') : I.removeDefine('DISCARDTRANS')
			}),
			(M.onChange = function() {
				M.get() ? I.define('TRANSFORMALPHATEXCOORDS') : I.removeDefine('TRANSFORMALPHATEXCOORDS')
			}),
			(e.onDelete = function() {
				CGL.defaultTextureMap && (CGL.defaultTextureMap.delete(), (CGL.defaultTextureMap = null))
			}),
			(e.preRender = function() {
				I.bind()
			}),
			(a.onTriggered = function() {
				I.popTextures(),
					r.get() && E && I.pushTexture(E, r.get().tex),
					o.get() && P && I.pushTexture(P, o.get().tex),
					i.get() && N && I.pushTexture(N, i.get().tex),
					l.get() && w && I.pushTexture(w, l.get().tex),
					s.get() && j && I.pushTexture(j, s.get().tex),
					u.get() && k && I.pushTexture(k, u.get().tex),
					c.get() && B && I.pushTexture(B, c.get().tex),
					L.setShader(I),
					C.trigger(),
					L.setPreviousShader()
			})
	}),
	(Ops.Gl.Shader.MatCapMaterialNew.prototype = new CABLES.Op()),
	(CABLES.OPS['7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad'] = { f: Ops.Gl.Shader.MatCapMaterialNew, objName: 'Ops.Gl.Shader.MatCapMaterialNew' }),
	(Ops.Gl.Texture = function() {
		CABLES.Op.apply(this, arguments)
		const e = this
		var n = e.inFile('file', 'image'),
			t = e.inSwitch('filter', ['nearest', 'linear', 'mipmap']),
			a = e.inValueSelect('wrap', ['repeat', 'mirrored repeat', 'clamp to edge'], 'clamp to edge'),
			r = e.inValueBool('flip', !1),
			o = e.inValueBool('unpackPreMultipliedAlpha', !1),
			i = e.inSwitch('Anisotropic', [0, 1, 2, 4, 8, 16], 0),
			l = e.outTexture('texture'),
			s = e.outValue('width'),
			u = e.outValue('height'),
			c = e.outValue('loading'),
			d = e.outValue('Aspect Ratio')
		e.setPortGroup('Size', [s, u]), o.hidePort(), e.toWorkPortsNeedToBeLinked(l)
		const f = e.patch.cgl
		var m = 0,
			g = 0,
			p = 0
		;(n.onChange = r.onChange = function() {
			A()
		}),
			(i.onChange = t.onChange = function() {
				'nearest' == t.get()
					? (m = CGL.Texture.FILTER_NEAREST)
					: 'linear' == t.get()
					? (m = CGL.Texture.FILTER_LINEAR)
					: 'mipmap' == t.get()
					? (m = CGL.Texture.FILTER_MIPMAP)
					: 'Anisotropic' == t.get() && (m = CGL.Texture.FILTER_ANISOTROPIC)
				;(p = parseFloat(i.get())), A()
			}),
			(a.onChange = function() {
				'repeat' == a.get() && (g = CGL.Texture.WRAP_REPEAT)
				'mirrored repeat' == a.get() && (g = CGL.Texture.WRAP_MIRRORED_REPEAT)
				'clamp to edge' == a.get() && (g = CGL.Texture.WRAP_CLAMP_TO_EDGE)
				A()
			}),
			(o.onChange = function() {
				A()
			})
		var v = 0
		t.set('mipmap'), a.set('repeat'), l.set(CGL.Texture.getEmptyTexture(f))
		var b = function() {
				var e = CGL.Texture.getTempTexture(f)
				l.set(e)
			},
			h = null,
			x = null
		function A(e) {
			clearTimeout(v),
				(v = setTimeout(function() {
					O(e)
				}, 30))
		}
		function O(t) {
			h || (h = f.patch.loading.start('textureOp', n.get()))
			var a = e.patch.getFilePath(String(n.get()))
			t && (a += '?rnd=' + CABLES.generateUUID()),
				n.get() && n.get().length > 1
					? (c.set(!0),
					  x && x.delete(),
					  (x = CGL.Texture.load(
							f,
							a,
							function(t) {
								if (t) return b(), e.uiAttr({ error: 'could not load texture "' + n.get() + '"' }), void f.patch.loading.finished(h)
								e.uiAttr({ error: null }),
									l.set(x),
									s.set(x.width),
									u.set(x.height),
									d.set(x.width / x.height),
									x.isPowerOfTwo()
										? e.uiAttr({ hint: null, warning: null })
										: e.uiAttr({ hint: 'texture dimensions not power of two! - texture filtering will not work.', warning: null }),
									l.set(null),
									l.set(x)
							},
							{ anisotropic: p, wrap: g, flip: r.get(), unpackAlpha: o.get(), filter: m }
					  )),
					  l.set(null),
					  l.set(x),
					  l.get(),
					  f.patch.loading.finished(h))
					: (f.patch.loading.finished(h), b())
		}
		e.onFileChanged = function(e) {
			n.get() && n.get().indexOf(e) > -1 && (l.set(null), l.set(CGL.Texture.getTempTexture(f)), O(!0))
		}
	}),
	(Ops.Gl.Texture.prototype = new CABLES.Op()),
	(CABLES.OPS['466394d4-6c1a-4e5d-a057-0063ab0f096a'] = { f: Ops.Gl.Texture, objName: 'Ops.Gl.Texture' }),
	(Ops.Gl.Meshes.Sphere_v2 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = 2 * Math.PI,
			t = e.patch.cgl,
			a = e.inTrigger('render'),
			r = e.inValue('radius', 1),
			o = e.inValue('stacks', 32),
			i = e.inValue('slices', 32),
			l = e.inValueSlider('Filloffset', 1),
			s = e.inValueBool('Render', !0),
			u = e.outTrigger('trigger'),
			c = e.outObject('geometry'),
			d = vec3.fromValues(0, 1, 0),
			f = vec3.fromValues(1, 0, 0)
		var m,
			g = new CGL.Geometry('Sphere'),
			p = vec3.create(),
			v = vec3.create(),
			b = !0
		;(a.onTriggered = function() {
			b &&
				(function() {
					const e = Math.max(o.get(), 2),
						a = Math.max(i.get(), 3),
						s = Math.min(Math.max(l.get() * e, 1), e),
						u = r.get()
					var h,
						x,
						A,
						O,
						y,
						C,
						S,
						_,
						M,
						T,
						L,
						I = [],
						E = [],
						P = [],
						N = [],
						w = [],
						j = []
					for (T = S = 0; T < e + 1; T++) {
						for (M = (T / e - 0.5) * Math.PI, x = Math.sin(M), C = Math.cos(M), L = 0; L < a + 1; L++)
							(_ = (L / a) * n),
								(h = Math.cos(_) * C),
								(A = Math.sin(_) * C),
								I.push(h * u, x * u, A * u),
								E.push(L / a, T / (e + 1)),
								(O = Math.sqrt(h * h + x * x + A * A)),
								P.push((p[0] = h / O), (p[1] = x / O), (p[2] = A / O)),
								(y = x == O ? f : d),
								vec3.cross(v, p, y),
								vec3.normalize(v, v),
								Array.prototype.push.apply(N, v),
								vec3.cross(v, v, p),
								Array.prototype.push.apply(w, v)
						if (!(0 == T || T > s)) {
							for (L = 0; L < a; L++, S++) j.push(S, S + 1, S + a + 1, S + 1, S + a + 2, S + a + 1)
							S++
						}
					}
					g.clear(),
						(g.vertices = I),
						(g.texCoords = E),
						(g.vertexNormals = P),
						(g.tangents = N),
						(g.biTangents = w),
						(g.verticesIndices = j),
						c.set(null),
						c.set(g),
						m ? m.setGeom(g) : (m = new CGL.Mesh(t, g)),
						(b = !1)
				})(),
				s.get() && m.render(t.getShader()),
				u.trigger()
		}),
			(o.onChange = i.onChange = l.onChange = r.onChange = function() {
				b = !0
			}),
			(e.onDelete = function() {
				m && m.dispose()
			})
	}),
	(Ops.Gl.Meshes.Sphere_v2.prototype = new CABLES.Op()),
	(CABLES.OPS['450b4d68-2278-4d9f-9849-0abdfa37ef69'] = { f: Ops.Gl.Meshes.Sphere_v2, objName: 'Ops.Gl.Meshes.Sphere_v2' }),
	(Ops.Array.IteratorArray3 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inTrigger('Execute'),
			t = e.inArray('Array'),
			a = e.inValue('Step'),
			r = e.outTrigger('Trigger'),
			o = e.outValue('Index'),
			i = e.outValue('Value 1'),
			l = e.outValue('Value 2'),
			s = e.outValue('Value 3')
		var u = t.get() || [],
			c = 1
		;(a.onChange = f), f()
		var d = 0
		function f() {
			;(c = a.get() || 1) < 1 && (c = 1), (c *= 3)
		}
		;(t.onChange = function() {
			u = t.get() || []
		}),
			(n.onTriggered = function() {
				d = 0
				for (var e = 0, n = u.length; e < n; e += c) o.set(d), i.set(u[e + 0]), l.set(u[e + 1]), s.set(u[e + 2]), r.trigger(), d++
			})
	}),
	(Ops.Array.IteratorArray3.prototype = new CABLES.Op()),
	(CABLES.OPS['3f7db864-7409-418f-8c03-b2c966c050b3'] = { f: Ops.Array.IteratorArray3, objName: 'Ops.Array.IteratorArray3' }),
	(Ops.Gl.Meshes.TextMesh_v2 = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n =
				'UNI sampler2D tex;\n#ifdef DO_MULTEX\n    UNI sampler2D texMul;\n#endif\n#ifdef DO_MULTEX_MASK\n    UNI sampler2D texMulMask;\n#endif\nIN vec2 texCoord;\nIN vec2 texPos;\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\nvoid main()\n{\n   vec4 col=texture(tex,texCoord);\n   col.a=col.r;\n   col.r*=r;\n   col.g*=g;\n   col.b*=b;\n   col*=a;\n   if(col.a==0.0)discard;\n\n    #ifdef DO_MULTEX\n        col*=texture(texMul,texPos);\n    #endif\n\n    #ifdef DO_MULTEX_MASK\n        col*=texture(texMulMask,texPos).r;\n    #endif\n\n\n   outColor=col;\n}',
			t =
				'UNI sampler2D tex;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nUNI float scale;\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN mat4 instMat;\nIN vec2 attrTexOffsets;\nIN vec2 attrTexSize;\nIN vec2 attrTexPos;\nOUT vec2 texPos;\n\nOUT vec2 texCoord;\n\nvoid main()\n{\n   texCoord=(attrTexCoord*(attrTexSize)) + attrTexOffsets;\n   mat4 instModelMat=instMat;\n   instModelMat[3][0]*=scale;\n\n   texPos=attrTexPos;\n\n   vec4 vert=vec4( vPosition.x*(attrTexSize.x/attrTexSize.y)*scale,vPosition.y*scale,vPosition.z*scale, 1. );\n\n   mat4 mvMatrix=viewMatrix * modelMatrix * instModelMat;\n\n   #ifndef BILLBOARD\n       gl_Position = projMatrix * mvMatrix * vert;\n   #endif\n}\n',
			a = e.inTrigger('Render'),
			r = e.inString('Text', 'cables'),
			o = e.inValueFloat('Scale', 1),
			i = e.inString('Font', 'Arial'),
			l = e.inValueSelect('align', ['left', 'center', 'right'], 'center'),
			s = e.inValueSelect('vertical align', ['Top', 'Middle', 'Bottom'], 'Middle'),
			u = e.inValueFloat('Line Height', 1),
			c = e.inValueFloat('Letter Spacing'),
			d = e.inTexture('Texture Color'),
			f = e.inTexture('Texture Mask'),
			m = e.outTrigger('Next'),
			g = e.outTexture('texture'),
			p = e.outNumber('Total Lines', 0),
			v = e.outValue('Font Available', 0),
			b = e.patch.cgl
		e.setPortGroup('Masking', [d, f])
		const h = CGL.Texture.FILTER_MIPMAP,
			x = 1024
		var A = !1,
			O = !0
		l.onChange = r.onChange = u.onChange = function() {
			O = !0
		}
		var y = null
		CABLES.OpTextureMeshCanvas = {}
		var C = 0,
			S = null,
			_ = !0,
			M = !0
		function T() {
			var e = A
			try {
				A = document.fonts.check('20px ' + i.get())
			} catch (e) {
				console.log(e)
			}
			!e && A && (v.set(!0), (M = !0), (_ = !0)), A || setTimeout(T, 250)
		}
		function L() {
			if (((y = '' + i.get()), CABLES.OpTextureMeshCanvas.hasOwnProperty(y))) return CABLES.OpTextureMeshCanvas[y]
			var e = document.createElement('canvas')
			;(e.dataset.font = i.get()),
				(e.id = 'texturetext_' + CABLES.generateUUID()),
				(e.style.display = 'none'),
				document.getElementsByTagName('body')[0].appendChild(e)
			var n = e.getContext('2d')
			return (CABLES.OpTextureMeshCanvas[y] = { ctx: n, canvas: e, chars: {}, characters: '?', fontSize: 320 }), CABLES.OpTextureMeshCanvas[y]
		}
		;(f.onChange = d.onChange = function() {
			I.toggleDefine('DO_MULTEX', d.get()), I.toggleDefine('DO_MULTEX_MASK', f.get())
		}),
			g.set(null),
			(i.onChange = function() {
				;(M = !0), (_ = !0), T()
			}),
			(s.onChange = function() {
				'Middle' == s.get() ? (C = 0) : 'Top' == s.get() ? (C = 1) : 'Bottom' == s.get() && (C = 2)
			}),
			(e.onDelete = function() {
				y && CABLES.OpTextureMeshCanvas[y] && CABLES.OpTextureMeshCanvas[y].canvas.remove()
			})
		var I = new CGL.Shader(b, 'TextMesh')
		I.setSource(t, n)
		new CGL.Uniform(I, 't', 'tex', 0), new CGL.Uniform(I, 't', 'texMul', 1), new CGL.Uniform(I, 't', 'texMulMask', 2), new CGL.Uniform(I, 'f', 'scale', o)
		const E = e.inValueSlider('r', 1),
			P = e.inValueSlider('g', 1),
			N = e.inValueSlider('b', 1),
			w = e.inValueSlider('a', 1)
		new CGL.Uniform(I, 'f', 'r', E), new CGL.Uniform(I, 'f', 'g', P), new CGL.Uniform(I, 'f', 'b', N), new CGL.Uniform(I, 'f', 'a', w)
		E.setUiAttribs({ colorPick: !0 }), e.setPortGroup('Display', [o, i]), e.setPortGroup('Alignment', [l, s]), e.setPortGroup('Color', [E, P, N, w])
		var j = 0,
			k = vec3.create(),
			G = -1,
			z = !1
		function D() {
			var e = String(r.get() + '')
			if (g.get()) {
				var n = L()
				n.geom ||
					((n.geom = new CGL.Geometry('textmesh')),
					(n.geom.vertices = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]),
					(n.geom.texCoords = new Float32Array([1, 1, 0, 1, 1, 0, 0, 0])),
					(n.geom.verticesIndices = [0, 1, 2, 3, 1, 2])),
					S || (S = new CGL.Mesh(b, n.geom))
				var t = e.split('\n')
				p.set(t.length)
				var a = [],
					o = [],
					i = [],
					s = []
				M = !1
				for (var d = mat4.create(), f = 0; f < t.length; f++) {
					for (var m = t[f], v = m.length, h = 0, x = 0, A = 0, O = 0; O < v; O++) {
						var y = m.substring(O, O + 1),
							C = n.chars[String(y)]
						C && ((A += C.texCoordWidth / C.texCoordHeight), (A += c.get()))
					}
					;(A -= c.get()), (j = 0), 'left' == l.get() ? (x = 0) : 'right' == l.get() ? (x = A) : 'center' == l.get() && (x = A / 2), (j = (f + 1) * u.get())
					for (O = 0; O < v; O++) {
						const e = m.substring(O, O + 1),
							r = n.chars[String(e)]
						if (!r) return void (M = !0)
						s.push((h / A) * 0.99 + 0.005, 0.99 * (1 - f / (t.length - 1)) + 0.005),
							o.push(r.texCoordX, 1 - r.texCoordY - r.texCoordHeight),
							i.push(r.texCoordWidth, r.texCoordHeight),
							mat4.identity(d),
							mat4.translate(d, d, [h - x, 0 - f * u.get(), 0]),
							(h += r.texCoordWidth / r.texCoordHeight + c.get()),
							a.push(Array.prototype.slice.call(d)),
							0
					}
				}
				var T = [].concat.apply([], a)
				;(z = !1),
					0 == T.length && (z = !0),
					(S.numInstances = T.length / 16),
					0 != S.numInstances
						? (S.setAttribute('instMat', new Float32Array(T), 16, { instanced: !0 }),
						  S.setAttribute('attrTexOffsets', new Float32Array(o), 2, { instanced: !0 }),
						  S.setAttribute('attrTexSize', new Float32Array(i), 2, { instanced: !0 }),
						  S.setAttribute('attrTexPos', new Float32Array(s), 2, { instanced: !0 }),
						  (_ = !1),
						  M && R())
						: (z = !0)
			}
		}
		function B(e, n) {
			var t = L()
			n || (t.chars = {})
			var a = t.ctx
			;(a.font = e + 'px ' + i.get()), (a.textAlign = 'left')
			var r = 0,
				o = 0,
				l = 0,
				s = 1.4 * e,
				u = { fits: !0 }
			for (o = 0; o < t.characters.length; o++) {
				var c = String(t.characters.substring(o, o + 1)),
					d = a.measureText(c).width
				l + d >= x && ((r += s + 2), (l = 0)),
					n || ((t.chars[c] = { str: c, texCoordX: l / x, texCoordY: r / x, texCoordWidth: d / x, texCoordHeight: s / x }), a.fillText(c, l, r + e)),
					(l += d + 12)
			}
			return r > x - s && (u.fits = !1), (u.spaceLeft = x - r), u
		}
		function R() {
			var e = L(),
				n = String(r.get())
			;(null != n && void 0 != n) || (n = '')
			for (var t = 0; t < n.length; t++) {
				var a = n.substring(t, t + 1)
				;-1 == e.characters.indexOf(a) && ((e.characters += a), (M = !0))
			}
			var o = e.ctx
			;(e.canvas.width = e.canvas.height = x),
				e.texture || (e.texture = CGL.Texture.createFromImage(b, e.canvas, { filter: h })),
				e.texture.setSize(x, x),
				(o.fillStyle = 'transparent'),
				o.clearRect(0, 0, x, x),
				(o.fillStyle = 'rgba(255,255,255,255)')
			for (var i = e.fontSize + 40, l = B(i, !0); !l.fits; ) l = B((i -= 5), !0)
			B(i, !1),
				o.restore(),
				e.texture.initTexture(e.canvas, h),
				(e.texture.unpackAlpha = !0),
				g.set(e.texture),
				(e.lastChange = CABLES.now()),
				(_ = !0),
				(M = !1)
		}
		;(a.onTriggered = function() {
			O && (D(), (O = !1))
			var e = L()
			if ((e.lastChange != G && ((_ = !0), (G = e.lastChange)), M && R(), _ && D(), S && S.numInstances > 0)) {
				b.pushBlendMode(CGL.BLEND_NORMAL, !0), b.setShader(I), b.setTexture(0, g.get().tex)
				var n = d.get()
				n && b.setTexture(1, n.tex)
				var t = f.get()
				t && b.setTexture(2, t.tex),
					2 === C ? vec3.set(k, 0, j, 0) : 1 === C ? vec3.set(k, 0, 0, 0) : 0 === C && vec3.set(k, 0, j / 2, 0),
					(k[1] -= u.get()),
					b.pushModelMatrix(),
					mat4.translate(b.mMatrix, b.mMatrix, k),
					z || S.render(b.getShader()),
					b.popModelMatrix(),
					b.setTexture(0, null),
					b.setPreviousShader(),
					b.popBlendMode()
			}
			m.trigger()
		}),
			(c.onChange = function() {
				_ = !0
			})
	}),
	(Ops.Gl.Meshes.TextMesh_v2.prototype = new CABLES.Op()),
	(CABLES.OPS['2390f6b3-2122-412e-8c8d-5c2f574e8bd1'] = { f: Ops.Gl.Meshes.TextMesh_v2, objName: 'Ops.Gl.Meshes.TextMesh_v2' }),
	(Ops.Html.FontFile = function() {
		CABLES.Op.apply(this, arguments)
		const e = this,
			n = e.inFile('file'),
			t = e.inValueString('family'),
			a = e.outValue('Loaded'),
			r = e.outTrigger('Loaded Trigger')
		var o
		function i() {
			if (n.get() && t.get())
				if (document.fonts)
					(o = new FontFace(t.get(), 'url(' + e.patch.getFilePath(String(n.get())) + ')')),
						document.fonts.add(o),
						o.load(),
						o.loaded.then(
							e => {
								a.set(!0), r.trigger()
							},
							e => {
								console.error('Font loading error! Current status', o.status)
							}
						)
				else {
					var i = e.patch.getFilePath(String(n.get())),
						l =
							''.endl() +
							'@font-face'.endl() +
							'{'.endl() +
							'  font-family: "' +
							t.get() +
							'";'.endl() +
							'  src: url("' +
							i +
							'") format("truetype");'.endl() +
							'}',
						s = document.createElement('style')
					;(s.type = 'text/css'), (s.innerHTML = l), document.getElementsByTagName('head')[document.getElementsByTagName('head').length - 1].appendChild(s)
				}
		}
		;(n.onChange = function() {
			a.set(!1), i()
		}),
			(t.onChange = i)
	}),
	(Ops.Html.FontFile.prototype = new CABLES.Op()),
	(CABLES.OPS['0cf90109-cccd-4633-9c77-8aaf53eae15c'] = { f: Ops.Html.FontFile, objName: 'Ops.Html.FontFile' }),
	window.addEventListener('load', function(e) {
		;(CABLES.jsLoaded = new Event('CABLES.jsLoaded')), document.dispatchEvent(CABLES.jsLoaded)
	})
