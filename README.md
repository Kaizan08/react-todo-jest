<h1>Redux Todo Jest Testing</h1>

Testing a component, actions and reducer with Jest

<h2>Getting Started</h2>

Download Starter Files starter_files.zip (83 KB) To get started you will need to download the attached starter files and run the following commands from within the starter_files directory:
<ul>
<li>yarn install</li>

<li>yarn start</li>

<li>yarn test (from another terminal window pointed at the starter_files directory)</li>
</ul>

Notice the test written in starter_files/src/App.test.js passed: "PASS src/App.test.js* "
Create 3 new files:

<ul>
<li>starter_files/src/components/Todo.test.js</li>

<li>starter_files/src/actions.test.js</li>

<li>starter_files/src/reducer.test.js</li>
</ul>
<h2>Assignment</h2>

Write a snapshot test for the Todo component within src/components/Todo.test.js.

Write a unit test for all 3 action creators within src/actions.test.js.

<ul>
<li>createTodo</li>

<li>toggleTodo</li>

<li>filterTodos</li>
</ul>
Write a unit test for all 3 action types that can be passed to the reducer within src/reducer.test.js.

<ul>
<li>CREATE_TODO</li>

<li>TOGGLE_TODO</li>

<li>FILTER_TODOS</li>
</ul>
Make sure to import all of the needed dependencies into each test file

<h3>Outcome</h3>

You should have at least 8 passing tests when finished

1 from src/App.test.js

1 from src/components/Todo.test.js

3 from src/actions.test.js

3 from src/reducer.test.js

There should also be a new src/components/__snapshots__ folder and within that folder a new file: Todo.test.js.snap.
