// 2070. Most Beautiful Item for Each Query
// https://leetcode.com/problems/most-beautiful-item-for-each-query/

// TS solution

function maximumBeauty(items: number[][], queries: number[]): number[] {
    items.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < items.length; ++i) {
        items[i][1] = Math.max(items[i - 1][1], items[i][1]);
    }

    let numOfQueries = queries.length;
    let answers = new Array(numOfQueries).fill(0);

    for (let i = 0; i < numOfQueries; ++i) {
        let left = 0, right = items.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (items[mid][0] > queries[i])
                right = mid;
            else
                left = mid + 1;
        }

        if (left > 0) {
            answers[i] = items[left - 1][1];
        }
    }

    return answers;
}