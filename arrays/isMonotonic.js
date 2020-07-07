function isMonotonic(A) {
    if (A.length === 0 || A.length === 1) {
        return true;
    }
    let isMonotoneIncreasing = true;
    let isMonotoneDecreasing = true;

    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] > A[i]) {
            isMonotoneIncreasing = false;
            break;
        }
    }
    if (!isMonotoneIncreasing) {
        for (let i = 1; i < A.length; i++) {
            if (A[i - 1] < A[i]) {
                isMonotoneDecreasing = false;
                break;
            }
        }
    }

    return isMonotoneIncreasing || isMonotoneDecreasing;
}
