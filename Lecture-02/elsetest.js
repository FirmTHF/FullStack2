const istatus = 500

if (istatus === 200) {
    console.log("OK");
} else if (istatus === 400) {
    console.log("Error!")
}else {
    console.log("Unknow")
}

switch (istatus) {
    case 200:
        console.log("ok");
        break;
    case 400:
        console.log("Bad Request");
        break
    default:
        console.log("Unknow Status");
        break;
}

const StatusMessage = (istatus === 200) ? "ok" :"Bad Request";
console.log(StatusMessage);