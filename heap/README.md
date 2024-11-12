# Heapsort (O(n log n))

Heapsort makes a tree, every node has 2 children nodes.
```javascript
        node1
        /  \
    node2   node3
    /  \      /  \
node4 node5 node6 node7
```

After the tree is built it uses heapify to go through the tree, it selects each node (from the end to the front) and compares them to the parent. This means the biggest number will always be at start, we can then swap it with the last element and remove it. Since we keep removing the biggest number it sorts the list.

### Time complexity:
Build tree = O(n)
Sorting tree = O(log n)



### Initial Pseudo Code:
```javascript
function heapSort(list) {
    tree = {[list[0],parent: 0]}
    missingChild = [[id: 0,children: 0]]
    for (let index = 1; index < list.length; index++) {
        tree add [list[index],parent: missingChild[0].id]

        missingChild[0].children + 1
        if missingChild[0].children == 2{
            remove missingChild[0]
        }

        missingChild add [id: index,children: 0]
    }
    heapify(tree)
}


function heapify(tree) {
    for x in tree reversed:
        if x.parent !== null && tree[x.parent].value < x.value {
            tree[x.parent].value, x.value = x.value,tree[x.parent].value
            tree[x.parent].id, x.id = x.id,tree[x.parent].id
        }
}
```



End pseudo code:
```javascript

function heapSort(list):
    tree = list[0] as root node with id 0, value from list[0], no parent, empty children list
    missingChild = list containing a single entry with id 0 and children count 0
    sortedList = empty list to hold the sorted values
    iterationCount = 0

    for index from 1 to length of list - 1:
        increment iterationCount
        create new node with id = index, value = list[index], parent = missingChild[0].id, and empty children list
        add new node to tree
        currentNodeId = last node's id in tree

        add currentNodeId to the children list of the parent node (tree[missingChild[0].id].children)
        increment missingChild[0].children

        if missingChild[0].children == 2:
            remove the first entry from missingChild list
        add a new entry to missingChild list with currentNodeId and children count 0

    heapify(tree)

    while tree is not empty:
        increment iterationCount
        swap the root value with the last node's value in the tree
        swap the root id with the last node's id in the tree
        remove and store the last node's value in sortedList (prepend to sortedList)

        heapify(tree) to re-adjust the tree structure

    return sortedList


function heapify(tree):
    for x from length of tree - 1 down to 0:
        increment iterationCount
        if tree[x].parent is not null and tree[tree[x].parent].value < tree[x].value:
            swap the value of the parent node and current node (tree[x].value and tree[tree[x].parent].value)
            swap the id of the parent node and current node (tree[x].id and tree[tree[x].parent].id)
```

Links:
https://www.youtube.com/watch?v=mgUiY8CVDhU
https://en.wikipedia.org/wiki/Heapsort