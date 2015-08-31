/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors:
 *     Manu Sridharan (IBM) - Initial API and implementation
 ******************************************************************************/

// this file was generated by a script from the model in types.js
/*global define */
define('javascript/esprima/indexFiles/ecma5Index', [
], function () {
	return {
		"!name": "ecma5",
		"!define": {
			"Error": {
				"name": {
					"!type": "String"
				},
				"message": {
					"!type": "String"
				},
				"stack": {
					"!type": "String"
				},
				"!proto": "Object"
			},
			"Error_obj": {
				"!type": "fn(err?: Error)",
				"prototype": "Error"
			},
			"RegExp": {
				"source": {
					"!type": "String"
				},
				"global": {
					"!type": "Boolean"
				},
				"ignoreCase": {
					"!type": "Boolean"
				},
				"multiline": {
					"!type": "Boolean"
				},
				"lastIndex": {
					"!type": "Boolean"
				},
				"exec": {
					"!type": "fn(str: String) -> [String]"
				},
				"test": {
					"!type": "fn(str: String) -> Boolean"
				},
				"!proto": "Object"
			},
			"RegExp_obj": {
				"!type": "fn(val?: RegExp)",
				"prototype": "RegExp"
			},
			"Date": {
				"toDateString": {
					"!type": "fn() -> String"
				},
				"toTimeString": {
					"!type": "fn() -> String"
				},
				"toUTCString": {
					"!type": "fn() -> String"
				},
				"toISOString": {
					"!type": "fn() -> String"
				},
				"toJSON": {
					"!type": "fn(key: String) -> Object"
				},
				"toLocaleDateString": {
					"!type": "fn() -> String"
				},
				"toLocaleTimeString": {
					"!type": "fn() -> String"
				},
				"getTime": {
					"!type": "fn() -> Number"
				},
				"getTimezoneOffset": {
					"!type": "fn() -> Number"
				},
				"getDay": {
					"!type": "fn() -> Number"
				},
				"getUTCDay": {
					"!type": "fn() -> Number"
				},
				"getFullYear": {
					"!type": "fn() -> Number"
				},
				"getUTCFullYear": {
					"!type": "fn() -> Number"
				},
				"getHours": {
					"!type": "fn() -> Number"
				},
				"getUTCHours": {
					"!type": "fn() -> Number"
				},
				"getMinutes": {
					"!type": "fn() -> Number"
				},
				"getUTCMinutes": {
					"!type": "fn() -> Number"
				},
				"getSeconds": {
					"!type": "fn() -> Number"
				},
				"getUTCSeconds": {
					"!type": "fn() -> Number"
				},
				"getMilliseconds": {
					"!type": "fn() -> Number"
				},
				"getUTCMilliseconds": {
					"!type": "fn() -> Number"
				},
				"getMonth": {
					"!type": "fn() -> Number"
				},
				"getUTCMonth": {
					"!type": "fn() -> Number"
				},
				"getDate": {
					"!type": "fn() -> Number"
				},
				"getUTCDate": {
					"!type": "fn() -> Number"
				},
				"setTime": {
					"!type": "fn() -> Number"
				},
				"setTimezoneOffset": {
					"!type": "fn() -> Number"
				},
				"setDay": {
					"!type": "fn(dayOfWeek: Number) -> Number"
				},
				"setUTCDay": {
					"!type": "fn(dayOfWeek: Number) -> Number"
				},
				"setFullYear": {
					"!type": "fn(year: Number, month?: Number, date?: Number) -> Number"
				},
				"setUTCFullYear": {
					"!type": "fn(year: Number, month?: Number, date?: Number) -> Number"
				},
				"setHours": {
					"!type": "fn(hour: Number, min?: Number, sec?: Number, ms?: Number) -> Number"
				},
				"setUTCHours": {
					"!type": "fn(hour: Number, min?: Number, sec?: Number, ms?: Number) -> Number"
				},
				"setMinutes": {
					"!type": "fn(min: Number, sec?: Number, ms?: Number) -> Number"
				},
				"setUTCMinutes": {
					"!type": "fn(min: Number, sec?: Number, ms?: Number) -> Number"
				},
				"setSeconds": {
					"!type": "fn(sec: Number, ms?: Number) -> Number"
				},
				"setUTCSeconds": {
					"!type": "fn(sec: Number, ms?: Number) -> Number"
				},
				"setMilliseconds": {
					"!type": "fn(ms: Number) -> Number"
				},
				"setUTCMilliseconds": {
					"!type": "fn(ms: Number) -> Number"
				},
				"setMonth": {
					"!type": "fn(month: Number, date?: Number) -> Number"
				},
				"setUTCMonth": {
					"!type": "fn(month: Number, date?: Number) -> Number"
				},
				"setDate": {
					"!type": "fn(date: Number) -> Number"
				},
				"setUTCDate": {
					"!type": "fn(date: Number) -> Number"
				},
				"!proto": "Object"
			},
			"Date_obj": {
				"!type": "fn(val?: Date)",
				"now": {
					"!type": "fn() -> Number"
				},
				"parse": {
					"!type": "fn(dateString: String) -> Number"
				},
				"UTC": {
					"!type": "fn(year: Number, month: Number, date?: Number, hrs?: Number, min?:Number, sec?:Number, ms?:Number) -> Number"
				},
				"prototype": "Date"
			},
			"Boolean": {
				"!proto": "Object"
			},
			"Boolean_obj": {
				"!type": "fn(val?: Boolean)",
				"prototype": "Boolean"
			},
			"Array": {
				"concat": {
					"!type": "fn(first: Array, rest: Array) -> Array"
				},
				"join": {
					"!type": "fn(separator: Object) -> String"
				},
				"length": {
					"!type": "Number"
				},
				"pop": {
					"!type": "fn() -> Object"
				},
				"push": {
					"!type": "fn(vals: Object) -> Object"
				},
				"reverse": {
					"!type": "fn() -> Array"
				},
				"shift": {
					"!type": "fn() -> Object"
				},
				"slice": {
					"!type": "fn(start: Number, deleteCount: Number, items: Object) -> Array"
				},
				"splice": {
					"!type": "fn(start: Number, end: Number) -> Array"
				},
				"sort": {
					"!type": "fn(sorter?: Object) -> Array"
				},
				"unshift": {
					"!type": "fn(items: Object) -> Number"
				},
				"indexOf": {
					"!type": "fn(searchElement: Object, fromIndex?: Number) -> Number"
				},
				"lastIndexOf": {
					"!type": "fn(searchElement: Object, fromIndex?: Number) -> Number"
				},
				"every": {
					"!type": "fn(callbackFn: fn(elt: Object), thisArg?: Object) -> Boolean"
				},
				"some": {
					"!type": "fn(callbackFn: fn(elt: Object), thisArg?: Object) -> Boolean"
				},
				"forEach": {
					"!type": "fn(callbackFn: fn(elt: Object), thisArg?: Object) -> Object"
				},
				"map": {
					"!type": "fn(callbackFn: fn(elt: Object) -> Object, thisArg?: Object) -> Array"
				},
				"filter": {
					"!type": "fn(callbackFn: fn(elt: Object) -> Boolean, thisArg?: Object) -> Array"
				},
				"reduce": {
					"!type": "fn(callbackFn: fn(elt: Object) -> Object, initialValue?: Object) -> Array"
				},
				"reduceRight": {
					"!type": "fn(callbackFn: fn(elt: Object) -> Object, initialValue?: Object) -> Array"
				},
				"!proto": "Object"
			},
			"Array_obj": {
				"!type": "fn(val?: Array)",
				"isArray": {
					"!type": "fn(obj: Object) -> Boolean"
				},
				"prototype": "Array"
			},
			"Function": {
				"apply": {
					"!type": "fn(func: fn(), argArray?: Array) -> Object"
				},
				"arguments": {
					"!type": "Arguments"
				},
				"bind": {
					"!type": "fn(func: fn(), args: Object) -> Object"
				},
				"call": {
					"!type": "fn(func: fn(), args: Object) -> Object"
				},
				"caller": {
					"!type": "Function"
				},
				"length": {
					"!type": "Number"
				},
				"name": {
					"!type": "String"
				},
				"!proto": "Object"
			},
			"Function_obj": {
				"!type": "fn()",
				"prototype": "Function"
			},
			"Arguments": {
				"callee": {
					"!type": "Function"
				},
				"length": {
					"!type": "Number"
				},
				"!proto": "Object"
			},
			"JSON": {
				"parse": {
					"!type": "fn(str: String) -> Object"
				},
				"stringify": {
					"!type": "fn(json: Object) -> String"
				},
				"!proto": "Object"
			},
			"Math": {
				"E": {
					"!type": "Number"
				},
				"LN2": {
					"!type": "Number"
				},
				"LN10": {
					"!type": "Number"
				},
				"LOG2E": {
					"!type": "Number"
				},
				"LOG10E": {
					"!type": "Number"
				},
				"PI": {
					"!type": "Number"
				},
				"SQRT1_2": {
					"!type": "Number"
				},
				"SQRT2": {
					"!type": "Number"
				},
				"abs": {
					"!type": "fn(val: Number) -> Number"
				},
				"acos": {
					"!type": "fn(val: Number) -> Number"
				},
				"asin": {
					"!type": "fn(val: Number) -> Number"
				},
				"atan": {
					"!type": "fn(val: Number) -> Number"
				},
				"atan2": {
					"!type": "fn(val1: Number, val2: Number) -> Number"
				},
				"ceil": {
					"!type": "fn(val: Number) -> Number"
				},
				"cos": {
					"!type": "fn(val: Number) -> Number"
				},
				"exp": {
					"!type": "fn(val: Number) -> Number"
				},
				"floor": {
					"!type": "fn(val: Number) -> Number"
				},
				"log": {
					"!type": "fn(val: Number) -> Number"
				},
				"max": {
					"!type": "fn(val1: Number, val2: Number) -> Number"
				},
				"min": {
					"!type": "fn(val1: Number, val2: Number) -> Number"
				},
				"pow": {
					"!type": "fn(x: Number, y: Number) -> Number"
				},
				"random": {
					"!type": "fn() -> Number"
				},
				"round": {
					"!type": "fn(val: Number) -> Number"
				},
				"sin": {
					"!type": "fn(val: Number) -> Number"
				},
				"sqrt": {
					"!type": "fn(val: Number) -> Number"
				},
				"tan": {
					"!type": "fn(val: Number) -> Number"
				},
				"!proto": "Object"
			},
			"Number": {
				"toExponential": {
					"!type": "fn(digits: Number) -> String"
				},
				"toFixed": {
					"!type": "fn(digits: Number) -> String"
				},
				"toPrecision": {
					"!type": "fn(digits: Number) -> String"
				},
				"!proto": "Object"
			},
			"Number_obj": {
				"!type": "fn(val?: Number)",
				"MAX_VALUE": "Number",
				"MIN_VALUE": "Number",				
				"prototype": "Number"
			},
			"Object": {
				"toString": {
					"!type": "fn() -> String"
				},
				"toLocaleString": {
					"!type": "fn() -> String"
				},
				"valueOf": {
					"!type": "fn() -> Object"
				},
				"hasOwnProperty": {
					"!type": "fn(property: String) -> Boolean"
				},
				"isPrototypeOf": {
					"!type": "fn(object: Object) -> Boolean"
				},
				"propertyIsEnumerable": {
					"!type": "fn(property: String) -> Boolean"
				}
			},
			"Object_obj": {
				"!type": "fn(val?: Object)",
				"create": {
					"!type": "fn(proto: Object, propertiesObject?: Object) -> Object"
				},
				"defineProperty": {
					"!type": "fn(obj: Object, prop: String, descriptor: Object) -> Object"					
				},
				"defineProperties": {
					"!type": "fn(obj: Object, props: Object) -> Object"					
				},
				// TODO specify property-descriptor return type
				"getOwnPropertyDescriptor": {
					"!type": "fn(obj: Object, prop: String) -> Object"
				},
				"keys": {
					"!type": "fn(obj: Object) -> Array"
				},
				"getOwnPropertyNames": {
					"!type": "fn(obj: Object) -> Array"
				},
				"getPrototypeOf": {
					"!type": "fn(obj: Object) -> Object"
				},
				"prototype": "Object"
			},				
			"String": {
				"charAt": {
					"!type": "fn(index: Number) -> String"
				},
				"charCodeAt": {
					"!type": "fn(index: Number) -> Number"
				},
				"concat": {
					"!type": "fn(str: String) -> String"
				},
				"indexOf": {
					"!type": "fn(searchString: String, start?: Number) -> Number"
				},
				"lastIndexOf": {
					"!type": "fn(searchString: String, start?: Number) -> Number"
				},
				"length": {
					"!type": "Number"
				},
				"localeCompare": {
					"!type": "fn(str: String) -> Number"
				},
				"match": {
					"!type": "fn(regexp: String) -> Boolean"
				},
				"replace": {
					"!type": "fn(searchValue: String, replaceValue: String) -> String"
				},
				"search": {
					"!type": "fn(regexp: String) -> String"
				},
				"slice": {
					"!type": "fn(start: Number, end: Number) -> String"
				},
				"split": {
					"!type": "fn(separator: String, limit?: Number) -> [String]"
				},
				"substring": {
					"!type": "fn(start: Number, end?: Number) -> String"
				},
				"toLocaleUpperCase": {
					"!type": "fn() -> String"
				},
				"toLowerCase": {
					"!type": "fn() -> String"
				},
				"toLocaleLowerCase": {
					"!type": "fn() -> String"
				},
				"toUpperCase": {
					"!type": "fn() -> String"
				},
				"trim": {
					"!type": "fn() -> String"
				},
				"!proto": "Object"
			},
			"String_obj": {
				"!type": "fn(val?: Object)",
				"fromCharCode": {
					"!type": "fn(num1: Number, rest: Number) -> String"
				},
				"prototype": "String",
				"!proto": "Object"
			}
		},
		"decodeURI": {
			"!type": "fn(uri: String) -> String"
		},
		"encodeURI": {
			"!type": "fn(uri: String) -> String"
		},
		"eval": {
			"!type": "fn(toEval: String) -> Object"
		},
		"parseInt": {
			"!type": "fn(str: String, radix?: Number) -> Number"
		},
		"parseFloat": {
			"!type": "fn(str: String, radix?: Number) -> Number"
		},
		"Math": {
			"!type": "Math"
		},
		"JSON": {
			"!type": "JSON"
		},
		"Object": "Object_obj",
		"Function": "Function_obj",
		"Array": "Array_obj",
		"Boolean": "Boolean_obj",
		"Number": "Number_obj",
		"Date": "Date_obj",
		"RegExp": "RegExp_obj",
		"String": "String_obj",
		"Error": "Error_obj",
		"undefined": {
			"!type": "?"
		},
		"isNaN": {
			"!type": "fn(num: Number) -> Boolean"
		},
		"isFinite": {
			"!type": "fn(num: Number) -> Boolean"
		},
		"NaN": {
			"!type": "number"
		},
		"Infinity": {
			"!type": "number"
		},
		"decodeURIComponent": {
			"!type": "fn(encodedURIString: String) -> String"
		},
		"encodeURIComponent": {
			"!type": "fn(decodedURIString: String) -> String"
		},
		"this": {
			"!type": "<top>"
		}
	};
});