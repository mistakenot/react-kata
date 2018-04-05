# Dev Diary

This file is intended to be a running, real-time commentary on the process of building this application. I intend it to be a fair reflection of what I am thinking rather than a beautifully edited piece of reflective prose, so bear with me.

The methodology I want to use is loosely inspired by the book [Growing Object-Oriented Software, Guided by Tests](https://www.goodreads.com/book/show/4268826-growing-object-oriented-software-guided-by-tests). A high level summary might look like:

- Start by writing a walking skeleton deployment test.
- For each feature:
⋅⋅1) Write an acceptance test that fails
⋅⋅2) Make test pass by writing sub-components. For each sub-component, `GOTO 1` and follow the same cycle.
⋅⋅3) Refactor

I'm going to emphasize practicality over rigorously trying to follow any particular doctrine. As described in the [readme](README.md), I'll mark the start of the stages of the work with git tags.

## Zero
Setup. Use `create-react-app` to generate a simple, functional React skeleton. I'm deliberately trying to avoid making too many choices up front about what tools I should or shouldn't need, and will try to add thigs as I need them. At the moment, just standard admin of readme files and other bits and pieces.

The only "big" upfront choices I'll make about this are:
- Use [Bootstrap](https://getbootstrap.com/). I don't want to have to go back through everything at the end and make loads of changes to HTML classes and styles. I'd rather try to do it as I go along. Bootstrap is a reasurringly boring framework that I am comfortable with.
- Use [Redux](https://redux.js.org/). Choosing a state management library this early could certainly qualify as trying to do a big upfront design without really having explored the problem properly, and I would try to avoid it on a regular project. However, one of the goals of this project is to demonstrate competancy with this particular library for job interviews.

This project is only meant to take a few hours, so tradeoffs will be made.