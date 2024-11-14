// 2064. Minimized Maximum of Products Distributed to Any Store

// TS Solution

function minimizedMaximum(n: number, quantities: number[]): number {
    // Helper function to check if a given maxProducts can be a valid solution
    const canDistribute = (maxProducts: number): boolean => {
        let requiredStores = 0;
        for (let qty of quantities) {
            requiredStores += Math.ceil(qty / maxProducts);
            if (requiredStores > n) return false;
        }
        return requiredStores <= n;
    };

    // Binary search range for the possible answer
    let left = 1;
    let right = Math.max(...quantities);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
