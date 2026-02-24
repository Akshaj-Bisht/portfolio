---
title: Dox — Real-Time Collaborative Text Editor
index: 2
summary: Collaborative editor supporting simultaneous multi-user editing with low-latency synchronization.
stack:
  - Next.js
  - TypeScript
  - Bun
  - PostgreSQL (Neon)
  - Liveblocks
liveUrl: https://dox.akshajbisht.me
githubUrl: https://github.com/Akshaj-Bisht/DOX
image: /project-images/dox.png
imageAlt: Dox project preview
selectedProject: true

---

Dox is a web-based collaborative editor where multiple users can write in the same document at the same time. The core goal was smooth, low-latency collaboration with minimal UI distraction.

I implemented real-time state synchronization with Liveblocks and a typed Next.js + TypeScript stack, running with Bun and persisted via PostgreSQL (Neon).

The app is structured to keep editing interactions conflict-resistant while maintaining consistent document persistence and performance.
