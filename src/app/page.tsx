import { Suspense } from 'react'
import Home from './home'


export default async function Page() {

  return (
    <section>
      <Suspense>
        <Home />
      </Suspense>
    </section>
  )
}