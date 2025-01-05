export default function ActivityPage() {
    const currentDate = new Date().toLocaleString();
    return (
        <div>
            <h1>GitHub Activity</h1>
            <p>Last updated at: {currentDate}</p>
        </div>
    );
}
