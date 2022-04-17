# Shared Utilities Library

This module contains a number of functions that I have shared across multiple
applications the old fashioned way (cut-n-paste).  It's time to make them a
separate thing so they can be maintained and updated in one single place.

## Installation

This library depends on the following peer dependencies, but is flexible about
which version is used.  Check the `peerDependencies` section of the
`package.json` file to see what minimum versions are required.

If needed, you can install the peer dependencies:
```shell
npm install date-fns
```

To install this library itself:
```shell
npm install @craigmcc/shared-utils
```

## Included Modules

The following modules are provided by this library:

| Module Name | Description |
| ----------- | ----------- |
| Dates       | Convenience methods to deal with dates represented as strings (YYYY-MM-DD) that are most useful for UI forms, and for transport between client and server in JSON representations. |
| Months      | Convenience methods to deal with months represented as strings (YYYY-MM) that are most useful in UI forms. |
| Validators  | Simple validation functions for many data types.  In all cases, an empty string value will be evaluated as *true*, because this commonly occurs in UI forms for new data objects.  If you need to check for required values, that should be done separately. |

Detailed API documentation for these modules is
available at [API Documentation](https://github.com/craigmcc/shared-utils/docs)

## Building the Library From Sources

You can download the sources for this library at
[Source Code](https://github.com/craigmcc/shared-utils)
and using the **Code** link to aquire the URL for a *git clone*
command.

After downloading, use the following commands (from within the
*shared-utils* directory) to install dependencies and perform a build.
```shell
npm install
npm run build
```

The `dist` directory will contain the built library.
