import { NextResponse } from "next/server";

export async function GET() {
  // Markdown content as a properly escaped string
  const markdownContent = `# Sample Markdown

This is a sample markdown text with a table.

| Branch  | Commit           |
| ------- | ---------------- |
| main    | 0123456789abcdef |
| staging | fedcba9876543210 |

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
