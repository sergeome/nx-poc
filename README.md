# NxPoc

## Proof of concept:

- [x] Common libs (`./libs`) and dependencies (`./node_modules`) across whole application + shared configuration for typescript, test, etc.
- [x] Best Practices Infrastructure for Angular Enterprise Apps. 
- [x] Dependency checking (should be run from separate branch). `npm run affected:apps -- $(git merge-base origin/master HEAD) HEAD`
- [x] Consistency. Same code patterns + code formatting (check - `npm run format:check` and format - `npm run format:write`)
- [x] Automatic migration to updated workspace `npm run nx-migrate`
- [x] State management - [Preconfigured NgRx patterns](https://nrwl.io/nx/guide-setting-up-ngrx)
