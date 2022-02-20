function get_str() {
    return prompt("Enter some string:\n", "");
}

function cmp(str_1, str_2) {
    if (str_1.length != str_2.length) {
        return false;
    }
    for (let tmp of str_1) {
        if (str_2.search(tmp) == -1) {
            return false;
        }
    }
    return true;
}

function first() {
    let tmp_1 = get_str();
    let tmp_2 = get_str()
    if (cmp(tmp_1, tmp_2)) {
        alert("They're the same!!");
    }
    else {
        alert("They're different!!")
    }
}

first();

