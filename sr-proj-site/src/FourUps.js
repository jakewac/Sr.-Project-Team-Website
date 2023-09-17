import "./FourUps.css"

function FourUps() {
    const documentURL =
        "https://docs.google.com/document/d/1dICbfmfc8_aWMrhNcOtOSW_VaPomfTpS57JQ5cq9t8c";

    return (
        <div className="four-ups">
            <iframe id="doc" src={documentURL} />
        </div>
    );
}

export default FourUps;
