import React from 'react';
import DocRoot from '@theme-original/DocRoot';

export default function DocRootWrapper(props) {
  return (
    <div className="custom-doc-root">
      <DocRoot {...props} />
    </div>
  );
}
