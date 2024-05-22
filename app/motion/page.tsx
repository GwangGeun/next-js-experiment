import Transition from "../client/Transition";

/*
https://www.framer.com/motion/
 */
export default async function Motion() {

    return (
        <main>
            <Transition>
                <section className="p-4">
                    <div className="container">
                        <h1 className="text-2xl font-bold">Home Page</h1>
                        <p className="w-1/2 font-medium py-2">
                            test
                        </p>
                    </div>
                </section>
            </Transition>

        </main>
    );
}