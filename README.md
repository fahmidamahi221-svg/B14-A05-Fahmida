Here is the question answer for the project:

 b15-a05-fahmida (DevStack)

DevStack is an interactive web platform designed for developers to explore modern technologies, compare tools, and seamlessly build their ideal development stack for any project.



Technologies Used

- **Frontend Library:** React.js (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **Notifications:** React-Toastify
- **Data Source:** JSON


 Features

- **Interactive Stack Assembly:** Easily add or remove technologies to build your custom stack in real-time.
- **Duplicate Prevention & Alerts:** Prevents adding the same technology twice with visual indicators and instant `react-toastify` notifications.
- **Responsive Navigation & Sidebar:** A clean UI featuring a responsive mobile navigation menu and a dynamic side drawer to track selected items.


 React Conceptual Questions & Answers

1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like elements inside JavaScript code. It makes UI code easier to read, write, and maintain in React.

2. What is the difference between props and state?
- **Props:** Read-only data passed down from a parent component to a child component.
- **State:** Internal data managed within a component that can change over time and trigger re-renders.

3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook manages local state in functional components. In this project, it was used in `App.jsx` to store the list of technologies, selected stack items, and loading states, as well as in `Navbar.jsx` to toggle the mobile menu.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` performs side effects like fetching data or updating the DOM. It was used to asynchronously fetch the technology list from the `technologies.json` file when the component first loaded.

5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify which items have changed, been added, or removed. This ensures efficient UI updates and prevents unnecessary re-rendering.

6. What is conditional rendering? Show one place you used it.
Conditional rendering displays specific UI elements based on certain conditions. For example, in `StackSidebar.jsx`, it shows "Your stack is empty" when no items are selected, and renders the item list when items exist.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed down using **props** (e.g., `<TechnologyCard tech={tech} />`).
- **Child to Parent:** The parent passes a **callback function** as a prop, and the child calls that function with data as an argument (e.g., `onAdd(tech)`).