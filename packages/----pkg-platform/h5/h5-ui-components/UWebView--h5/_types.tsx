import type { ReactElement } from 'react';

type WebViewState = 'IDLE' | 'LOADING' | 'ERROR';

interface BaseState {
  viewState: WebViewState;
}

interface NormalState extends BaseState {
  viewState: 'IDLE' | 'LOADING';
  lastErrorEvent: WebViewError | null;
}

interface ErrorState extends BaseState {
  viewState: 'ERROR';
  lastErrorEvent: WebViewError;
}

export type State = NormalState | ErrorState;

export interface ContentInsetProp {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface WebViewNativeEvent {
  url: string;
  loading: boolean;
  title: string;
  canGoBack: boolean;
  canGoForward: boolean;
  lockIdentifier: number;
}

export interface WebViewNativeProgressEvent extends WebViewNativeEvent {
  progress: number;
}

export interface WebViewNavigation extends WebViewNativeEvent {
  navigationType:
    | 'click'
    | 'formsubmit'
    | 'backforward'
    | 'reload'
    | 'formresubmit'
    | 'other';
  mainDocumentURL?: string;
}

export interface ShouldStartLoadRequest extends WebViewNavigation {
  isTopFrame: boolean;
}

export interface FileDownload {
  downloadUrl: string;
}

export type DecelerationRateConstant = 'normal' | 'fast';

export interface WebViewMessage extends WebViewNativeEvent {
  data: string;
}

export interface WebViewError extends WebViewNativeEvent {
  /**
   * `domain` is only used on iOS and macOS
   */
  domain?: string;
  code: number;
  description: string;
}

export interface WebViewHttpError extends WebViewNativeEvent {
  description: string;
  statusCode: number;
}

export interface WebViewRenderProcessGoneDetail {
  didCrash: boolean;
}

export interface WebViewOpenWindow {
  targetUrl: string;
}

interface NativeSyntheticEvent<T> {}

export type WebViewEvent = NativeSyntheticEvent<WebViewNativeEvent>;

export type WebViewProgressEvent =
  NativeSyntheticEvent<WebViewNativeProgressEvent>;

export type WebViewNavigationEvent = NativeSyntheticEvent<WebViewNavigation>;

export type ShouldStartLoadRequestEvent =
  NativeSyntheticEvent<ShouldStartLoadRequest>;

export type FileDownloadEvent = NativeSyntheticEvent<FileDownload>;

export type WebViewMessageEvent = NativeSyntheticEvent<WebViewMessage>;

export type WebViewErrorEvent = NativeSyntheticEvent<WebViewError>;

export type WebViewTerminatedEvent = NativeSyntheticEvent<WebViewNativeEvent>;

export type WebViewHttpErrorEvent = NativeSyntheticEvent<WebViewHttpError>;

export type WebViewRenderProcessGoneEvent =
  NativeSyntheticEvent<WebViewRenderProcessGoneDetail>;

export type WebViewOpenWindowEvent = NativeSyntheticEvent<WebViewOpenWindow>;

export type WebViewScrollEvent = NativeSyntheticEvent<any>;

export type DataDetectorTypes =
  | 'phoneNumber'
  | 'link'
  | 'address'
  | 'calendarEvent'
  | 'trackingNumber'
  | 'flightNumber'
  | 'lookupSuggestion'
  | 'none'
  | 'all';

export type OverScrollModeType = 'always' | 'content' | 'never';

export type CacheMode =
  | 'LOAD_DEFAULT'
  | 'LOAD_CACHE_ONLY'
  | 'LOAD_CACHE_ELSE_NETWORK'
  | 'LOAD_NO_CACHE';

export type AndroidLayerType = 'none' | 'software' | 'hardware';

export type IndicatorStyleType = 'default' | 'black' | 'white';

export interface WebViewSourceUri {
  /**
   * The URI to load in the `WebView`. Can be a local or remote file.
   */
  uri: string;

