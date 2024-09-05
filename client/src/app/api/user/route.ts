import { NextResponse } from "next/server";

export async function GET() {
  // Markdown content as a properly escaped string
  const markdownContent = `# Sample Markdown

This is a sample markdown text with a table.

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

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
