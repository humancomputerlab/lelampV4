/**
 * WebSocket client with auto-reconnect and event dispatching.
 */
export class GameWebSocket extends EventTarget {
  constructor() {
    super();
    this.ws = null;
    this.connected = false;
    this.debugMode = false;
    this._reconnectTimer = null;
    this._url = null;
  }

  connect(url) {
    this._url = url;
    this._tryConnect();
  }

  _tryConnect() {
    if (this.ws) {
      this.ws.close();
    }

    this.ws = new WebSocket(this._url);

    this.ws.onopen = () => {
      this.connected = true;
      this.dispatchEvent(new Event('connected'));
      console.log('[WS] Connected');
    };

    this.ws.onclose = () => {
      this.connected = false;
      this.dispatchEvent(new Event('disconnected'));
      console.log('[WS] Disconnected, reconnecting in 2s...');
      this._reconnectTimer = setTimeout(() => this._tryConnect(), 2000);
    };

    this.ws.onerror = (err) => {
      console.warn('[WS] Error:', err);
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'game_config') {
          this.debugMode = data.debug;
          this.dispatchEvent(new CustomEvent('config', { detail: data }));
        } else if (data.type === 'position') {
          this.dispatchEvent(new CustomEvent('position', { detail: data }));
        }
      } catch (e) {
        console.warn('[WS] Bad message:', event.data);
      }
    };
  }

  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }

  disconnect() {
    clearTimeout(this._reconnectTimer);
    if (this.ws) {
      this.ws.close();
    }
  }
}