  /**
   * The HTTP Method to use. Defaults to GET if not specified.
   * NOTE: On Android, only GET and POST are supported.
   */
  method?: string;

  /**
   * Additional HTTP headers to send with the request.
   * NOTE: On Android, this can only be used with GET requests.
   */
  headers?: any;

  /**
   * The HTTP body to send with the request. This must be a valid
   * UTF-8 string, and will be sent exactly as specified, with no
   * additional encoding (e.g. URL-escaping or base64) applied.
   * NOTE: On Android, this can only be used with POST requests.
   */
  body?: string;
}

export interface WebViewSourceHtml {
  /**
   * A static HTML page to display in the WebView.
   */
  html: string;
  /**
   * The base URL to be used for any relative links in the HTML.
   */
  baseUrl?: string;
}

export interface WebViewCustomMenuItems {
  /**
   * The unique key that will be added as a selector on the webview
   * Returned by the `onCustomMenuSelection` callback
   */
  key: string;
  /**
   * The label to appear on the UI Menu when selecting text
   */
  label: string;
}

export declare type SuppressMenuItem =
  | 'cut'
  | 'copy'
  | 'paste'
  | 'replace'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'select'
  | 'selectAll'
  | 'translate'
  | 'lookup'
  | 'share';

// export type WebViewSource = WebViewSourceUri | WebViewSourceHtml;
export type WebViewSource = WebViewSourceUri;

export interface ViewManager {
  shouldStartLoadWithLockIdentifier: Function;
}

export interface WebViewNativeConfig {
  /**
   * The native component used to render the WebView.
   */
  component?: any;
  /**
   * Set props directly on the native component WebView. Enables custom props which the
   * original WebView doesn't pass through.
   */
  props?: any;
  /**
   * Set the ViewManager to use for communication with the native side.
   * @platform ios, macos
   */
  viewManager?: ViewManager;
}

export type OnShouldStartLoadWithRequest = (
  event: ShouldStartLoadRequest,
) => boolean;

export interface BasicAuthCredential {
  /**
   * A username used for basic authentication.
   */
  username: string;

  /**
   * A password used for basic authentication.
   */
  password: string;
}

export interface CommonNativeWebViewProps {
  cacheEnabled?: boolean;
  incognito?: boolean;
  injectedJavaScript?: string;
  injectedJavaScriptBeforeContentLoaded?: string;
  injectedJavaScriptForMainFrameOnly?: boolean;
  injectedJavaScriptBeforeContentLoadedForMainFrameOnly?: boolean;
  javaScriptCanOpenWindowsAutomatically?: boolean;
  mediaPlaybackRequiresUserAction?: boolean;
  webviewDebuggingEnabled?: boolean;
  messagingEnabled: boolean;
  onScroll?: (event: WebViewScrollEvent) => void;
  onLoadingError: (event: WebViewErrorEvent) => void;
  onLoadingFinish: (event: WebViewNavigationEvent) => void;
  onLoadingProgress: (event: WebViewProgressEvent) => void;
  onLoadingStart: (event: WebViewNavigationEvent) => void;
  onHttpError: (event: WebViewHttpErrorEvent) => void;
  onMessage: (event: WebViewMessageEvent) => void;
  onShouldStartLoadWithRequest: (event: ShouldStartLoadRequestEvent) => void;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  paymentRequestEnabled?: boolean;
  // TODO: find a better way to type this.

  source: WebViewSource;
  userAgent?: string;
  /**
   * Append to the existing user-agent. Overridden if `userAgent` is set.
   */
  applicationNameForUserAgent?: string;
  basicAuthCredential?: BasicAuthCredential;
}

export interface AndroidWebViewProps extends WebViewSharedProps {
  onNavigationStateChange?: (event: WebViewNavigation) => void;
  onContentSizeChange?: (event: WebViewEvent) => void;

  /**
   * Function that is invoked when the `WebView` process crashes or is killed by the OS.
   * Works only on Android (minimum API level 26).
   */
  onRenderProcessGone?: (event: WebViewRenderProcessGoneEvent) => void;

