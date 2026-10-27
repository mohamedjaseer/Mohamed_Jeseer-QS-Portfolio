# M.S Mohamed Jeseer — Portfolio Website

Personal portfolio website for **M.S Mohamed Jeseer**, Junior Quantity Surveyor (Civil / MEP). Built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your computer.
- Download Node.js: [https://nodejs.org/](https://nodejs.org/)
- Check installation:
  ```bash
  node -v
  npm -v
  ```

---

### Step 1: Open the Project Directory
Open your terminal (Command Prompt, PowerShell, or macOS/Linux Terminal) and navigate to the project folder:
```bash
cd "d:\portfolio01-main (1)\portfolio01-main"
```

---

### Step 2: Install Dependencies
Install all required packages (this only needs to be run once):
```bash
npm install
```

> **Note on Windows PowerShell:**
> If you encounter a script execution policy restriction error (`File ... npm.ps1 cannot be loaded`), either:
> - Run the command inside Command Prompt (`cmd.exe`), or
> - Run PowerShell as Administrator and execute: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

---

### Step 3: Start the Development Server
Run the local Vite development server:
```bash
npm run dev
```

You will see output similar to:
```
  VITE v7.3.1  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and visit:
👉 **[http://localhost:5173/](http://localhost:5173/)**

Any changes you make to the code will automatically update in real-time with Hot Module Replacement (HMR).

---

### Step 4: Build for Production (Optional)
To generate the optimized production build:
```bash
npm run build
```
The output will be placed inside the `dist/` directory.

To test and preview the production build locally without a web server:
```bash
npm run preview
```
This serves the production `dist/` build locally (typically at `http://localhost:4173/`).

---

## 🛠️ Tech Stack & Features
- **React 19** with Fast Refresh
- **Vite 7** for lightning-fast bundling
- **Tailwind CSS v4** for clean modern utility styling
- **Framer Motion** for smooth section animations and modals
- **Lucide React & React Icons** for iconography
- **100% Free & Self-Contained**: Works offline and locally without requiring any paid subscriptions or external backend services.
- **Direct Mail Fallback**: Contact inquiries can be submitted via form or directly through your default mail app (`mailto:`).
