# Stale Closure in React's useEffect Hook

This example demonstrates a common mistake when using the `useEffect` hook in React.  The issue arises from an incorrect dependency array, leading to a stale closure. 

The `useEffect` hook is intended to perform side effects, but when the dependency array is empty (`[]`), the effect only runs once after the initial render.  If the effect relies on variables from the component's scope, it might capture the initial value of those variables, even if they change later. This is known as a stale closure. 

In this specific case, the `console.log` inside the effect will always print 'Count: 0', regardless of the button clicks that update the `count` state. This is because the effect only executes once, capturing the initial value of `count` (which is 0).

The solution involves including `count` in the dependency array, ensuring that the effect reruns whenever `count` changes.