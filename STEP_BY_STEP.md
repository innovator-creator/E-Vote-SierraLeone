# STEP_BY_STEP.md
Beginner guide: How to create a GitHub repo and upload these files.

1) Create a GitHub account
   - Go to https://github.com and sign up.

2) Create a new repository
   - Click "New" -> Repository name: E-Vote-SierraLeone
   - Description: Biometric & blockchain voting system (competition entry)
   - Public repo
   - Check "Add README" (optional) and create.

3) Install Git on your computer
   - Windows: https://git-scm.com/download/win
   - macOS: xcode-select --install
   - Linux: use your distro package manager

4) Clone the repo to your computer
   Open a terminal and run:
   ```
   git clone https://github.com/<your-username>/E-Vote-SierraLeone.git
   cd E-Vote-SierraLeone
   ```

5) Copy these starter files into the folder (or download the zip and extract)
   - If you downloaded the zip from this package, extract then:
   ```
   cp -r /path/to/download/E-Vote-SierraLeone/* .
   ```

6) Stage, commit and push
   ```
   git add .
   git commit -m "Initial project skeleton for competition"
   git push origin main
   ```

7) Verify on GitHub
   - Visit https://github.com/<your-username>/E-Vote-SierraLeone to see files online.

8) Next steps for the competition
   - Update README with your contact info.
   - Prepare Pitch Presentation (use docs/pitch_slides.md as base).
   - Create a short demo video or screenshots and add to docs/.

Need help running any of these commands? Tell me which operating system you use (Windows, macOS, Linux) and I will show exact commands or help.
