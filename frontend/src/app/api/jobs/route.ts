// Example: Post job to NestJS backend
await fetch('http://localhost:3001/jobs', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  });
  