## 🚀 Personal Site

This site is a sum of some of my albums and my writings. It is developed with Gatsby. This website is currently under development. Things I want to implement on this site at this point is uncertain. I have a roadmap that is given and regularly updated at the end of this document. The goal of this project is to use GatsbyJS to create a personal website that take advantages of a static webpage. Since Gatsby provides JAMStack development, the project will produce static generated files in the end. It has the following implementations.

PS: I am really bad at UI elements. I will be happy get any suggestions/ tutorials in order to correct my website's UI designing.

1. **Blog**

   Blog will read markdown files from blog/ directory.

2. **Photography**

   Galleries under gallery/ directory will be listed.

## Roadmap

### Version 0.0.1 - Building The Basics (Current)

- [x] creating a dev/ coming soon page
- [x] publishing the dev
- [x] creating development branches

### Version 0.0.2 - Building The Basics (Upcoming)

- [x] blog, gallery pages
- [x] Creating Nav
- [x] blog-detail, gallery-detail pages
- [x] dynamically creating pages
- [ ] tags and categories
- [x] Helmet on every page
- [x] Many more..

### Version 0.0.3 - Shaping the UI (Future)

- [x] UI fix for gallery detail
- [x] UI fix for blog detail
- [x] UI fix for blog and gallery item lists

### Version 0.0.4 - Networking (Future)

- [x] SEO Optimization tags
- [x] Google analyics implementation

## Measuring the Performance

Lighthouse performance metrics will be used in order to measure the site performance over the time. Reports available at src/lighthouse-reports/ directory. Reports can be via this [webpage](https://googlechrome.github.io/lighthouse/viewer/).

To measure the site performance:

1. Create a build version.

    ```sh
    gatsby build
    ```

2. Create a build version.

    ```sh
    gatsby serve
    ```

3. Download and save the report to the directory.