  /**
   * Function that is invoked when the `WebView` should open a new window.
   *
   * This happens when the JS calls `window.open('http://someurl', '_blank')`
   * or when the user clicks on a `<a href="http://someurl" target="_blank">` link.
   *
   * @platform android
   */
  onOpenWindow?: (event: WebViewOpenWindowEvent) => void;

  /**
   * https://developer.android.com/reference/android/webkit/WebSettings.html#setCacheMode(int)
   * Set the cacheMode. Possible values are:
   *
   * - `'LOAD_DEFAULT'` (default)
   * - `'LOAD_CACHE_ELSE_NETWORK'`
   * - `'LOAD_NO_CACHE'`
   * - `'LOAD_CACHE_ONLY'`
   *
   * @platform android
   */
  cacheMode?: CacheMode;

  /**
   * https://developer.android.com/reference/android/view/View#setOverScrollMode(int)
   * Sets the overScrollMode. Possible values are:
   *
   * - `'always'` (default)
   * - `'content'`
   * - `'never'`
   *
   * @platform android
   */
  overScrollMode?: OverScrollModeType;

  /**
   * Boolean that controls whether the web content is scaled to fit
   * the view and enables the user to change the scale. The default value
   * is `true`.
   */
  scalesPageToFit?: boolean;

  /**
   * Sets whether Geolocation is enabled. The default is false.
   * @platform android
   */
  geolocationEnabled?: boolean;

  /**
   * Boolean that sets whether JavaScript running in the context of a file
   * scheme URL should be allowed to access content from other file scheme URLs.
   * Including accessing content from other file scheme URLs
   * @platform android
   */
  allowFileAccessFromFileURLs?: boolean;

  /**
   * Boolean that sets whether JavaScript running in the context of a file
   * scheme URL should be allowed to access content from any origin.
   * Including accessing content from other file scheme URLs
   * @platform android
   */
  allowUniversalAccessFromFileURLs?: boolean;

  /**
   * Sets whether the webview allow access to file system.
   * @platform android
   */
  allowFileAccess?: boolean;

  /**
   * Used on Android only, controls whether form autocomplete data should be saved
   * @platform android
   */
  saveFormDataDisabled?: boolean;

  /**
   * Boolean value to set whether the WebView supports multiple windows. Used on Android only
   * The default value is `true`.
   * @platform android
   */
  setSupportMultipleWindows?: boolean;

  /**
   * https://developer.android.com/reference/android/webkit/WebView#setLayerType(int,%20android.graphics.Paint)
   * Sets the layerType. Possible values are:
   *
   * - `'none'` (default)
   * - `'software'`
   * - `'hardware'`
   *
   * @platform android
   */
  androidLayerType?: AndroidLayerType;

  /**
   * Boolean value to enable third party cookies in the `WebView`. Used on
   * Android Lollipop and above only as third party cookies are enabled by
   * default on Android Kitkat and below and on iOS. The default value is `true`.
   * @platform android
   */
  thirdPartyCookiesEnabled?: boolean;

  /**
   * Boolean value to control whether DOM Storage is enabled. Used only in
   * Android. The default value is `true`.
   * @platform android
   */
  domStorageEnabled?: boolean;

  /**
   * Sets the user-agent for the `WebView`.
   * @platform android
   */
  userAgent?: string;

  /**
   * Sets number that controls text zoom of the page in percent.
   * @platform android
   */
  textZoom?: number;

  /**
   * Specifies the mixed content mode. i.e WebView will allow a secure origin to load content from any other origin.
   *
   * Possible values for `mixedContentMode` are:
   *
   * - `'never'` (default) - WebView will not allow a secure origin to load content from an insecure origin.
   * - `'always'` - WebView will allow a secure origin to load content from any other origin, even if that origin is insecure.
   * - `'compatibility'` -  WebView will attempt to be compatible with the approach of a modern web browser with regard to mixed content.
   * @platform android
   */
  mixedContentMode?: 'never' | 'always' | 'compatibility';

