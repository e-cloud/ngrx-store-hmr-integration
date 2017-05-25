# @Ngrx/Store Hmr Integration

First of all, hmr facilities either in [AngularClass/angular-starter](https://github.com/AngularClass/angular-starter) or in this repo are nor perfect at all. 

**They can't persist component state** during switching procedure. Some values being persisted in the input is just some simple copy paste and remapping logic.

Both use the [AngularClass/angular-hmr](https://github.com/AngularClass/angular-hmr), which contains some helper functions for dom manipulations specially for angular. One difference is the hot update handle logic is copied into `main.ts` from [AngularClass/angular-hmr-loader](https://github.com/AngularClass/angular-hmr-loader). Because it is unable to use angular-hmr-loader in angular-cli.

The other solutions on the web is even worse for now - 2017-5-25.
