# Angular League Table (Football)
Submitted as a Angular Practical Test for ITONICS.

## Hosting and Repo
Github = https://github.com/arjunyonjan/ng-league-table
Heruko = https://angular-league-table.herokuapp.com/
Automatic deployment enabled in heruko and linked to github repository. Any commits will automatically deploy the code to the heruko server.
In hereko the production build dist folder is being served through node server. This is the way hereko works.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Components
- Results
- New Result | Edit Result
- Form (Shared Component) for creating and editing the result
- League Table Component

## Services
- StorageService to handle the results data
- team data and results data is being stored

## Pipes
- "teamName" pipe to retrieve the name of the football team with given id

## Database
- database is a stringified JSON data in localStorage namely "results". "StorageService" module will keep the track of this database. 
