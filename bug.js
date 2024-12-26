```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: count will always be 0 in this effect
    console.log('Count:', count); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```