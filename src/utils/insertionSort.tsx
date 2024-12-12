export const insertionSort = (nums: number[]): number[] => {
    const length: number = nums.length;

    for (let i: number = 1; i < length; i++) {
        const current: number = nums[i];
        let j: number = i - 1;

        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j]
            j--
        }

        nums[j + 1] = current;
    }

    return nums;
};