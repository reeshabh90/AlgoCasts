function approximateMatch(txt, str1, str2) {
    let text = txt.split('');
    let prefix = str1.split('');
    let suffix = str2.split('');

    let output = "";
    let max_prefix_count = 0;
    let prefix_count = 0;
    let max_suffix_count = 0;
    let suffix_count = 0;
    let sstr_start = 0;
    let sstr_end = 0;
    let i = 0, j = 0;

    while (i < text.length) {
        let k = i, start = -1, end = -1;
        j = 0; prefix_count = 0;

        while (k < text.length && j < prefix.length
            && (text[k] != prefix[j]))
            j++;

        while (k < text.length && j < prefix.length
            && (text[k] == prefix[j])) {
            if (start == -1)
                start = k;

            prefix_count++;
            k++; j++;
        }

        //update prefix index as we get the new string.
        if (prefix_count > max_prefix_count) {
            max_prefix_count = prefix_count;
            sstr_start = start;
        }

        k = i; j = 0;
        suffix_count = 0;

        while ((k < text.length && j < suffix.length)
            && (text[k] != suffix[j]))
            j++;

        while ((k < text.length && j < suffix.length)
            && (text[k] == suffix[j])) {
            suffix_count++;
            k++; j++;
        }

        end = k;

        //update prefix index as we get the new string.
        if (suffix_count > max_suffix_count) {
            max_suffix_count = suffix_count;
            sstr_end = end;
        }
        i++;
    }
    if (sstr_end > sstr_start)
        console.log("output:" + text.slice(sstr_start, sstr_end).join(''));
    else
        console.log("output:" + text.slice(sstr_start).join(''));
}

txt = 'nothing'
str1 = 'bruno'
str2 = 'ingenious'

approximateMatch(txt, str1, str2)