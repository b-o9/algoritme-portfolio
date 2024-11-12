
function heapSort(list) {
    const tree = [{id:0, value: list[0], parent: null, children: [] }];
    const missingChild = [{id: 0, children: 0 }];
    let sortedList = [];


    for (let index = 1; index < list.length; index++) {
        iterationCount++;
        tree.push({id: index, value: list[index], parent: missingChild[0].id, children: [] });
        
        const currentNodeId = tree.length - 1;
        tree[missingChild[0].id].children.push(currentNodeId);
        
        missingChild[0].children += 1;
        
        if (missingChild[0].children === 2) {
            missingChild.shift();
        }
        missingChild.push({id: currentNodeId, children: 0 });
    }

    heapify(tree);

    while (tree.length != 0) {
        iterationCount++;
        let tempValue = tree[0].value;
        tree[0].value = tree[tree.length - 1].value;
        tree[tree.length - 1].value = tempValue;

        let tempId = tree[0].id;
        tree[0].id = tree[tree.length - 1].id;
        tree[tree.length - 1].id = tempId;

        sortedList.unshift(tree.pop().value);
        heapify(tree);
    }
    return sortedList;

}


function heapify(tree) {
    for (let x = tree.length - 1; x >= 0; x--) {
        iterationCount++;
        if (tree[x].parent !== null && tree[tree[x].parent].value < tree[x].value) {
            let tempValue = tree[tree[x].parent].value;
            tree[tree[x].parent].value = tree[x].value;
            tree[x].value = tempValue;

            let tempId = tree[tree[x].parent].id;
            tree[tree[x].parent].id = tree[x].id;
            tree[x].id = tempId;
        }
    }
}

const numbersList = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
let iterationCount = 0;

//const numbersList = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
console.log(heapSort(numbersList));
console.log(iterationCount);