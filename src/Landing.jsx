import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Landing() {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    return (
        <>
            <title>SuperM</title>
            <h1>Online shopping simplified</h1>
            {hasLoaded && (
                <img
                    className="landing-cover"
                    src="landing.jpg"
                    alt="Display of fruits and vegetables"
                    fetchPriority="high"
                    width="816"
                    height="352"
                />
            )}
            <p className="tagline text-dimmed">
                Order your groceries from SuperM with our easy to use app, and
                get your products delivered straight to your doorstep.
            </p>
            <Link className="btn" to="/products">
                Start shopping
            </Link>
        </>
    );
}
