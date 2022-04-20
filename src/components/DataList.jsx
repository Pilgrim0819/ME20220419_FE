import React from 'react';

import AddTodo from './AddTodo';

const DataList = () => (
  <div className="list-container">
    <AddTodo />

    {[0, 1, 2].map(i => (
      <div className="list-item" key={i}>
        <div className="list-item-title">
          Title:
          <span>{`data-${i}`}</span>
        </div>

        <div className="list-item-body">
          {`LOREM IPSUM AMORE TUTI BATALÓ-${i}`}
        </div>
      </div>
    ))}
  </div>
);

export default DataList;
