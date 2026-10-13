# Module: Core Game Logic and Setup
# Contributor: Chandrika
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import threading
import webbrowser

HOST = "127.0.0.1"
PORT = 8000
PROJECT_DIR = Path(__file__).resolve().parent

class GameHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PROJECT_DIR), **kwargs)


def main():
    try:
        server = ThreadingHTTPServer((HOST, PORT), GameHandler)
    except OSError as exc:
        print(f"Could not start the game server on port {PORT}: {exc}")
        print("Close another server using port 8000 or change PORT in main.py.")
        return

    url = f"http://{HOST}:{PORT}/index.html"
    print("Apple Shooter is running!")
    print(f"Open this address in Chrome: {url}")
    print("Press Ctrl+C in this terminal to stop the game server.")
    threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping Apple Shooter server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
