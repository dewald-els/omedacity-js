# Changelog

## [0.6.2] - 2023-12-28 MrBetaMax <dewaldifels@gmail.com>

    Fix - Remove example test code from index

    * src/index.ts - Remove client instantiation example

## [0.6.1] - 2023-12-28 MrBetaMax <dewaldifels@gmail.com>

    Update Heroes query params

    * types/index.ts - Added new filter object to HeroesQueryParams
    * api/index.ts - Version bump

## [0.6.0] - 2023-12-28 MrBetaMax <dewaldifels@gmail.com>

    Added new Build endpoint definitions, fixed typing for params

    * api/builds.ts, Collections/builds.ts - Changed id param to number
    * types/index.ts - Added new Build interface and SortingOrder enum

## [0.5.2] - 2023-12-27 MrBetaMax <dewaldifels@gmail.com>

    Add Changelog and Issue Tracking

    * README.md - Add issue tracking link
    * CHANGELOG.md - Well, you're looking at it

## [0.5.1] - 2023-12-27 MrBetaMax <dewaldifels@gmail.com>

    Fix type definitions in API functions

    * builds.ts returned type Heroes instead of type Builds
    * items.ts returned type Hero instead of Item

## [0.4.7] - 2023-12-27 MrBetaMax <dewaldifels@gmail.com>

    Migrate tests to Jest and TypeScript.

    * __tests__ updated all *.test.js with *.test.ts files
    * Added tests for all core functions in /src/api
    * __tests__/mocks moved out of tests to ./mocks

## [0.4.6] - 2023-12-27 MrBetaMax <dewaldifels@gmail.com>

    Remove ./src from npm package

    * Update package.json files property to exclude src folder

## [0.4.5] - 2023-12-27 MrBetaMax <dewaldifels@gmail.com>

    Fix import path in src/api files

    * VSCode autocomplete imported from /src/types/* instead of ../types/*
