# Architecture

This project shows how angular is flexible in designing repetitive and configurable views. It could be useful in some
certain cases:

- where a lot of data is presented, and it should look similar across all pages
- when each view needs to be shared via link
- when there are few common layouts used across the entire app

## Layouts

There are few layots examples basing on angular material:

- Stepper - using angular stepper module, each step is a separate
  route - [configuration example](https://github.com/akkonrad/ng-router-architecture/blob/master/src/app/content/stepper/stepper-routing.module.ts)
- Tabs - using angular tabs, each tab is a separate
  route - [configuration example](https://github.com/akkonrad/ng-router-architecture/blob/master/src/app/content/tabs/tabs-routing.module.ts)
- Nested - if you need to nest one layout in
  another - [configuration example](https://github.com/akkonrad/ng-router-architecture/blob/master/src/app/content/nested/nested-routing.module.ts)

[**DEMO**](https://architecture-akkonrad.vercel.app)
