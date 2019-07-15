import React, { useState } from 'react';

const B = React.lazy(() => import('./B.jsx'));

function App () {
  const [isShow, setIsSHow] = useState(false);

  return (
    <>
      {
        isShow ?
          <React.Suspense fallback={'loading'}>
            <B/>
          </React.Suspense>
          :
          'Hello world!'
      }
      <button onClick={ () => { setIsSHow(true) } }>显示B组件</button>
    </>
  )
}

export default App;


