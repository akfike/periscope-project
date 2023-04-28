var xhr = null;

export function getXmlHttpRequestObject() {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

export function dataCallback() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("User data received");

    }
}

export function sendData(jenkinsUrl) {
    console.log("jenkinsURL: ", jenkinsUrl);
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallback;
    // asynchronous requests
    xhr.open("POST", "http://172.22.115.88:6969/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network
    xhr.send(jenkinsUrl);
}

export function sendDataCallback() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Data creation response received!");
    }
}


export function getStatus() {
    console.log("Get users...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    // async requests
    xhr.open("GET", "http://172.22.115.88:6969/users", true);
    response = "hello";
    // send the request over the network 
    xhr.send(null);
    return response;
}

