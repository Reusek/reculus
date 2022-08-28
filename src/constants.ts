import { Cache } from "./types";

export const DATA = Symbol();
export const ERROR_PREFIX = "[reculus]";

export const CACHE: Cache = {
	reactiveUpdateListener: null,
	mapDidInjectDependencies: false
};
