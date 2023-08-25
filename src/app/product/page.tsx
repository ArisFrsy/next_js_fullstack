import { Suspense } from "react"
import Product from "./product"

export default function Page() {
    return (
        <section>
            <Suspense>
                <Product />
            </Suspense>
        </section>
    )
}