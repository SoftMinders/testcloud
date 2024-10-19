import axios, { Method, AxiosPromise, AxiosRequestConfig, CancelTokenSource } from "axios";
import qs from "qs";
const CancelToken = axios.CancelToken;

export type ApiError = {
	/**
	 * An error message to be used by components to display to the user.
	 */
	msg?: string;

	/**
	 * An error code if further processing is required by the component before displaying an error.
	 */
	code?: number;
};

export type StateContext<T, S = Record<string, unknown>, AT = T> = {
	state: T;
	params: S;
	fetched: boolean;
	/**
	 * Indicates the fetch has started, but is not complete. Should ideally be
	 * internal concern of stores, not leak outside.
	 */
	fetching?: boolean;
	lastFetched?: Date | null;
	api?: Api<AT, S> | null;
	requestId?: string;

	/**
	 * An error object used for capturing a failed store update.
	 */
	error?: ApiError;
};

interface ApiOptions<Params = AxiosRequestConfig["params"]> {
	url?: string;
	params?: Params;
	data?: AxiosRequestConfig["data"];
	headers?: AxiosRequestConfig["headers"];
	method?: Method;
	responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
}

/**
 * A wrapper class for creating an Api instance for sending requests.
 * @param options The configuration object, see the `ApiOptions` interface for more details.
 */
export class Api<T, P = AxiosRequestConfig["params"]> {
	private _url: string | undefined;
	private _params?: P;
	private _data: T | undefined;
	private _headers: AxiosRequestConfig["headers"] | undefined;
	private _method: Method;
	private _responseType: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream" | undefined;
	private _cancelToken: CancelTokenSource | undefined;

	constructor(options: ApiOptions<P> = {}) {
		this._url = options.url;
		this._params = options.params;
		this._data = options.data;
		this._headers = options.headers;
		this._method = options.method || "GET";
		this._responseType = options.responseType;
	}

	/**
	 * Sends the request with the options configured for the instance and will also cancel any pending requests.
	 * @returns The promise from the request to allow for chaining.
	 */
	send(signal?: AbortSignal): AxiosPromise<T> {
		// Throw an error if class has been constructed without a URL
		if (!this._url) {
			throw new Error("Api.send(): Cannot call 'send' without URL defined.");
		}

		// Create our cancel token for the request
		this._cancelToken = CancelToken.source();

		// Create our axios options
		const options: AxiosRequestConfig = {
			method: this._method,
			cancelToken: this._cancelToken.token,
			signal: signal,
		};

		// If we have params defined then add them to the config
		if (this._params) {
			options.params = this._params;

			// Our APIs do not support the new style array format
			options.paramsSerializer = (params) => {
				return qs.stringify(params, { arrayFormat: "repeat" });
			};
		}

		// If we have data defined then add it to the config
		if (this._data) {
			options.data = this._data;
		}

		if (this._headers) {
			options.headers = this._headers;
		}

		if (this._responseType) {
			options.responseType = this._responseType;
		}

		return axios(this._url, options) as AxiosPromise<T>;
	}

	/**
	 * If there is an existing request then cancel it
	 */
	cancel(): void {
		if (this._cancelToken && this._cancelToken.cancel) {
			this._cancelToken.cancel();
		}
	}

	get url(): ApiOptions<P>["url"] {
		return this._url;
	}

	set url(url: ApiOptions<P>["url"]) {
		this._url = url;
	}

	get params(): ApiOptions<P>["params"] {
		return this._params;
	}

	set params(params: ApiOptions<P>["params"]) {
		this._params = params;
	}

	get data(): ApiOptions<P>["data"] {
		return this._data;
	}

	set data(data: ApiOptions<P>["data"]) {
		this._data = data;
	}

	get headers(): ApiOptions<P>["headers"] {
		return this._headers;
	}

	set headers(headers: ApiOptions<P>["headers"]) {
		this._headers = headers;
	}

	get method(): Method {
		return this._method;
	}

	set method(method: Method) {
		this._method = method;
	}
}
