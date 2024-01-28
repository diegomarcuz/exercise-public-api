# :weight_lifting: API Exercise

<details open="open">
<summary>Table of Contents</summary>

- :weight\_lifting: API Exercise
  - [:gear: Built with](#gear-built-with)
  - [:computer: Running the project](#computer-running-the-project)
  - [:file\_folder: Folder structure](#file_folder-folder-structure)
  - [:inbox\_tray: Commiting](#inbox_tray-commiting)
  - [Component structure](#component-structure)

</details>

---

## :gear: Built with

- [React](https://reactjs.org/docs/getting-started.html)
- [Webpack](https://webpack.js.org/concepts/)
- [Babel](https://babeljs.io/docs/en/)
- [Typescript](https://www.typescriptlang.org/docs)
- [Styled Components](https://styled-components.com/docs)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Testing Library](https://testing-library.com/docs/)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [React Query](https://tanstack.com/query/v3/)
- [MUI](https://mui.com/)
- [Normalize CSS](https://necolas.github.io/normalize.css/)

### Reason about each technology

- React: It is the main tech I used for and I decided to build without any framework, because it is the way I am used to nowawdays, but I understand it is important to work with frameworks in order to acheive SEO.
- Webpack: Again It is the main bundler I used to, but I already play with Parcel and Vite (which one I felt some difficulties and I did not like so much).
- Typescript: It is way better to understand all the data flow without needing to print the data.
- Styled components: I like to create styled component and how it keeps the organization and simple to read when comparing to Tailwind CSS (as far as I could learn).
- React Router: It is used to separate the concerns of each flow without needing to create Render Manager to control which component is required to be shown, as well it can be used as state management and other goods stuffs.
- RTL and Jest: I have never used another tool for testing so this is my first choice.
- React Query: Besides when developing GraphQL project and uses the Apollo GraphQL to connect with the GraphQL api (at least for me this is my choice), when handling with REST, react query is my first choice, because I can perform data fetch and use it as state manager, because of the easy interaction cache feature.
- MUI: Provide style and components guide and it is very stable.
- Normalize CSS: Due to its broader usage and easy to implement.

---

## :computer: Running the project

**Prerequisits**

```
* NodeJS ^18.0.0
* Yarn LTS
```

**Scripts**

- `build` Builds the application in the **build** directory
- `start:dev` Runs the application in development mode on port **8080**
- `start:build` Runs the application in production mode on port **8080**
- `lint` Runs **eslint** for TypeScript and CSS code with **fix**
- `lint:js` Runs **eslint** only for TypeScript code
- `lint:style` Runs **eslint** only for CSS code
- `test` Runs test files
- `test:watch` Runs test files in watch mode
- `test:staged` Runs test files specified by parameter
- `test:ci` Runs test files with coverage report

---

## :file_folder: Folder structure

- `<root>` ~> `./src`
- `components` ~> `<root>/components`
- `config` ~> `<root>/config`
- `pages` ~> `<root>/pages`
- `routes` ~> `<root>/routes`
- `services` ~> `<root>/services`
- `test` ~> `<root>/test`
- `utils` ~> `<root>/utils`

<table>
<tr>
<td>

**Note:** When adding new folders to the root directory it's required to also add them to the following configuration files:

`tsconfig.json` For TypeScript path imports

`jest.config.js` For test file imports

</td>
</tr>
</table>

---

## :inbox_tray: Commiting

We are using **semantic commit messages** with a message linter called [git-commit-msg-linter](https://github.com/legend80s/commit-msg-linter#readme).

---

### Component structure

I decided to use Atomic design pattern in order to separate the concerns of each component:

- [https://bradfrost.com/blog/post/atomic-web-design/](https://bradfrost.com/blog/post/atomic-web-design/)

`components` folder will be divided into:

```
 - atoms
 - molecules
 - organisms
 - templates
```

