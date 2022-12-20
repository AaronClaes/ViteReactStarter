# Vite + React + Zustand Starter

A simple boilerplate for Vite with React and Zustand. This is the boilerplate I use for my personal projects. If you have any suggestions on how to improve it, open a [Github Pull Request](https://github.com/AaronClaes/ViteReactStarter/pulls) or [Github Issue](https://github.com/AaronClaes/ViteReactStarter/issues).

## Features

- [Prettier](https://prettier.io/) basic format settings
- [Eslint](https://eslint.org/) react config file and commands
- [Zustand](https://github.com/pmndrs/zustand) basic setup + devtools
- [Styled components](https://styled-components.com/) setup + theme support
- [React router dom v6](https://reactrouter.com/en/main) basic setup
- Dynamic imports support
- Opinionated folder structure

## TODO

- Improve starter example

## Get Started

#### Setup

Open your terminal at the project location and execute the following commands

```bash
git clone git@github.com:AaronClaes/ViteReactStarter.git
```

```bash
cd ViteReactStarter
```

```bash
npm install
```

```bash
npm run dev
```

## Structure

```json
"paths": {
      "@/components/*": ["src/components/*"],
      "@/assets/*": ["src/assets/*"],
      "@/features/*": ["src/features/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/lib/*": ["src/lib/*"],
      "@/pages/*": ["src/pages/*"],
      "@/services/*": ["src/services/*"],
      "@/store/*": ["src/store/*"],
      "@/data/*": ["src/data/*"],
    }
```

### Components

Use this folder for components that are used in different parts of the application and across pages. A good example of something you would put in this folder is a `<Button />` component or a `<TextInput/>`.

Components that are feature or page specific should be in a components folder for that feature or page.

### Assets

Store your images, videos, svgs, ... here that you need to import. Other assets go in the public folder.

### Features

This folder might be a less common way to structure your project, but it is really helpful when working on a large-scale project. The reason this folder exists is to separate features from each other. Examples that you might want to put in this folder are the navigation, layouts, complex cards, and parts of pages.

Using this method makes sure your page files and folders stay readable and manageable like in the example below.

```js
// pages/Group/index.jsx

import @/features/Group/GroupChat
import @/features/Group/GroupMemberList
import @/features/Group/GroupStats

const Group = () => {

  return(
    <Wrapper>
      <GroupStats />
      <GroupChat />
      <GroupMemberList />
    </Wrapper>
  );
};

export default Group;
```

### Hooks

Use this folder to store your custom hooks that are used across multiple parts of your application.
Feature or page-specific hooks should be in a hooks folder for that feature or page.

### Lib

This folder is meant for database handlers, JavaScript classes, or other similar files. You might not need it in your application.

### Pages

The pages folder holds all the page components for your application. Using a separate page folder makes sure that your project stays easily maintainable for both small and big applications. The pages are imported by the router.

### Services

If your application requires helper functions, this is the place to store them. Examples of files you might store here are maths functions. degToRad.js or getSmallestFromArray.js.

### Store

This folder is specifically added for Zustand. Here you can configure your Zustand store(s) and/or slices.

### Data

This folder is for JSON or other data files that need to be imported into the application. An example of files you would store here is a list of supported languages or a list of filter properties.

### Example

```
    - src
        - components
            - Button
                - index.jsx
                - styles.jsx
            - TextInput
                - index.jsx
                -styles.jsx
        - assets
            - svgs
                - home.svg
                - settings.svg
            - images
                - logo.png
        - features
            - GroupChat
                - index.jsx
                - styles.jsx
                - blocks
                    - MessageFeed
                        - index.jsx
                        - components
                            - Message
                                - index.jsx
                                - styles.jsx
                            - Search
                                - index.jsx
                                -styles.jsx
                        - hooks
                            - useChatSocket.jsx
        - hooks
            - useDeviceHeight.jsx
        - lib
            - mongodb.js
        - pages
            - Home
                - index.jsx
            - Group
                - index.jsx
                - styles.jsx
        - services
            - maths
                - degToRad.js
            - utils
                - getHourOfDay.js
        - store
            - index.js
        - data
            - filterOptions.json
```

## Contribution

Suggestions? Open open a [Github Pull Request](https://github.com/AaronClaes/ViteReactStarter/pulls) or [Github Issue](https://github.com/AaronClaes/ViteReactStarter/issues) and let me know what I should change!
