#!/usr/bin/env bash

# Build front-end and copy into back-end project
cd travel-app
npm install
npm run build
cp -r dist/travel-app/**/** ../src/main/resources/static
cd -

# Build back-end
./gradlew build
