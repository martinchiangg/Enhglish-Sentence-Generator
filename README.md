# Github React Repo Issues Searcher

## Installation & Usage

Install dependencies:

```
npm install
```

Create build:

```
npm run build
```

Development mode with HMR:

```
npm run dev
```

The browser will open a tab which takes you to [localhost:4000](http://localhost:4000/).

Open App in browser:

```
npm run build
```

And open `index.html` with your browser.

## Overview

1. This app does not use statement management tools such as React context API or Redux, as it doesn't seem to need one.

2. Make `Message`, `Label`, `Input` and `InputGroup` reusable functional components so they could be re-used in other parts of the app, and can be customized by passing in additional attributes. Normally there will be a component library (either built by team or third party) that we can just import from.

3. Customized Webpack reduces bundle size (create-react-app has many built-in dependencies that we don't need). Configured with Typescript. I love Typescript!

4. Consider the time suggested working on this assignment, there isn't sufficient time to make a `Select` component. There is no unit or e2e tests. The error handling is minimal as well.

5. Since this seems to be a solution-first assignment, the app has very simple styling.

6. There are detailed steps below to test if the app is working as expected.

## Checklist

- [x] Have a homepage that shows 3 input(subject, verb, object) and 2 select dropdown(sentenceType, verbTense).

- [x] Allow users to generate a sentence after clicking the "Generate" button.

- [x] Error handling: the input field turns red of there's any Input has no value, or if there's an error from API.

- [x] Responsive design: the app has different look based on screen size (threshold is 1000px).

## Test Steps

1. Open `index.html` with your browser. User should first see a page with a sentence `"Select or enter your variables, and click Generate button!"`, followed by 3 input fileds and 2 select dropdowns.

2. If there's no value in any of the input fields, clicking on `Generate` button won't trigger an API request and user should see an alert telling them all input fields should have values.

3. Otherwise, after clicking the button, user should see a breif `"Loading sentence results..."` sentence, and they should see the generated sentence from API.

4. Error handling: When there is an error, user should see `"Oops, we are having issues generating a sentence for you"`
