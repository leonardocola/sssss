function call(){
    const Http = new XMLHttpRequest();
    const url='http://127.0.0.1:8080';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    }
}
