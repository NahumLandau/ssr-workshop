# Adding dependencies needed for next steps  
  
###Download Starter Code (Optional)
If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a nextjs-blog directory such that it’s identical to the result of the previous lesson.

Again, this is NOT necessary if you’ve just finished the previous lesson.

```bash
npx create-next-app ssr-workshop --use-npm --example "https://gitlab.com/tikalk.com/react-ssr-workshop/-/tree/setup"
```

You now have a new directory called `ssr-workshop`. Let’s cd into it:
```bash
cd ssr-workshop
```

### Adding our needed dependencies
Run the following command:
```bash
yarn add sass bootstrap reactstrap moment axios
```
dependence | purpose
--- | ---
`sass` | We will use this dependence in order to use `bootstrap` scss
`bootstrap` | We will use `bootstrap` in order to style our app
`reactstrap` | Simple out of the box components such as `Card or Grid` and so on 
`moment` | We will use `moment` to parse our date
`axios` | We will use `axios` to fetch data from API


### Run the development server
Run the following command:
```bash
yarn dev
```
This starts your Next.js app’s "development server" (more on this later) on port 3000.
Let’s check to see if it’s working. Open http://localhost:3000 from your browser.