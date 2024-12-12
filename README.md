# Insertion Sort en TypeScript y React

## Descripción General

Este proyecto implementa el algoritmo de ordenamiento por inserción en TypeScript y lo integra en un componente simple de React. El componente permite a los usuarios ordenar un array de números utilizando el método de ordenamiento por inserción y muestra el resultado ordenado.

### Función Insertion Sort

#### Descripción

La función `insertionSort` ordena un array de números en orden ascendente utilizando el algoritmo de ordenamiento por inserción. Este algoritmo construye un array ordenado un elemento a la vez, tomando repetidamente un elemento de la porción no ordenada e insertándolo en la posición correcta de la porción ordenada.

#### Código

```typescript
export const insertionSort = (nums: number[]): number[] => {
    const length: number = nums.length;

    for (let i: number = 1; i < length; i++) {
        const current: number = nums[i];
        let j: number = i - 1;

        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = current;
    }

    return nums;
};
```

#### Parámetros

* `nums`: Un array de números (`number[]`) que deseas ordenar.

#### Retorna

* Un nuevo array de números ordenados (`number[]`).

### Componente de Ordenación

#### Descripción

El `SortingComponent` es un componente funcional de React que utiliza la función `insertionSort`. Mantiene un estado interno para un array de números y proporciona un botón para activar el proceso de ordenación.

#### Código

```typescript
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
            <h2>Ordenamiento por Inserción</h2>
            <div>
                {nums.join(', ')}
            </div>
            <button onClick={handleSort}>
                Ordenar Números
            </button>
        </div>
    );
}
```

#### Características

* **Estado Inicial**: El componente se inicializa con un array predefinido de números.
* **Acción de Ordenación**: Cuando se hace clic en el botón "Ordenar Números", se activa la función `handleSort`, que ordena los números utilizando la función `insertionSort` y actualiza el estado.
* **Visualización**: El array actual de números se muestra como una cadena separada por comas.

### Uso

1. Importa el `SortingComponent` en tu archivo principal de aplicación.
2. Renderiza el `SortingComponent` dentro de tu aplicación.
3. Haz clic en el botón "Ordenar Números" para ver cómo se ordena el array en orden ascendente.

### Conclusión

Este proyecto demuestra una implementación sencilla del algoritmo de ordenamiento por inserción en TypeScript junto con un componente de React que permite a los usuarios ordenar interactivamente un array de números. Esto puede servir como un ejemplo fundamental para aprender sobre algoritmos de ordenación y gestión del estado en React.

