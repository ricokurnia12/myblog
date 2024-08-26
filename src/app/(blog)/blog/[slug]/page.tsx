'use client';
import React from 'react';
import { marked } from 'marked';
import welcome from '../../../../data/welcome.md'
const markdownText = `
# Sample Markdown

This is a sample markdown text with a table.

| Branch  | Commit           |
| ------- | ---------------- |
| main    | 0123456789abcdef |
| staging | fedcba9876543210 |

More content here.
`;

const processMarkdown = (markdown) => {
    const html = marked(markdown); // Convert markdown to HTML using marked
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function Post() {
    const content = processMarkdown(markdownText);
    console.log(welcome)
    return (
        <div className='prose prose-h1:text-text prose-p:text-text overflow-x-auto'>
            {content}
        </div>
    );
}
