/**
 * Problem:
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Approach:
 * Sorting the array by interval start and then checking if nextIntervalStart <= currentIntervalEnd
 *
 * Complexity:
 * Time: O(N log N) where N = intervalList.length
 * Space: O(N) at the worst case mergedIntervals.length = intervalList.length
 *
 * @param intervalList
 * @return {[]|*[]}
 */
function mergeIntervals(intervalList) {
    if (intervalList.length === 0) {
        return [];
    }
    let mergedIntervals = [];
    intervalList.sort((a, b) => a[0] - b[0]);
    let currentInterval = intervalList.shift();
    mergedIntervals.push(currentInterval);

    while (intervalList.length > 0) {
        currentInterval = mergedIntervals.pop();
        let nextInterval = intervalList.shift();
        if (nextInterval[0] <= currentInterval[1]) {
            let newInterval = [currentInterval[0], Math.max(currentInterval[1], nextInterval[1])];
            mergedIntervals.push(newInterval);
        } else {
            mergedIntervals.push(currentInterval, nextInterval);
        }
    }

    return mergedIntervals;
}

// Tests:

mergeIntervals([]);
mergeIntervals([[1, 4], [2, 3]]);
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
