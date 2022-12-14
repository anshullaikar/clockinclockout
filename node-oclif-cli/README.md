oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g timesheet
$ timesheet COMMAND
running command...
$ timesheet (--version)
timesheet/0.0.0 linux-x64 node-v14.17.4
$ timesheet --help [COMMAND]
USAGE
  $ timesheet COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`timesheet hello PERSON`](#timesheet-hello-person)
* [`timesheet hello world`](#timesheet-hello-world)
* [`timesheet help [COMMAND]`](#timesheet-help-command)
* [`timesheet plugins`](#timesheet-plugins)
* [`timesheet plugins:install PLUGIN...`](#timesheet-pluginsinstall-plugin)
* [`timesheet plugins:inspect PLUGIN...`](#timesheet-pluginsinspect-plugin)
* [`timesheet plugins:install PLUGIN...`](#timesheet-pluginsinstall-plugin-1)
* [`timesheet plugins:link PLUGIN`](#timesheet-pluginslink-plugin)
* [`timesheet plugins:uninstall PLUGIN...`](#timesheet-pluginsuninstall-plugin)
* [`timesheet plugins:uninstall PLUGIN...`](#timesheet-pluginsuninstall-plugin-1)
* [`timesheet plugins:uninstall PLUGIN...`](#timesheet-pluginsuninstall-plugin-2)
* [`timesheet plugins update`](#timesheet-plugins-update)

## `timesheet hello PERSON`

Say hello

```
USAGE
  $ timesheet hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/anshullaikar/clockinclockout/blob/v0.0.0/dist/commands/hello/index.ts)_

## `timesheet hello world`

Say hello world

```
USAGE
  $ timesheet hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `timesheet help [COMMAND]`

Display help for timesheet.

```
USAGE
  $ timesheet help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for timesheet.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `timesheet plugins`

List installed plugins.

```
USAGE
  $ timesheet plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ timesheet plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `timesheet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ timesheet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ timesheet plugins add

EXAMPLES
  $ timesheet plugins:install myplugin 

  $ timesheet plugins:install https://github.com/someuser/someplugin

  $ timesheet plugins:install someuser/someplugin
```

## `timesheet plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ timesheet plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ timesheet plugins:inspect myplugin
```

## `timesheet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ timesheet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ timesheet plugins add

EXAMPLES
  $ timesheet plugins:install myplugin 

  $ timesheet plugins:install https://github.com/someuser/someplugin

  $ timesheet plugins:install someuser/someplugin
```

## `timesheet plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ timesheet plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ timesheet plugins:link myplugin
```

## `timesheet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ timesheet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ timesheet plugins unlink
  $ timesheet plugins remove
```

## `timesheet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ timesheet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ timesheet plugins unlink
  $ timesheet plugins remove
```

## `timesheet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ timesheet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ timesheet plugins unlink
  $ timesheet plugins remove
```

## `timesheet plugins update`

Update installed plugins.

```
USAGE
  $ timesheet plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
