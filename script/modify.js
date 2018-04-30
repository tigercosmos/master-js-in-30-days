const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../_book/index.html');
let data = fs.readFileSync(filePath, 'utf-8');

data = data.replace("Published with GitBook", '');
tmp = data.split("</head>");
data = tmp[0] + `
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84804118-4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84804118-4');
</script>
</head>` + tmp[1];

fs.writeFileSync(filePath, data, 'utf-8');