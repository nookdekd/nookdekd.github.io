function showDetail(id) {
    let detail = document.getElementById("detail");
    if (id === "seminar"){
        detail.innerHTML = "01418497 สัมนา seminar \n8.00 - 11.00 บรรยาย \nอ.ผู้สอน ชาคริต วัชโรภาส, ศิริกร จันทร์นวล"
    }
    else if (id === "sa1"){
        detail.innerHTML = "01418321 การวิเคราะห์เเละออกเเบบระบบ System Analysis and Design \n12.30 - 14.30 บรรยาย \nอ.ผู้สอน สมโชค เรืองอิทธินันท์"
    }
    else if (id === "sa2"){
        detail.innerHTML = "01418321 การวิเคราะห์เเละออกเเบบระบบ System Analysis and Design \n14.30 - 16.30 ปฏิบัติ \nอ.ผู้สอน สมโชค เรืองอิทธินันท์"
    }
    else if (id === "wt"){
        detail.innerHTML = "01418442 เว็บเทคโนโลยีและเว็บบริการ Web Technology and Web Services \n10.00 - 12.00 บรรยาย \nอ.ผู้สอน สุขุมาล กิติสิน"
    }
    else if (id === "eng"){
        detail.innerHTML = "01355202 การเขียนภาษาอังกฤษเบื้องต้น Fundamental English Writing \n14.30 - 16.00 บรรยาย \nอ.ผู้สอน David Andrew Jarrell"
    }
    else if (id === "ip"){
        detail.innerHTML = "01418341 ทรัพย์สินทางปัญญาและจรรยาบรรณวิชาชีพ Intellectual Properties and Professional Ethics \n8.00 - 9.30 บรรยาย \nอ.ผู้สอน นวลวรรณ สุนทรภิษัช"
    }
    else if (id === "os"){
        detail.innerHTML = "01418331 ระบบปฏิบัติการ Intellectual Operating Systems \n10.00 - 12.00 บรรยาย \nอ.ผู้สอน ศิริกร จันทร์นวล"
    }
    else if (id === "se1"){
        detail.innerHTML = "01418471 วิศวกรรมซอฟต์แวร์เบื้องต้น วิศวกรรมซอฟต์แวร์เบื้องต้น \n11.00 - 13.00 บรรยาย \nอ.ผู้สอน อุษา สัมมาพันธ์"
    }
    else if (id === "se2"){
        detail.innerHTML = "01418471 วิศวกรรมซอฟต์แวร์เบื้องต้น วิศวกรรมซอฟต์แวร์เบื้องต้น \n8.00 - 10.00 ปฏิบัติ \nอ.ผู้สอน อุษา สัมมาพันธ์"
    }
    else if (id === "mon"){
        detail.innerHTML = "01418497 สัมนา seminar \n01418321 การวิเคราะห์เเละออกเเบบระบบ System Analysis and Design บรรยาย \n01418321 การวิเคราะห์เเละออกเเบบระบบ System Analysis and Design ปฏิบัติ"
    }
    else if (id === "tue"){
        detail.innerHTML = "01418442 เว็บเทคโนโลยีและเว็บบริการ Web Technology and Web Services บรรยาย \n01355202 การเขียนภาษาอังกฤษเบื้องต้น Fundamental English Writing บรรยาย"
    }
    else if (id === "wed"){
        detail.innerHTML = "01418341 ทรัพย์สินทางปัญญาและจรรยาบรรณวิชาชีพ Intellectual Properties and Professional Ethics บรรยาย \n01418331 ระบบปฏิบัติการ Intellectual Operating Systems บรรยาย"
    }
    else if (id === "thu"){
        detail.innerHTML = "01418471 วิศวกรรมซอฟต์แวร์เบื้องต้น วิศวกรรมซอฟต์แวร์เบื้องต้น ปฏิบัติ \n01418471 วิศวกรรมซอฟต์แวร์เบื้องต้น วิศวกรรมซอฟต์แวร์เบื้องต้น บรรยาย \n01355202 การเขียนภาษาอังกฤษเบื้องต้น Fundamental English Writing บรรยาย"
    }
    else if (id === "fri"){
        detail.innerHTML = "01418341 ทรัพย์สินทางปัญญาและจรรยาบรรณวิชาชีพ Intellectual Properties and Professional Ethics บรรยาย \n01418331 ระบบปฏิบัติการ Intellectual Operating Systems บรรยาย"
    }

    
}