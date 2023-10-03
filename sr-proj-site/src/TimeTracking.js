import "./TimeTracking.css"

function TimeTracking() {
    const documentURL =
        "https://docs.google.com/spreadsheets/d/1hlKrrksqoI1Ke8C5qXSnOKgQoeoKHxLTZcyZgI7jgpU";

    return (
        <div className="time-tracking">
            <iframe title="Time Tracking" id="doc" src={documentURL} />
        </div>
    );
}

export default TimeTracking;
