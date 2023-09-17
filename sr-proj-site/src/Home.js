import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="title">5G-PAWS</div>
            <div>5G Cellular Communications Network Performance</div>
            <div className="team">
                <ul>
                    <li>Nick Grosskopf</li>
                    <li>Sasha Persaud (Communications Lead)</li>
                    <li>Sakai Alexander</li>
                    <li>Jake Waclawski</li>
                    <li>Patrick Sorensen (Scrum Master)</li>
                </ul>
            </div>
            <div className="sponsor">
                <div className="header">Sponsor</div>
                <p>Communications Research Group, RIT ECET Department</p>
            </div>
            <div className="coach">
                <div className="header">Coach</div>
                <p>Kenn Martinez</p>
            </div>
            <div className="synopsis">
                <div className="header">Synopsis</div>
                <p>
                    When natural disasters occur, the ability to share data and
                    information in real-time is important to first responders.
                    However, during disaster events, cell towers may become
                    damaged thus slowing upload/download speeds, or responders
                    may have to venture out to areas with no coverage at all.
                    Communication can become limited and disaster management
                    becomes less efficient. The goal of this project is to
                    create a system which gathers and visualizes performance
                    data about the LTE system. This system can be used to
                    identify and mitigate coverage gaps with temporary LTE
                    towers.
                </p>
                <p>
                    The final system shall consist of an Android mobile
                    application, a set of geographically dispersed servers, and
                    a database. The Android app will allow the user to perform
                    upload and download speed tests and collect general
                    information about the phone and carrier. It will also
                    contain an interface to present these data points on a map.
                    The servers will provide the processing of the speed tests
                    at low latency. The database will maintain the cellular
                    network performance data gathered by the users. The intended
                    user base is hundreds of thousands of users, with a global
                    geographical scale.
                </p>
                <p>
                    The current system consists of the Android mobile app, a
                    single server, and a Postgres database. The main tasks of
                    this project include finding and fixing server connectivity
                    issues, designing and implementing a data visualization
                    subsystem which renders hundreds of data points to the
                    Android app in a reasonable time,adding a feature to
                    diagnose 5G network health to the app, and updating the
                    infrastructure to be scalable to the amount of traffic
                    expected in the future.
                </p>
            </div>
        </div>
    );
}

export default Home;
