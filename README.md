# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  Specifically, the `/users/:id` route does not handle cases where `:id` is not a valid integer. This leads to unexpected crashes or errors.

The `bug.js` file shows the problematic code. The `bugSolution.js` shows how to correct the issue using robust error handling and input validation.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js`.
4. Make a request to `/users/abc`. The server will likely crash or return an unexpected error.
5. Run `node bugSolution.js`. The improved error handling prevents crashes and returns appropriate responses for invalid input.