# SYNTAX iPad PWA Prototype

SYNTAX is a React + Vite educational game prototype designed to run in the browser and install to an iPad Home Screen as a PWA.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open the network URL on your iPad, for example:

```text
http://192.168.1.25:5173
```

Your computer and iPad must be on the same Wi-Fi.

## Build production files

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

## Install on iPad as an app icon

1. Deploy the built app to a web host with HTTPS, or run `npm run preview -- --host 0.0.0.0` for local testing.
2. Open the app in Safari on iPad.
3. Tap Share.
4. Tap **Add to Home Screen**.
5. Open SYNTAX from the Home Screen.

## Important notes

- iPad cannot run a Windows `.exe` file.
- This PWA route is the best first step for iPad because it runs from Safari and can install to the Home Screen.
- For the Apple App Store later, wrap this project with Capacitor and build it in Xcode on a Mac.
- For a Windows `.exe` later, wrap the same React app with Electron or Tauri.
