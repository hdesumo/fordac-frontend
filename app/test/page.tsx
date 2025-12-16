export default function TestPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Test variable</h1>
      <pre>{process.env.NEXT_PUBLIC_API_URL}</pre>
    </div>
  );
}
