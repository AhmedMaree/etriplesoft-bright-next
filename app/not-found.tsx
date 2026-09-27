import { Button } from "@/components/site";
export default function NotFound() {
  return (
    <main id="main">
      <div className="container article-content">
        <span className="eyebrow">404 — Page Not Found</span>
        <h1>Let’s get you back on track.</h1>
        <p>
          The page you’re looking for may have moved. Explore our solutions or
          contact our team for help.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}
