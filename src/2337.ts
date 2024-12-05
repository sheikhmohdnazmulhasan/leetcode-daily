// 2337. Move Pieces to Obtain a String

function canChange(start: string, target: string): boolean {
    const length = start.length;
    let startIdx = 0;
    let targetIdx = 0;

    while (true) {
        while (startIdx < length && start[startIdx] === '_') {
            ++startIdx;
        }

        while (targetIdx < length && target[targetIdx] === '_') {
            ++targetIdx;
        }

        if (startIdx === length && targetIdx === length) {
            return true;
        }

        if (startIdx === length || targetIdx === length || start[startIdx] !== target[targetIdx]) {
            return false;
        }

        if ((start[startIdx] === 'L' && startIdx < targetIdx) || (start[startIdx] === 'R' && startIdx > targetIdx)) {
            return false;
        }

        ++startIdx;
        ++targetIdx;
    }
}
