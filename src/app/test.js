var xhr = null;

export var build_status = "";

export function getXmlHttpRequestObject() {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

export function sendData(jenkinsUrl) {
    // Makes a post call to add a build
    console.log("add a new build: ");
    // dataToSend = document.getElementById('build-url').value;
    if (!jenkinsUrl) {
        console.log("URL is empty.");
        return;
    }

    xhr = getXmlHttpRequestObject();
    // xhr.onreadystatechange = buildCallBack;
    xhr.open("POST", "http://localhost:5000/add", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"data": jenkinsUrl["url"]}));
}

export function sendDataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Data creation response received!");
    }
}


export function getStatus() {
    console.log("Getting build status...");
        xhr = getXmlHttpRequestObject();
        xhr.onreadystatechange = dataCallback;
        xhr.open("GET", "http://localhost:5000/get_status", true);
        xhr.send(null);
        console.log("Build data recieved...");
        return xhr.responseText;
}

export function dataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("Out putting build data.");
        build_status = xhr.responseText;
        console.log("build status: ", build_status);
    }
}

