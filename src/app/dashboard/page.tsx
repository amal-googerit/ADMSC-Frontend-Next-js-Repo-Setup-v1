import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'ADMSC client dashboard with real-time analytics and management tools.',
};

const DashboardPage = () => {
  return (
    <article>
      <header>
        <h1>Dashboard</h1>
        <p>Monitor your key metrics and manage your data effectively.</p>
      </header>

      <section className="dashboard-grid">
        <div className="metric-card">
          <h2>Total Users</h2>
          <p className="metric-value">1,234</p>
          <p className="metric-change">+5.2% from last month</p>
        </div>

        <div className="metric-card">
          <h2>Revenue</h2>
          <p className="metric-value">$45,678</p>
          <p className="metric-change">+12.8% from last month</p>
        </div>

        <div className="metric-card">
          <h2>Active Sessions</h2>
          <p className="metric-value">892</p>
          <p className="metric-change">+3.1% from last hour</p>
        </div>

        <div className="metric-card">
          <h2>Conversion Rate</h2>
          <p className="metric-value">3.2%</p>
          <p className="metric-change">-0.5% from last week</p>
        </div>
      </section>
    </article>
  );
};

export default DashboardPage;
