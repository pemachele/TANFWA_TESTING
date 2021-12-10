const thePath = window.location.href;
const path = thePath.substring(thePath.lastIndexOf("/") + 1);


function auth() {
    console.log(path)
    if(path==="constitution.html"){
        if (sessionStorage.getItem('token')) {
            $('#download_con').replaceWith("<div id=\"download_con\" >\n" +
                "                                    <a href=\"assets/img/tan/TANFWA_CONSTITUTION.pdf\" download=\"TANFWA_CONSTITUTION\" >\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            Download\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")

        } else {
            $('#download_con').replaceWith(" <div id=\"download_con\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            login\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }

    }else if ( path === "rules-and-regulations.html"){
        if (sessionStorage.getItem('token')) {
            $('#download_rules').replaceWith("<div id=\"download_rules\" >\n" +
                "                                    <a href=\"assets/img/tan/RULE-AND-REGULATION.pdf\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            DOWNLOAD Pdf\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")

        } else {
            $('#download_rules').replaceWith(" <div id=\"download_rules\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2 \"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            LOGIN\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }

    }if ( path === "banking-details.html"){

        if (sessionStorage.getItem('token')) {
            $('#download_rules').replaceWith(" <div id=\"banking-details-div\" >\n" +
                "                                <p>\n" +
                "                                    Payments can be made through T-PESA no: 0733 000 996 or NMB BANK PLC - Account No.\n" +
                "                                    22510063392 – MLIMANI CITY BRANCH;\n" +
                "                                    ACCOUNT NAME: TANZANIA ACADEMIC AND NON-FICTION WRITERS ASSOCIATION\n" +
                "                                </p>\n" +
                "                            </div>")

        } else {
            $('#banking-details-div').replaceWith(" <div id=\"banking-details-div\" >\n" +
                "                                    <a href=\"signin.html\">\n" +
                "\n" +
                "                                        <div class=\"mt10 btn-2\"\n" +
                "                                             style=\"background: #fcb444; justify-content: center; align-items: center; display: flex \">\n" +
                "                                            LOGIN\n" +
                "                                        </div>\n" +
                "\n" +
                "\n" +
                "                                    </a>\n" +
                "                                </div>")
        }
    }

}






jQuery(document).ready(function () {
   auth()


});