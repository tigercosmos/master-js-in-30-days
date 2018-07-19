const fs = require('fs');
const path = require('path');

const dirPaths = [
    path.join(__dirname, '../_book/'),
    path.join(__dirname, '../_book/PART1/'),
]

dirPaths.forEach(dirPath => {
    const dirCont = fs.readdirSync(dirPath);
    const files = dirCont.filter((elm) => elm.match(/\.html$/));
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        let data = fs.readFileSync(filePath, 'utf-8');
        data = data.replace("Published with GitBook", '');
        tmp = data.split("</head>");
        data = tmp[0] + `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84804118-4"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-84804118-4');</script></head>` +
            tmp[1];
        fs.writeFileSync(filePath, data, 'utf-8');
        console.log(file, "has been modified.");
    });
})