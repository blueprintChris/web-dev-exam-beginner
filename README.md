# Web Developer Exam - Beginner

## Setup

1. Install [NodeJS](https://nodejs.org/en/download). Version ^22 is recommended.

```
node -v
```

2. Clone the repo

```
git clone https://github.com/blueprintChris/web-dev-exam-beginner.git
```

3. Install the dependencies

```
npm install
```

## Exercises

**Your objective is to fix / update the code to make all the tests pass.**

1. All exercises can be found under the `JavaScript` folder.
2. Work through each exercise folder one at a time.
3. Do **not** change any function names or any code relating to the imports/exports.
4. Do **not** change any code outside of the `JavaScript` folder.
5. Run the tests against all the coding exercises. You will see a list of all failing & passing tests.

```
npm test
```

6. Run tests isolated to that folder.

```
npm test:conditions
```

The same pattern applies to other folders, i.e. `npm test:loops`

## Submitting

1. Create a new branch, where the branch name is obvious as to who it is

```
git checkout -b james-submission
```

2. Stage all your changes

```
git add .
```

3. Commit your changes with a message. Make sure the message is short but derscriptive.

```
git commit -m "a short message about the work you have done"
```

4. Push the changes to your branch

```
git push
```

5. Create a new Pull Request in the Github repository and select your branch as a 'compare' branch name.
   ![PR Demo](/assets/pr.gif)
