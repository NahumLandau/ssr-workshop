# Setup
First, let’s make sure that your development environment is ready.

If you don’t have Node.js installed, install it from here. You’ll need Node.js version 10.13 or later.
You’ll be using your own text editor and terminal app for this tutorial.
If you are on Windows, we recommend downloading Git for Windows and use Git Bash that comes with it, which supports the UNIX-specific commands in this tutorial.

##Create a Next.js app
To create a Next.js app, open your terminal, cd into the directory you’d like to create the app in, and run the following command:

```bash
npx create-next-app ssr-workshop --use-npm --setup "https://gitlab.com/tikalk.com/react-ssr-workshop.git"
```

Under the hood, this uses the tool called create-next-app, which bootstraps a Next.js app for you. It uses this template through the --example flag.

## Run the development server
You now have a new directory called nextjs-blog. Let’s cd into it:

```bash
cd ssr-workshop
```
Then, run the following command:

```bash
yarn dev
```
This starts your Next.js app’s "development server" (more on this later) on port 3000.

Let’s check to see if it’s working. Open http://localhost:3000 from your browser.