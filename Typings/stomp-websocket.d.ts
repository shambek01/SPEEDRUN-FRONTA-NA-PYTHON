declare type StompMinimalWebSocketDefinition = any;
declare type StompWebSocketDefinition = WebSocket | StompMinimalWebSocketDefinition | SockJS;

declare type StompHeaders = { [key: string ]: string;};
declare type StompSubscriptions = { [key: string ]: string;};
declare type StompFrameCallback = (frame: StompFrame) => void;

interface StompFrame {
  command: string;
  headers: StompHeaders;
  body?: string;
}

interface StompStatic {
  over(webSocket: StompWebSocketDefinition): StompClient;
}

interface StompSubscription {
  id: any;
  unsubscribe: () => void;
}

interface HeartBeatConfig {
    incoming : number;
    outgoing : number;
}

interface StompClient {
  /* START: object internals, maybe not for public use
  connectCallback: StompFrameCallback;
  connected: boolean;
  counter: number;
  maxWebSocketFrameSize: number;
  partialData: string;
  serverActivity: number;
  subscriptions: { [key: string ]: StompFrameCallback;};
  ws: StompMinimalWebSocketDefinition;
  */
  debug: (msg: string) => void;
  heartbeat : HeartBeatConfig;
  connect(errorCallback?: (stompFrame) => void,connectCallback?: (connected:any) => void, host?: string);
  connect(headers: StompHeaders, connectCallback?: StompFrameCallback, errorCallback?: StompFrameCallback);
  subscribe(destination: string, callback: (stompFrame: StompFrame, headers?: StompHeaders) => void): StompSubscription;
  disconnect(disconnectCallback?: () => void);
}

declare var Stomp: StompStatic;

declare module 'stomp' {
    export = Stomp;
}