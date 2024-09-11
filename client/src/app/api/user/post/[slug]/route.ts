import { NextResponse } from "next/server";

export async function GET() {
  // Markdown content as a properly escaped string
  const markdownContent = `
<h1>Go and MongoDB: Building a CRUD API from Scratch</h1>
<p>Want to create a dynamic web application with a robust backend? Look no further than Go and MongoDB! This powerful combination allows you to build scalable, efficient APIs that handle data creation, reading, updating, and deletion (CRUD) with ease.</p>
<p>In this beginner-friendly guide, we'll walk through the process of building a simple CRUD API using Go and MongoDB. We'll cover the essential steps, provide code examples, and sprinkle in useful tips along the way.</p>
<h3 id="getting-started">Getting Started</h3>
<p>First things first, let's set up our environment:</p>
<ul class="list-disc list-outside leading-3 -mt-2 tight" data-tight="true">
  <li class="leading-normal -mb-2">
    <p><strong>Go Installation:</strong> Download and install the latest version of Go from 
    <a target="_blank" rel="noopener noreferrer nofollow" class="text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer" href="https://go.dev/dl/">https://go.dev/dl/</a>.</p>
  </li>
  <li class="leading-normal -mb-2">
    <p><strong>MongoDB Setup:</strong> If you don't have MongoDB running, you can download and install it from 
    <a target="_blank" rel="noopener noreferrer nofollow" class="text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer" href="https://www.mongodb.com/try/download/community">https://www.mongodb.com/try/download/community</a>.</p>
  </li>
  <li class="leading-normal -mb-2">
    <p><strong>IDE or Text Editor:</strong> Choose your preferred coding environment. Some popular options include VS Code, GoLand, or Atom.</p>
  </li>
</ul>
<h3 id="project-structure:">Project Structure:</h3>
<p>Create a new project directory and organize your files like this:</p>
<pre><code>my-crud-api/
├── main.go
├── models/
│   └── user.go
├── handlers/
│   └── user.go
└── config/
    └── config.go
</code></pre>
<h3 id="defining-our-model">Defining Our Model</h3>
<p>Let's start with defining our data model. For this example, we'll create a simple <code class="rounded-md bg-muted  px-1.5 py-1 font-mono font-medium" spellcheck="false">User</code> struct:</p>
<pre><code>// models/user.go
package models

import (
  "go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
  ID     primitive.ObjectID \`bson:"_id,omitempty"\`
  Name   string             \`bson:"name,omitempty"\`
  Email  string             \`bson:"email,omitempty"\`
  Age    int                \`bson:"age,omitempty"\`
  Active bool               \`bson:"active,omitempty"\`
}
</code></pre>
More content here.`;

  // Return response JSON
  return NextResponse.json(
    {
      success: true,
      message: "List Data users",
      data: markdownContent,
    },
    {
      status: 200,
    }
  );
}
