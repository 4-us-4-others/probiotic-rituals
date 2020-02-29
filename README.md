<p align="center"><img src="assets/4others.png"/></p>

## Abstract

This is the template we use for projects at 4 us & 4 others, configured for [▲ Now](https://now.sh) _or_ Heroku deployments.

This template was built with client work in mind — quick enough to deploy for use when prototyping, and scalable enough to viable for production. We've also found it to be flexible enough for use in small net art projects that require dynamic elements, and tbh, these projects are probably more valuable than any client work will ever be.

It uses [Express](https://expressjs.com/) for Node.js, and [Mustache](https://mustache.github.io/mustache.5.html) for templating.

It's currently configured to use Grunt to uglify Javascript, and [Compass](http://compass-style.org/) for SCSS.

## Some considerations

This build uses the `@now/node-server` builder to build a server lambda, and `@now/static` builders to build routes for static assets.

If anything, in it's current state, this build process is a little bit inefficient. The exciting thing about Now is building applications that are _serverless_. In our case what I imagine that looks like is a build that is a mix of static files as a frontend, and `node.js` / `Go` / `Python` files that are being used for handling server tasks and API calls.

Perhaps what makes the most sense is to change the architecture from Node/Express to a static site generator (like [Gatsby](https://github.com/gatsbyjs/gatsby), [Next.js](https://nextjs.org), or even just a Mustache compiler that compiles views into static `HTML` files). This template was originally built for Heroku before being ported to Now. It was built w Express/Mustache to accomodate views/partials/templates, and to make API calls. With API calls easily broken out into lambdas with Now, the next step here would be to figure out how to best leverage static builds.

<table border="0" width="100%">
 <tr>
    <td style="font-size:16px">Now (ideally)</td>
    <td style="font-size:16px">Now (currently, re: @node-server)</td>
 </tr>
 <tr border="0">
    <td style="vertical-align:top">
        •   Less complexity if considered from the beginning of a project<br/>
        •   Multiple languages inside monorepo<br/>
        •   Inexpensive compared to Heroku<br/>
        •   Faster (possibly nominal in most cases)<br/>
    </td>
    <td style="vertical-align:top">
        •   Doesn't take advantage of Now's strengths (mainly, the monorepo)<br/>
        •   Slow build process when changing rendered views and static files (maybe set to watch <code>views</code>)<br/>
        •   Has to recompile every time you make changes.<br/>
    </td>
 </tr>
</table>

Certainly some things to think about.

## Installation

1. Download [`im-sorry-i-have-2-leave-the-lobby-but-i-will-never-forget-you.zip`](https://github.com/mwvd/im-sorry-i-have-2-leave-the-lobby-but-i-will-never-forget-you/archive/master.zip)
2. Add a `.env` file to the root of your directory. Here's a [commented one that's ready to go for this template](https://gist.githubusercontent.com/mwvd/1dd80d6bf798dd434013fec31da891c2/raw/e047c3700b81bef50147f03897dc8982e1622db1/.env) 😊
3. Rename `env.development` to `.env.development` by running `$ mv env.development .env.development`
4. Install dependencies

```shell
$ npm install
```

## Run

Grunt watch (runs `uglify` for `js` & `compass` for `scss` files) ⤵

```
$ grunt
```

At this point, there are two options for running locally. Open a new tab in your terminal and you can run ⤵

|     | `$ nodemon`                                                                                               | `$ now dev`                                                                                                                                    |
| --- | :-------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| ❓  | Start a local server                                                                                      | Compile source files into [lambdas](https://zeit.co/docs/v2/deployments/concepts/lambdas) and start a local (serverless? lol) server           |
| 📋  | Running `nodemon` allows the server to hot reload on file changes. This is useful **during development**. | Running `now dev` builds the repo. This is useful for testing your build **before deploying** to Now to see if your build succeeds             |
| 📈  | Quick — No need to rebuild after changes                                                                  | Accurate build environment                                                                                                                     |
| 📉  | May not 100% accurate to the final build environment                                                      | `@now/node-server` is **slow** to build. Changes to static files will cause you to have to stop the server and rebuild, which takes 10-15 secs |

> _Another important note_ —— Starting the server with `nodemon` starts the server with `NODE_ENV` set to `development`. This allows `.env.development` to override `.env` and set the environment accordinly. This is because each environment uses a different `app.listen()` configuration in [`index.js`](index.js).

## Deploy with ▲ Now

```bash
# Deploy your build
$ now
```

If you would like to alias your build to [`staging`](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/#staging) or [`production`](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/#production), you can use one of the following commands ⤵

```bash
# Deploy your build and alias to staging
# See here for more information about what that URL will look like, depending on context ⤵
# https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/#staging
$ now --target staging
```

```bash
# Deploy your build and alias to production
# (this is configured with alias.YOUR-ALIAS in now.json)
$ now --target production
```

Alternatively, you can deploy automatically from Github by changing `github.enabled` to `true` in [now.json](now.json). This will create a now.sh deploy every time you `git push` to the repo.

## Deploy with Heroku

1. Add your keys in `Settings` > `Config/Vars` on Heroku.
2. In `Config/Vars`, make sure to set `environment` to `heroku`.
3. Deploy with Heroku CLI, or set up [Automatic Deploys](https://devcenter.heroku.com/articles/github-integration) on Heroku. Done :)

---

<details><summary>To Do</summary>
<p>

### `im-sorry`

-   [ ] Simplify the fuck outta this lmao
    -   [ ] remove eslint (leave config somewhere)
    -   [ ] https://editorconfig.org/ mb
    -   [ ] env shit
    -   [ ] reconsider `compass` for scss
-   [ ] Move to `4-us-4-others`

### For a new repo (fuck a monorepo i can't even believe i just thought of that while writing this lmao)

-   [ ] API lambda examples
    -   [ ] Are.na
    -   [ ] Airtable
-   [ ] Better templating / Static generator

</p>
</details>

<p align="center"><img src="https://i.imgur.com/43EFHoY.png" alt="4 others"/></p>
