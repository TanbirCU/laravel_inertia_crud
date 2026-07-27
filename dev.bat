@echo off
SET PATH=G:\laragon\bin\nodejs\node-v22;%PATH%
echo Node version:
node -v
echo npm version:
npm -v
echo.
echo Starting Vite dev server...
npm run dev
