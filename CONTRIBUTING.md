# How To Contribute

## Pre-request

You should be having:

NodeJS >= 16

Git > v2.20

Some of our compiling code used syntax that introduced in NodeJS>16.0 so you will be need to install that in advance.

## Clone the repository

1. Click the fork button on the top right of this page.
2. Download the project to your machine.
3. Run commands below to bootstrap the this project.

```shell
# If you haven't installed yet
pnpm install
```

## Getting Started developing

### Making changes to the component 

```shell
# If you would like to run a local playground to test out your changes against
# Some specific component
pnpm dev:play
```
### Modify and update the documentation site.

```shell
# It was made with [VitePress](https://vitepress.vuejs.org)
pnpm dev:docs
```

## Pulling request

After you done your coding section, please note:

1. Update the tests to cover all cases
2. Update co-responding documentation if you are making changes against API
3. Write a comprehensive commit message
4. Push your local changes to your remote, and then pull request to the upstream.
5. In the description section, you can add more information about your changes, to help the reviewers for better
   understanding the context here.