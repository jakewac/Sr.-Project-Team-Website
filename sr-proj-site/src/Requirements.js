import "./Requirements.css"

function Requirements() {
    const documentURL =
        "https://docs.google.com/document/d/12Ur13Xv4kBuDLSlL7677131gH1rj9Yw7ExPyGHJL5k8";

    return (
        <div className="requirements">
            <iframe title="Requirements" id="doc" src={documentURL} />
        </div>
    );
}

export default Requirements;
