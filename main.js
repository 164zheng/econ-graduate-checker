function get_grades_infomation(){
    const element = document.querySelectorAll("tr.seiseki"); // 成績に関するすべての情報
    const gakka_name = element[1].querySelectorAll("td")[0].textContent;
    var seiseki_info = [];
    for (let i = 6; i < element.length - 1; i++){
        const subject = element[i].querySelectorAll("td"); // 履修している科目
        const credit = Number(subject[6].textContent); // 各科目の単位数
        const grade = subject[7].textContent; // 成績評価
        const subject_type = subject[8].textContent.trim();  // 科目区分
        const passed = subject[12].textContent.trim(); // 合否 合なら単位取得
        const subject_info = [credit, grade, subject_type, passed];
        seiseki_info.push(subject_info);
    }
    return [gakka_name, seiseki_info]
}
