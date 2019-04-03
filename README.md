Travel API Client 
=================

Clone this repo and start it (on windows systems use the gradlew.bat file):

`./gradlew bootRun`

to list all tasks:

`./gradlew tasks`

To view the application, go to:

[http://localhost:9000/index.html](http://localhost:9000/index.html)

To see the metrics, go to:

[http://localhost:9000/index.html/#/metrics](http://localhost:9000/index.html/#/metrics)

## Notes

### Choices

- Use Angular as framework, because of the extra assignment for full-stack
- Use Angular CLI with defaults to bootstrap the front-end, because of time constraints
- Use Angular Bootstrap with defaults to have some nicer styling and reuse components, because of time constraints
- Don't include type definitions in Angular, because of time constraints
- Include destination-finder-0.1.0.jar locally to reuse domain classes (Location, Fare, etc.)
- Ignore unused mock service query params (e.g. locale, currency, etc.), because of time constraints
- Use Spring Boot Actuator for metrics, by far the quickest solution that contains all the requirements. Because it also includes all web stats, I filtered the metrics in the UI, because that required filtering anyway.
- Use default SonarLint rules to check the code
- Use custom build script as a quick solution to build front-end and back-end separately. In production would never advise to use Maven/Gradle to build the front-end anyway.
- No tests written, because of time constraints (Angular CLI generated tests also fail, because of changes to the app)
- No documentation written, because of time constraints
- Used some quick hacks for development purposes (e.g. allow CORS for GET requests, use hash in router)

### On parallel request handling

In the assignment it says that the mock is a bit inefficient and should be handled in parallel.
However, given that the assignment to calculate the fare only requires an origin and destination code, I wasn't quite sure what exactly should be done in parallel (or async).
To get a list of airports based on a term, the `/airports?term={term}` service already suffices and needs to be called for both the origin and destination choice anyway.
After that we have the codes for origin and destination and can simply call the fares API.
Therefore, I did not specifically implement any parallel/async consuming of the mock services, but simply consumed what was necessary while dealing with Oauth.
