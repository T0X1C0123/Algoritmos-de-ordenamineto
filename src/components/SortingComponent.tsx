import React, { useState } from 'react';
import { insertionSort } from '../utils/insertionSort';

export const SortingComponent: React.FC = () => {
    const [nums, setNums] = useState<number[]>([5, 3, 8, 4, 2, 1, 6, 7, 10, 15, 16]);

    const handleSort = () => {
        const sortedNums: number[] = insertionSort([...nums]);
        setNums(sortedNums);
    };

    return (
        <div>
            <h2>Insertion Sort</h2>
            <div>
                {nums.join(', ')}
            </div>
            <button onClick={handleSort}>
                Sort Numbers
            </button>
        </div>
    );
};