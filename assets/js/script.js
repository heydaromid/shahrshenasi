// Show domain name
const nameDomain = document.getElementById('domain');
nameDomain.innerHTML = `دامنه ${document.domain}.ir`;

const docId = 'KV0Sp-tiTy';
const tableIdOrName = 'grid-PMiL5HcEeN';
const token = 'ef248a20-7d4a-4f5e-9415-b9802be41ec2';
const url = `https://coda.io/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows`;
const titleId = 'c-7bA8aGbmQ8';
const domainId = 'c-ZtnURO_ovr';
const statusId = 'c-Da5ydV4DBZ';

const getData = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            return creatTable(data.items);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}

// Create domain table
const tableBody = document.querySelector(`#tbody`);
const creatTable = (tableContent) => {
    for (let i = 0 ; i < tableContent.length ; i++) {
        const title = tableContent[i].values[`${titleId}`];
        const domain = tableContent[i].values[`${domainId}`];
        const status = tableContent[i].values[`${statusId}`];
        // tr
        let tr = document.createElement("tr");
        // th
        let th = document.createElement("th");
        th.setAttribute("scope" , "row");
        th.innerHTML = i+1;
        // domain td
        let domainTd = document.createElement("td");
        let a = document.createElement("a");
        a.setAttribute("href" , `https://${domain}.ir`);
        a.setAttribute("target" , "_blank");
        a.classList.add("text-dark");
        a.innerHTML = title;
        domainTd.appendChild(a);
        // status td
        let statusTd = document.createElement("td");
        let span = document.createElement("span");
        if (status === false) {
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
}

getData();