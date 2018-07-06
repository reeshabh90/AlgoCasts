function calculateScore(text, prefixString, suffixString) {
    let txt = text.split('');
    let prefix = prefixString.split('');
    let suffix = suffixString.split('');

    let output = "";
    let max_prefix_count = 0;
    let prefix_count = 0;
    let max_suffix_count = 0;
    let suffix_count = 0;
    let sstr_start = 0;
    let sstr_end = 0;
    let i = 0, j = 0;

    while (i < txt.length) {
        let k = i;
        let start = -1;
        let end = -1;
        j = 0; prefix_count = 0;

        while (k < txt.length && j < prefix.length
            && (txt[k] != prefix[j]))
            j++;

        while (k < txt.length && j < prefix.length
            && (txt[k] == prefix[j])) {
            if (start == -1)
                start = k;

            prefix_count++;
            k++; j++;
        }

        if (prefix_count > max_prefix_count) {
            max_prefix_count = prefix_count;
            sstr_start = start;
        }

        k = i; j = 0;
        suffix_count = 0;

        while ((k < txt.length && j < suffix.length)
            && (txt[k] != suffix[j]))
            j++;

        while ((k < txt.length && j < suffix.length)
            && (txt[k] == suffix[j])) {
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
        return (txt.slice(sstr_start, sstr_end).join(''));
    else
        return (txt.slice(0,sstr_start).join(''));
}

txt = 'nothing'
str1 = 'bruno'
str2 = 'ingenious'

approximateMatch(txt, str1, str2)