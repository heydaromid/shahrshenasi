// Show domain name
const nameDomain = document.getElementById('domain');
nameDomain.innerHTML = `دامنه ${document.domain}`;


let infoDomain = {
    num : ["۱","۲","۳","۴","۵","۶","۷","۸","۹","۱۰",],
    nameDomain : ["ahvazshenasi.ir","amolshenasi.ir","ardebilshenasi.ir","qomshenasi.ir","andimeshkshenasi.ir","arakshenasi.ir","taybadshenasi.ir","babolshenasi.ir","bamshenasi.ir","bandarabbasenasi.ir"],
    state : [1,1,1,0,1,1,0,1,1,1],
};
// Create domain table
const tableBody = document.querySelector(`#tbody`);
for (let i = 0 ; i < infoDomain.num.length ; i++) {
    // tr
    let tr = document.createElement("tr");
    // th
    let th = document.createElement("th");
    th.setAttribute("scope" , "row");
    th.innerHTML = `${infoDomain.num[i]}`;
    // domain td
    let domainTd = document.createElement("td");
    let a = document.createElement("a");
    a.setAttribute("href" , `https://${infoDomain.nameDomain[i]}`);
    a.setAttribute("target" , "_blank");
    a.classList.add("text-dark");
    a.innerHTML = `${infoDomain.nameDomain[i]}`;
    domainTd.appendChild(a);
    // status td
    let statusTd = document.createElement("td");
    let span = document.createElement("span");
    if (infoDomain.state[i] === 1) {
        span.innerHTML = "آزاد";
        span.classList.add("badge","bg-success")
        statusTd.appendChild(span);
    } else {
        span.innerHTML = "رزرو شده";
        span.classList.add("badge","bg-warning")
        statusTd.appendChild(span);
    }
    // append in tr
    tr.appendChild(th);
    tr.appendChild(domainTd);
    tr.appendChild(statusTd);
    tableBody.appendChild(tr);
};
