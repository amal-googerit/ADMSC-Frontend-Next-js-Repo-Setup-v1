import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to ADMSC Client Dashboard - Your comprehensive management solution.',
};

const HomePage = () => {
  return (
    <article>
      <section className="hero">
        <h1>Welcome to ADMSC Client Dashboard</h1>
        <p>
          Your comprehensive management solution for advanced data analytics and client management.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Analytics Dashboard</h3>
            <p>Real-time data visualization and insights.</p>
          </div>
          <div className="feature-card">
            <h3>Client Management</h3>
            <p>Comprehensive client relationship management tools.</p>
          </div>
          <div className="feature-card">
            <h3>Reporting System</h3>
            <p>Advanced reporting capabilities with export options.</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HomePage;
