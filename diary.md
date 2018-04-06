# Dev Diary

This file is intended to be a running, real-time commentary on the process of building this application. I intend it to be a fair reflection of what I am thinking rather than a beautifully edited piece of reflective prose, so bear with me.

The methodology I want to use is loosely inspired by the book [Growing Object-Oriented Software, Guided by Tests](https://www.goodreads.com/book/show/4268826-growing-object-oriented-software-guided-by-tests). A high level summary might look like:

- Start by writing a walking skeleton deployment test.
- For each feature:
⋅⋅1) Write an acceptance test that fails
⋅⋅2) Make test pass by writing sub-components. For each sub-component, `GOTO 1` and follow the same cycle.
⋅⋅3) Refactor

I'm going to emphasize practicality over rigorously trying to follow any particular doctrine. As described in the [readme](README.md), I'll mark the start of the stages of the work with git tags.

## Zero - Setup project template.
Setup. Use `create-react-app` to generate a simple, functional React skeleton. I'm deliberately trying to avoid making too many choices up front about what tools I should or shouldn't need, and will try to add thigs as I need them. At the moment, just standard admin of readme files and other bits and pieces.

The only "big" upfront choices I'll make about this are:
- Use [Bootstrap](https://getbootstrap.com/). I don't want to have to go back through everything at the end and make loads of changes to HTML classes and styles. I'd rather try to do it as I go along. Bootstrap is a reasurringly boring framework that I am comfortable with.
- Use [Redux](https://redux.js.org/). Choosing a state management library this early could certainly qualify as trying to do a big upfront design without really having explored the problem properly, and I would try to avoid it on a regular project. However, one of the goals of this project is to demonstrate competancy with this particular library for job interviews.

This project is only meant to take a few hours, so tradeoffs will be made.

## One - Create walking skeleton deployment test.
Now that we've got out project roughly set up, we need to take a stab at writing a full deployment test, aka a "Walking Skeleton". This should be a test that builds, deploys and assets that we understand our system dependencies enough to automate them.

The deployment target for this project will be [GitHub Pages](https://pages.github.com/). I'm following the process laid out [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

The deployment test has been implemented simply using [Jasmine](https://jasmine.github.io/) and [Selenium](https://github.com/SeleniumHQ/selenium). Running this test will start a browser, go to the url defined in the [package.json](/package.json) as the homepage and assert against it.

You need to have [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [GeckoDriver](https://github.com/mozilla/geckodriver/releases) installed. Make sure the GeckoDriver exe is in your path.

To deploy and test, run `npm run deploy`. One thing left to do is make sure that there is a unique build number that you can assert against on the page somewhere. Will come back to this due to time pressure.

**TODO** Add unique build number to page to assert against.

## Two - Implement first feature area.
Feature time. Looking at the requirements, I can see three main feature areas that we need to think about:

- Display our data.
- Filter our data.
- Sort our data.

These seem like a reasonably good guess at the distinct responsibilities that are requires to fulfill the requirements. This might change as we go along, but its a good place to start. We'll do the display task first.

For each of the feature areas, I'm going to start by trying to think about the domain input events that are associated with that feature. From these events, I'll tease out a set of acceptance tests that try to describe the behaviour of the component in the language of the domain, not the technological implementation. Our domain events will eventually translate directly into Redux actions. We'll then proceed to write code to get each acceptance test to pass. If we find ourselves writing code that doesn't seem to "fit" with the reponsibility of the component we are working on, we split if off into a sub component, again using tests to guide how that sub component should behave in an iterative fashion.

In the case of our display component, our requirements state that:

```
Display the data on a web page in a format you think would be suitable for a simple search results screen.
```

In terms of events, it's hard to think of many, besides receiving the data to display. It doesn't actually do anything. However, we do need to display it faithfully.

Using this sentence and the [test data](/data.json) as a guide, I think we should end up with acceptance criteria like:
1) Displays a SearchResults UI component successfully.
1) Displays a representation for each search result item.
2) Display a representation of each item where each item:
- Has a name
- Has a star rating
- Has a list of facilities

This will do for starters. We'll start by implementing the first one. As we're starting to get into the weeds of writing tests, we'll also add a few libraries, chiefly [Enzyme](http://airbnb.io/enzyme/), to make life a bit easier.

I've written our first failing acceptance test in [search-results.test.js](/src/search-results/search-results.test.js). This is how we start any new component.

Now we make it pass by doing the simplest thing we can think of. After doing that, we look to see if we can make small and incremental refacting changes to:
- Remove duplication.
- Group together related code.

Can't see any oppotunities for that here, Onwards.

For the sake of brevity, I'm not going to commit at each stage of the test cycle unless the changes are large, which hopefully they never should be. I'll aim to commit after each refactor stage. I'll be using the above methodology to guide my actions inbetween.

It's time to do some refactoring. Our SearchResults element is starting to look a bit messy. 

We've split out a seperate component, SearchResultsItems and put it into its own sub folder. We've also moved the test that are specific to displaying an individual component into that folder.

All is passing and well.

I've now implemented the last remaining AC to display the facilities and am now going to add a few edge cases to the tests that go beyond the 'Happy Path'. Not going to go nuts because of time.

**TODO** Add more edge case tests for failures

Now we've got our initial AC's passing, it's worth having a bit of a review. Something we haven't done yet is actually have a look at how this looks on the screen. I've modified App.js to display the items on screen and they don't look good. I'm going to change their appearance whilst using my test suite to make sure that I don't introduce any regressions.

## Three - Implement filtering

Now we are starting to deal with state and events. Here, we are going to begin by writing our redux actions first before moving onto the how the different components react to it.

Have a look at [facilities-filter.actions.js](/src/facilities-filter/facilities-filter.actions.js) for a start. We're going to define one very simple user action with a constructor function.

Next we implement the [acceptance criteria for the reducer](/src/facilities-filter/facilities-filter.reducer.test.js). We start by writing the simplest happy path acceptance test we can think of and watch it fail. Then we do the simplest thing to pass it and move on to the next acceptance criteria for the feature. At the moment, the error cases are ignored. It might be better in future to throw or report the error somehow.

**TODO** Error handling.

We're going to follow the pattern of going from Inputs -> Middle -> Outputs. So, now we've done the inputs, next are is the presentation layer. We write a failing test with a stub component and then fill it in, as before. Keep repeating the cycle until we can refactor out into a smaller component. Also implemented upways communication of events from the dumb component (facilities-filter) to the smart component (facilities-filter-form), that translates a DOM event into a domain event before pushing it up.