  /**
   * Sets ability to open fullscreen videos on Android devices.
   */
  allowsFullscreenVideo?: boolean;

  /**
   * Configuring Dark Theme
   *
   * *NOTE* : The force dark setting is not persistent. You must call the static method every time your app process is started.
   *
   * *NOTE* : The change from day<->night mode is a configuration change so by default the activity will be restarted
   * and pickup the new values to apply the theme.
   * Take care when overriding this default behavior to ensure this method is still called when changes are made.
   *
   * @platform android
   */
  forceDarkOn?: boolean;

  /**
   * Boolean value to control whether pinch zoom is enabled. Used only in Android.
   * Default to true
   *
   * @platform android
   */
  setBuiltInZoomControls?: boolean;

  /**
   * Boolean value to control whether built-in zooms controls are displayed. Used only in Android.
   * Default to false
   * Controls will always be hidden if setBuiltInZoomControls is set to `false`
   *
   * @platform android
   */
  setDisplayZoomControls?: boolean;

  /**
   * Allows to scroll inside the webview when used inside a scrollview.
   * Behaviour already existing on iOS.
   * Default to false
   *
   * @platform android
   */
  nestedScrollEnabled?: boolean;

  /**
   * Sets the minimum font size.
   * A non-negative integer between 1 and 72. Any number outside the specified range will be pinned.
   * Default is 8.
   * @platform android
   */
  minimumFontSize?: number;

  /**
   * Sets the message to be shown in the toast when downloading via the webview.
   * Default is 'Downloading'.
   * @platform android
   */
  downloadingMessage?: string;

  /**
   * Sets the message to be shown in the toast when webview is unable to download due to permissions issue.
   * Default is 'Cannot download files as permission was denied. Please provide permission to write to storage, in order to download files.'.
   * @platform android
   */
  lackPermissionToDownloadMessage?: string;

  /**
   * Boolean value to control whether webview can play media protected by DRM.
   * Default is false.
   * @platform android
   */
  allowsProtectedMedia?: boolean;
}

export interface WebViewSharedProps {
  /**
   * Loads static html or a uri (with optional headers) in the WebView.
   */
  source?: WebViewSource;

  /**
   * Boolean value to enable JavaScript in the `WebView`. Used on Android only
   * as JavaScript is enabled by default on iOS. The default value is `true`.
   * @platform android
   */
  javaScriptEnabled?: boolean;

  /**
   * A Boolean value indicating whether JavaScript can open windows without user interaction.
   * The default value is `false`.
   */
  javaScriptCanOpenWindowsAutomatically?: boolean;

  /**
   * Stylesheet object to set the style of the container view.
   */
  containerStyle?: any;

  /**
   * Function that returns a view to show if there's an error.
   */
  renderError?: (
    errorDomain: string | undefined,
    errorCode: number,
    errorDesc: string,
  ) => ReactElement; // view to show if there's an error

  /**
   * Function that returns a loading indicator.
   */
  renderLoading?: () => ReactElement;

  /**
   * Function that is invoked when the `WebView` scrolls.
   */
  onScroll?: any;

  /**
   * Function that is invoked when the `WebView` has finished loading.
   */
  onLoad?: (event: WebViewNavigationEvent) => void;

  /**
   * Function that is invoked when the `WebView` load succeeds or fails.
   */
  onLoadEnd?: (event: WebViewNavigationEvent | WebViewErrorEvent) => void;

  /**
   * Function that is invoked when the `WebView` starts loading.
   */
  onLoadStart?: (event: WebViewNavigationEvent) => void;

  /**
   * Function that is invoked when the `WebView` load fails.
   */
  onError?: (event: WebViewErrorEvent) => void;

  /**
   * Function that is invoked when the `WebView` receives an error status code.
   * Works on iOS and Android (minimum API level 23).
   */
  onHttpError?: (event: WebViewHttpErrorEvent) => void;

  /**
   * Function that is invoked when the `WebView` loading starts or ends.
   */
  onNavigationStateChange?: (event: WebViewNavigation) => void;

