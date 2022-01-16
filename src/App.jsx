import { forwardRef, useRef } from "react";
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'

function App(){

  const appContentRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true
      }}
      containerRef={appContentRef}
    >
        <Content ref={appContentRef} />
    </LocomotiveScrollProvider>
  )
}

const Content = forwardRef(({}, ref)=>(
  <main data-scroll-container className="App" ref={ref}>
      
    <section data-scroll-section >
        
    </section>

  </main>
))

export default App;
