import React from "react";

// Custom Table Component
const Table = (props) => (
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-left border-collapse" {...props} />
  </div>
);

const THead = (props) => <thead className="bg-gray-200" {...props} />;

const TBody = (props) => <tbody className="bg-white" {...props} />;

const TR = (props) => <tr className="border-b" {...props} />;

const TH = (props) => <th className="px-4 py-2 border" {...props} />;

const TD = (props) => <td className="px-4 py-2 border" {...props} />;

// All components combined
export const MdxTable = {
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  // Add other components here if needed
};
