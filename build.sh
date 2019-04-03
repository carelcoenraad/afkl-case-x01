#!/usr/bin/env bash

# Build front-end and copy into back-end project
cd travel-app
npm install
npm run build
# FIXME: This doesn't actually always add the new bundles
cp -rf dist/travel-app/**/** ../src/main/resources/static
cd -

# Build back-end
./gradlew clean build