  /**
   * Function that is invoked when the webview calls `window.ReactNativeWebView.postMessage`.
   * Setting this property will inject this global into your webview.
   *
   * `window.ReactNativeWebView.postMessage` accepts one argument, `data`, which will be
   * available on the event object, `event.nativeEvent.data`. `data` must be a string.
   */
  onMessage?: (event: WebViewMessageEvent) => void;

  /**
   * Function that is invoked when the `WebView` is loading.
   */
  onLoadProgress?: (event: WebViewProgressEvent) => void;

  /**
   * Boolean value that forces the `WebView` to show the loading view
   * on the first load.
   */
  startInLoadingState?: boolean;

  /**
   * Set this to provide JavaScript that will be injected into the web page
   * when the view loads.
   */
  injectedJavaScript?: string;

  /**
   * Set this to provide JavaScript that will be injected into the web page
   * once the webview is initialized but before the view loads any content.
   */
  injectedJavaScriptBeforeContentLoaded?: string;

  /**
   * If `true` (default; mandatory for Android), loads the `injectedJavaScript` only into the main frame.
   * If `false` (only supported on iOS and macOS), loads it into all frames (e.g. iframes).
   */
  injectedJavaScriptForMainFrameOnly?: boolean;

  /**
   * If `true` (default; mandatory for Android), loads the `injectedJavaScriptBeforeContentLoaded` only into the main frame.
   * If `false` (only supported on iOS and macOS), loads it into all frames (e.g. iframes).
   */
  injectedJavaScriptBeforeContentLoadedForMainFrameOnly?: boolean;

  /**
   * Boolean value that determines whether a horizontal scroll indicator is
   * shown in the `WebView`. The default value is `true`.
   */
  showsHorizontalScrollIndicator?: boolean;

  /**
   * Boolean value that determines whether a vertical scroll indicator is
   * shown in the `WebView`. The default value is `true`.
   */
  showsVerticalScrollIndicator?: boolean;

  /**
   * Boolean that determines whether HTML5 audio and video requires the user
   * to tap them before they start playing. The default value is `true`.
   */
  mediaPlaybackRequiresUserAction?: boolean;

  /**
   * List of origin strings to allow being navigated to. The strings allow
   * wildcards and get matched against *just* the origin (not the full URL).
   * If the user taps to navigate to a new page but the new page is not in
   * this whitelist, we will open the URL in Safari.
   * The default whitelisted origins are "http://*" and "https://*".
   */
  readonly originWhitelist?: string[];

  /**
   * Function that allows custom handling of any web view requests. Return
   * `true` from the function to continue loading the request and `false`
   * to stop loading. The `navigationType` is always `other` on android.
   */
  onShouldStartLoadWithRequest?: OnShouldStartLoadWithRequest;

  /**
   * Override the native component used to render the WebView. Enables a custom native
   * WebView which uses the same JavaScript as the original WebView.
   */
  nativeConfig?: WebViewNativeConfig;

  /**
   * Should caching be enabled. Default is true.
   */
  cacheEnabled?: boolean;

  /**
   * Append to the existing user-agent. Overridden if `userAgent` is set.
   */
  applicationNameForUserAgent?: string;

  /**
   * An object that specifies the credentials of a user to be used for basic authentication.
   */
  basicAuthCredential?: BasicAuthCredential;

  /**
   * Inject a JavaScript object to be accessed as a JSON string via JavaScript in the WebView.
   */
  injectedJavaScriptObject?: object;

  /**
   * Enables WebView remote debugging using Chrome (Android) or Safari (iOS).
   */
  webviewDebuggingEnabled?: boolean;

  /**
   * Enables support for the Payment Request API for the WebView
   */
  paymentRequestEnabled?: boolean;
}

export type WebViewProps = AndroidWebViewProps & {
  allowsLinkPreview?: boolean;
  sharedCookiesEnabled?: boolean;
  useWebKit?: boolean;
  bounces?: boolean;
};
