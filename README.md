# Dvinesoul

Dvinesoul is the main personal technology platform. It provides a single dark, Matrix-inspired command center for AI projects, defensive security work and custom tools.

## Platform structure

- **Dashboard** — live clock/date, system monitor, weather feed and activity.
- **AI** — automation, document intelligence, MCP/integrations and agents.
- **Security** — Sentinel, authorized testing and security research modules.
- **Tools** — SuperFileCompressor, SessionForge and future utilities.
- **About** — platform information and project overview.

## Current status

This repository contains the first deployable static UI foundation. The visual system is intentionally self-contained with plain HTML, CSS and JavaScript so it can be hosted on a normal web server without a framework build step.

### Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser.

### Production direction

The platform will remain modular. Individual projects such as SuperFileCompressor are tools inside Dvinesoul, not separate websites. Future modules can be mounted into the existing shell without redesigning the whole platform.

For production, replace the demo weather values with the platform's weather service and connect each module to its real backend or local-processing engine.

## Visual direction

- Black / near-black foundation
- Matrix-inspired green accents
- Thin technical borders
- Circular system monitor
- Live date and time
- Responsive desktop/mobile layout
- Minimal neon glow rather than a colorful gaming aesthetic
