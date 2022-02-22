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

function get_shortest_i(...arrays) {
    let shortest_i = 0;
    for (let i in arrays) {
        if (arrays[i].length < arrays[shortest_i]) {
            shortest_i = i;
        }
    }
    return shortest_i;
}

function get_intersection(...arrays) {
    let result = [];
    let shortest_i = get_shortest_i(arrays);

    for (let tmp_el of arrays[shortest_i]) {
        let exists = true;
        for (let i in arrays) {
            if (i == shortest_i) {
                continue;
            }
            if (arrays[i].indexOf(tmp_el) == -1) {
                exists = false;
                break;
            }
        }
        if (exists) {
            result.push(tmp_el);
        }
    }
    return result;
}

function second() {
    let arr_1 = [1, 2, 3, 9, 5];
    let arr_2 = [2, 5, 7, 9, 15];
    let arr_3 = [8, 9, 15, 5, 10, 5, 4];

    let with_2 = get_intersection(arr_1, arr_2);
    console.log(with_2.toString());

    let with_3 = get_intersection(arr_1, arr_2, arr_3);
    console.log(with_3.toString());

    arr_1 = [1, 2, 3, 4, 5];
    arr_2 = [6, 7, 8, 9, 10];
    arr_3 = [1, 2, 9, 10, 15];

    with_2 = get_intersection(arr_1, arr_2);
    console.log(with_2.toString());

    with_3 = get_intersection(arr_1, arr_2, arr_3);
    console.log(with_3.toString());

}

first();
second();

